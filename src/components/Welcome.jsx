import { styled } from '@mui/material/styles'
import React from 'react'
import doctorImage from '../assets/images/doctorForWelcome.png'
import Button from './UI/Button'

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

const MainPagePart2 = styled('div')(() => ({
   display: 'flex',
   height: '38.452rem',
   margin: '1.25rem 7.5rem 1.923rem',
   gap: '3.438rem',
   justifyContent: 'space-between',
   alignItems: 'center',
}))

const Container = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledWelcome = styled('h1')(() => ({
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
}))

const StyledDesc = styled('h1')(() => ({
   color: '#222',
   fontFamily: 'Manrope',
   fontSize: '1.125rem',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: '130%',
   width: '33rem',
}))

const TextContainer = styled('div')(() => ({
   width: '36.563rem',
   height: '14.313rem',
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      borderRadius: '1.5rem',
      marginTop: '1.75rem',
   },
}))
const StyledImage = styled('img')(() => ({
   width: '580.35px',
}))
