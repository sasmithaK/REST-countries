import React from "react";

const regions = ["Africa","Americas","Asia","Europe","Oceania"];
const languages = ["English","Spanish","French","Arabic","Chinese"];

export default function Filters({ region, onRegion, language, onLanguage }) {
  return (
    <div className="flex space-x-4">
      
      <select value={region} onChange={e => onRegion(e.target.value)} className="p-2 border rounded">
        <option value="">All Regions</option>
        {regions.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      
      <select value={language} onChange={e => onLanguage(e.target.value)} className="p-2 border rounded">
        <option value="">All Languages</option>
        {languages.map(l => <option key={l} value={l}>{l}</option>)}
      </select>

    </div>
  );
}
