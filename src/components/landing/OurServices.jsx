import { styled, Box, Typography } from '@mui/material'
import Button from '../UI/Button'
import { SERVICES } from '../../utils/constants/index'

const OurServices = () => (
   <StyledContainer>
      <Box className="box">
         <Typography className="title" variant="h2">
            Наши &nbsp;
            <Typography variant="span" className="services">
               услуги
            </Typography>
         </Typography>

         <Typography className="description">
            За все время работы клиника приняла более 1 млн. пациентов.
         </Typography>

         <Box className="services-box">
            {SERVICES.map(({ id, name, icon }) => (
               <Box className="service" key={id}>
                  <StyledServiceIcon>{icon}</StyledServiceIcon>

                  <Typography className="name">{name}</Typography>
               </Box>
            ))}
         </Box>

         <Box className="button-box">
            <Button className="button" variant="secondary">
               Смотреть все
            </Button>
         </Box>
      </Box>
   </StyledContainer>
)

export default OurServices

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '0 120px',

   '& > .box': {
      margin: '0 auto',
      maxWidth: '1600px',

      '& > .title': {
         fontSize: '2.25rem',
         fontWeight: '600',
         fontFamily: 'Manrope',
         lineHeight: 'normal',
         marginBottom: '34px',

         '& > .services': {
            color: theme.palette.primary.darkGreen,
         },
      },

      '& > .description': {
         fontSize: '1rem',
         fontWeight: 400,
         lineHeight: 'normal',
      },

      '& > .services-box': {
         marginTop: '3.75rem',
         display: 'flex',
         justifyContent: 'space-between',
         flexWrap: 'wrap',

         '& .service': {
            display: 'flex',
            width: '100%',
            maxWidth: '6.375rem',
            height: '9.25rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            cursor: 'pointer',

            '& .name': {
               fontSize: '0.8rem',
               fontWeight: 300,
               lineHeight: 'normal',
               marginTop: '1.25rem',
            },
         },
      },

      '& > .button-box': {
         display: 'grid',
         placeItems: 'center',
         marginTop: '48px',

         '& .button': {
            height: '42px !important',
         },
      },
   },
}))

const StyledServiceIcon = styled(Box)(({ theme }) => ({
   display: 'grid',
   placeItems: 'center',
   borderRadius: '1.125rem',
   border: '1px solid #DEDEDE',
   width: '6.275rem',
   height: '6.625rem',
   transition: 'all 0.5s easy',
   cursor: 'pointer',

   '&:hover': {
      backgroundColor: theme.palette.primary.darkGreen,

      '& > svg  path': {
         fill: 'white',
      },
   },
}))
