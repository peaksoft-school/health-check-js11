import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, styled, Box } from '@mui/material'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/inputs/Input'
import Button from '../../components/UI/Button'
import { forgotPassword } from '../../store/slices/auth/authThank'

const ForgotPassword = ({ open, onClose }) => {
   const { isLoading } = useSelector((state) => state.auth)

   const [email, setEmail] = useState('')
   const [emailError, setEmailError] = useState(false)

   const dispatch = useDispatch()

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

      if (!error) {
         dispatch(
            forgotPassword({
               email,
               link: 'http://localhost:3000/change-password',
               setEmail,
               onClose,
            })
         )
      } else {
         setEmailError(true)
      }
   }

   return (
      <Modal open={open} handleClose={onClose}>
         <StyledContainer>
            <Typography className="title">ЗАБЫЛИ ПАРОЛЬ?</Typography>

            <form onSubmit={handleSubmit} autoComplete="off">
               <Typography className="text">
                  Вам будет отправлена ссылка для сброса пароля
               </Typography>

               <StyledInput
                  value={email}
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

               <StyledButton
                  type="submit"
                  colorLoading="secondary"
                  isLoading={isLoading}
               >
                  ОТПРАВИТЬ
               </StyledButton>

               <StyledCloseButton
                  variant="grey"
                  className="cancel"
                  onClick={onClose}
               >
                  Отменить
               </StyledCloseButton>
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

   '& > .title': {
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
         bottom: '8rem',
      },
   },
}))

const StyledCloseButton = styled(Button)(({ theme }) => ({
   width: '100%',
   '&.MuiButtonBase-root': {
      border: 'none',

      '&:hover': {
         backgroundColor: theme.palette.primary.main,
         border: 'none',
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      height: '2.625rem',
      borderRadius: '0.5rem',
   },

   '& .MuiOutlinedInput-input': {
      height: '0.4375em',
      borderRadius: '0.5rem',
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      marginTop: '1rem',
      width: '25.875rem',
      height: '2.75rem',
      fontSize: '0.875rem',
      backgroundColor: 'white',

      '&:active': {
         borderRadius: '0.625rem',
         backgroundColor: theme.palette.primary.linearGradient,
      },

      '&:hover': {
         backgroundColor:
            'linear-gradient(181deg, #087D 0.45%, #048950 82.76%)',
         border: 'none',
      },
   },
}))
