import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ru } from 'date-fns/locale'
import App from './App'
import Notification from './components/Notification'
import Themes from './components/Themes'
import { store, persistor } from './store/store'
import { injectStore } from './configs/axiosInstance'
import { fileInjectStore } from './configs/axiosInstaseFile'
import './index.css'
import BreadCrumbs from './components/UI/BreadCrumbs'

injectStore(store)
fileInjectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
         <PersistGate loading="loading.." persistor={persistor}>
            <Provider store={store}>
               <Themes>
                  <Notification />

                  <App />
               </Themes>
            </Provider>
         </PersistGate>
      </LocalizationProvider>
   </StrictMode>
)
