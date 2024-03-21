import { forwardRef, useEffect, useState } from 'react'
import { FormControlLabel, Switch, styled } from '@mui/material'

const Switcher = forwardRef(({ checked, onChange, disabled, ...rest }, ref) => {
   const [isChecked, setChecked] = useState(checked)

   useEffect(() => {
      setChecked(checked)
   }, [checked])

   const handleChange = (event) => {
      setChecked(event.target.checked)

      onChange(event.target.checked)
   }

   return (
      <FormControlLabel
         control={
            <StyledSwitch
               onChange={handleChange}
               disabled={disabled}
               ref={ref}
               checked={isChecked}
               {...rest}
            />
         }
      />
   )
})

export default Switcher

const StyledSwitch = styled(Switch)(({ theme }) => ({
   width: '42px',
   height: '26px',
   padding: '0',

   '.MuiSwitch-switchBase': {
      padding: '0',
      margin: '2px',
      transitionDuration: '300ms',

      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: theme.palette.primary.main,

         '+ .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.darkGreen,
            opacity: '1',
            border: '0',
         },

         '&.Mui-disabled + .MuiSwitch-track': {
            opacity: '0.5',
         },
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
         color: theme.palette.tertiary.lightBlue,
         border: `6px solid ${theme.palette.primary.main}`,
      },

      '&.Mui-disabled .MuiSwitch-thumb': {
         color: theme.palette.secondary.main,
      },

      '&.Mui-disabled + .MuiSwitch-track': {
         opacity: theme.palette.mode === 'light' ? '0.7' : '0.3',
      },
   },

   '.MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: '22px',
      height: '22px',
   },

   '.MuiSwitch-track': {
      borderRadius: `${26 / 2}px`,
      backgroundColor: theme.palette.secondary.main,
      opacity: '1',
   },
}))
