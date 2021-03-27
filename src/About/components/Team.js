import React from 'react'
import {NavLink} from 'react-router-dom'
import './Team.css'
import navneet from '../../img/navneet.jpg'
import abhishek from '../../img/abhishek.jpg'
import dhruv from '../../img/dhruv.jpg'
import darji from '../../img/darji.jpg'
function Team() {
    return (
        <div className="container mt-5 mb-5">
                <h5 className="text-center mb-5" style={{fontSize:'38px',color:'tomato'}}>MEET OUR TEAMS</h5>
                <div className="card-deck newCard">
                    <div className="card text-center shadow">
                    <img src={navneet} className="card-img-top img-fluid"  alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Navneet Pal</h5>
                        <h6 className="card-subtitle mb-2 text-muted">170160107054</h6>
                        <p className="card-text">Full Stack Web Developer</p>
                        <p className="card-text"><small className="text-muted">MERN STACK | COMPETITIVE PROGRAMMER</small></p>
                        <div className="d-flex justify-content-between">
                        <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fab fa-2x fa-instagram" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}} aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                    </div>
                    <div className="card text-center shadow">
                    <img src={abhishek} className="card-img-top"  alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Abhishek Mishra</h5>
                        <h6 className="card-subtitle mb-2 text-muted">170160107051</h6>
                        <p className="card-text">Full Stack Web Developer</p>
                        <p className="card-text"><small className="text-muted">MERN STACK</small></p>
                        <div className="d-flex justify-content-between">
                        <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fab fa-2x fa-instagram" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}} aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                    </div>
                    <div className="card text-center shadow">
                    <img src={dhruv} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Dhruv Chauhan</h5>
                        <h6 className="card-subtitle mb-2 text-muted">170160107020</h6>
                        <p className="card-text">Web Designer</p>
                        <p className="card-text"><small className="text-muted">FRONT END DEVELOPER</small></p>
                        <div className="d-flex justify-content-between">
                        <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fab fa-2x fa-instagram" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}} aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                    </div>
                    <div className="card text-center shadow">
                    <img src={darji} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Harsh Darji</h5>
                        <h6 className="card-subtitle mb-2 text-muted">170160107022</h6>
                        <p className="card-text">Web Designer</p>
                        <p className="card-text"><small className="text-muted">FRONT END DEVELOPER</small></p>
                        <div className="d-flex justify-content-between">
                        <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fab fa-2x fa-instagram" style={{color:'#f65a5b'}}></i></NavLink>
                        <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}} aria-hidden="true"></i></NavLink>
                        </div>
                    </div>
                    </div>
                </div>
            </div> 
    )
}

export default Team
