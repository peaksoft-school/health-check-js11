import { useState } from 'react'
import { Typography, styled } from '@mui/material'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'
import { validateEmail } from '../../utils/helpers/validation/formValidate'

const ForgotPassword = () => {
   const [email, setEmail] = useState('')
   const [emailError, setEmailError] = useState(false)

   const handleChange = (e) => {
      setEmail(e.target.value)
      setEmailError(false)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      const error = validateEmail(email)
      if (error) {
         setEmailError(true)
      } else {
         console.log('успешно')
         setEmail('')
      }
   }

   const open = true

   return (
      <Modal open={open}>
         <StyledContainer>
            <Typography className="title">ЗАБЫЛИ ПАРОЛЬ?</Typography>

            <form onSubmit={handleSubmit} className="form" action="">
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

               {emailError && <p className="message">Invalid email address</p>}

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
      BackHandColor: 'white',

      '&:active': { borderRadius: '10px' },
   },
}))
