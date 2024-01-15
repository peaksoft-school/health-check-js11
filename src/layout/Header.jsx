import { useState } from 'react'
import {
   Typography,
   styled,
   Paper,
   InputBase,
   Menu,
   MenuItem,
} from '@mui/material'
import Button from '../components/UI/Button'
import {
   DefaultPhoneIcon,
   HeaderProfile,
   HealthCheckIcon,
   HourIcon,
   LocationIcon,
   SearchIcon,
} from '../assets/icons'
import { HEADER_NAV, HEADER_SOCIALS, LOCATION } from '../utils/constants/index'

const Header = () => {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (event) => setAnchorEl(event.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <StyledHeaderMainContaier>
         <div className="secons-main-container">
            <div className="main-container">
               <div className="first-container">
                  <div>
                     <a aria-label="location" href={LOCATION}>
                        <LocationIcon />
                     </a>

                     <Typography variant="p">
                        106452, г. Бишкек, Гражданская 119
                     </Typography>
                  </div>

                  <div>
                     <HourIcon />

                     <Typography variant="p">
                        <Typography variant="p" sx={{ color: 'green' }}>
                           пн-сб
                        </Typography>

                        <Typography variant="p"> 08:00 до 18:00 </Typography>
                     </Typography>
                  </div>
               </div>

               <StyledInputContainer>
                  <InputBase className="input" placeholder="Поиск по фото" />

                  <SearchIcon className="search-icon" />
               </StyledInputContainer>

               <StyledIconsContainer>
                  {HEADER_SOCIALS.map(({ id, icon, ariaLabel, href }) => (
                     <div key={id}>
                        <a aria-label={ariaLabel} href={href}>
                           {icon}
                        </a>
                     </div>
                  ))}
               </StyledIconsContainer>

               <StyledNumBlock>
                  <a aria-label="phone number" href="tel:+996 800 000">
                     <DefaultPhoneIcon />
                  </a>

                  <div>
                     <Typography variant="p">+996(800) 000 000</Typography>
                     <Typography variant="p">+996(505) 000 000</Typography>
                  </div>
               </StyledNumBlock>

               <div>
                  <StyledHeaderProfile
                     aria-controls={open ? 'basic-menu' : null}
                     onClick={handleClick}
                  />

                  <StyledMenu
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     MenuListProps={{
                        'aria-labelledby': 'basic-button',
                     }}
                  >
                     <MenuItem className="menu-item">Войти</MenuItem>

                     <MenuItem>Регистрация</MenuItem>
                  </StyledMenu>
               </div>
            </div>

            <hr />

            <StyledSecondMainContainer>
               <StyledIconContainer>
                  <HealthCheckIcon />

                  <Typography variant="h1">
                     <Typography variant="p">HEALTH</Typography> CHECK
                  </Typography>
               </StyledIconContainer>

               <StyledNaviList>
                  {HEADER_NAV.map(({ text, id }) => (
                     <div key={id}>
                        <p>{text}</p>
                     </div>
                  ))}
               </StyledNaviList>
               <StyledButtonContainer>
                  <StyledBtn className="button" variant="shortBtn">
                     получить результаты
                  </StyledBtn>

                  <StyledBtn className="button">запись онлайн </StyledBtn>
               </StyledButtonContainer>
            </StyledSecondMainContainer>
         </div>
      </StyledHeaderMainContaier>
   )
}

export default Header

const StyledHeaderMainContaier = styled('header')(() => ({
   width: '100%',
   position: 'sticky',
   top: '0px',
   backgroundColor: 'white',
   '& .secons-main-container': {
      maxWidth: '1440px',
      width: '96%',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '0 2%',
   },
   '& .main-container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '21px 0',

      '& .first-container': {
         display: 'flex',
         flexDirection: 'column',

         '& > div': {
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
         },
      },
   },
}))

const StyledSecondMainContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '12px',
}))

const StyledNumBlock = styled('div')(() => ({
   display: 'flex',
   '& > div': {
      display: 'flex',
      flexDirection: 'column',
   },
}))

const StyledInputContainer = styled(Paper)(() => ({
   display: 'flex',
   alignItems: 'center',
   padding: '0.125rem 0.9rem',
   width: '22.938rem',
   borderRadius: '25px',
   backgroundColor: '#F3F1F1',
   boxShadow: 'none',

   '& .input': {
      flex: 1,
      fontSize: '14px',
   },
   '& .search-icon': {
      cursor: 'pointer',
   },
}))

const StyledHeaderProfile = styled(HeaderProfile)(() => ({
   cursor: 'pointer',
}))

const StyledIconsContainer = styled('div')(() => ({
   display: 'flex',
   gap: '0.625rem',
}))

const StyledIconContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '0.803rem',
   '& .MuiTypography-root': {
      fontSize: '1.375rem',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterPacing: '0.044rem',
      '& .MuiTypography-root': {
         color: theme.palette.primary.darkGreen,
      },
   },
}))
const StyledNaviList = styled('nav')(() => ({
   display: 'flex',
   gap: '36px',
   '& > div': {
      fontSize: '14px',
      cursor: 'pointer',
   },
}))

const StyledButtonContainer = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
}))

const StyledBtn = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      padding: '5px 0',
      width: '191px',
      borderRadius: '1.5rem',
      height: '33px',
      fontSize: '10px',
   },
   '&:active': {
      borderRadius: '1.5rem',
   },
   '&:hover': {
      borderRadius: '1.5rem',
   },
}))

const StyledMenu = styled(Menu)(({ theme }) => ({
   position: 'absolute',
   zIndex: 1000,
   marginLeft: '10px',
   marginTop: '10px',
   '& .menu-item': {
      '&:hover': { color: theme.palette.primary.darkGreen },
   },
}))
