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
   HeaderInstagramIcon,
   HeaderProfile,
   HeaderTelegramIcon,
   HeaderWhatsAppIcon,
   HealthCheckIcon,
   HourIcon,
   LocationIcon,
} from '../../assets/icons'

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
      <StyledHeaderContainer>
         <StyledMainContainer>
            <StyledFirstBlock>
               <div>
                  <LocationIcon />
                  <Typography variant="p">
                     106452, г. Бишкек, Гражданская 119
                  </Typography>
               </div>
               <div>
                  <HourIcon />
                  <Typography variant="p">
                     <Typography variant="p"> пн-сб</Typography>
                     <Typography variant="p"> 08:00 до 18:00 </Typography>
                  </Typography>
               </div>
            </StyledFirstBlock>
            <StyledInputContainer>
               <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Поиск по фото" />
               <SearchIcon />
            </StyledInputContainer>
            <StyledIconsContainer>
               <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/peaksoft.house/"
               >
                  <HeaderInstagramIcon />
               </a>
               <a
                  aria-label="Telegram"
                  href="https://web.telegram.org/k/#-4032240673"
               >
                  <HeaderTelegramIcon />
               </a>
               <a aria-label="whatsApp" href="https://www.whatsapp.com">
                  <HeaderWhatsAppIcon />
               </a>
            </StyledIconsContainer>
            <StyledNumbersContainer>
               <a aria-label="phone number" href="tel:+22338750">
                  <DefaultPhoneIcon />
               </a>
               <Typography variant="p">+996(800) 000 000</Typography>
               <Typography variant="p">+996(505) 000 000</Typography>
            </StyledNumbersContainer>
            <div>
               <HeaderProfile
                  aria-controls={open ? 'basic-menu' : undefined}
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
                  <MenuItem>Войти</MenuItem>
                  <MenuItem>Регистрация</MenuItem>
               </StyledMenu>
            </div>
         </StyledMainContainer>
         <hr />
         <StyledMainContainer>
            <StyledIconContainer>
               <HealthCheckIcon />
               <Typography variant="h1">
                  <Typography variant="p">HEALTH</Typography> CHECK
               </Typography>
            </StyledIconContainer>
            <StyledNaviList>
               <p>О клинике</p>
               <p>Услуги</p>
               <p>Врачи</p>
               <p>Прайс</p>
               <p>Контакты</p>
            </StyledNaviList>
            <StyledButtonContainer>
               <StyledBtn variant="shortBtn">получить результаты</StyledBtn>
               <StyledBtn>запись онлайн </StyledBtn>
            </StyledButtonContainer>
         </StyledMainContainer>
      </StyledHeaderContainer>
   )
}

export default Header

const StyledHeaderContainer = styled('div')(() => ({
   marginLeft: '9vw',
   marginRight: '9vw',
   display: 'flex',
   flexDirection: 'column',
}))

const StyledFirstBlock = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))
const StyledMainContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const StyledNumbersContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const StyledInputContainer = styled(Paper)(() => ({
   display: 'flex',
   alignItems: 'center',
   padding: '0.125rem 0.125rem',
   width: '22.938rem',
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
   gap: '2.25rem',
}))

const StyledButtonContainer = styled('div')(() => ({
   display: 'flex',
   gap: '1rem',
}))

const StyledBtn = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '205px',
      borderRadius: '1.5rem',
      height: '43px',
      fontSize: '14px',
   },
   '&:active': {
      borderRadius: '1.5rem',
   },
}))

const StyledMenu = styled(Menu)(() => ({
   position: 'absolute',
   zIndex: 1000,
   marginLeft: '10px',
   marginTop: '10px',
}))
