import React from 'react'
import {NavLink} from 'react-router-dom'
function AboutProduct({product}) {
    return (
        <div>
        <section className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div style={{border:'1px solid grey'}}>
                        <img src={product.image}  className="img-fluid" style={{width:'300px',height:'400px'}} alt=""/>
                    </div>
                </div>
                <div className="col-md-8">
                    <h3 style={{color: '#fb383b',fontSize:'38px'}}> {product.title}  </h3>
                    <p><span className="item_price">₹ {product.price}  </span> <del>1,880.00</del> </p>
                    <p>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star text-warning"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </p>
                    <div>
                        <h5 className="text-muted"><small>Check delivery, payment options and charges at your location</small></h5>
                        <form action="#" method="post">
                            <div className="d-inline">
                                <input type="text" className="p-2" placeholder="Enter pincode" size="40"  required/>
                                <input type="submit" className="p-2" style={{backgroundColor:'black',color:'white'}}/>
                            </div>
                        </form>
                        <div className="mt-4 mb-4">
                            <h5 className="mb-2" >Quantity :</h5>
                            <select>
                                <option value="1">1 Qty</option>
                                <option value="2">2 Qty</option>
                                <option value="3">3 Qty</option>
                                <option value="4">4 Qty</option>
                                <option value="5">5 Qty</option>
                                <option value="6">6 Qty</option>
                                <option value="7">7 Qty</option>
                            </select>
                        </div>
                        <div className="d-inline">
                            <button className="btn btn-sm" style={{fontSize: '13px',color: '#fff',background: '#1d1d1d'}}>ADD TO CART</button>
                            <NavLink className="btn btn-sm" to="checkout.html" style={{fontSize: '13px',color: '#fff',background: '#fb383b'}}>CHECKOUT</NavLink>
                        </div>
                        <br/>
                        <div className="d-inline-flex mt-3 justify-content-between">
                            <p style={{fontSize:'24px'}}>Share On:</p>
                            <NavLink to="#" className="mr-2 ml-2"><i className="fab fa-2x fa-instagram-square"></i></NavLink>
                            <NavLink to="#" className="mr-2"><i className="fab fa-2x fa-facebook-square"></i></NavLink>
                            <NavLink to="#" className="mr-2"><i className="fab fa-2x fa-twitter-square"></i></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default AboutProduct
