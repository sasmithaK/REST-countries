import React from 'react';
import { useSelector } from 'react-redux';
import CountryCard from '../components/CountryCard';

export default function Bookmarks() {
  const bookmarks = useSelector(state => state.session.bookmarks);

  if (!bookmarks.length) {
    return <p className="text-center mt-5">You haven’t bookmarked any countries yet.</p>;
  }

  return (
    <div className="container py-5">
      <h2>Your Bookmarks</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {bookmarks.map(c => (
          <div key={c.cca3} className="col">
            <CountryCard country={c} />
          </div>
        ))}
      </div>
    </div>
  );
}
