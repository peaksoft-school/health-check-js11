import React, { forwardRef } from 'react'
import Checkbox from '@mui/material/Checkbox'

const CheckBox = forwardRef(
   ({ color = 'success', checked, onChange, ...rest }, ref) => (
      <Checkbox
         color={color}
         checked={checked}
         onChange={onChange}
         ref={ref}
         {...rest}
      />
   )
)

export default CheckBox
