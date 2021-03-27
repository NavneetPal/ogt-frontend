import React,{useState,useEffect} from 'react'
import {Link,NavLink} from 'react-router-dom'
function StoreSection() {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
      const fetchItem=async()=>{
        const data=await fetch('http://localhost:5000/product');
        const items=await data.json();
        setProduct(items.data.slice(0,5))
      }
      fetchItem();
    },[])

    const cards=product.map(item=>{
        return (
            <Link to={`/product/${item._id}` } className="custom-card">
                <div className="card mx-1 shadow-lg">
                  <img  src={item.image}   className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <NavLink to={`/product/${item._id}`} className="card-title" style={{color:'black'}}> {item.title} </NavLink>
                    <p className="card-text" style={{fontSize: '11px'}}>10% off with AU Bank Debit Cards...</p>
                    <p className="card-text"><small className="text-muted">
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star text-warning"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      4.5 (18,560)</small>
                      <span className="d-block"></span>
                      <span className="float-right" >
                        <small style={{textDecoration: 'line-through'}} className="text-muted">(₹1,880)</small>₹{item.price} Save ₹1,050 (56%)</span>
                    </p> 
                  </div>
                </div>
              </Link>
        )
    })
    return (
        <>
        <section id="storesection">
        <div className="container storesectioncontent">
          <h3 className="text-center pt-5 mb-5" style={{color:'whitesmoke',fontSize:'48px',letterSpacing:'2px'}}>Our Store</h3>
          <div className="card-deck">
                {cards}
          </div>
        </div>
        <div className="container storesectioncontent">
          <div className="d-flex justify-content-center mt-3">
            <NavLink className="btn  btn -lg btn-secondary" to="/store">See More</NavLink>
          </div>
        </div>
      </section>
        </>
    )
}

export default StoreSection
