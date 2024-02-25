import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ Component, fallBackPath, roles }) => {
   const { role } = useSelector((state) => state.auth)

   const isAllowed = roles.includes(role)

   if (!isAllowed) {
      return <Navigate to={fallBackPath} replace />
   }

   return Component
}

export default ProtectedRoute
