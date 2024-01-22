import { styled, Box, Typography } from '@mui/material'
import {
   DefaultPhoneIcon,
   HealthCheckIcon,
   HourIcon,
   LocationIcon,
   SmsIcon,
} from '../assets/icons/index'
import { FOOTER_SOCIALS, HEADER_NAV, LOCATION } from '../utils/constants/index'

const Footer = () => (
   <StyledFooterContainer>
      <Box className="first-container">
         <Box className="health-check">
            <Box className="clinic-info">
               <HealthCheckIcon />

               <Typography variant="h1">
                  <Typography variant="span">HEALTH</Typography> CHECK
               </Typography>
            </Box>

            <Box className="clinic-details">
               <Typography className="highlight-text">
                  Медицинская клиника «HealthCheck»
               </Typography>

               <Typography>
                  Международная Медицинская клиника «HealthCheck» — это клиника,
                  в которой применяются новейшие диагностические и лечебные
                  технологии и ведут прием лучшие специалисты.
               </Typography>
            </Box>
         </Box>

         <Box className="contact-info">
            <Typography className="title">Контактная информация</Typography>

            <Box className="contact-details">
               <Box className="location-hours">
                  <a aria-label="address" className="address" href={LOCATION}>
                     <LocationIcon />
                     <Typography>106452, г. Бишкек, Гражданская 119</Typography>
                  </a>

                  <Box>
                     <HourIcon />

                     <Typography>пн-сб 08:00 до 18:00</Typography>
                  </Box>
               </Box>

               <Box className="phone-numbers-box">
                  <DefaultPhoneIcon />

                  <Box>
                     <a aria-label="phone number" href="tel:+996 223 238 750">
                        <Typography> +996(800) 000 000</Typography>
                     </a>

                     <a aria-label="phone-number" href="tel:+996 551 130 187">
                        <Typography> +996(800) 000 000</Typography>
                     </a>
                  </Box>
               </Box>

               <a
                  aria-label="gmail"
                  className="gmail"
                  href="mailto:school@peaksoft.us"
               >
                  <SmsIcon /> healthchek.kg
               </a>
            </Box>
         </Box>

         <Box className="social-media-box">
            <Typography className="title">Мы в социальных сетях:</Typography>

            <Box className="social-icons-box">
               {FOOTER_SOCIALS.map(({ id, icon, ariaLabel, href }) => (
                  <Box key={id}>
                     <a aria-label={ariaLabel} href={href}>
                        {icon}
                     </a>
                  </Box>
               ))}
            </Box>
         </Box>
      </Box>

      <Box className="second-container">
         <Box className="navigation-section">
            {HEADER_NAV.map(({ text, id }) => (
               <Box key={id}>
                  <p>{text}</p>
               </Box>
            ))}
         </Box>
      </Box>

      <hr />

      <Box className="second-container">
         <Typography className="copyright-notice">
            © Peaksoft House 2023 | MedCheck | Все права защищены
         </Typography>
      </Box>
   </StyledFooterContainer>
)

export default Footer

const StyledFooterContainer = styled('div')(({ theme }) => ({
   backgroundColor: theme.palette.primary.darkGrey,
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   color: '#CCC',
   fontFamily: 'Manrope',
   paddingTop: '4.25rem',

   [theme.breakpoints.down('lg')]: {
      padding: '2.5rem  3.75rem 0 3.75rem',
   },

   '& .address': {
      color: '#CCC',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',

      '& > p': {
         [theme.breakpoints.down('lg')]: {
            fontSize: '0.813rem',
         },
      },
   },

   '& .gmail': {
      color: '#CCC',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
   },

   '& hr': {
      width: '90%',
      backgroundColor: '#ccc',

      [theme.breakpoints.down('lg')]: {
         width: '100%',
      },
   },

   '& .second-container': {
      display: 'flex',
      alignItems: 'center',
   },

   '& .health-check': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '28.813rem',
      padding: '0 2.5rem 0 0',
      gap: '1.75rem',

      '& .clinic-info': {
         display: 'flex',
         alignItems: 'center',
         gap: '0.803rem',
         maxHeight: '5.5rem',

         '& .MuiTypography-root': {
            fontSize: '1.375rem',
            fontWeight: '600',
            color: theme.palette.primary.main,

            '& .MuiTypography-root': {
               color: theme.palette.primary.darkGreen,
            },
         },
      },

      '& .clinic-details': {
         display: 'flex',
         flexDirection: 'column',
         gap: '1rem',
         marginBottom: '3rem',

         '& > p': {
            [theme.breakpoints.down('lg')]: {
               fontSize: '0.813rem',
               maxWidth: '23rem',
            },
         },
      },
   },

   '& .title': {
      color: theme.palette.primary.main,
      fontFamily: 'Manrope',

      [theme.breakpoints.down('lg')]: {
         fontSize: '0.875rem',
      },
   },

   '& .contact-info': {
      display: 'flex',
      gap: '1.357rem',
      flexDirection: 'column',
   },

   '& .social-media-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
   },

   '& .navigation-section': {
      display: 'flex',
      gap: '2.5rem',
      marginBottom: '3rem',

      [theme.breakpoints.down('lg')]: {
         fontSize: '0.780rem',
      },
   },

   '& .contact-details': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',

      '& > p': {
         [theme.breakpoints.down('lg')]: {
            fontSize: '0.813rem',
         },
      },
   },

   '& .social-icons-box': {
      display: 'flex',
      gap: '0.75rem',
   },

   '& .phone-numbers-box': {
      display: 'flex',
      gap: '0.375rem',

      '& > div': {
         '& > a': {
            textDecoration: 'none',

            '& > p': {
               color: '#CCC',

               [theme.breakpoints.down('lg')]: {
                  fontSize: '0.813rem',
               },
            },
         },
      },
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

         '& > p': {
            [theme.breakpoints.down('lg')]: {
               fontSize: '0.813rem',
            },
         },
      },
   },

   '& .copyright-notice': {
      margin: '1.75rem 0 1.75rem 0',
      fontSize: '0.875rem',
      fontFamily: 'Manrope',

      [theme.breakpoints.down('lg')]: {
         fontSize: '0.720rem',
      },
   },

   '& .first-container': {
      display: 'flex',
      gap: '8.125rem',

      [theme.breakpoints.down('lg')]: {
         gap: '4.6rem',
      },
   },
}))
