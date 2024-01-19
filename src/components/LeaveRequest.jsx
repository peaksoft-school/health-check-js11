import { InputBase, Paper, styled } from '@mui/material'
import Button from './UI/Button'
import { ActivePhoneIcon, CircleArrow, UserIcon } from '../assets/icons'
import { DoctorRequestImage } from '../assets/images/index'

const LeaveRequest = () => (
   <StyledLeaveRequest>
      <Container>
         <h2 className="title">Оставьте заявку</h2>

         <h2 className="description">
            Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее
            время
         </h2>

         <AllInputsContainer>
            <InputContainer>
               <label htmlFor="name" className="input-label">
                  Как к Вам обратиться?
               </label>

               <StyledPaper>
                  <UserIcon className="input-icons" />

                  <StyledInput
                     id="name"
                     type="text"
                     placeholder="
                     Введите
                     имя"
                  />
               </StyledPaper>
            </InputContainer>

            <InputContainer>
               <label htmlFor="number" className="input-label">
                  Номер мобильного телефона
               </label>

               <StyledPaper>
                  <ActivePhoneIcon className="input-icons" />

                  <StyledInput
                     id="number"
                     type="number"
                     placeholder="
                     +996 (___) __-__-__"
                  />
               </StyledPaper>
            </InputContainer>
         </AllInputsContainer>

         <StyledButton>
            ОТПРАВИТЬ ЗАЯВКУ <CircleArrow className="circle-arrow" />
         </StyledButton>
      </Container>

      <StyledImage src={DoctorRequestImage} alt="doctor img" />
   </StyledLeaveRequest>
)

export default LeaveRequest

const StyledLeaveRequest = styled('div')(({ theme }) => ({
   display: 'flex',
   margin: '3.125rem',
   justifyContent: 'center',
   alignItems: 'flex-end',

   [theme.breakpoints.down('lg')]: {
      margin: '0.625rem',
   },
}))

const StyledImage = styled('img')(({ theme }) => ({
   width: '36.375rem',
   height: '33.125rem',

   [theme.breakpoints.down('lg')]: {
      width: '25rem',
      height: '23rem',
   },
}))

const Container = styled('form')(({ theme }) => ({
   display: 'flex',
   width: '41.1875rem',
   height: '28.75rem',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
   backgroundColor: '#DBEBFF',
   borderRadius: '1.25rem',

   [theme.breakpoints.down('lg')]: {
      height: '21rem',
      width: '33rem',
   },

   '& .title': {
      fontSize: '2.25rem',
      fontWeight: '500',
      marginBottom: '1.25rem',

      [theme.breakpoints.down('lg')]: {
         fontSize: '1.25rem',
         marginBottom: '0.375rem',
      },
   },

   '& .description': {
      fontSize: '1.125rem',
      fontWeight: '400',
      width: '32.375rem',

      [theme.breakpoints.down('lg')]: {
         width: '26rem',
         fontSize: '0.9rem',
      },
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      display: 'flex',
      borderRadius: '1.5rem',
      padding: '0.5rem 0.75rem 0.5rem 1.5rem',
      justifyContent: 'space-between',
      height: '3.1875rem',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      width: '13.5625rem',

      '&:hover': {
         padding: '0.5rem 0.75rem 0.5rem 1.5rem',
         background: theme.palette.primary.linearGradient,
      },

      [theme.breakpoints.down('lg')]: {
         width: '11.5rem',
         height: '2.5rem',
         fontSize: '0.70rem',
         padding: '0.5rem 0.50rem 0.5rem 1.4rem',
      },
   },

   '& .circle-arrow': {
      width: '1.625rem',
      height: '1.625rem',
   },
}))

const AllInputsContainer = styled('div')(() => ({
   display: 'flex',
   gap: '0.8125rem',
   marginTop: '3.13rem',
   marginBottom: '2.5rem',
}))

const InputContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'flex-start',
   flexDirection: 'column',

   '& .input-label': {
      [theme.breakpoints.down('lg')]: {
         fontSize: '0.813rem',
      },
   },
}))

const StyledInput = styled(InputBase)(({ theme }) => ({
   borderRadius: '0.3125rem',
   background: ' #FFF',
   padding: '0px 0.625rem px',

   [theme.breakpoints.down('lg')]: {
      width: '10rem',
      fontSize: '0.85rem',
   },
}))

const StyledPaper = styled(Paper)(({ theme }) => ({
   width: '16.4375rem',
   height: ' 2.625rem',
   display: 'flex',
   alignItems: 'center',
   border: '1px solid rgba(0, 147, 68, 0.50)',
   marginTop: '0.375rem',

   [theme.breakpoints.down('lg')]: {
      width: '13.4375rem',
      height: ' 2.3rem',
   },

   '& .input-icons': {
      margin: '0.75rem 0.5rem 0.875rem 0.75rem',
      width: '1.125rem',
      height: '1rem',
   },
}))
