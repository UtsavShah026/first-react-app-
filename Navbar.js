import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand bg-success">a2z → A2Z</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar
