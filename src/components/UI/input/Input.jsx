import { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

const Input = forwardRef(
   ({ type, label, placeholder, onChange, onClick, value, ...rest }, ref) => (
      <StyledInput
         type={type}
         label={label}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
         ref={ref}
         {...rest}
      />
   )
)

const StyledInput = styled(TextField)(({ theme }) => ({
   width: '414px',
   height: '42px',
   borderRadius: '8px solid',

   '& .MuiOutlinedInput-input': {
      borderRadius: '2px',
   },

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: theme.palette.secondary.main,
      },

      '&:hover fieldset': {
         borderColor: theme.palette.secondary.lightGrey,
      },

      '&.Mui-focused fieldset': {
         borderColor: theme.palette.primary.darkGreen,
      },

      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
         borderColor: theme.palette.tertiary.red,
      },
   },
}))

export default Input
