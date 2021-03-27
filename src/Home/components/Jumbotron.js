import React from 'react'
import {NavLink} from 'react-router-dom'
import insta from '../../img/insta.png'
import linked from '../../img/linked.png'
import pinterest from '../../img/pinterest.png'

function Jumbotron() {
    return (
        <>
        <div className="container-fluid jumbotron jumbotron-fluid ">
        <div className="row text-left">
            <div className="col-md-12 col-lg-8 ">
                <p className="homepara">GET IN. GET FIT.<br/> GET ON WITH LIFE</p>
                <div className="mb-5 text-left" id="meetoncontainer" >
                  <p id="meeton" className="mt-3">ALSO MEET ON</p>
                  <NavLink to="#"className="mr-3"><img src={insta}/></NavLink>
                  <NavLink to="#" className="mr-3"><img src={linked}/></NavLink>
                  <NavLink to="#"><img src={pinterest}/></NavLink>
                </div>
                  <div className="mt-4" id="logincred">
                    <NavLink to="/signin" className="btn1 btn btn-lg rounded-pill  mr-3" id="signin">Sign-in</NavLink>
                    <NavLink to="/signup" className="btn1 btn btn-lg rounded-pill btn-outline-secondary" style={{color:'white'}}>Sign-up</NavLink>
                  </div>
                  <div className="mt-4" id="logincred">
                    <NavLink to="/signout" className="btn1 btn btn-lg rounded-pill" id="signin">Sign-Out</NavLink>
                  </div>
            </div>
            <div className="col-lg-4  d-none d-lg-block">
              <div className="row">
                <div className="col-8 justify-content-center text-left">
                </div>
              </div>
               
            </div>
        </div>
    </div> 
        </>
    )
}

export default Jumbotron
