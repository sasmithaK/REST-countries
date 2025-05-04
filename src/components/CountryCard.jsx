import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital, languages, cca3 } = country;

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="card-img-top"
        style={{ height: "120px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name.common}</h5>
        <p className="card-text mb-1">
          <i className="bi bi-people-fill me-1"></i>
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p className="card-text mb-1">
          <i className="bi bi-globe2 me-1"></i>
          <strong>Region:</strong> {region}
        </p>
        <p className="card-text mb-1">
          <i className="bi bi-geo-alt-fill me-1"></i>
          <strong>Capital:</strong> {capital?.[0] || "—"}
        </p>
        <p className="card-text mb-3">
          <i className="bi bi-translate me-1"></i>
          <strong>Languages:</strong> {languages ? Object.values(languages).join(", ") : "—"}
        </p>
        <Link
          to={`/country/${cca3}`}
          className="btn btn-light border w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}
