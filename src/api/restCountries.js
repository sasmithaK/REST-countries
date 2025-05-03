const BASE = "https://restcountries.com/v3.1";

export async function fetchAll() {
  const res = await fetch(`${BASE}/all?fields=name,population,region,flags,capital,languages,cca3`);
  return res.json();
}

export async function fetchByName(name) {
  const res = await fetch(`${BASE}/name/${name}?fields=name,population,region,flags,capital,languages,cca3`);
  return res.json();
}

export async function fetchByRegion(region) {
  const res = await fetch(`${BASE}/region/${region}?fields=name,population,region,flags,capital,languages,cca3`);
  return res.json();
}

export async function fetchByCode(code) {
  const res = await fetch(`${BASE}/alpha/${code}`);
  return res.json();
}
