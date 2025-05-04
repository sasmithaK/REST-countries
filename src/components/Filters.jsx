import React from "react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const languages = ["English", "Spanish", "French", "Arabic", "Chinese"];

export default function Filters({ region, onRegion, language, onLanguage }) {
  return (
    <div className="d-flex flex-row gap-3 mb-3">
      {/* Region dropdown */}
      <select
        value={region}
        onChange={e => onRegion(e.target.value)}
        className="form-select"
        style={{ minWidth: "150px" }}
      >
        <option value="">All Regions</option>
        {regions.map(r => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      {/* Language dropdown */}
      <select
        value={language}
        onChange={e => onLanguage(e.target.value)}
        className="form-select"
        style={{ minWidth: "150px" }}
      >
        <option value="">All Languages</option>
        {languages.map(l => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
}
