import { forwardRef } from 'react'
import { TextField, styled } from '@mui/material'

const Input = forwardRef(
   (
      {
         type,
         label,
         placeholder,
         onChange,
         error,
         onClick,
         value,
         disabled,
         readOnly,
         ...rest
      },
      ref
   ) => {
      const hasError = !!error

      return (
         <StyledInput
            error={hasError}
            type={type}
            label={label}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
            inputProps={{ readOnly }}
            {...rest}
         />
      )
   }
)

const StyledInput = styled(TextField)(({ theme }) => ({
   height: '42px',
   borderRadius: '8px solid',
   caretColor: theme.palette.primary.darkGreen,

   '& .MuiOutlinedInput-input': {
      borderRadius: '2px',
      color: theme.palette.secondary.lightGrey,
   },

   '& .MuiOutlinedInput-root': {
      '& fieldset': {
         borderColor: theme.palette.secondary.main,
      },

      '&:hover fieldset': {
         borderColor: theme.palette.secondary.lightGrey,
      },

      '&.Mui-focused fieldset': {
         borderWidth: '1px',
         borderColor: theme.palette.primary.darkGreen,
      },

      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
         borderColor: theme.palette.secondary.lightGrey,
      },
   },
}))

export default Input
