import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Themes from './components/UI/Themes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <StrictMode>
      <Themes>
         <App />
      </Themes>
   </StrictMode>
)
