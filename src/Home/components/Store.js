import React from 'react'
import {NavLink} from 'react-router-dom'


function Store() {
    return (
        <>
        <section id="storesection">
        <div className="container storesectioncontent">
          <h3 className="text-center pt-5 mb-5" style={{color:'whitesmoke',fontSize:'48px',letterSpacing:'2px'}}>Our Store</h3>
          <div className="card-deck">
              <NavLink to="/product/ " className="custom-card">
                <div className="card mx-1 shadow-lg">
                  <img  src=""   className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <NavLink href="/product/" className="card-title" style={{color:'black'}}>  </NavLink>
                    <p className="card-text" style={{fontSize: '11px'}}>10% off with AU Bank Debit Cards...</p>
                    <p className="card-text"><small className="text-muted">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      4.5 (18,560)</small>
                      <span className="d-block"></span>
                      <span className="float-right " >
                        <small style={{textDecoration: 'line-through'}} className="text-muted">(₹1,880)</small>  Save ₹1,050 (56%)</span>
                    </p> 
                  </div>
                </div>
              </NavLink>
          
             
            
  
             <NavLink href="/products" className="custom-card">
              <div className="card mx-1 shadow-lg">
                <img  src="./imgs/rubber-dumbbell-set.jpg"  className="card-img-top"  alt="..."/>
                <div className="card-body">
                  <NavLink href="/product" style={{color: 'black'}}>Bodygrip BGRIP5440 Kettlebell, 7Kg (Multicolour)...</NavLink>
                  <p className="card-text" style={{fontSize: '11px'}}>10% off with AU Bank Debit Cards...</p>
                  <p className="card-text"><small className="text-muted">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    <i className="fas fa-star "></i>
                    4.5 (18,560)</small>
                    <span className="d-block"></span>
                    <span className="float-right" >
                      <small style={{textDecoration: 'line-through'}} className="text-muted">(₹5,000)</small>₹856  Save ₹4,144 (83%)</span>
                  </p>   
                </div>
              </div>
            </NavLink>
            <NavLink href="/products" className="custom-card">
              <div className="card mx-1 shadow-lg " >
                <img  src="./imgs/roller.jpg"  className="card-img-top" alt="..."/>
                <div className="card-body ">
                  <NavLink href="/products" style={{color:'black'}}>N&M™ Anti Skid Double Wheel AB Roller Portable...</NavLink>
                  <p className="card-text" style={{fontSize: '11px'}}>10% off with AU Bank Debit Cards...</p>
                  <p className="card-text"><small className="text-muted">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    4.5 (18,560)</small>
                    <span className="d-block"></span>
                    <span className="float-right" >
                      <small style={{textDecoration: 'line-through'}} className="text-muted">(₹999)</small>₹299 Save ₹700 (70%)</span>
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink href="/products" className="custom-card">
              <div className="card mx-1 shadow-lg ">
                <img  src="./imgs/dumbell-stand.jpg"  className="card-img-top"  alt="..."/>
                <div className="card-body">
                  <NavLink href="/products" style={{color:'black'}}>RISE UP Dumbbell Stand & Standard Weight Multilevel...</NavLink>
                  <p className="card-text" style={{fontSize: '11px'}}>Save extra with No Cost EMI...</p>
                  <p className="card-text"><small className="text-muted">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    4.5 (18,560)</small>
                    <span className="d-block"></span>
                    <span className="float-right" >
                      <small style={{textDecoration: 'line-through'}} className="text-muted">($199)</small>$9.99 </span>
                      
                  </p> 
                </div>
              </div>
            </NavLink>
            <NavLink href="/products" className="custom-card">
              <div className="card mx-1 shadow-lg ">
                <img  src="./imgs/dumbel-plate.jpg"  className="card-img-top img-fluid"  alt="..."/>
                <div className="card-body ">
                  <NavLink href="/products" style={{color:'black'}}>Aurion Weight Plate disc Vinyl Standard Weights Plates Set...</NavLink>
                  <p className="card-text" style={{fontSize: '11px'}}>10% off with AU Bank Debit Cards...</p>
                  <p className="card-text"><small className="text-muted">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half-alt text-warning"></i>
                    4.5 (18,560)</small>
                    <span className="d-block"></span>
                    <span className="float-right" > ₹1,495 </span>  
                  </p>
                </div>
              </div>
            </NavLink>
  
          </div>
        </div>
        <div className="container storesectioncontent">
          <div className="d-flex justify-content-center mt-3">
            <NavLink className="btn  btn -lg btn-secondary" href="/store">See More</NavLink>
          </div>
        </div>
      </section>
        </>
    )
}

export default Store
