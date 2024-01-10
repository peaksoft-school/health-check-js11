import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import './index.css'
import App from './App'
import theme from './utils/theme/theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <StrictMode>
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>
   </StrictMode>
)
