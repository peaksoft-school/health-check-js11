import { useState } from 'react'
import { Typography, styled, Menu, MenuItem, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import SignUp from '../../pages/sign-up/SignUp'
import SignIn from '../../pages/sign-in/SignIn'
import Button from '../../components/UI/Button'
import SearchInput from '../../components/UI/inputs/SearchInput'
import Navigations from '../../components/UI/Navigations'
import {
   DefaultPhoneIcon,
   HeaderProfileIcon,
   HealthCheckIcon,
   HourIcon,
   LocationIcon,
} from '../../assets/icons'
import {
   HEADER_SOCIALS,
   LOCATION,
   NAVIGATIONS,
} from '../../utils/constants/index'

const Header = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const [openModal, setOpenModal] = useState(false)
   const [openSingInModal, setOpenSingInModal] = useState(false)

   const openModalHandler = () => setOpenModal((prev) => !prev)

   const openModalSingInHandler = () => setOpenSingInModal((prev) => !prev)

   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="header-top">
               <Box className="location-container">
                  <Box>
                     <a
                        aria-label="address"
                        className="address"
                        href={LOCATION}
                     >
                        <LocationIcon />

                        <Typography>
                           106452, г. Бишкек, Гражданская 119
                        </Typography>
                     </a>
                  </Box>

                  <Box className="time">
                     <HourIcon />

                     <Typography className="days">пн-сб</Typography>

                     <Typography> 08:00 до 18:00 </Typography>
                  </Box>
               </Box>

               <Box className="search-input-container">
                  <SearchInput
                     variant="secondary"
                     placeholder="Поиск по фото"
                  />
               </Box>

               <Box className="socials">
                  {HEADER_SOCIALS.map(({ id, icon, ariaLabel, href }) => (
                     <a aria-label={ariaLabel} href={href} key={id}>
                        {icon}
                     </a>
                  ))}
               </Box>

               <Box className="phone-numbers-box">
                  <DefaultPhoneIcon />

                  <Box>
                     <a aria-label="phone-number" href="tel:+996 223 238 750">
                        <Typography> +996 (223) 238 750</Typography>
                     </a>

                     <a aria-label="phone-number" href="tel:+996 551 130 187">
                        <Typography> +996 (551) 130 187</Typography>
                     </a>
                  </Box>
               </Box>

               <Box>
                  <HeaderProfileIcon
                     className="profile"
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
                     <StyledMenuItem onClick={openModalSingInHandler}>
                        Войти
                     </StyledMenuItem>

                     <StyledMenuItem onClick={openModalHandler}>
                        Регистрация
                     </StyledMenuItem>

                     {openModal && <SignUp onClose={openModalHandler} />}

                     {openSingInModal && (
                        <SignIn
                           open={openSingInModal}
                           onClose={openModalSingInHandler}
                        />
                     )}
                  </StyledMenu>
               </Box>
            </Box>

            <Box className="header-bottom">
               <Box className="logo">
                  <NavLink to="/">
                     <HealthCheckIcon />

                     <Typography variant="h1">
                        <Typography variant="p">HEALTH</Typography> CHECK
                     </Typography>
                  </NavLink>
               </Box>

               <nav>
                  <Navigations links={NAVIGATIONS} />
               </nav>

               <Box className="buttons">
                  <StyledButton className="button" variant="secondary">
                     ПОЛУЧИТЬ РЕЗУЛЬТАТЫ
                  </StyledButton>

                  <StyledButton className="button">ЗАПИСЬ ОНАЛЙН</StyledButton>
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default Header

const StyledContainer = styled('header')(({ theme }) => ({
   position: 'sticky',
   top: '0px',
   zIndex: '1000',
   backgroundColor: 'white',
   padding: '0 120px',

   '& > .box': {
      margin: '0 auto',
      maxWidth: '1600px',
      display: 'flex',
      flexDirection: 'column',

      '& > .header-top': {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         padding: '21px 0',

         '& > .location-container': {
            display: 'flex',
            flexDirection: 'column',

            '& > div > a, .time ': {
               display: 'flex',
               alignItems: 'center',
               gap: '6px',
               textDecoration: 'none',
               color: 'black',
               fontFamily: 'Manrope',
               fontSize: '1rem',
               fontWeight: '400',

               '& > .days': {
                  fontWeight: '500',
                  color: 'green',
               },
            },

            '& .search-input-container': {
               width: '22.938rem',
            },
         },

         '& > .phone-numbers-box': {
            display: 'flex',
            gap: '0.375rem',

            '& > div': {
               '& > a': {
                  textDecoration: 'none',
                  color: 'black',
               },
            },
         },

         '& > .socials': {
            display: 'flex',
            gap: '0.625rem',
         },

         '& .profile': {
            cursor: 'pointer',
         },
      },

      '& > .header-bottom': {
         display: 'flex',
         justifyContent: 'space-between',
         gap: '20x',
         alignItems: 'center',
         marginTop: '12px',

         '& > .logo': {
            '& > a': {
               display: 'flex',
               alignItems: 'center',
               gap: '0.803rem',
               textDecoration: 'none',
               color: '#34453C',
            },

            '& .MuiTypography-root': {
               fontSize: '1.375rem',
               fontWeight: 600,
               letterPacing: '0.044rem',

               '& .MuiTypography-root': {
                  color: theme.palette.primary.darkGreen,
               },
            },
         },

         '& > nav': {
            display: 'flex',
            gap: '36px',

            '& > p': {
               fontSize: '14px',
               cursor: 'pointer',
            },
         },

         '& > .buttons': {
            display: 'flex',
            gap: '1rem',
            marginLeft: '20px',
         },
      },
   },
}))

const StyledButton = styled(Button)(() => ({
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

const StyledMenu = styled(Menu)(() => ({
   position: 'absolute',
   zIndex: 1000,
   marginLeft: '10px',
   marginTop: '10px',
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
   '&.MuiMenuItem-root': {
      backgroundColor: 'white',
      color: 'black',
   },

   '&.MuiMenuItem-root:hover': {
      color: theme.palette.primary.darkGreen,
   },
}))
