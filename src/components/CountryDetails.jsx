import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchByCode } from "../api/restCountries";

export default function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchByCode(code)
      .then(data => setCountry(Array.isArray(data) ? data[0] : data))
      .catch(() => setCountry(null))
      .finally(() => setLoading(false));
  }, [code]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient-primary">
      <div className="text-center">
        <div className="spinner-grow text-light" style={{ width: '4rem', height: '4rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h2 className="mt-4 text-white">Loading country data...</h2>
      </div>
    </div>
  );

  if (!country) return (
    <div className="container py-5 text-center">
      <div className="alert alert-danger bg-gradient-danger text-white py-5 border-0 shadow-lg">
        <h2 className="fw-bold mb-4 display-5">Country not found</h2>
        <Link to="/" className="btn btn-light btn-lg px-5 rounded-pill fw-bold">
          <i className="bi bi-arrow-left me-2"></i>Back to Home
        </Link>
      </div>
    </div>
  );

  const {
    flags, name, population, region, subregion,
    capital, languages, timezones, currencies, borders
  } = country;

  const colorThemes = ["primary", "success", "info", "warning", "danger", "dark"];
  const getRandomTheme = () => colorThemes[Math.floor(Math.random() * colorThemes.length)];

  return (
    <div className="bg-light py-5">
      <div className="container">
        <Link to="/" className="btn btn-primary btn-lg mb-4 rounded-pill shadow-sm">
          <i className="bi bi-arrow-left me-2"></i>Back
        </Link>

        <div className="row g-4">
          {/* Flag and Title */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 overflow-hidden">
              <img src={flags.svg} alt={`${name.common} flag`} className="img-fluid" />
              <div className="card-img-overlay d-flex flex-column justify-content-end p-4 bg-dark bg-opacity-50">
                <h1 className="text-white display-4 fw-bold mb-0">{name.common}</h1>
                <p className="text-light mb-0">{name.official}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                {label: 'Population', value: population.toLocaleString()},
                {label: 'Region', value: region},
                {label: 'Subregion', value: subregion || '—'},
                {label: 'Capital', value: capital?.[0] || '—'}
              ].map((stat) => (
                <div key={stat.label} className="col-6">
                  <div className={`p-3 bg-gradient-${getRandomTheme()} text-white rounded-3 shadow-sm text-center`}>
                    <h6 className="small opacity-75 mb-1 text-uppercase">{stat.label}</h6>
                    <p className="mb-0 fw-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Expanded Details Section */}
            <div className="mt-4 p-4 bg-white rounded-3 shadow-sm">
              <h3 className="fw-bold mb-3 text-primary">Additional Details</h3>
              <div className="row g-3">
                {/* Languages */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">Languages</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {languages
                      ? Object.values(languages).map(lang => (
                          <span key={lang} className={`badge bg-${getRandomTheme()} bg-opacity-10 text-${getRandomTheme()} py-1 px-2 rounded-pill`}>{lang}</span>
                        ))
                      : <span>—</span>}
                  </div>
                </div>

                {/* Currencies */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">Currencies</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {currencies
                      ? Object.values(currencies).map(cur => (
                          <span key={cur.name} className={`badge bg-${getRandomTheme()} bg-opacity-10 text-${getRandomTheme()} py-1 px-2 rounded-pill`}>{cur.name}{cur.symbol && ` (${cur.symbol})`}</span>
                        ))
                      : <span>—</span>}
                  </div>
                </div>

                {/* Timezones */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">Timezones</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {timezones
                      ? timezones.map(tz => (
                          <span key={tz} className={`badge bg-${getRandomTheme()} bg-opacity-10 text-${getRandomTheme()} py-1 px-2 rounded-pill`}>{tz}</span>
                        ))
                      : <span>—</span>}
                  </div>
                </div>

                {/* Border Countries */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">Border Countries</h6>
                  <div className="d-flex flex-wrap gap-2">
                    {borders && borders.length > 0
                      ? borders.map(b => (
                          <Link key={b} to={`/country/${b}`} className={`btn btn-${getRandomTheme()} btn-sm rounded-pill`}>{b}</Link>
                        ))
                      : <span>—</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
