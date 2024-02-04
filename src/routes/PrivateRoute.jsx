import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ component, fallBacPath, isAuth }) => {
   if (!isAuth) {
      return <Navigate to={fallBacPath} />
   }
   return component
}
