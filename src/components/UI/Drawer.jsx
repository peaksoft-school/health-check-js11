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
   '.css-1160xiw-MuiPaper-root-MuiDrawer-paper': {
      // maxWidth: '26%',
   },
}))
