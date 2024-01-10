import './App.css'
import { styled } from '@mui/material/styles'

function App() {
   return <Div>health-check-js11</Div>
}

export default App

const Div = styled('div')(({ theme }) => ({
   color: theme.palette.primary.darkGreen,
}))
