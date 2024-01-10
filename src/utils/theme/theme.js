import { createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#FFFFFF',
         backgroundAdmin: '#F5F5F5',
         lightBlack: '#222222',
         darkGrey: '#212529',
         linearGradient: '#0CBB6B',
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

export default theme