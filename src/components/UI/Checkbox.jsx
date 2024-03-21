import { forwardRef } from 'react'
import { styled, Checkbox as MuiCheckbox } from '@mui/material'
import { CHECKED } from '../../utils/constants'

const Checkbox = forwardRef(({ checked, onChange, ...rest }, ref) => (
   <StyledCheckbox
      checked={checked}
      onChange={onChange}
      checkedIcon={<StyledBpCheckedIcon />}
      icon={<StyledIcon />}
      ref={ref}
      {...rest}
   />
))

export default Checkbox

const StyledCheckbox = styled(MuiCheckbox)(() => ({
   padding: 0,

   '&:hover': {
      backgroundColor: 'inherit',
   },
}))

const StyledIcon = styled('span')({
   border: '2px solid',
   width: '18.182px',
   height: '18.182px',
   color: '#9A9A9A',
})

const StyledBpCheckedIcon = styled(StyledIcon)({
   backgroundColor: '#0eb25a',
   border: 'none',

   '&::before': {
      display: 'block',
      padding: 1,
      width: 16,
      height: 16,
      backgroundImage: `url(${CHECKED})`,
      content: '""',
   },
})
