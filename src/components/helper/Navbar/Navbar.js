import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark " id="navbarogt">
        <div className="container">
            <NavLink className="navbar-brand" to="/">OGT</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav left" style={{marginRight:'150px'}}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">HOME </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/store">STORE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/notifications">NOTIFICATION</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav> 
        </>
    )
}

export default Navbar
