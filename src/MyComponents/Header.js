import React from 'react'
import  PropTypes  from 'prop-types'

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#b67186"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FIKA</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Period Tracker</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ChatBot</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Your Growth</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Our Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
          
        </ul>
       
      </div>
    </div>
  </div>
</nav>
  )
}
Header.defaultProps ={
  title:"Your Title Here"
}

Header.propTypes = {
  title: PropTypes.string
}