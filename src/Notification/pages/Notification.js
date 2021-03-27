import React from 'react'
import Navbar from '../../components/helper/Navbar/Navbar'
import Breadcrumb from '../../components/helper/Breadcumb/Breadcrumb'
import Footer from '../../components/helper/Footer/Footer'
import Blog from '../components/Blog'
function Notification() {
    return (
        <>
            <Navbar/>
            <Breadcrumb text="HOME-NOTIFICATIONS"/>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3">
                        <p className="lead">OGT</p>
                        <div className="list-group">
                            <li className="list-group-item active">Info 1</li>
                            <li className="list-group-item">Info 2</li>
                            <li className="list-group-item">Info 3</li>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Blog/>
                    </div>
               </div>
           </div>
            <Footer/>

        </>
    )
}

export default Notification
