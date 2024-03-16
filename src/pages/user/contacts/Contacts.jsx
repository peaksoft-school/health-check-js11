import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { MAP } from '../../../utils/constants'

const Contacts = () => (
   <>
      <StyledLine> </StyledLine>

      <StyledContainer>
         <StyledSpecialistRow>
            <Typography variant="span">
               <NavLinkStyle to="/">Главная {' > '}</NavLinkStyle>

               <span>О клинике</span>
            </Typography>
         </StyledSpecialistRow>

         <Typography className="title" variant="h3">
            Наши <span> </span>
            <Typography className="mark-title" variant="span">
               контакты
            </Typography>
         </Typography>

         <Typography className="text">
            Комфорт и спокойствие пациента-это часть качественного лечения!
            <br />
            Предупредите администратора, что вы едете к нам на машине и мы
            предложим <br />
            бесплатную подземную парковку при нашей клинике.
         </Typography>

         <Box className="text-container">
            <Typography className="label">Контактные номера:</Typography>

            <Typography className="contact-content">
               +996(223) 238 750 ; +996(703) 333 628
            </Typography>

            <Typography className="label">Наш адрес:</Typography>

            <Typography className="contact-content">
               Кыргызстан, г.Бишкек, Медерова
            </Typography>

            <Typography className="label">Режим работы клиники:</Typography>

            <Typography className="contact-content">
               Понедельник - суббота с 08:00 до 18:00.
            </Typography>

            <Typography className="label">Электронная почта :</Typography>

            <Typography className="contact-content">healthcheck.kg</Typography>
         </Box>

         <iframe
            src={MAP}
            width="100%"
            height="450"
            className="map"
            title="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         />
      </StyledContainer>
   </>
)

export default Contacts

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .title': {
      marginLeft: '6.25rem',
      fontSize: '36px',
      fontWeight: '500',

      '& > .mark-title': {
         color: theme.palette.primary.darkGreen,
      },
   },

   '& .image-box': {
      padding: '3.125rem 0 0 11.25rem',
      display: 'flex',
      justifyContent: 'center',
   },

   '& .text': {
      fontSize: '18px',
      padding: '3.125rem 0 2rem 6.5rem',
      color: '#4D4E51',
      fontFamily: 'Manrope',
   },

   '& > .text-container': {
      '& .label': {
         fontFamily: 'Manrope',

         padding: '1rem 0 0 6.5rem',
         fontSize: '18px',
      },

      '& .contact-content': {
         padding: '0.2rem 0 0 6.5rem',
         color: '#048741',
         fontFamily: 'Manrope',
         fontSize: '18px',
      },
   },

   '& > .map': {
      border: 'none',
      marginTop: '6rem',
   },
}))

const StyledSpecialistRow = styled(Typography)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   padding: '3.125rem 0 2rem 6.5rem',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: theme.palette.secondary.lightGrey,
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))
