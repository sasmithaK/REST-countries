import React from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CountryList from "../components/CountryList";
import RecentlyViewed from "../components/RecentlyViewed";

export default function Home({ search, setSearch, region, setRegion, language, setLanguage, countries }) {
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
