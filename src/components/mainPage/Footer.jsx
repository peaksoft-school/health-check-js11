import { styled, Box, Typography } from '@mui/material'
import {
   DefaultPhoneIcon,
   FooterInstagramIcon,
   FooterTelegramIcon,
   FooterWhatsAppIcon,
   HealthCheckIcon,
   HourIcon,
   LocationIcon,
   SmsIcon,
} from '../../assets/icons'
import { HEADER_NAV } from '../../utils/constants'

const Footer = () => {
   return (
      <StyledFooterContainer className="footer-container">
         <StyledContainer className="footer-columns-container">
            <div className="health-check">
               <div className="clinic-info">
                  <HealthCheckIcon />

                  <Typography variant="h1">
                     <Typography variant="span">HEALTH</Typography> CHECK
                  </Typography>
               </div>

               <div className="clinic-details">
                  <Typography className="highlight-text">
                     Медицинская клиника «HealthCheck»
                  </Typography>

                  <Typography>
                     Международная Медицинская клиника «HealthCheck» — это
                     клиника, в которой применяются новейшие диагностические и
                     лечебные технологии и ведут прием лучшие специалисты.
                  </Typography>
               </div>
            </div>

            <div className="contact-info">
               <Typography className="highlight-text">
                  Контактная информация
               </Typography>

               <div className="contact-details">
                  <div className="location-hours">
                     <div>
                        <LocationIcon />

                        <Typography>
                           106452, г. Бишкек, Гражданская 119
                        </Typography>
                     </div>
                     <div>
                        <HourIcon />

                        <Typography>пн-сб 08:00 до 18:00</Typography>
                     </div>
                  </div>

                  <div className="phone-numbers-box">
                     <DefaultPhoneIcon />

                     <div>
                        <Typography>+996(800) 000 000</Typography>
                        <Typography> +996(800) 000 000</Typography>
                     </div>
                  </div>

                  <Typography>
                     <SmsIcon /> healthchek.kg
                  </Typography>
               </div>
            </div>

            <div className="social-media-box">
               <Typography className="highlight-text">
                  Мы в социальных сетях:
               </Typography>

               <div className="social-icons-box">
                  <FooterInstagramIcon />
                  <FooterTelegramIcon />
                  <FooterWhatsAppIcon />
               </div>
            </div>
         </StyledContainer>

         <StyledSecondContainer className="footer-second-container">
            <div className="navigation-section">
               {HEADER_NAV.map(({ text, id }) => (
                  <Box key={id}>
                     <p>{text}</p>
                  </Box>
               ))}
            </div>
         </StyledSecondContainer>

         <hr />

         <StyledSecondContainer className="footer-second-container">
            <Typography className="copyright-notice">
               © Peaksoft House 2023 | MedCheck | Все права защищены
            </Typography>
         </StyledSecondContainer>
      </StyledFooterContainer>
   )
}

export default Footer

// LateX

const StyledFooterContainer = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.primary.darkGrey,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   color: '#CCC',
   fontFamily: 'Manrope',
   paddingTop: '4.25rem',

   '& hr': {
      width: '90%',
      height: '0.5px',
      backgroundColor: '#ccc',
   },

   '& .footer-second-container': {
      display: 'flex',
      alignItems: 'center',
   },

   '& .health-check': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '28.813rem',
      padding: '0 40px 0 0',
      gap: '1.75rem',

      '& .clinic-info': {
         display: 'flex',
         alignItems: 'center',
         gap: '0.803rem',
         maxHeight: '5.5rem',

         '& .MuiTypography-root': {
            fontSize: '1.375rem',
            fontWeight: 600,
            color: theme.palette.primary.main,

            '& .MuiTypography-root': {
               color: theme.palette.primary.darkGreen,
            },
         },
      },

      '& .clinic-details': {
         display: 'flex',
         flexDirection: 'column',
         gap: '16px',
         marginBottom: '48px',
      },
   },

   '& .highlight-text': {
      color: theme.palette.primary.main,
      fontFamily: 'Manrope',
   },

   '& .contact-info': {
      display: 'flex',
      gap: '22px',
      flexDirection: 'column',
   },

   '& .social-media-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
   },

   '& .navigation-section': {
      display: 'flex',
      gap: '24px',
      marginBottom: '48px',
   },

   '& .contact-details': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
   },

   '& .social-icons-box': {
      display: 'flex',
      gap: '0.75rem',
   },

   '& .phone-numbers-box': {
      display: 'flex',
      gap: '0.375rem',
   },

   '& .location-hours': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.688rem',
      marginBotton: '10.625rem',

      '& > div': {
         display: 'flex',
         alignItems: 'center',
         gap: '0.5rem',
      },
   },

   ' & .copyright-notice': {
      margin: '1.75rem 0 1.75rem 0',
   },
}))

const StyledContainer = styled('div')(() => ({
   display: 'flex',
   gap: '130px',
}))

const StyledSecondContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))
