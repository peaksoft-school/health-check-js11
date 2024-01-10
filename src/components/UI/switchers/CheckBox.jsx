import React, { forwardRef } from 'react'
import Checkbox from '@mui/material/Checkbox'

const CheckBox = forwardRef(
   (
      { label, color = 'success', checked, onChange, disabled, ...rest },
      ref
   ) => (
      <Checkbox
         defaultChecked
         color={color}
         checked={checked}
         onChange={onChange}
         disabled={disabled}
         ref={ref}
         {...rest}
      />
   )
)

export default CheckBox
