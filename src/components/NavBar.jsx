import React from "react";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="/">Curiosity Voyage</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold hover-effect" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold hover-effect" href="/">Countries</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold hover-effect" href="/bookmarks">Bookmarks</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
