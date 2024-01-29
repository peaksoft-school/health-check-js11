import { Typography, styled, Box } from '@mui/material'
import { BEST_QUALITIES } from '../../utils/constants/index'

const WhyWe = () => (
   <StyledContainer>
      <Box className="box">
         <Typography variant="h2" className="title">
            Почему <Typography variant="span">нас выбирают? </Typography>
         </Typography>

         <Box className="qualities">
            {BEST_QUALITIES.map(({ number, title, key, text }) => (
               <Box className="qualitie" key={key}>
                  <Typography className="number" variant="h1">
                     {number}
                  </Typography>

                  <Typography className="title" variant="h3">
                     {title}
                  </Typography>

                  <Typography className="description">{text}</Typography>
               </Box>
            ))}
         </Box>
      </Box>
   </StyledContainer>
)

export default WhyWe

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '0 120px',

   '& > .box': {
      margin: '0 auto',
      maxWidth: '1600px',

      '& > .title': {
         fontSize: '2.25rem',
         fontWeight: '600',
         fontFamily: ' Manrope',
         lineHeight: 'normal',
         margin: '30px 15px',

         '& > span': {
            color: theme.palette.primary.darkGreen,
         },
      },

      '& > .qualities': {
         margin: '60px 0 120px',
         display: 'flex',
         justifyContent: 'space-between',

         '& > .qualitie': {
            backgroundColor: theme.palette.tertiary.main,
            width: '30%',
            padding: '2.5%',
            borderRadius: '4px',
            boxSizing: 'border-box',

            '& > .number': {
               fontFamily: 'Manrope',
               fontSize: '3rem',
               fontWeight: '600',
               color: theme.palette.primary.darkGreen,
            },

            '& > .title': {
               color: theme.palette.primary.lightBlack,
               fontFamily: 'Manrope',
               fontSize: '20px',
               fontWeight: '500',
               marginTop: '10px',
            },

            '& > .description': {
               fontWeight: '400',
               lineHeight: '130%',
               paddingTop: '18px',
            },
         },
      },
   },
}))
