import { Typography, styled, Box } from '@mui/material'
import { MAP } from '../../../utils/constants'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const Contacts = () => (
   <>
      <StyledLine> </StyledLine>

      <StyledContainer>
         <Box className="box">
            <NavigatePathTitle>
               <BreadCrumbs to="/" before="Главная" text="Врачи" />
            </NavigatePathTitle>

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

               <Typography className="contact-content">
                  healthcheck.kg
               </Typography>
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
         </Box>
      </StyledContainer>
   </>
)

export default Contacts

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .box': {
      margin: '0 auto',
      marginTop: '10px',

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

      '& > .text': {
         fontSize: '18px',
         padding: '3.125rem 0 2rem 6.5rem',
         color: '#4D4E51',
         fontFamily: 'Manrope',
      },

      '& > .text-container': {
         // marginTop: '6rem',
         marginBottom: '7rem',

         '& > .label': {
            fontFamily: 'Manrope',
            padding: '1rem 0 0 6.5rem',
            fontSize: '18px',
         },

         '& > .contact-content': {
            padding: '0.2rem 0 0 6.5rem',
            color: '#048741',
            fontFamily: 'Manrope',
            fontSize: '18px',
         },
      },
   },

   '& > .map': {
      border: 'none',
   },
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))

const NavigatePathTitle = styled(Box)(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   padding: '3.125rem 0 2rem 6.5rem',
}))
