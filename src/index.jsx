import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react'
import Notification from './components/Notification'
import Themes from './components/Themes'
import './index.css'
import { store, persistor } from './store/store'
import { injectStore } from './configs/axiosInstance'
import Patients from './pages/admin/patients/Patients'
import App from './App'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <PersistGate loading="loading.." persistor={persistor}>
         <Provider store={store}>
            <Themes>
               <Notification />

               <App />
               {/* <Patients /> */}
            </Themes>
         </Provider>
      </PersistGate>
   </StrictMode>
)
