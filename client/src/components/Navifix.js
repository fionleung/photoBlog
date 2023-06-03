import React from 'react';
import {
  NavLink
} from "react-router-dom";

export default function Navifix(){
  return (
    <div>
    <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
     <div className="container-fluid">
      <a className="navbar-brand" href="/">Money is a Cat</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to='/gallery'>Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to='/products'>Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </header>
    </div>
  );
}
