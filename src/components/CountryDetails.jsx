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

      <div className="card shadow-sm mb-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={flags.svg}
              alt={`${name.common} flag`}
              className="img-fluid rounded-start"
              style={{ maxHeight: "200px", objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold mb-3">{name.common}</h2>

              <dl className="row">
                <dt className="col-sm-4">Official Name</dt>
                <dd className="col-sm-8">{name.official}</dd>

                <dt className="col-sm-4">Population</dt>
                <dd className="col-sm-8">{population.toLocaleString()}</dd>

                <dt className="col-sm-4">Region</dt>
                <dd className="col-sm-8">{region}</dd>

                <dt className="col-sm-4">Subregion</dt>
                <dd className="col-sm-8">{subregion || "—"}</dd>

                <dt className="col-sm-4">Capital</dt>
                <dd className="col-sm-8">{capital?.[0] || "—"}</dd>
              </dl>

              <div className="mb-2">
                <strong>Languages:</strong>
                {languages
                  ? Object.values(languages).map((lang) => (
                      <span key={lang} className="badge bg-primary me-1">
                        {lang}
                      </span>
                    ))
                  : " —"}
              </div>

              <div className="mb-2">
                <strong>Currencies:</strong>
                {currencies
                  ? Object.values(currencies).map((cur) => (
                      <span key={cur.name} className="badge bg-success me-1">
                        {cur.name} ({cur.symbol})
                      </span>
                    ))
                  : " —"}
              </div>

              <div className="mb-2">
                <strong>Timezones:</strong>
                {timezones
                  ? timezones.map((tz) => (
                      <span key={tz} className="badge bg-secondary me-1">
                        {tz}
                      </span>
                    ))
                  : " —"}
              </div>

              {borders && borders.length > 0 && (
                <div className="mt-3">
                  <strong>Border Countries:</strong>
                  <div className="mt-2">
                    {borders.map((b) => (
                      <Link
                        key={b}
                        to={`/country/${b}`}
                        className="btn btn-outline-secondary btn-sm me-2 mb-2"
                      >
                        {b}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
