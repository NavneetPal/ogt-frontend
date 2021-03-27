import React,{useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'

function Blog() {
    const [notification,setNotifications]=useState([]);
    useEffect(()=>{
        fetchNotification();
    },[])

    /* const fetchNotification=async()=>{
        const items=await axios.get('http://localhost:5000/notifications');
        console.log(items.data);
        setNotifications(items.data);
    } */
    const fetchNotification=async()=>{
        const data=await fetch('http://localhost:5000/notifications');
        const items=await data.json();
        console.log(items.data);
        setNotifications(items.data)
        console.log(items);
    }
    const notifications=notification.map(blog=>{
        return (
            <div className="mb-5" key={blog._id}>
                <img className="img-fluid" width="100%" src={blog.image} alt="newnotification"/>
                <div className="mt-4">
                    <h4 style={{fontSize:'30px'}}><NavLink to={`/notifications/${blog._id}`}>{blog.title}</NavLink></h4>
                    <p>{blog.description.substring(0,100)}..........</p>
                    <p>
                        <em> Submitted On: {blog.createdAt}  </em>
                    </p>
                </div>
                <div className="text-right">
                    <NavLink className="btn btn-success"  to={`/notifications/${blog._id}`}>READ MORE</NavLink>
                </div>
                <hr/>
          </div>
        )
    })

    return (

        <>
          {notifications}
        </>
    )
}

export default Blog
