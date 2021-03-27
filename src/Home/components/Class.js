import React from 'react'
import c7 from '../../img/c7.jpg'
import c1 from '../../img/c1.jpg'
import c6 from '../../img/c6.jpg'
import c5 from '../../img/c5.jpg'
function Class() {
    return (
        <>
        <section style={{backgroundColor:'#1f2223'}} className="pb-5">
        <div className="container">
          <h3 className="text-center pt-5 mb-5" style={{color:'whitesmoke',fontSize:'48px',letterSpacing:'2px'}}>Our Classes</h3>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={c7} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">BODY BUILDING</h5>
                      <h6 className="card-subtitle mb-2 text-muted">“Intensity builds immensity.”</h6>
                      <p className="card-text"> <span style={{color: '#f65a5b',letterSpacing: '.7px', fontSize:'24px'}}>Sam Will</span> <br/> Trainer </p>
                      <p className="card-text"> Class Time:<small className="text-muted"> Mon, Wed, Thu | 9:00am to 11:00am</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={c1} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">SPINNING</h5>
                      <h6 className="card-subtitle mb-2 text-muted">“Intensity builds immensity.”</h6>
                      <p className="card-text"> <span style={{color: '#f65a5b',letterSpacing: '.7px', fontSize:'24px'}}>Rose Will</span> <br/> Trainer </p>
                      <p className="card-text"> Class Time:<small className="text-muted">Tue, Thu, Sat | 4:00pm to 7:00pm</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={c6} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">AEROBICS</h5>
                      <h6 className="card-subtitle mb-2 text-muted">“Intensity builds immensity.”</h6>
                      <p className="card-text"> <span style={{color: '#f65a5b',letterSpacing: '.7px', fontSize:'24px'}}>Sam Will</span> <br/> Trainer </p>
                      <p className="card-text"> Class Time:<small className="text-muted">Wed, Fri, Sun | 6:00am to 9:00am</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={c5} className="card-img" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">CROSSFIT</h5>
                      <h6 className="card-subtitle mb-2 text-muted">“Intensity builds immensity.”</h6>
                      <p className="card-text"> <span style={{color: '#f65a5b',letterSpacing: '.7px', fontSize:'24px'}}>Rose Will</span> <br/> Trainer </p>
                      <p className="card-text"> Class Time:<small className="text-muted">Mon, Wed, Thu | 9:00am to 11:00am</small></p>
                    </div>
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

export default Class
