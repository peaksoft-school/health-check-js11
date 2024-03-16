import { Box, Drawer as MuiDrawer, styled } from '@mui/material'

const Drawer = ({ open, onClose, anchor = 'right', children }) => {
   return (
      <StyledDrawer anchor={anchor} open={open} onClose={onClose}>
         <Box minWidth="380px">{children}</Box>
      </StyledDrawer>
   )
}
export default Drawer

const StyledDrawer = styled(MuiDrawer)(() => ({
   '.MuiDrawer-paper': {
      maxWidth: '400px',
      background: ' #F3F1F1',
      overflowX: 'clip !important',
   },
}))
