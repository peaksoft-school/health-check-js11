import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Themes from './components/UI/Themes'
import App from './App'
import Notification from './components/Notification'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Themes>
         <Notification />
         <App />
      </Themes>
   </StrictMode>
)
