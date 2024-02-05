import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ component, fallBackPath, roles }) => {
   const { isAuth, role } = useSelector((state) => state.login)

   if (!isAuth) {
      return <Navigate to={fallBackPath} />
   }

   return component
}
