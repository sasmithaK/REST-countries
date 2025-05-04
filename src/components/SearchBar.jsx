import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3 flex-grow-1">
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>

        <input
          type="search"
          className="form-control"
          placeholder="Search by country name…"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
