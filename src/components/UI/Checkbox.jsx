import { forwardRef } from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material'

const Checkbox = forwardRef(
   ({ color = 'success', checked, onChange, ...rest }, ref) => (
      <MuiCheckbox
         color={color}
         checked={checked}
         onChange={onChange}
         ref={ref}
         {...rest}
      />
   )
)

export default Checkbox
