import React from 'react'
import {NavLink} from 'react-router-dom'

import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
            <div className="container">
            <div className="row pb-2">
                <div className="col-md-12">
    
                    <div className="d-flex justify-content-around">
                    <ul className="nav" id="footer-menu">
                        <li className="nav-item">
                        <NavLink className="nav-link active" to="#">Terms & Conditions</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#">Privacy</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#">Refund Policy</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#">COPYRIGHT <span>&#169;</span> 2020 OGT
                        </NavLink>
                        </li>
                    </ul>
                    <ul className="nav" id="footer-social">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fab fa-facebook fa-2x"></i></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fab fa-instagram fa-2x"></i></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fab fa-telegram-plane fa-2x"></i></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fab fa-youtube fa-2x"></i></NavLink>
                        </li>
                        <span className="border-right" style={{borderWidth: 'thick'}}></span>
                    </ul>
                    </div>
                    
    
                </div>
                </div>
                
            </div>
            </footer> 
        </>
    )
}

export default Footer
