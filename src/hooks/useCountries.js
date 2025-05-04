// src/hooks/useCountries.js
import { useState, useEffect } from "react";
import { fetchAll, fetchByName, fetchByRegion } from "../api/restCountries";
import useDebounce from "./useDebounce";

export default function useCountries(search, region, language) {
  const [all, setAll] = useState([]);
  const [countries, setCountries] = useState([]);
  const debouncedSearch = useDebounce(search);

  // initial load
  useEffect(() => {
    fetchAll()
      .then(data => {
        setAll(data);
        setCountries(data);
      })
      .catch(() => {
        setAll([]);
        setCountries([]);
      });
  }, []);

  // search & filters
  useEffect(() => {
    const applyFilters = async () => {
      try {
        // 1) search by name if there's a term
        if (debouncedSearch) {
          const data = await fetchByName(debouncedSearch);
          setCountries(data);
          return;
        }

        // 2) else start from 'all' or region endpoint
        let data = all;
        if (region) {
          data = await fetchByRegion(region);
        }

        // 3) then filter by language
        if (language) {
          data = data.filter(c =>
            c.languages && Object.values(c.languages).includes(language)
          );
        }

        setCountries(data);
      } catch {
        setCountries([]);
      }
    };

    applyFilters();
  }, [all, debouncedSearch, region, language]);

  return countries;
}
