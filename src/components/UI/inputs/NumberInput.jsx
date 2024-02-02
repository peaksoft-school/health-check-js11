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
   background: ' #FFF',
   padding: '0rem 0.625rem px',
   border: 'none',
   fontSize: '1rem',
   color: '#9d9d9d',
   marginLeft: '0.5rem',

   [theme.breakpoints.down('lg')]: {
      width: '10rem',
      fontSize: '0.85rem',
   },

   '&:focus': {
      outline: 'none',
      color: 'rgba(0, 0, 0, 0.87)',
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

   if (variant === 'authentication') {
      return {
         ...defaultStyles,
         borderRadius: '0.5225rem',
         border: `1px solid ${error ? 'red' : theme.palette.secondary.main}`,

         '&:hover': {
            border: `1px solid ${
               error ? 'red' : theme.palette.secondary.lightGrey
            }`,
         },
      }
   }
   return defaultStyles
})
