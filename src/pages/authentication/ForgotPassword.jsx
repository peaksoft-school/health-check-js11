import { useState } from 'react'
import { Typography, styled, Box } from '@mui/material'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/inputs/Input'
import Button from '../../components/UI/Button'

const ForgotPassword = () => {
   const [email, setEmail] = useState('')
   const [emailError, setEmailError] = useState(false)

   const emailRegex = /^[^\s@]+@(?:gmail\.com|icloud\.com)$/

   const validaionEmail = (email) => {
      if (!emailRegex.test(email)) {
         return 'Неверный адрес электронной почты'
      }
      return ''
   }

   const handleChange = (e) => {
      setEmail(e.target.value)
      setEmailError(false)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const error = validaionEmail(email)
      if (error) {
         setEmailError(true)
      } else {
         setEmail('')
      }
   }

   const open = true

   return (
      <Modal open={open}>
         <StyledContainer>
            <Typography className="title">ЗАБЫЛИ ПАРОЛЬ?</Typography>

            <form onSubmit={handleSubmit}>
               <Typography className="text">
                  Вам будет отправлена ссылка для сброса пароля
               </Typography>

               <Input
                  value={email}
                  autoComplete="on"
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  error={emailError}
               />

               {emailError && (
                  <Typography className="error-message">
                     {validaionEmail(email)}
                  </Typography>
               )}

               <StyledButton type="submit">ОТПРАВИТЬ</StyledButton>

               <Typography>Отменить</Typography>
            </form>
         </StyledContainer>
      </Modal>
   )
}

export default ForgotPassword

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   color: theme.palette.secondary.lightGrey,
   fontFamily: 'Manrope',
   gap: '1.5rem',
   alignItems: 'center',

   '& .title': {
      color: theme.palette.primary.lightBlack,
      fontSize: '1.125rem',
   },

   '& > form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',

      '& > .text': {
         marginRight: '1.875rem',
      },

      '& > .error-message': {
         color: 'red',
         fontSize: '0.8rem',
         position: 'absolute',
         bottom: '9.063rem',
      },
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '1.5rem',
      width: '25.875rem',
      height: '2.75rem',
      fontSize: '0.875rem',
      BackHandColor: 'white',

      '&:active': {
         borderRadius: '10px',
      },
   },
}))
