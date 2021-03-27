import React from 'react'

import Navbar from '../../components/helper/Navbar/Navbar';
import BreadCrumb from '../../components/helper/Breadcumb/Breadcrumb';
import Footer from '../../components/helper/Footer/Footer'
import Team from '../components/Team'


function About() {
    return (
        <>
            <Navbar/>
            <BreadCrumb text="ABOUT US"/>
            <section style={{backgroundColor:'#f65a5b', paddingBottom:'50px'}}>
                <div className="container">
                <h3 className="text-center pt-5 mb-5" style={{color:'whitesmoke',fontSize:'48px',letterSpacing:'2px'}}>ABOUT US</h3>
                <div className="row">
                    <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                    <h5 style={{color:'whitesmoke',fontSize:'30px'}}>ABOUT ONLINE GYM TRAINING</h5>
                    <p style={{color:'white',fontSize:'20px'}}>
                        We as Online gym Training want to provide the best services to the customer and the best trainer to them
                        so that they can remain healthy and fit. <br/>
                        The only goal of OGT is to provide the best services out of the best.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            <Team/>
            <Footer/>  
        </>
    )
}

export default About
