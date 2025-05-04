import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/CountryCard.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital, languages, cca3 } = country;

  return (
    <div className="card h-100 shadow-sm overflow-hidden hover-effect">
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="card-img-top flag-image"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body p-3 p-md-4">
        <h5 className="card-title fw-bold mb-3 text-dark">{name.common}</h5>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-people-fill me-2 text-primary"></i>
            <span className="text-muted"><strong>Population:</strong> {population.toLocaleString()}</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-globe2 me-2 text-primary"></i>
            <span className="text-muted"><strong>Region:</strong> {region}</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
            <span className="text-muted"><strong>Capital:</strong> {capital?.[0] || "—"}</span>
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-translate me-2 text-primary"></i>
            <span className="text-muted"><strong>Languages:</strong> {languages ? Object.values(languages).join(", ") : "—"}</span>
          </div>
        </div>
        <Link
          to={`/country/${cca3}`}
          className="btn btn-outline-primary mt-4 w-100 btn-hover">
          View Details
        </Link>
      </div>
    </div>
  );
}