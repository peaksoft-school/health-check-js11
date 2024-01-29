import './App.css'
import AboutUs from './components/landing/AboutUs'
import OurServices from './components/landing/OurServices'
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

         <Footer />
      </>
   )
}

export default App
