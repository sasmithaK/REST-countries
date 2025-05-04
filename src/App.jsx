// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import useCountries from "./hooks/useCountries";

function Home({ search, setSearch, region, setRegion, language, setLanguage, countries }) {
  return (
    <main className="container bg-light bg-opacity-75 p-4 rounded shadow-sm">
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
    </main>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const countries = useCountries(search, region, language);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <NavBar />
      <Hero />

      <Routes>
        {/* Home/List view */}
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              region={region}
              setRegion={setRegion}
              language={language}
              setLanguage={setLanguage}
              countries={countries}
            />
          }
        />

        {/* Country details view */}
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}
