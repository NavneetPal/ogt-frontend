import React from 'react'
import Fitness from '../components/Fitness'
import Trainer from '../components/Trainer'
import Footer from '../../components/helper/Footer/Footer'
import Contact from '../components/Contact'
import Newsletter from '../components/Newsletter'
import MainNavbar from '../components/MainNavbar'
import Jumbotron from '../components/Jumbotron'
import Class from '../components/Class'
import StoreSection from '../components/StoreSection'

import './Home.css'
function Home() {
    return (
        <>
          <MainNavbar/>
          <Jumbotron/>
          <Fitness/>  
          <Trainer/>
          <Class/>
          <StoreSection/>
          <Newsletter/>
          <Contact/>
          <Footer/>
        </>
    )
}

export default Home
