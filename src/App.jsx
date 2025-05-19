// src/App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import RecentlyViewed from "./components/RecentlyViewed";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CountryDetails from "./components/CountryDetails";
import useCountries from "./hooks/useCountries";
import Home from "./pages/Home";
import Bookmark from './pages/Bookmarks';

export default function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [language, setLanguage] = useState("");
  const countries = useCountries(search, region, language);

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <NavBar />
      <Hero />
      <RecentlyViewed />
      <Routes>
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
        <Route path="/country/:code" element={<CountryDetails />} />
        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>
    </div>
  );
}
