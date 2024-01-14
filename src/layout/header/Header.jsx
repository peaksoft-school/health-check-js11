import { useState } from 'react'
import {
   Typography,
   styled,
   Paper,
   InputBase,
   Menu,
   MenuItem,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Button from '../../components/UI/Button'
import {
   DefaultPhoneIcon,
   HeaderProfile,
   HealthCheckIcon,
   HourIcon,
   LocationIcon,
} from '../../assets/icons'
import { nav, socials } from '../../utils/constants/index'

const Header = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <div
         style={{
            width: '100%',
            position: 'fixed',
            top: '0px',
            height: '1000vh',
         }}
      >
         <StyledHeaderContainer>
            <StyledMainContainer>
               <StyledFirstBlock>
                  <div>
                     <a
                        aria-label="location"
                        href="https://2gis.kg/bishkek/search/%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20119/firm/70000001038316599?m=74.628453%2C42.875862%2F17.42"
                     >
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
               </StyledFirstBlock>
               <StyledInputContainer>
                  <StyledInputBase placeholder="Поиск по фото" />
                  <SearchIcon />
               </StyledInputContainer>
               <StyledIconsContainer>
                  {socials.map(({ id, icon, ariaLabel, href }) => (
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
                  <StyledNumbersContainer>
                     <Typography variant="p">+996(800) 000 000</Typography>
                     <Typography variant="p">+996(505) 000 000</Typography>
                  </StyledNumbersContainer>
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
                     <StyedMenuItem>Войти</StyedMenuItem>
                     <StyedMenuItem>Регистрация</StyedMenuItem>
                  </StyledMenu>
               </div>
            </StyledMainContainer>

            <hr />

            <StyledSecondMainContainer>
               <StyledIconContainer>
                  <HealthCheckIcon />
                  <Typography variant="h1">
                     <Typography variant="p">HEALTH</Typography> CHECK
                  </Typography>
               </StyledIconContainer>
               <StyledNaviList>
                  {nav.map(({ text, id }) => (
                     <div key={id}>
                        <p>{text}</p>
                     </div>
                  ))}
               </StyledNaviList>
               <StyledButtonContainer>
                  <StyledBtn variant="shortBtn">получить результаты</StyledBtn>
                  <StyledBtn>запись онлайн </StyledBtn>
               </StyledButtonContainer>
            </StyledSecondMainContainer>
         </StyledHeaderContainer>
      </div>
   )
}

export default Header

const StyledHeaderContainer = styled('header')(() => ({
   maxWidth: '1440px',
   width: '96%',
   margin: 'auto',
   display: 'flex',
   flexDirection: 'column',
   padding: '0 2%',
}))

const StyledFirstBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',

   '& > div': {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
   },
}))
const StyledMainContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '21px 0',
}))
const StyledSecondMainContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginTop: '12px',
}))

const StyledNumbersContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const StyledNumBlock = styled('div')(() => ({
   display: 'flex',
}))

const StyledInputContainer = styled(Paper)(() => ({
   display: 'flex',
   alignItems: 'center',
   padding: '0.125rem 0.125rem',
   width: '22.938rem',
   borderRadius: '25px',
   backgroundColor: '#F3F1F1',
   boxShadow: 'none',
}))

const StyledInputBase = styled(InputBase)(() => ({
   marginLeft: '11px',
   flex: 1,
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
      padding: '5px',
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

const StyedMenuItem = styled(MenuItem)(({ theme }) => ({
   '&:hover': { color: theme.palette.primary.darkGreen },
}))
