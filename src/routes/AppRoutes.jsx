// import { useSelector } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'

const AppRoutes = () => {
   //    const { isAuth, role } = useSelector((state) => state.login)

   const router = createBrowserRouter([
      {
         path: '/',
         element: <LandingPage />,
      },
   ])
}

export default AppRoutes
