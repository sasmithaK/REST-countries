import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Search by country name…"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full p-2 border rounded-md"
    />
  );
}
