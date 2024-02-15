import './App.css'
import OnlineAppointments from './containers/admin/online-appointments/OnlineAppointments'
import AdminHeader from './layout/AdminHeader'

const App = () => {
   return (
      <div>
         <AdminHeader />
         <OnlineAppointments />
      </div>
   )
}
export default App
