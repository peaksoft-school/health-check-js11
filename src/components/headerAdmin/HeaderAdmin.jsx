import { Typography, styled, Box, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { HEADER_ADMIN } from '../../utils/constants/index'
import { HealthCheckIcon, ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'

const HeaderAdmin = () => {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (event) => setAnchorEl(event.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <StyledContainer>
         <StyledMainText>
            <div className="block">
               <HealthCheckIcon />
               HEALTH
               <Typography className="title" variant="span">
                  CHECK
               </Typography>
            </div>
         </StyledMainText>

         <div className="navigaiton">
            {HEADER_ADMIN.map(({ text, id }) => (
               <p key={id}>{text}</p>
            ))}
         </div>

         <Box>
            <StyledAdmin onClick={handleClick}>
               Администратор
               {open ? (
                  <ArrowUpIcon />
               ) : (
                  <ArrowDownIcon
                     aria-controls={open ? 'basic-menu' : null}
                     className="icon"
                     onClick={handleClick}
                  />
               )}
            </StyledAdmin>

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
      </StyledContainer>
   )
}

export default HeaderAdmin

const StyledContainer = styled('header')(() => ({
   display: 'flex',
   justifyContent: 'space-around',
   color: 'green',
   fontSize: '1.375rem',
   height: '6.675rem',
   alignItems: 'center',
   maxWidth: '1600px',
   margin: '0 auto',
   padding: '0 4.37rem',

   '& .navigaiton': {
      display: 'flex',
      gap: '2.88rem',
      color: '#222',
   },
}))

const StyledMainText = styled(Typography)(({ theme }) => ({
   fontSize: '1.375rem',
   fontWeight: '600',
   lineHeight: 'normal',

   '.MuiTypography-root': {
      color: theme.palette.primary.lightBlack,
   },

   '&.title': {
      color: '#222',
   },

   '& .block': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
   },
}))

const StyledAdmin = styled(Typography)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   color: '#222',
   gap: '0.625rem',
   width: '9.1875rem',
   height: '1.375rem',

   '&. icon': {
      color: theme.palette.primary.lightBlack,
   },
}))

const StyledMenu = styled(Menu)(() => ({
   position: 'absolute',
   zIndex: 1000,
   marginLeft: '65px',
   marginTop: '10px',
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
   '&.MuiMenuItem-root': {
      backgroundColor: 'white',
      color: 'black',
      height: '30px',
   },

   '&.MuiMenuItem-root:hover': {
      color: theme.palette.primary.darkGreen,
   },
}))
