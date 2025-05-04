import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchByCode } from "../api/restCountries";

export default function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchByCode(code)
      .then(data => {
        // fetchByCode returns an array of 1 country
        setCountry(Array.isArray(data) ? data[0] : data);
      })
      .catch(() => setCountry(null))
      .finally(() => setLoading(false));
  }, [code]);

  if (loading) return <p>Loading…</p>;
  if (!country) return <p>Country not found.</p>;

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    languages,
    timezones,
    currencies,
    borders,
  } = country;

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-secondary mb-4">&larr; Back</Link>

      <div className="card shadow-sm">
        <img
          src={flags.svg}
          alt={`${name.common} flag`}
          className="card-img-top"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h2 className="card-title fw-bold">{name.common}</h2>
          <p><strong>Official Name:</strong> {name.official}</p>
          <p><strong>Population:</strong> {population.toLocaleString()}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Subregion:</strong> {subregion || "—"}</p>
          <p><strong>Capital:</strong> {capital?.[0] || "—"}</p>
          <p>
            <strong>Languages:</strong>{" "}
            {languages ? Object.values(languages).join(", ") : "—"}
          </p>
          <p>
            <strong>Currencies:</strong>{" "}
            {currencies
              ? Object.values(currencies)
                  .map(c => `${c.name} (${c.symbol})`)
                  .join(", ")
              : "—"}
          </p>
          <p>
            <strong>Timezones:</strong> {timezones?.join(", ")}
          </p>
          {borders && borders.length > 0 && (
            <p>
              <strong>Border Countries:</strong>{" "}
              {borders.map(code => (
                <Link
                  key={code}
                  to={`/country/${code}`}
                  className="btn btn-outline-primary btn-sm me-2 mb-2"
                >
                  {code}
                </Link>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
