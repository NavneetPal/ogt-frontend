import React from 'react'
import Navbar from '../../components/helper/Navbar/Navbar'
import Breadcrumb from '../../components/helper/Breadcumb/Breadcrumb'
import Footer from '../../components/helper/Footer/Footer'
import StoreSection from '../components/StoreSection'
function Store() {
    return (
        <>
          <Navbar/> 
          <Breadcrumb text="STORE"/> 
          <StoreSection/>
          <Footer/>
        </>
    )
}

export default Store
