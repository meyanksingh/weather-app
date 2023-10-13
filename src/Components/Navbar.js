import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Weather API</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link to='/text' className="nav-link">TextUtils</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

    </div>
  )
}

export default Navbar