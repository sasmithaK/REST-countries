import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const languages = ["English", "Spanish", "French", "Arabic", "Chinese"];

export default function Filters({ region, onRegion, language, onLanguage }) {
  const gradientStyle = {
    minWidth: "150px",
    background: "linear-gradient(to right, #2193b0, #6dd5ed)",
    color: "#fff",
    border: "1px solid #2193b0",
    appearance: "none"
  };

  const wrapperClass = "position-relative";
  const iconClass = "bi bi-chevron-down position-absolute top-50 end-0 translate-middle-y me-3 text-white";
  const selectClass = "form-select rounded-pill pe-5"; // extra right padding for icon

  return (
    <div className="d-flex flex-row gap-3 mb-3">
      {/* Region filter */}
      <div className={wrapperClass} style={{ minWidth: '150px' }}>
        <select
          value={region}
          onChange={e => onRegion(e.target.value)}
          className={selectClass}
          style={gradientStyle}
        >
          <option value="" style={{ color: '#000' }}>All Regions</option>
          {regions.map(r => (
            <option key={r} value={r} style={{ color: '#000' }}>
              {r}
            </option>
          ))}
        </select>
        <i className={iconClass}></i>
      </div>

      {/* Language filter*/}
      <div className={wrapperClass} style={{ minWidth: '150px' }}>
        <select
          value={language}
          onChange={e => onLanguage(e.target.value)}
          className={selectClass}
          style={gradientStyle}
        >
          <option value="" style={{ color: '#000' }}>All Languages</option>
          {languages.map(l => (
            <option key={l} value={l} style={{ color: '#000' }}>
              {l}
            </option>
          ))}
        </select>
        <i className={iconClass}></i>
      </div>
    </div>
  );
}