import { useState } from 'react'
import {
   styled,
   Box,
   Typography,
   IconButton,
   InputAdornment,
} from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { forgotPassword } from '../../../store/slices/auth/authThunk'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import { CloseEyeIcon, OpenEyeIcon } from '../../../assets/icons'
import { showToast } from '../../../utils/helpers/notification'
import { PROFILE_THUNKS } from '../../../store/slices/profie/profileThunk'

const ChangeUserPassword = () => {
   const [showOldPassword, setShowOldPassword] = useState(false)
   const [showNewPassword, setShowNewPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   const dispatch = useDispatch()

   const onSubmit = (values, { resetForm }) => {
      const { email, oldPassword, newPassword, resetNewPassword } = values.email

      const paswords = {
         oldPassword,
         newPassword,
         resetNewPassword,
      }

      if (!oldPassword || !newPassword || !resetNewPassword) {
         showToast({
            status: 'error',
            message: 'Заполните все поля!',
         })
      } else {
         dispatch(PROFILE_THUNKS.changeUserPassword({ paswords, resetForm }))
      }

      dispatch(
         forgotPassword({
            email,
            link: 'http://localhost:3000/change-password',
            setEmail: () => '',
            onClose: () => '',
         })
      )
   }

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         oldPassword: '',
         newPassword: '',
         resetNewPassword: '',
      },
      validateOnChange: false,
      onSubmit,
   })

   const showOldPasswordHandle = () => setShowOldPassword((prev) => !prev)
   const showNewPasswordHandle = () => setShowNewPassword((prev) => !prev)
   const showConfirmPasswordHandle = () =>
      setShowConfirmPassword((prev) => !prev)

   return (
      <Box>
         <StyledContainer>
            <h3 className="change-password">Смена пароля</h3>

            <form onSubmit={handleSubmit}>
               <Typography className="old-password">Введите email </Typography>

               <StyledInput
                  value={values.email}
                  onChange={handleChange('email')}
                  type="email"
                  placeholder="Email"
               />

               <Typography className="confirm-password">
                  Старый пароль
               </Typography>

               <StyledInput
                  value={values.oldPassword}
                  name="password"
                  onChange={handleChange('oldPassword')}
                  placeholder="Введите пароль"
                  type={showOldPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showOldPasswordHandle}>
                              {showOldPassword ? (
                                 <OpenEyeIcon />
                              ) : (
                                 <CloseEyeIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />

               <Typography className="confirm-password">
                  Hовый пароль
               </Typography>

               <StyledInput
                  value={values.newPassword}
                  name="password"
                  onChange={handleChange('newPassword')}
                  placeholder="Введите пароль"
                  type={showNewPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showNewPasswordHandle}>
                              {showNewPassword ? (
                                 <OpenEyeIcon />
                              ) : (
                                 <CloseEyeIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />

               <Typography className="confirm-password">
                  Подтвердите новый пароль
               </Typography>

               <StyledInput
                  value={values.resetNewPassword}
                  name="password"
                  onChange={handleChange('resetNewPassword')}
                  placeholder="Введите пароль"
                  type={showConfirmPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showConfirmPasswordHandle}>
                              {showConfirmPassword ? (
                                 <OpenEyeIcon />
                              ) : (
                                 <CloseEyeIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />

               <StyledButtonContainer>
                  <NavLink to="/">
                     <Button className="back-button" variant="grey">
                        НАЗАД
                     </Button>
                  </NavLink>

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
