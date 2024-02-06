import { forwardRef } from 'react'
import { Checkbox as MuiCheckbox, styled } from '@mui/material'

const Checkbox = forwardRef(
   ({ color = 'success', checked, onChange, ...rest }, ref) => (
      <StyledCheckbox
         color={color}
         checked={checked}
         onChange={onChange}
         ref={ref}
         {...rest}
      />
   )
)

export default Checkbox

const StyledCheckbox = styled(MuiCheckbox)(() => ({
   padding: '0',
}))
