import { Paper, styled } from '@mui/material'
import { forwardRef } from 'react'
import { PatternFormat } from 'react-number-format'

const NumberInput = forwardRef(
   (
      {
         value,
         children,
         onChange,
         variant,
         rest,
         error,
         placeholder,
         format,
         id,
         mask,
      },
      ref
   ) => (
      <StyledInputBox error={error} variant={variant}>
         {children}

         <StyledInput
            id={id}
            format={format}
            mask={mask}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            ref={ref}
            {...rest}
         />
      </StyledInputBox>
   )
)

export default NumberInput

const StyledInput = styled(PatternFormat)(({ theme }) => ({
   background: theme.palette.primary.main,
   padding: '0rem 0.625rem px',
   border: 'none',
   fontSize: '1rem',
   color: '#9D9D9D',
   marginLeft: '0.5rem',
   caretColor: theme.palette.primary.darkGreen,

   '&:focus': {
      outline: 'none',
      color: 'black',
   },
}))

const StyledInputBox = styled(Paper)(({ error, variant, theme }) => {
   const defaultStyles = {
      borderRadius: '0.3125rem',
      width: '100%',
      height: ' 2.625rem',
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${error ? 'red' : ' rgba(0, 147, 68, 0.50)'}`,
   }

   if (variant === 'secondary') {
      return {
         ...defaultStyles,
         borderRadius: '0.5225rem',
         border: `1px solid ${error ? 'red' : theme.palette.secondary.main}`,

         '& input': {
            color: `${theme.palette.secondary.lightGrey} !important`,
         },

         '& input::placeholder': {
            color: `${theme.palette.secondary.main}`,
         },

         '&:hover': {
            border: `1px solid ${
               error ? 'red' : theme.palette.secondary.lightGrey
            }`,
         },
      }
   }

   return defaultStyles
})
