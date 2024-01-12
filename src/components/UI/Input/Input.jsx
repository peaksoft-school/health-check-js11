import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { forwardRef } from 'react'

const Input = forwardRef(
   (
      { value, onChange, placeholder, invalid, error, type = 'text', ...rest },
      ref
   ) => {
      return (
         <InputStyled
            value={value}
            ref={ref}
            onChange={onChange}
            placeholder={placeholder}
            error={error}
            type={type}
            {...rest}
         />
      )
   }
)
export default Input

const InputStyled = styled(TextField)(() => ({
   '.MuiOutlinedInput-root': {
      height: '3rem',
      width: '26rem',
      fontFamily: 'Manrope',
      borderRadius: '8px',
      '& fieldset': {
         borderColor: '#D9D9D9',
      },
      '&:hover fieldset': {
         borderColor: '#959595',
      },
      '&:active fieldset': {
         borderColor: '#rgba(4, 135, 65, 0.80)',
      },
      '&:invalid fieldset': {
         border: '1px solid #F91515',
      },
      '&.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline ':
         {
            border: '1px solid #F91515',
         },
      '&.Mui-focused fieldset': {
         borderColor: 'rgba(4, 135, 65, 0.80)',
      },
   },
}))
