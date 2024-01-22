import { Paper, styled } from '@mui/material'
import { forwardRef } from 'react'
import { PatternFormat } from 'react-number-format'

const NumberInput = forwardRef(
   ({ value, children, onChange, rest, placeholder, format }) => (
      <StyledInputBox>
         {children}

         <StyledInput
            id="number"
            format={format}
            mask="_"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...rest}
         />
      </StyledInputBox>
   )
)

export default NumberInput

const StyledInput = styled(PatternFormat)(({ theme }) => ({
   borderRadius: '0.3125rem',
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

const StyledInputBox = styled(Paper)(({ theme }) => ({
   width: '16.4375rem',
   height: ' 2.625rem',
   display: 'flex',
   alignItems: 'center',
   border: '1px solid rgba(0, 147, 68, 0.50)',
   marginTop: '0.375rem',

   [theme.breakpoints.down('lg')]: {
      width: '13.4375rem',
      height: ' 2.3rem',
   },
}))
