import React from 'react'
import {NavLink} from 'react-router-dom'

function MainNavbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark" id="navbarogt">
        <NavLink className="navbar-brand" to="/">OGT<p style={{fontSize: '22px',letterSpacing:'3px'}}>ONLINE GYM TRAINING</p></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style={{marginRight:'150px'}}>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
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
</nav>
        </>
    )
}

export default MainNavbar
