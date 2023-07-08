import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from './Services'
import Therapist from './Therapist'
import Newsletter from './Newsletter'
import Footer from "../components/Footer"


const Desktop = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>

            <Hero></Hero>

            <Services></Services>

            <Therapist></Therapist>

            <Newsletter></Newsletter>

            <Footer></Footer>

    
        </div>
      )
}

export default Desktop