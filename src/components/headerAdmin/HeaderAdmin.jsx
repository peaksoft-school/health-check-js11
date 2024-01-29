import { Typography, styled, Box, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { HEADER_ADMIN } from '../../utils/constants/index'
import { HealthCheckIcon, DownIcon } from '../../assets/icons'

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
                  CHECK{' '}
               </Typography>
            </div>
         </StyledMainText>
         <div className="navigaiton">
            {HEADER_ADMIN.map(({ text, id }) => (
               <Box key={id}>
                  <p>{text}</p>
               </Box>
            ))}
         </div>
         <Box>
            <StyledAdmin>
               Администратор
               <DownIcon
                  aria-controls={open ? 'basic-menu' : null}
                  onClick={handleClick}
                  className="icon"
               />
            </StyledAdmin>
            <Menu
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
            >
               <MenuItem>Выйти</MenuItem>
            </Menu>
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
