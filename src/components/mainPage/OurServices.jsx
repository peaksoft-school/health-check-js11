import { styled } from '@mui/material/styles'
import { SERVICES } from '../../utils/constants/index'
import Button from '../UI/Button'

const OurServices = () => {
   return (
      <StyledOurServices>
         <Container>
            <div>
               <StyledTitle>
                  Наши <StyledTitleServices>услуги</StyledTitleServices>
               </StyledTitle>

               <StyledDescription>
                  За все время работы клиника приняла более 1 млн. пациентов.
               </StyledDescription>
            </div>
            <ServicesContainer>
               {SERVICES.map(({ id, name, icon }) => (
                  <StyledService key={id}>
                     <StyledServiceBlock>
                        <StyledIcon>{icon}</StyledIcon>
                     </StyledServiceBlock>

                     <StyledName>{name}</StyledName>
                  </StyledService>
               ))}
            </ServicesContainer>

            <StyledBtnContainer>
               <StyledButton variant="shortBtn">Смотреть все</StyledButton>
            </StyledBtnContainer>
         </Container>
      </StyledOurServices>
   )
}

export default OurServices

const Container = styled('div')(() => ({
   marginTop: '3.125rem',
   width: '100%',
   maxWidth: '74.625rem',
   height: '9.25rem',
   flexShrink: 0,
}))

const StyledButton = styled(Button)(({ theme }) => ({
   transform: 'scale(0.8)',
   [theme.breakpoints.up('lg')]: {
      transform: 'scale(1)',
   },
}))

const StyledOurServices = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledBtnContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: '3rem',
}))

const StyledService = styled('span')(() => ({
   display: 'flex',
   width: '100%',
   maxWidth: '6.375rem',
   height: '9.25rem',
   flexShrink: 0,
   flexWrap: 'wrap',
   justifyContent: 'center',
}))

const StyledTitle = styled('h2')(({ theme }) => ({
   fontSize: '2rem',
   fontStyle: 'normal',
   fontWeight: 600,
   lineHeight: 'normal',
   marginBottom: '2.125rem',
   [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
   },
}))

const StyledTitleServices = styled('span')(({ theme }) => ({
   color: theme.palette.primary.linearGradient,
}))

const StyledDescription = styled('p')(({ theme }) => ({
   fontSize: '1rem',
   fontStyle: 'normal',
   fontWeight: 400,
   lineHeight: 'normal',
   [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
   },
}))

const ServicesContainer = styled('div')(() => ({
   marginTop: '3.75rem',
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
}))

const StyledServiceBlock = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexShrink: 0,
   borderRadius: '1.125rem',
   border: '1px solid #DEDEDE',
   width: '5.6rem',
   height: '5.6rem',
   transition: '0.3s',
   '&:hover': {
      transform: 'scale(1.1)',
      boxShadow: '0 0 0.625rem 0.156rem #5d5d5d',
      cursor: 'pointer',
      backgroundColor: theme.palette.primary.linearGradient,
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
      flexShrink: 0,
   },
}))

const StyledIcon = styled('span')(() => ({
   width: '3.75rem',
   height: '3.75rem',
   flexShrink: 0,
}))

const StyledName = styled('p')(({ theme }) => ({
   fontSize: '0.8rem',
   fontStyle: 'normal',
   fontWeight: 300,
   lineHeight: 'normal',
   marginTop: '1.25rem',
   [theme.breakpoints.up('lg')]: {
      fontSize: '1.125rem',
      marginTop: '1.5rem',
   },
}))
