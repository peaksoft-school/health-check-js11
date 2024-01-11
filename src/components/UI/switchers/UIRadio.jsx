import React, { forwardRef } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const UIRadio = forwardRef(({ onChange, checked, label, ...rest }, ref) => (
   <FormControlLabel
      control={
         <IOSSwitch onChange={onChange} checked={checked} ref={ref} {...rest} />
      }
      label={label}
   />
))
export default UIRadio

const IOSSwitch = styled(Switch)(({ theme }) => ({
   width: 42,
   height: 26,
   padding: 0,

   '.MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',

      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#fff',
         '+ .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.darkGreen,
            opacity: 1,
            border: 0,
         },
         '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
         },
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
         color: theme.palette.tertiary.lightBlue,
         border: '6px solid #fff',
      },

      '&.Mui-disabled .MuiSwitch-thumb': {
         color: theme.palette.secondary.main,
      },

      '&.Mui-disabled + .MuiSwitch-track': {
         opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
   },

   '.MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
   },

   '.MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.secondary.main,
      opacity: 1,
   },
}))
