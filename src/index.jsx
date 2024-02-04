import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import Notification from './components/Notification'
import Themes from './components/Themes'
import './index.css'
import { store } from './store/store'
import AppRoutes from './routes/AppRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Provider store={store}>
         <Themes>
            <RouterProvider router={<AppRoutes />} />
            <App />
            <Notification />
         </Themes>
      </Provider>
   </StrictMode>
)
