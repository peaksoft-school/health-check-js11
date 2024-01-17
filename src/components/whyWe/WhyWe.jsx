import { Typography, Grid, styled } from '@mui/material'
import { BEST_QUALITIES } from '../../utils/constants/index'

const WhyWe = () => (
   <StyledMainContainer>
      <StyledtTitle>
         Почему <Typography variant="p">нас выбирают? </Typography>
      </StyledtTitle>

      <StyledContainerGrid container spacing={2} direction="row">
         {BEST_QUALITIES.map(({ number, title, key, text }) => (
            <StyledGrid key={key}>
               <Grid className="number" variant="h1">
                  {number}
               </Grid>
               <Grid className="title" variant="h3">
                  {title}
               </Grid>
               <Grid className="text" variant="p">
                  {text}
               </Grid>
            </StyledGrid>
         ))}
      </StyledContainerGrid>
   </StyledMainContainer>
)

export default WhyWe

const StyledMainContainer = styled('div')(() => ({
   marginLeft: '5%',
   marginRight: '5%',
   width: '90%',
   margin: 'auto',
}))

const StyledContainerGrid = styled(Grid)({
   paddingTop: '3.75%',
   display: 'flex',
   justifyContent: 'space-between',
})

const StyledGrid = styled(Grid)(({ theme }) => ({
   backgroundColor: theme.palette.tertiary.main,
   width: '30%',
   height: '270px',
   padding: '2.5%',
   borderRadius: '0.25%',
   boxSizing: 'border-box',

   '& .number': {
      fontFamily: 'Manrope',
      fontSize: '3rem',
      fontWeight: '600',
      color: theme.palette.primary.darkGreen,
   },

   '& .text': {
      fontWeight: '400',
      lineHeight: '130%',
      paddingTop: '18px',
   },

   '& .title': {
      color: theme.palette.primary.lightBlack,
      fontFamily: 'Manrope',
      fontSize: '20px',
      fontWeight: 'bold',
   },
}))

const StyledtTitle = styled(Typography)(({ theme }) => ({
   fontSize: '2.25rem',
   fontWeight: '600',
   fontFamily: ' Manrope',
   lineHeight: 'normal',
   margin: '30px 15px',

   '.MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },
}))
