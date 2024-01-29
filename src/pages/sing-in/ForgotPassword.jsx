import { useState } from 'react'
import { Typography, styled } from '@mui/material'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'

const ForgotPassword = () => {
   const [email, setEmail] = useState('')
   const [emailError, setEmailError] = useState(null)

   const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!email) {
         return 'Email is required'
      }
      if (!emailRegex.test(email)) {
         return 'Invalid email address'
      }
      return ''
   }

   const handleEmailChange = (event) => {
      const { value } = event.target
      setEmail(value)
      const error = validateEmail(value)
      setEmailError(error)
   }

   const open = true

   return (
      <Modal open={open}>
         <StyledContainer>
            <Typography className="title">ЗАБЫЛИ ПАРОЛЬ?</Typography>

            <form className="form" action="">
               <Typography className="text">
                  Вам будет отправлена ссылка для сброса пароля
               </Typography>

               <Input
                  error={emailError}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
               />
               {emailError && <p className="message">{emailError}</p>}

               <StyledButton type="submit">ОТПРАВИТЬ</StyledButton>

               <Typography>Отмена</Typography>
            </form>
         </StyledContainer>
      </Modal>
   )
}

export default ForgotPassword

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   color: theme.palette.secondary.lightGrey,
   fontFamily: 'Manrope',
   gap: '24px',
   alignItems: 'center',

   '& .title': {
      color: '#222',
      fontSize: '18px',
   },

   '& .form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',

      '& .text': { marginRight: '30px' },

      '& .message': {
         color: 'red',
         fontSize: '0.8rem',
         position: 'absolute',
         bottom: '145px',
      },
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '24px',
      width: '414px',
      height: '44px',
      fontSize: '14px',

      '&:active': { borderRadius: '10px' },
   },
}))

// rtk query
