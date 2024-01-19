import React from 'react'
import { Typography, Grid, styled } from '@mui/material'
import { HEADER_SOCIALS } from '../../utils/constants/index'

const WhyWe = () => {
   return (
      <StyledMainContainer>
         <StyledMainText>
            Почему <Typography variant="p">нас выбирают? </Typography>
         </StyledMainText>
         <StyledContainerGrid container spacing={2} direction="row">
            {HEADER_SOCIALS.map((item) => (
               <StyledGrid key={item.key}>
                  <StyledNumber variant="h1">{item.number}</StyledNumber>
                  <StyledWhy variant="h5">{item.title}</StyledWhy>
                  <StyledText variant="body2">{item.text}</StyledText>
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

const StyledMainText = styled(Typography)(({ theme }) => ({
   fontFamily: 'Manrope',
   fontSize: '2.25rem',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
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
