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
  const nameTheme = getRandomTheme();
  const detailsTheme = getRandomTheme();

  return (
    <div className="bg-light py-5">
      <div className="container">
        <Link to="/" className="btn btn-outline-primary btn-lg mb-4 rounded-pill shadow-sm">
          <i className="bi bi-arrow-left me-2"></i>Back
        </Link>

        <div className="row g-4">
          {/* Flag */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 overflow-hidden">
              <img src={flags.svg} alt={`${name.common} flag`} className="img-fluid" />
            </div>
          </div>

          {/* Details */}
          <div className="col-lg-6">
            {/* Name Block with dynamic theme background */}
            <div className={`mb-4 p-4 rounded-3 shadow-sm bg-gradient-${nameTheme} text-white`}>
              <h1 className="display-4 fw-bold mb-2 text-start">{name.common}</h1>
              <p className="fst-italic text-start mb-0">{name.official}</p>
            </div>

            {/* Quick Stats */}
            <div className="row g-3">
              {[
                { label: 'Population', value: population.toLocaleString(), icon: 'bi-people-fill' },
                { label: 'Region', value: region, icon: 'bi-globe2' },
                { label: 'Subregion', value: subregion || '—', icon: 'bi-map' },
                { label: 'Capital', value: capital?.[0] || '—', icon: 'bi-bank' }
              ].map((stat) => (
                <div key={stat.label} className="col-6">
                  <div className={`p-2 bg-gradient-${getRandomTheme()} text-white rounded-2 shadow-sm text-center`}>
                    <h6 className="opacity-75 mb-1 text-uppercase">
                      <i className={`bi ${stat.icon} me-1`}></i>{stat.label}
                    </h6>
                    <p className="mb-0 fw-bold small">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width Additional Details Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className={`p-4 rounded-3 shadow-sm bg-white border-start border-5 border-${detailsTheme}` }>
              <h3 className={`fw-bold mb-3 text-${detailsTheme}`}>
                <i className="bi bi-info-circle me-2"></i>Additional Details
              </h3>
              <div className="row g-3">
                {/* Languages */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">
                    <i className="bi bi-translate me-1 text-secondary"></i>Languages
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {languages
                      ? Object.values(languages).map(lang => (
                        <span key={lang} className={`badge bg-${detailsTheme} bg-opacity-10 text-${detailsTheme} py-1 px-2 rounded-pill`}>
                          <i className="bi bi-chat-right-text-fill me-1"></i>{lang}
                        </span>
                      ))
                      : <span>—</span>}
                  </div>
                </div>

                {/* Currencies */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">
                    <i className="bi bi-currency-exchange me-1 text-secondary"></i>Currencies
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {currencies
                      ? Object.values(currencies).map(cur => (
                        <span key={cur.name} className={`badge bg-${detailsTheme} bg-opacity-10 text-${detailsTheme} py-1 px-2 rounded-pill`}>
                          <i className="bi bi-cash-stack me-1"></i>{cur.name}{cur.symbol && ` (${cur.symbol})`}
                        </span>
                      ))
                      : <span>—</span>}
                  </div>
                </div>

                {/* Timezones */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">
                    <i className="bi bi-clock-history me-1 text-secondary"></i>Timezones
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {timezones
                      ? timezones.map(tz => (
                        <span key={tz} className={`badge bg-${detailsTheme} bg-opacity-10 text-${detailsTheme} py-1 px-2 rounded-pill`}>
                          <i className="bi bi-clock-fill me-1"></i>{tz}
                        </span>
                      ))
                      : <span>—</span>}
                  </div>
                </div>

                {/* Border Countries */}
                <div className="col-md-3">
                  <h6 className="text-uppercase small mb-2 opacity-75">
                    <i className="bi bi-geo-alt-fill me-1 text-secondary"></i>Border Countries
                  </h6>
                  <div className="d-flex flex-wrap gap-2">
                    {borders && borders.length > 0
                      ? borders.map(b => (
                        <Link key={b} to={`/country/${b}`} className={`btn btn-outline-${detailsTheme} btn-sm rounded-pill`}>
                          <i className="bi bi-flag-fill me-1"></i>{b}
                        </Link>
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
