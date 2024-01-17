import { styled } from '@mui/material/styles'
import React from 'react'
import doctorImage from '../../assets/images/doctorForWelcome.png'
import Button from '../UI/Button'

const Welcome = () => {
   return (
      <Container>
         <MainPagePart2>
            <TextContainer>
               <StyledWelcome>
                  Добро пожаловать в клинику HealthCheck
               </StyledWelcome>
               <StyledDesc>
                  Международный Медицинская клиника «HealthCheck — это клиника,
                  в которой применяются новейшие диагностические и лечебные
                  технологии и ведут прием лучшие специалисты.
               </StyledDesc>

               <StyledButton variant="shortBtn">оставьте заявку</StyledButton>
            </TextContainer>
            <div>
               <StyledImage src={doctorImage} alt="doctor-img" />
            </div>
         </MainPagePart2>
      </Container>
   )
}

export default Welcome

const MainPagePart2 = styled('div')(({ theme }) => ({
   display: 'flex',
   height: '38.452rem',
   margin: '1.25rem 7.5rem 1.923rem',
   gap: '3.438rem',
   justifyContent: 'space-between',
   alignItems: 'center',
   [theme.breakpoints.down('lg')]: {
      height: 'auto',
      margin: '1.25rem',
   },
}))

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledWelcome = styled('h1')(({ theme }) => ({
   fontSize: '3rem',
   fontStyle: 'normal',
   fontWeight: '900',
   lineHeight: '140%',
   backgroundClip: 'text',
   color: 'transparent',
   width: '36.563rem',
   marginBottom: '1.625rem',
   backgroundImage: 'linear-gradient(90deg, #330867 0%, #30CFD0)',
   backgroundSize: '300% 300%',
   animation: 'moveGradient 3.2s infinite',
   '@keyframes moveGradient': {
      '0%': {
         backgroundPosition: '0% 50%',
      },
      '50%': {
         backgroundPosition: '100% 50%',
      },
      '100%': {
         backgroundPosition: '0% 50%',
      },
   },
   [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
      width: '100%',
   },
}))

const StyledDesc = styled('h1')(({ theme }) => ({
   color: '#222',
   fontFamily: 'Manrope',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '130%',
   width: '33rem',
   [theme.breakpoints.down('lg')]: {
      width: '100%',
   },
}))

const TextContainer = styled('div')(({ theme }) => ({
   width: '36.563rem',
   height: '14.313rem',
   [theme.breakpoints.down('lg')]: {
      width: '100%',
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      borderRadius: '1.5rem',
      marginTop: '1.75rem',
      padding: '10px 23px',
   },
   '&:hover': {
      padding: '10px 23px',
   },
   [theme.breakpoints.down('lg')]: {
      width: '150px',
      height: '38px',
      padding: '0rem',
      fontSize: '10px',
   },
}))

const StyledImage = styled('img')(({ theme }) => ({
   width: '580.35px',
   [theme.breakpoints.down('lg')]: {
      width: '100%',
   },
}))
