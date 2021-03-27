import React,{useState,useEffect} from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Item.css'
function Item() {
    const [product,setProduct]=useState([]);

    useEffect(()=>{
      const fetchItem=async()=>{
        const data=await fetch('http://localhost:5000/product');
        const items=await data.json();
        setProduct(items.data)
      }
      fetchItem();
    },[])

    const products=product.map(product=>{
      return (
        <div className="col-md-4">
              <Link to={`/product/${product._id}`} className="custom-card">
                <div className="card mx-1 shadow-lg">
                  <img  src={product.image}   className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <NavLink to={`/product/${product._id}`} className="card-title" style={{color:'black'}}>{product.title}...</NavLink>
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
                        <small style={{textDecoration: 'line-through'}} className="text-muted">(₹1,880)</small>₹{product.price}  Save ₹1,050 (56%)</span>
                    </p> 
                  </div>
                </div>
              </Link>
            </div> 
      )
    })

    return (
        <>
            {products}
        </>
    )
}

export default Item
