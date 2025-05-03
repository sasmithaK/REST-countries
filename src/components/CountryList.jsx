import React from "react";
import CountryCard from "./CountryCard";

export default function CountryList({ countries }) {
  if (!countries.length) return <p>No countries found.</p>;
  return (
    <div className="row g-4">
      {countries.map(c => (
        <div key={c.cca3} className="col-12 col-sm-6 col-lg-3">
          <CountryCard country={c} />
        </div>
      ))}
    </div>
  );
}
