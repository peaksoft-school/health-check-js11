import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ Component, fallBackPath, roles }) => {
   const { isAuth, role } = useSelector((state) => state.login)

   const isAllowed = () => roles.includes(role)

   if (isAuth && isAllowed()) {
      return Component
   }

   return <Navigate to={fallBackPath} />
}

export default ProtectedRoute
