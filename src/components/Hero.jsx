import React, { useState, useEffect } from 'react';
import slide1 from '../assets/world1.jpg';
import slide2 from '../assets/world2.jpg';
import slide3 from '../assets/world3.jpg';

export default function Hero() {
  const data = [
    {
      image: slide1,
      title: 'Discover the World',
      description: 'Search and filter countries by name, region, or language with ease.'
    },
    {
      image: slide2,
      title: 'Explore Cultures',
      description: 'Dive deep into different traditions and cultural wonders.'
    },
    {
      image: slide3,
      title: 'Plan Your Journey',
      description: 'Get tips, tools, and insights to plan your next adventure.'
    }
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => {
      setIdx(prev => (prev + 1) % data.length);
    }, 10000);
    return () => clearInterval(iv);
  }, [data.length]);

  const { image, title, description } = data[idx];

  return (
    <section
      className="text-white d-flex flex-column align-items-center justify-content-center position-relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        minHeight: '70vh',
      }}
    >
      {/* Overlay Shader */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      />

      {/* Hero Title */}
      <div className="text-center position-relative px-3" style={{ zIndex: 1 }}>
        <h2 className="display-4 fw-bold">{title}</h2>
        <p className="lead">{description}</p>
        <button type="button" className="btn btn-light btn-lg rounded-pill shadow-sm px-4">
          Get Started
        </button>
      </div>
    </section>
  );
}
