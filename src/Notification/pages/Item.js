import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import Breadcrumb from '../../components/helper/Breadcumb/Breadcrumb'
import Footer from '../../components/helper/Footer/Footer'
import Navbar from '../../components/helper/Navbar/Navbar'

function Item({match}) {
    const [item,setItem]=useState({});

    useEffect(()=>{
        fetchItem();
    },[]);
    
    const fetchItem=async()=>{
        const data=await fetch(`http://localhost:5000/notifications/${match.params.id}`)
        const item=await data.json();
        console.log(item);
        setItem(item.data);
    }

    return (
        <>
           <Navbar/> 
           <Breadcrumb text={item.title}/>
           <div className="container mt-5 mb-5">
                <div className="blogname text-center mb-4">
                    <h3>{ item.title } </h3>
                    <span>{ item.createdAt } </span>
                </div>
                <div className="blogimage mb-4">
                    <img className="img-fluid"  src={item.image} alt="" srcset=""/>
                </div>
                <div>
                    <p>{item.description} </p>
                </div>
                <div>
                    <NavLink to={`/notifications/${item._id}/edit`} className="btn btn-outline-warning">EDIT</NavLink>
                    <form style={{display:'inline'}}  action="/notifications/<%=blog._id %>?_method=DELETE" method="POST">
                        <button className="btn btn-danger">Delete</button>
                    </form>
                </div>
           </div>
           <Footer/>
        </>
    )
}

export default Item
