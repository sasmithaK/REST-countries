import React, { useState, useEffect } from "react";
import { fetchAll, fetchByName, fetchByRegion } from "./api/restCountries";
import 'bootstrap/dist/css/bootstrap.min.css'

import useDebounce from "./hooks/useDebounce";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CountryList from "./components/CountryList";

export default function App() {
  const [all, setAll] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const debouncedSearch = useDebounce(search);

  // initial load
  useEffect(() => {
    fetchAll().then(data => {
      setAll(data);
      setCountries(data);
    });
  }, []);

  // filters & search
  useEffect(() => {
    // define an async filter runner
    const applyFilters = async () => {
      try {
        // 1) If there’s a search term, just search by name and bail
        if (debouncedSearch) {
          const data = await fetchByName(debouncedSearch);
          setCountries(data);
          return;
        }
  
        // 2) Otherwise start from either "all" or the region-specific endpoint
        let data = all;
        if (region) {
          data = await fetchByRegion(region);
        }
  
        // 3) Then apply the language filter (still in-memory)
        if (language) {
          data = data.filter(c =>
            c.languages &&
            Object.values(c.languages).includes(language)
          );
        }
  
        // 4) Finally, update state once
        setCountries(data);
      } catch (err) {
        // on any error, clear out the list
        setCountries([]);
      }
    };
  
    applyFilters();
  }, [all, debouncedSearch, region, language]);
  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">REST Countries Explorer</h1>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
        <SearchBar value={search} onChange={setSearch} />
        <Filters
          region={region}
          onRegion={setRegion}
          language={language}
          onLanguage={setLanguage}
        />
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
