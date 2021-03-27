import React from 'react'
import {NavLink} from 'react-router-dom'
import t1 from '../../img/t1.jpg'
import t2 from '../../img/t2.jpg'
import t3 from '../../img/t3.jpg'
import t4 from '../../img/t4.jpg'


function Trainer() {
    return (
        <>
        <section style={{backgroundColor:'#f65a5b', paddingBottom:'50px'}} >
        <div className="container">
          <h3 className="text-center pt-5 mb-5" style={{color:'whitesmoke',fontSize:'48px',letterSpacing:'2px'}}>Our Trainer</h3>
          <div className="row teamcenter">
            <div className="trainer">
              <div className="card" style={{width: '16rem',borderStyle: 'solid',borderColor: 'black'}}>
                <div className="container1">
                  <img src={t1} className="image card-img-top img-fluid" style={{height:'260px'}} alt="..."/>
                  <div className="middle">
                    <div className="text">Sam Will</div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{color:'#f65a5b'}}>Sam Will</h5>
                  <h6 className="card-subtitle text-center mb-2">BodyBuilder</h6>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fab fa-2x fa-twitter" style={{color:'#f65a5b'}}></i></NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="trainer">
              <div className="card" style={{width: '16rem', borderStyle: 'solid',borderColor: 'black'}}>
                <div className="container1">
                  <img src={t2} className="image card-img-top img-fluid" style={{height:'260px'}} alt="..."/>
                  <div className="middle">
                    <div className="text">Sara Kent</div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{color:'#f65a5b'}}>Sara Kent</h5>
                  <h6 className="card-subtitle text-center mb-2">Fitness Trainer</h6>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fab fa-2x fa-twitter" style={{color:'#f65a5b'}}></i></NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="trainer">
              <div className="card" style={{width: '16rem', borderStyle: 'solid',borderColor: 'black'}}>
                <div className="container1">
                  <img src={t3} className="image card-img-top img-fluid" style={{height:'260px'}} alt="..."/>
                  <div className="middle">
                    <div className="text">Rose Will</div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{color:'#f65a5b'}}>Rose Will</h5>
                  <h6 className="card-subtitle text-center mb-2">Rose Will</h6>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fab fa-2x fa-twitter" style={{color:'#f65a5b'}}></i></NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="trainer">
              <div className="card" style={{width: '16rem', borderStyle: 'solid',borderColor: 'black'}}>
                <div className="container1">
                  <img src={t4} className="image card-img-top img-fluid" style={{height:'260px'}} alt="..."/>
                  <div className="middle">
                    <div className="text">Max Will</div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center" style={{color:'#f65a5b'}}>Max Will</h5>
                  <h6 className="card-subtitle text-center mb-2">Body Builder</h6>
                  <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum</p>
                  <div className="d-flex justify-content-between">
                    <NavLink to="#"><i className="fab fa-2x fa-facebook" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fa fa-2x fa-envelope" style={{color:'#f65a5b'}}></i></NavLink>
                    <NavLink to="#"><i className="fab fa-2x fa-twitter" style={{color:'#f65a5b'}}></i></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Trainer
