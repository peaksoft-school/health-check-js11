import { Box, Drawer as MuiDrawer, styled } from '@mui/material'

const Drawer = ({ open, onClose, anchor = 'right', children }) => (
   <StyledDrawer anchor={anchor} open={open} onClose={onClose}>
      <Box className="box">{children}</Box>
   </StyledDrawer>
)

export default Drawer

const StyledDrawer = styled(MuiDrawer)(() => ({
   '& > .MuiDrawer-paper': {
      maxWidth: '500px',
      background: ' #F3F1F1',

      '& > .box': {
         minWidth: '380px',
      },
   },
}))
