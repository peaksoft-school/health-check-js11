import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, styled, Menu, MenuItem, Box } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
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
import { logOut } from '../../store/slices/auth/authSlice'
import Modal from '../../components/UI/Modal'

const Header = () => {
   const { role } = useSelector((state) => state.auth)

   const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null)
   const [openSignUpModal, setOpenSignUpModal] = useState(false)
   const [openSignInModal, setOpenSignInModal] = useState(false)
   const [toggleLogOutModal, setToggleLogOutModal] = useState(false)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const handleProfileMenuClose = () => setProfileMenuAnchorEl(null)

   const toggleSignUpModal = () => setOpenSignUpModal((prev) => !prev)

   const toggleSignInModal = () => setOpenSignInModal((prev) => !prev)

   const toggleLogOutHandler = () => setToggleLogOutModal((prev) => !prev)

   const isProfileMenuOpen = !!profileMenuAnchorEl

   const handleProfileMenuOpen = (event) =>
      setProfileMenuAnchorEl(event.currentTarget)

   const handlelogOut = () => {
      handleProfileMenuClose()
      dispatch(logOut({ navigate }))
   }

   const navigateToPprofile = () => {
      navigate('profile')
      handleProfileMenuClose()
   }

   const navigateToMyRecords = () => {
      navigate('records')
      handleProfileMenuClose()
   }

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
                     aria-controls={isProfileMenuOpen ? 'basic-menu' : null}
                     onClick={handleProfileMenuOpen}
                  />

                  <StyledMenu
                     anchorEl={profileMenuAnchorEl}
                     open={isProfileMenuOpen}
                     onClose={handleProfileMenuClose}
                     MenuListProps={{
                        'aria-labelledby': 'basic-button',
                     }}
                  >
                     {role === 'GUEST' ? (
                        <StyledMenu
                           anchorEl={profileMenuAnchorEl}
                           open={isProfileMenuOpen}
                           onClose={handleProfileMenuClose}
                           MenuListProps={{
                              'aria-labelledby': 'basic-button',
                           }}
                        >
                           <StyledMenuItem onClick={toggleSignInModal}>
                              Войти
                           </StyledMenuItem>
                           <StyledMenuItem onClick={toggleSignUpModal}>
                              Регистрация
                           </StyledMenuItem>
                        </StyledMenu>
                     ) : (
                        <StyledMenu
                           anchorEl={profileMenuAnchorEl}
                           open={isProfileMenuOpen}
                           onClose={handleProfileMenuClose}
                           MenuListProps={{
                              'aria-labelledby': 'basic-button',
                           }}
                        >
                           <StyledMenuItem onClick={navigateToMyRecords}>
                              Мои записи
                           </StyledMenuItem>
                           <StyledMenuItem onClick={navigateToPprofile}>
                              Профиль
                           </StyledMenuItem>
                           <StyledMenuItem onClick={toggleLogOutHandler}>
                              Выйти
                           </StyledMenuItem>
                           <Modal
                              open={toggleLogOutModal}
                              onClose={toggleLogOutHandler}
                              isCloseIcon={false}
                           >
                              <StyledModal>
                                 Вы уврены, что хотите выйти?
                                 <br />
                                 <br />
                                 <Box className="buttons-box">
                                    <Button
                                       className="closeButton"
                                       onClick={toggleLogOutHandler}
                                       variant="grey"
                                    >
                                       Отменить
                                    </Button>
                                    <Button onClick={handlelogOut}>
                                       Выйти
                                    </Button>
                                 </Box>
                              </StyledModal>
                           </Modal>
                        </StyledMenu>
                     )}

                     <SignUp
                        open={openSignUpModal}
                        closeSignUp={toggleSignUpModal}
                        onClose={toggleSignUpModal}
                     />

                     <SignIn
                        open={openSignInModal}
                        onClose={toggleSignInModal}
                        closeSignUp={toggleSignUpModal}
                     />
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

                  <StyledButton className="button" onClick={toggleSignUpModal}>
                     ЗАПИСЬ ОНАЛЙН
                  </StyledButton>
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
         borderBottom: `1px solid ${theme.palette.secondary.lightGrey}`,

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
                  color: '#048741',
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
   '& .modal': {
      display: 'flex',
      flexDirection: 'column',
      width: '7000px',
   },
}))

const StyledModal = styled(Box)(() => ({
   boxSizing: 'content-box',
   padding: '10px  45px 10px 45px',
   textAlign: 'center',

   '& >.buttons-box': {
      display: 'flex',
      gap: '30px',

      '& > .MuiButtonBase-root': {
         padding: '5px 0',
         width: '120px',
         height: '40px',
         fontSize: '12px',
      },
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
