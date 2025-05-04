import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import useCountries from "./hooks/useCountries";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CountryList from "./components/CountryList";

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");

  // useCountries hook to fetch and filter countries
  const countries = useCountries(search, region, language);

  return (
    <div className="bg-light" style={{ minHeight: "100vh", padding: "2rem" }}>
      <header className="bg-primary text-white text-center rounded p-4 mb-4">
        <h1 className="display-5 fw-bold">Explore Countries Explorer</h1>
      </header>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <div className="col-md-6 d-flex justify-content-md-end">
          <Filters
            region={region}
            onRegion={setRegion}
            language={language}
            onLanguage={setLanguage}
          />
        </div>
      </div>

      <CountryList countries={countries} />
    </div>
  );
}
