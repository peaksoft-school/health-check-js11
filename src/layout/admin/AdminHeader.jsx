import { useState } from 'react'
import { Typography, styled, Box, Menu, MenuItem } from '@mui/material'
import { HEADER_ADMIN } from '../../utils/constants/index'
import { HealthCheckIcon, ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'

const AdminHeader = () => {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="logo">
               <HealthCheckIcon />
               HEALTH
               <Typography className="title" variant="span">
                  CHECK
               </Typography>
            </Box>

            <Box className="navigation">
               {HEADER_ADMIN.map(({ text, id }) => (
                  <Typography key={id}>{text}</Typography>
               ))}
            </Box>

            <Box>
               <Typography className="exit" onClick={handleClick}>
                  Администратор
                  {open ? (
                     <ArrowUpIcon />
                  ) : (
                     <ArrowDownIcon
                        aria-controls={open ? 'basic-menu' : null}
                        onClick={handleClick}
                     />
                  )}
               </Typography>

               <StyledMenu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  <StyledMenuItem>Выйти</StyledMenuItem>
               </StyledMenu>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default AdminHeader

const StyledContainer = styled('header')(({ theme }) => ({
   padding: '0 70px',

   '& > .box': {
      margin: '0 auto',
      maxWidth: '1600px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: '0px',
      zIndex: '1000',
      backgroundColor: theme.palette.primary.main,
      padding: '10px 0',
      color: '#048741',

      '& > .logo': {
         display: 'flex',
         alignItems: 'center',
         gap: '0.5rem',
         fontSize: '1.375rem',
         fontWeight: '600',
         lineHeight: 'normal',

         '& > .title': {
            color: theme.palette.primary.lightBlack,
         },
      },

      '& > .navigation': {
         display: 'flex',
         gap: '2.88rem',
         color: '#707070',
      },

      '& .exit': {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         color: '#222',
         gap: '0.625rem',
         fontSize: '1.10rem',
      },
   },
}))

const StyledMenu = styled(Menu)(() => ({
   position: 'absolute',
   zIndex: 1000,
   marginLeft: '20px',
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
   '&.MuiMenuItem-root': {
      backgroundColor: 'white',
      color: 'black',
      height: '40px',
      width: '135px',
      boxShadow: ' 0px 1px 12px -70px rgba(241, 241, 241, 0.71)',
   },

   '&.MuiMenuItem-root:hover': {
      color: theme.palette.primary.darkGreen,
   },
}))
