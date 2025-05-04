import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-3 flex-grow-1">
      <div
        className="input-group rounded-pill overflow-hidden"
        style={{
          background: "linear-gradient(90deg,rgb(145, 164, 251),rgb(113, 229, 255))"
        }}
      >
        <span
          className="input-group-text border-0"
          style={{ background: "transparent", color: "#fff" }}
        >
          <i className="bi bi-search"></i>
        </span>

        <input
          type="search"
          className="form-control border-0"
          placeholder="Search by country name…"
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            background: "transparent",
            color: "#fff",
            caretColor: "#fff"
          }}
        />
      </div>
    </div>
  );
}
