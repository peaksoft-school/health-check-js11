import { Typography, Grid, styled } from '@mui/material'
import { BEST_QUALITIES } from '../../utils/constants/index'

const WhyWe = () => {
   return (
      <StyledMainContainer>
         <StyledtTitle>
            Почему <Typography variant="p">нас выбирают? </Typography>
         </StyledtTitle>
         <StyledContainerGrid container spacing={2} direction="row">
            {BEST_QUALITIES.map((specialists) => (
               <StyledGrid key={specialists.key}>
                  <StyledNumber variant="h1">{specialists.number}</StyledNumber>
                  <StyledWhy variant="h5">{specialists.title}</StyledWhy>
                  <StyledText variant="body2">{specialists.text}</StyledText>
               </StyledGrid>
            ))}
         </StyledContainerGrid>
      </StyledMainContainer>
   )
}

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
}))

const StyledtTitle = styled(Typography)(({ theme }) => ({
   fontSize: '2.25rem',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   margin: '30px 15px',
   '.MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },
}))

const StyledNumber = styled(Typography)(({ theme }) => ({
   fontFamily: 'Manrope',
   fontSize: '3rem',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   color: theme.palette.primary.darkGreen,
}))

const StyledWhy = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.lightBlack,
   fontSize: '1.25rem',
   fontStyle: 'normal',
}))

const StyledText = styled(Typography)({
   fontFamily: 'Manrope',
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '130%',
   paddingTop: '1.125rem',
})
