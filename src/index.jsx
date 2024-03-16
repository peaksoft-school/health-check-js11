import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ru } from 'date-fns/locale'
import { LocalizationProvider } from '@mui/x-date-pickers'
import Notification from './components/Notification'
import Themes from './components/Themes'
import App from './App'
import './index.css'
import { store, persistor } from './store/store'
import { injectStore } from './configs/axiosInstance'
import { fileInjectStore } from './configs/axiosInstaseFile'

injectStore(store)
fileInjectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ru}>
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
