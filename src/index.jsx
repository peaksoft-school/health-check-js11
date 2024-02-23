import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import Notification from './components/Notification'
import App from './App'
import Themes from './components/Themes'
import './index.css'
import { store, persistor } from './store/store'
import AddOnlineAppointments from './pages/admin/online-appointments/AddOnlineAppointments'
import { injectStore } from './configs/axiosInstance'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <Themes>
                  <Notification />

                  <App />
               </Themes>
            </PersistGate>
         </Provider>
      </LocalizationProvider>
   </StrictMode>
)
