import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#FFFFFF',
         backgroundAdmin: '#F5F5F5',
         lightBlack: '#222222',
         darkGrey: '#212529',
         linearGradient:
            'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
         darkGreen: '#027B44',
      },

      secondary: {
         main: '#D9D9D9',
         linearGradient: ('#FDFDFD', '#E4E7EE'),
         input: '#D9D9D9',
         lightGrey: '#959595',
         orange: '#E4772F',
         white: '#DBF0E5',
      },

      tertiary: {
         main: '#DBEBFF',
         daisy: '#DBF0E5',
         blue: '#3977C0',
         lightBlue: '#346EFB',
         red: '#F91515',
      },
   },
})

const Themes = ({ children }) => (
   <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Themes
