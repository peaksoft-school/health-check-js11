import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ Component, fallBackPath, roles }) => {
   const { isAuth, role } = useSelector((state) => state.auth)

   const isAllowed = () => roles.includes(role)

   if (isAuth && isAllowed()) {
      return <Navigate to={fallBackPath} />
   }

   return Component
}

export default ProtectedRoute
