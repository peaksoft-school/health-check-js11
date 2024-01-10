import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { forwardRef } from 'react'

const EvryoneStyles = {
   padding: '9px 18px',
   textTransform: 'none',
   borderRadius: '9px',
   fontFamily: 'Manrope',
}

const styles = {
   normal: {
      ...EvryoneStyles,
      borderRadius: '8px',
      padding: '10px 26px',
      border: '1px solid #959595',
      backgroundColor: '#FFFFFF',
      color: '#959595',
      '&:hover': {
         backgroundColor: ' #F5F5F5',
         border: 'none',
         padding: '10.5px 27px',
      },
      '&:active': {
         border: 'none',
         backgroundColor: '#F5F5F5',
      },
      '&:disabled': {
         border: 'none',
         backgroundColor: '#F5F5F5',
         color: '#D9D9D9',
      },
   },
   outlined: {
      ...EvryoneStyles,
      border: '1px solid #048741',
      color: '#048741',
      backgroundColor: '#FFFFFF',
      '&:hover': {
         background: 'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
         padding: '11px 21px',
         border: 'none',
         color: '#FFF',
      },
      '&:active': {
         background: 'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
         border: 'none',
         padding: '11px 21px',
         color: '#FFF',
      },
      '&:disabled': {
         border: '1px solid #D3D3D3',
         color: '#D3D3D3',
      },
   },
   contained: {
      ...EvryoneStyles,
      background: 'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: '#FFF',
      '&:hover': {
         background: 'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
      },
      '&:disabled': {
         color: '#FFF',
         background: '#D3D3D3',
      },
   },
}

const Button = forwardRef(
   // eslint-disable-next-line react/prop-types
   ({ children, onClick, disabled, variant = 'contained', ...rest }, ref) => {
      const StyledMuiButton = styled(MuiButton)(() => styles[variant])

      return (
         <StyledMuiButton
            onClick={onClick}
            disabled={disabled}
            ref={ref}
            {...rest}
         >
            {children}
            :sdfasdfasdfasdfa
         </StyledMuiButton>
      )
   }
)

export default Button
