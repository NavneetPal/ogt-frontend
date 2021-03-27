import React from 'react'
import {NavLink} from 'react-router-dom'
import  fb1 from '../../img/fb1.png'
import tele from '../../img/tele.jpg'
import youtube from '../../img/youtube.png'
import instagram from '../../img/instagram.png'

function Contact() {
    return (
        <>
        <div className="container-fluid pb-3" style={{backgroundColor: 'seashell'}}>
        <div className="container">
          <div className="row pt-5">
            <div className="col-md-12 text-center">
              <p className="theme-text">WE WOULD LOVE TO HEAR FROM YOU</p>
              <p className="getin">GET IN TOUCH WITH US</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="mb-5">
                <p className="same">EMAIL</p>
                 <p className="text-center"><NavLink to="mailto:onlinegymtrainingogt@gmail.com" className="same1">onlinegymtrainingogt@gmail.com</NavLink></p> 
              </div>
              <div>
                <p className="same">ADDRESS</p>
                <p className="same1">B-305, The First, B/H Keshavbaug, Vastrapur, Ahmedabad, Gujarat 380015</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-5">
                <p className="same">CALL</p>
                <p className="text-center"><NavLink className="same1" to="tel:+91-9714023076">+91-9714023076</NavLink></p>
                
              </div>
              <div>
                <p className="same">SOCIAL LINKS</p>
                <div className="text-center">
                  <NavLink to="#"><img className="social img-fluid" src={fb1} alt=""/></NavLink>
                  <NavLink to="#"><img className="social img-fluid" src={instagram}  alt=""/></NavLink>
                  <NavLink to="#"><img className="social img-fluid" src={tele}  alt=""/></NavLink>
                  <NavLink to="#"><img className="social img-fluid" src={youtube}  alt=""/></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Contact
