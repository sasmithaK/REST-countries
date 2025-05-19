import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function RecentlyViewed() {
  const recent = useSelector(state =>
    Array.isArray(state.session?.recentlyViewed)
      ? state.session.recentlyViewed
      : []
  )

  if (recent.length === 0) return null

  return (
    <section className="recently-viewed container my-4">
      <h2 className="h4 mb-3">Recently Viewed</h2>
      <div className="row flex-nowrap overflow-auto gutters-2">
        {recent.map(country => (
          <div key={country.cca3} className="col-auto">
            <Link to={`/country/${country.cca3}`} className="text-decoration-none text-dark">
              <div className="card shadow-sm border-0" style={{ width: '8rem' }}>
                <img
                  src={country.flags?.png}
                  alt={`Flag of ${country.name?.common ?? country.cca3}`}
                  className="card-img-top img-fluid"
                  style={{ height: '4.5rem', objectFit: 'cover' }}
                />
                <div className="card-body py-2 px-2 text-center">
                  <small className="card-text text-truncate d-block">{country.name?.common ?? country.cca3}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
