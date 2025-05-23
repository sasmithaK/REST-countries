import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../store/sessionSlice';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/CountryCard.css';

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital, languages, cca3 } = country;
  const dispatch = useDispatch();

  const bookmarks = useSelector(state => state.session.bookmarks);
  const isBookmarked = bookmarks.some(c => c.cca3 === cca3);

  const onBookmarkClick = () => {
    dispatch(toggleBookmark(country));
  };

  return (
    <div className="card country-card h-100 shadow-lg border-0 position-relative">
      {/* Bookmark icon */}
      <button
        onClick={onBookmarkClick}
        className="btn bookmark-btn position-absolute top-0 end-0 m-2"
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        <i className={`bi ${isBookmarked ? 'bi-bookmark-fill text-warning' : 'bi-bookmark text-secondary'}`}></i>
      </button>

      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="card-img-top flag-image"
      />
      <div className="card-body p-4">
        <h5 className="card-title fw-bold mb-3 text-primary-emphasis">{name.common}</h5>
        <div className="info-list d-flex flex-column gap-2">
          <div className="info-item">
            <i className="bi bi-people-fill me-2 icon-style"></i>
            <span><strong>Population:</strong> {population.toLocaleString()}</span>
          </div>
          <div className="info-item">
            <i className="bi bi-globe2 me-2 icon-style"></i>
            <span><strong>Region:</strong> {region}</span>
          </div>
          <div className="info-item">
            <i className="bi bi-geo-alt-fill me-2 icon-style"></i>
            <span><strong>Capital:</strong> {capital?.[0] || "—"}</span>
          </div>
          <div className="info-item">
            <i className="bi bi-translate me-2 icon-style"></i>
            <span><strong>Languages:</strong> {languages ? Object.values(languages).join(", ") : "—"}</span>
          </div>
        </div>
        <Link
          to={`/country/${cca3}`}
          className="btn btn-primary mt-4 w-100 country-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}
