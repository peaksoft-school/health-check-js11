import { styled, Box, Typography } from '@mui/material'
import { SERVICES } from '../../utils/constants/index'
import Button from '../UI/Button'

const OurServices = () => (
   <StyledOurServices>
      <Box className="container">
         <Box>
            <Typography className="title" variant="h2">
               Наши
               <Typography variant="span" className="service">
                  услуги
               </Typography>
            </Typography>

            <Typography className="description">
               За все время работы клиника приняла более 1 млн. пациентов.
            </Typography>
         </Box>

         <ServicesContainer>
            {SERVICES.map(({ id, name, icon }) => (
               <Box className="servise-box" key={id}>
                  <StyledServiceBlock>
                     <Typography variant="span" className="icon">
                        {icon}
                     </Typography>
                  </StyledServiceBlock>

                  <Typography className="name">{name}</Typography>
               </Box>
            ))}
         </ServicesContainer>

         <Box className="button-container">
            <Button className="button" variant="secondary">
               Смотреть все
            </Button>
         </Box>
      </Box>
   </StyledOurServices>
)

export default OurServices

const StyledOurServices = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',

   '& .container': {
      marginTop: '3.125rem',
      width: '100%',
      maxWidth: '74.625rem',

      '& .title': {
         fontSize: '2rem',
         fontWeight: 600,
         marginBottom: '2.125rem',

         [theme.breakpoints.up('lg')]: {
            fontSize: '3rem',
         },

         '& .service': {
            marginLeft: '0.5rem',
            color: theme.palette.primary.darkGreen,
         },
      },

      '& .description': {
         fontSize: '1rem',
         fontWeight: 400,
         lineHeight: 'normal',

         [theme.breakpoints.up('lg')]: {
            fontSize: '1.5rem',
         },
      },

      '& .button-container': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         marginTop: '3rem',

         '& .button': {
            transform: 'scale(0.8)',
            width: '10.506rem',
            height: '2.881rem',

            '&:hover': {
               width: '10.506rem',
               height: '2.881rem',
            },

            [theme.breakpoints.up('lg')]: {
               transform: 'scale(1)',
            },
         },
      },
   },
}))

const ServicesContainer = styled('div')(({ theme }) => ({
   marginTop: '3.75rem',
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',

   '& .servise-box': {
      display: 'flex',
      width: '100%',
      maxWidth: '6.375rem',
      height: '9.25rem',
      flexWrap: 'wrap',
      justifyContent: 'center',

      '& .name': {
         fontSize: '0.8rem',
         fontWeight: 300,
         lineHeight: 'normal',
         marginTop: '1.25rem',

         [theme.breakpoints.up('lg')]: {
            fontSize: '1.125rem',
            marginTop: '1.5rem',
         },
      },
   },
}))

const StyledServiceBlock = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: '1.125rem',
   border: '1px solid #DEDEDE',
   width: '5.6rem',
   height: '5.6rem',
   transition: '0.3s',

   '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 0 0.625rem 0.156rem #5d5d5d',
      cursor: 'pointer',
      background: 'linear-gradient(181deg, #0CBB6B 0.45%, #027B44 99.39%)',

      '& svg path': {
         fill: 'white',
      },
   },

   [theme.breakpoints.up('lg')]: {
      width: '6.375rem',
      height: '6.625rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },

   '& .icon': {
      width: '3.75rem',
      height: '3.75rem',
   },
}))
