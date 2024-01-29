import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import Notification from './components/Notification'
import Themes from './components/Themes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Themes>
         <Notification />

         <App />
      </Themes>
   </StrictMode>
)
