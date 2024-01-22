import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Themes from './components/UI/Themes'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <StrictMode>
      <Themes>
         <App />
      </Themes>
   </StrictMode>
)
