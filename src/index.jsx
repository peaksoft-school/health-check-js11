import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StrictMode } from 'react'
import App from './App'
import Notification from './components/Notification'
import Themes from './components/Themes'
import './index.css'
import { store, persistor } from './store/store'
import { injectStore } from './configs/axiosInstance'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Themes>
               <Notification />

               <App />
            </Themes>
         </PersistGate>
      </Provider>
   </StrictMode>
)
