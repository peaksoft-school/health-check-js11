import { Typography, styled, Box, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { HEADER_ADMIN } from '../utils/constants/index'
import { HealthCheckIcon, ArrowDownIcon, ArrowUpIcon } from '../assets/icons'

const HeaderAdmin = () => {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

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
               <Typography key={id}>{text}</Typography>
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
   height: '9.900rem',
   justifyContent: 'space-around',
   color: '#048741',
   alignItems: 'center',
   position: 'sticky',
   top: '0px',
   zIndex: '1000',
   backgroundColor: 'white',
   padding: '21px 0',
   '& > .navigaiton': {
      display: 'flex',
      gap: '2.88rem',
      color: '#707070',
   },
}))

const StyledMainText = styled('h2')(({ theme }) => ({
   fontSize: '1.375rem',
   fontWeight: '600',
   lineHeight: 'normal',
   '.MuiTypography-root': {
      color: theme.palette.primary.lightBlack,
   },

   '& > .title': {
      color: '#222',
   },

   '& .block': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
   },
}))

const StyledAdmin = styled(Typography)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   color: '#222',
   gap: '0.625rem',
   fontSize: '1.10rem',
}))

const StyledMenu = styled(Menu)(() => ({
   position: 'absolute',
   zIndex: 1000,
   marginLeft: '20px',
   marginTop: '10px',
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
