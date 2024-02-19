import { Box, Typography, styled } from '@mui/material'
import Button from '../UI/Button'
import { BEST_DOCTORS } from '../../utils/constants'

const BestDoctors = () => (
   <StyledContainer>
      <Box className="box">
         <Typography className="title" variant="h2">
            Лучшие
            <Typography variant="span"> врачи</Typography>
         </Typography>

         <Typography>
            Попасть в команду медицинской клиники «Health Check» могут <br />
            только лучшие специалисты с многолетней практикой и доказанным
            опытом.
         </Typography>

         <Box className="doctors">
            {BEST_DOCTORS.map(({ id, name, specialisation, image }) => (
               <Box className="doctor" key={id}>
                  <img src={image} alt={name} />

                  <Typography className="name">{name}</Typography>

                  <Typography className="specialisation">
                     {specialisation}
                  </Typography>
               </Box>
            ))}
         </Box>

         <StyledButton variant="secondary">Все врачи клиники</StyledButton>
      </Box>
   </StyledContainer>
)

export default BestDoctors

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '0 120px',

   '& > .box': {
      margin: '0 auto',
      maxWidth: '1600px',
      paddingBottom: '120px',

      '& > .title': {
         fontFamily: 'Manrope',
         fontSize: '2.25rem',
         fontWeight: '600',
         lineHeight: 'normal',
         marginBottom: '34px',

         '& > span': {
            color: theme.palette.primary.darkGreen,
         },
      },

      '& > .doctors': {
         marginTop: '70px',
         display: 'flex',
         justifyContent: 'space-between',
         flexWrap: 'wrap',
         gap: '30px',

         '& .doctor': {
            cursor: 'pointer',

            '& > img': {
               borderRadius: '50%',
               backgroundColor: theme.palette.secondary.linearGradient,
               width: '203px',
               height: '203px',
               objectFit: 'contain',
            },

            '& > .name': {
               paddingTop: '10px',
               textAlign: 'center',
               fontSize: '1em',
               fontWeight: '500',
               lineHeight: '1.25em',
            },

            '& > .specialisation': {
               color: theme.palette.secondary.lightGrey,
               textAlign: 'center',
               fontSize: '0.875em',
               fontWeight: '500',
               lineHeight: '1.25em',
               paddingTop: '2px',
            },
         },
      },
   },
}))

const StyledButton = styled(Button)(() => ({
   marginTop: '52px',
   margin: '52px auto 0',
   display: 'block',
   height: '2.625rem',
}))
