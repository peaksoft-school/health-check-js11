import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Welcome from '../components/landing/Welcome'
import WhyWe from '../components/landing/WhyWe'
import OurServices from '../components/landing/OurServices'
import AboutUs from '../components/landing/AboutUs'
import BestDoctors from '../components/landing/BestDoctors'
import Reviews from '../components/landing/Reviews'
import Leave from '../components/landing/Leave'

const LandingPage = () => {
   return (
      <>
         <Header />
         <Welcome />
         <WhyWe />
         <OurServices />
         <AboutUs />
         <BestDoctors />
         <Reviews />
         <Leave />
         <Footer />
      </>
   )
}

export default LandingPage
