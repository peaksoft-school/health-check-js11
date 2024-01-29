import './App.css'
import AboutUs from './components/landing/AboutUs'
import BestDoctors from './components/landing/BestDoctors'
import Leave from './components/landing/Leave'
import OurServices from './components/landing/OurServices'
import Reviews from './components/landing/Reviews'
import Welcome from './components/landing/Welcome'
import WhyWe from './components/landing/WhyWe'
import Footer from './layout/Footer'
import Header from './layout/Header'

const App = () => {
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

export default App
