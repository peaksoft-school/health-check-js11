import { styled } from '@mui/material'
import Button from './UI/Button'
import { RightArrow } from '../assets/icons'
import RequairDoctorImage from '../assets/images/requairDoctor.png'

const LeaveRequest = () => {
   return (
      <StyledLeaveRequest>
         <Container>
            <StyledTitle>Оставьте заявку</StyledTitle>
            <StyledDesc>
               Оставьте свой номер и наши специалисты свяжутся с Вами в
               ближайшее время
            </StyledDesc>
            <AllInputsContainer>
               <InputContainer>
                  <label htmlFor="name">Как к Вам обратиться?</label>
                  <StyledInput
                     type="text"
                     id="name"
                     placeholder="
                     Введите
                     имя"
                  />
               </InputContainer>
               <InputContainer>
                  <label htmlFor="number">Номер мобильного телефона</label>
                  <StyledInput
                     type="text"
                     id="number"
                     placeholder="
                     +996 (___) __-__-__"
                  />
               </InputContainer>
            </AllInputsContainer>

            <StyledButton>
               ОТПРАВИТЬ ЗАЯВКУ <StyledRightArrow />
            </StyledButton>
         </Container>
         <img src={RequairDoctorImage} alt="doctor img" />
      </StyledLeaveRequest>
   )
}

export default LeaveRequest

const StyledLeaveRequest = styled('div')(({ theme }) => ({
   display: 'flex',
   margin: '50px',
   justifyContent: 'center',
   alignItems: 'flex-end',
   [theme.breakpoints.down('lg')]: {},
}))

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   width: '659px',
   height: '460px',
   flexShrink: '0',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
   backgroundColor: '#DBEBFF',
   borderRadius: '20px',
   [theme.breakpoints.down('lg')]: {},
}))

const StyledTitle = styled('h2')(({ theme }) => ({
   fontSize: '36px',
   fontStyle: 'normal',
   fontWeight: '500',
   lineHeight: 'normal',
   marginBottom: '20px',
   [theme.breakpoints.down('lg')]: {},
}))

const StyledDesc = styled('h2')(({ theme }) => ({
   fontSize: '18px',
   fontStyle: 'normal',
   fontWeight: '400',
   lineHeight: 'normal',
   marginBottom: '20px',
   width: '518px',
   [theme.breakpoints.down('lg')]: {},
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      display: 'flex',
      borderRadius: '24px',
      padding: '8px 12px 8px 24px',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '51px',
      paddingLeft: '24px',
      flexShrink: '0',
      fontSize: '14px',
      fontStyle: 'normal',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      width: '217px',
      '&:hover': {
         padding: '8px 12px 8px 24px',
         background: theme.palette.primary.linearGradient,
      },
   },
}))

const StyledRightArrow = styled(RightArrow)(() => ({
   width: '26px',
   height: '26px',
}))

const AllInputsContainer = styled('div')(() => ({
   display: 'flex',
   gap: '13px',
   marginTop: '50px',
   marginBottom: '40px',
}))

const StyledInput = styled('input')(() => ({
   width: '263px',
   height: '42px',
   flexShrink: '0',
   borderRadius: '5px',
   border: '1px solid rgba(0, 147, 68, 0.50)',
   background: ' #FFF',
}))

const InputContainer = styled('span')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   width: '263px',
}))
