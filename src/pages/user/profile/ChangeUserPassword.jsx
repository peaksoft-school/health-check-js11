import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { forgotPassword } from '../../../store/slices/auth/authThunk'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'

const ChangeUserPassword = () => {
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

   const handleSubmit = (e) => {
      e.preventDefault()

      const error = validaionEmail(email)

      if (!error) {
         dispatch(
            forgotPassword({
               email,
               link: 'http://localhost:3000/change-password',
               setEmail,
               onClose: () => '',
            })
         )
      } else {
         setEmailError(true)
      }
   }

   const handleChange = (e) => {
      setEmail(e.target.value)
      setEmailError(false)
   }

   return (
      <Box>
         <StyledContainer>
            <h3 className="change-password">Смена пароля</h3>

            <form onSubmit={handleSubmit}>
               <Typography className="old-password">Введите email </Typography>

               <StyledInput
                  value={email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  error={emailError}
               />

               <StyledButtonContainer>
                  <Button className="back-button" variant="grey">
                     НАЗАД
                  </Button>

                  <Button className="confirm-button" type="submit">
                     ПОДТВЕРДИТЬ
                  </Button>
               </StyledButtonContainer>
            </form>
         </StyledContainer>
      </Box>
   )
}

export default ChangeUserPassword

const StyledContainer = styled(Box)(() => ({
   '& .change-password': {
      color: 'black',
      marginTop: '0.5rem',
      marginBottom: '0.3rem',
      fontWeight: '600',
      fontStyle: '18px',
   },
   '& .old-password': {
      marginTop: '2rem',
      marginBottom: '0.3rem',
   },

   '& .new-password': {
      marginTop: '1rem',
      marginBottom: '0.3rem',
   },

   '& .confirm-password': {
      marginTop: '1rem',
      marginBottom: '0.3rem',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      height: '2.625rem',
      borderRadius: '0.5rem',
   },

   '& .MuiOutlinedInput-input': {
      color: 'black',
      height: '0.4375em',
      borderRadius: '0.5rem',
   },
}))

const StyledButtonContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   marginTop: '1.5rem',
   gap: '1rem',

   '& .back-button': {
      border: `1px solid #048741`,
      color: `#048741!important`,
      width: '201px',
      height: '39px',
   },
   '& .confirm-button': {
      borderRadius: '8px',
      width: '201px',
      height: '39px',
   },
}))
