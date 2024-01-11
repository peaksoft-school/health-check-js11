import React from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const MuiButton = ({ disabled, ...rest }) => {
   return (
      <DemoButton disabled={disabled} {...rest}>
         click
      </DemoButton>
   )
}

export default MuiButton

const DemoButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      borderRadius: '10px',
      padding: '10px 26px',
      border: '1px solid #959595',
      color: '#048741',
      borderColor: '#048741',

      '&:hover': {
         background:
            'var(--Primary-button-gradient, linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%))',
         border: 'none',
         padding: '10.5px 27px',
         color: 'white',
      },
      '&:active': {
         border: 'none',
         background: 'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
      },
      '&:disabled': {
         border: 'none',
         backgroundColor: '#F5F5F5',
         color: '#D9D9D9',
      },
   },
}))
