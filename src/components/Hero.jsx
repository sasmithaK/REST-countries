import React from "react";

export default function Hero() {
  return (
    <section className="bg-secondary text-white text-center py-5 mb-4">
      <div className="container">
        <h2 className="display-4 fw-bold">Discover the World 🌍</h2>
        <p className="lead">
          Search and filter countries by name, region, or language with ease.
        </p>
        <button className="btn btn-light btn-lg mt-3">Get Started</button>
      </div>
    </section>
  );
}
