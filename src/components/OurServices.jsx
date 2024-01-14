import React from 'react'
import { styled } from '@mui/material/styles'
import {
   VaccinationIcon,
   KardiologiyaIcon,
   NevrologiyaIcon,
   DermatologiyaIcon,
   OftalmologiyaIcon,
   TerapiyaIcon,
   FizioterapiyaIcon,
   OnkologiyaIcon,
   UrologiyaIcon,
} from '../assets/icons/serviceIcons '
import { CursorIcon } from '../assets/icons/index'
import Button from './UI/Button'

const OurServices = () => {
   return (
      <StyledOurServices>
         <Container>
            <div>
               <StyledTitle>
                  Наши <StyledTitleSerices>услуги</StyledTitleSerices>
               </StyledTitle>
               <StyledDescription>
                  За все время работы клиника приняла более 1 млн. пациентов.
               </StyledDescription>
            </div>
            <ServicesContainer>
               <StyledService>
                  <StyledServiceBlock>
                     <StyledVaccinationIcon />
                  </StyledServiceBlock>
                  <StyledName>Вакцинация</StyledName>
               </StyledService>
               <StyledService>
                  <StyledServiceBlock>
                     <KardiologiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Кардиология</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <NevrologiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Неврология</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <DermatologiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Дерматология</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <OftalmologiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Офтальмология</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <TerapiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Терапия</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <FizioterapiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Физиотерапия</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <OnkologiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Онкология</StyledName>
               </StyledService>

               <StyledService>
                  <StyledServiceBlock>
                     <UrologiyaIcon />
                  </StyledServiceBlock>
                  <StyledName>Урология</StyledName>
               </StyledService>
            </ServicesContainer>
            <StyledBtnContainer>
               <Button variant="shortBtn">Смотреть все</Button>
            </StyledBtnContainer>
         </Container>
      </StyledOurServices>
   )
}

export default OurServices

const Container = styled('div')(() => ({
   marginTop: '50px',
   width: '1191px',
   height: '148px',
   flexShrink: '0',
}))

const StyledOurServices = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledBtnContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: '48px',
}))

const StyledService = styled('span')(() => ({
   display: 'flex',
   width: '102px',
   height: '148px',
   flexShrink: '0',
   flexWrap: 'wrap',
   justifyContent: 'center',
}))

const StyledTitle = styled('h2')(() => ({
   fontSize: '36px',
   fontStyle: 'normal',
   fontWeight: '600',
   lineHeight: 'normal',
   marginBottom: '34px',
}))
const StyledTitleSerices = styled('span')(({ theme }) => ({
   color: theme.palette.primary.darkGreen,
}))

const StyledDescription = styled('p')(() => ({
   fontSize: '18px',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
}))

const ServicesContainer = styled('div')(() => ({
   marginTop: '60px',
   display: 'flex',
   justifyContent: 'space-between',
}))

const StyledServiceBlock = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexShrink: '0',
   borderRadius: '18px',
   border: '1px solid #DEDEDE',
   width: '102px',
   height: '106px',
   transition: '0.3s',
   '&:hover': {
      border: '2px solid #DEDEDE',
      transform: 'scale(1.1)',
      boxShadow: '0 0 13px 3px #065c28',
      cursor: `url(${CursorIcon}), auto`,
      backgroundColor: theme.palette.primary.linearGradient,
   },
}))

const StyledVaccinationIcon = styled(VaccinationIcon)(() => ({
   fill: 'white',
   width: '60px',
   height: '60px',
   flexShrink: '0',
}))

const StyledName = styled('p')(() => ({
   fontSize: '16px',
   fontStyle: 'normal',
   fontWeight: '300',
   lineHeight: 'normal',
}))
