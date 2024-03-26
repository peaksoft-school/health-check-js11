import { useState } from 'react'
import {
   styled,
   Box,
   Typography,
   IconButton,
   InputAdornment,
} from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { forgotPassword } from '../../../store/slices/auth/authThunk'
import { CloseEyeIcon, OpenEyeIcon } from '../../../assets/icons'
import { VALIDATION_CHANGE_PASSWORD } from '../../../utils/helpers/validate'
import { resetPasswordError } from '../../../utils/helpers'
import { showToast } from '../../../utils/helpers/notification'
import Button from '../../UI/Button'
import Input from '../../UI/inputs/Input'
import { PROFILE_THUNKS } from '../../../store/slices/profile/profileThunk'

const ChangeUserPassword = () => {
   window.scrollTo({ top: 0 })

   const [showOldPassword, setShowOldPassword] = useState(false)
   const [showNewPassword, setShowNewPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const { isLoading } = useSelector((state) => state.profile)
   const loading = useSelector((state) => state.auth.isLoading)

   const dispatch = useDispatch()

   const emailRegex = /^[^\s@]+@(?:gmail\.com|icloud\.com)$/

   const onSubmit = (values, { resetForm }) => {
      const { oldPassword, newPassword, confirmPassword } = values
      const resetNewPassword = confirmPassword

      const paswords = {
         oldPassword,
         newPassword,
         resetNewPassword,
      }

      dispatch(PROFILE_THUNKS.changeUserPassword({ paswords, resetForm }))
   }

   const { values, handleChange, errors, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         oldPassword: '',
         newPassword: '',
         confirmPassword: '',
      },

      validateOnChange: false,
      onSubmit,
      validationSchema: VALIDATION_CHANGE_PASSWORD,
   })

   const sentEmai = (e) => {
      e.preventDefault()
      const { email } = values

      if (!emailRegex.test(email))
         showToast({
            message: 'не валидный email',
            status: 'error',
         })
      else
         dispatch(
            forgotPassword({
               email,
               link: 'http://localhost:3000/change-password',
               setEmail: () => '',
               onClose: () => '',
            })
         )
   }

   const showOldPasswordHandle = () => setShowOldPassword((prev) => !prev)

   const showNewPasswordHandle = () => setShowNewPassword((prev) => !prev)

   const showConfirmPasswordHandle = () => {
      setShowConfirmPassword((prev) => !prev)
   }

   return (
      <Box>
         <StyledContainer>
            <Box className="box">
               <Box className="change-password-box">
                  <h3 className="change-password">Смена пароля</h3>

                  <label htmlFor="oldPassword">Старый пароль</label>

                  <StyledInput
                     value={values.oldPassword}
                     name="password"
                     error={!!errors.oldPassword}
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

                  <label htmlFor="newPassword">Hовый пароль</label>

                  <StyledInput
                     value={values.newPassword}
                     name="password"
                     onChange={handleChange('newPassword')}
                     error={!!errors.newPassword}
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

                  <label htmlFor="confirmPassword">
                     Подтвердите новый пароль
                  </label>

                  <StyledInput
                     value={values.confirmPassword}
                     name="password"
                     onChange={handleChange('confirmPassword')}
                     placeholder="Введите пароль"
                     type={showConfirmPassword ? 'text' : 'password'}
                     error={!!errors.confirmPassword}
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

                  <div>
                     {resetPasswordError(errors) && (
                        <Typography className="error-message">
                           {resetPasswordError(errors)}
                        </Typography>
                     )}
                  </div>

                  <StyledButtonContainer>
                     <NavLink to="/">
                        <Button className="back-button" variant="grey">
                           НАЗАД
                        </Button>
                     </NavLink>

                     <Button
                        className="confirm-button"
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        colorLoading="secondary"
                     >
                        ПОДТВЕРДИТЬ
                     </Button>
                  </StyledButtonContainer>
               </Box>

               <Box className="reset-password-box">
                  <h3 className="change-password">Cброс пароля</h3>
                  <label htmlFor="email">Введите email</label>
                  <StyledInput
                     value={values.email}
                     onChange={handleChange('email')}
                     type="email"
                     placeholder="Email"
                  />

                  <Button
                     isLoading={loading}
                     className="email-button"
                     colorLoading="secondary"
                     onClick={sentEmai}
                  >
                     ОТПРАВИТЬ
                  </Button>
               </Box>
            </Box>
         </StyledContainer>
      </Box>
   )
}

export default ChangeUserPassword

const StyledContainer = styled(Box)(({ theme }) => ({
   '& .box': {
      display: 'flex',
      gap: '60px',
      alineItems: 'center',

      '& > .reset-password-box': {
         display: 'flex',
         flexDirection: 'column',

         '& > .email-button': {
            borderRadius: '8px',
            marginTop: '15px',
            height: '39px',
         },
      },

      '& > .change-password-box': {
         display: 'flex',
         flexDirection: 'column',
      },

      '& label': {
         marginTop: '1rem',
         color: theme.palette.primary.lightBlack,
         marginBottom: '0.3rem',
      },
   },

   '& .error-message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
   },

   '& .change-password': {
      color: 'black',
      marginTop: '0.5rem',
      marginBottom: '0.3rem',
      fontWeight: '600',
      fontStyle: '18px',
   },

   '& .old-password': {
      marginTop: '1rem',
      marginBottom: '0.3rem',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      height: '2.625rem',
      borderRadius: '0.5rem',
      width: '414px',
   },

   '& .MuiOutlinedInput-input': {
      width: '414px',
      color: 'black',
      height: '0.4375em',
      borderRadius: '0.5rem',
   },
}))

const StyledButtonContainer = styled(Box)(() => ({
   display: 'flex',
   marginTop: '2.5rem',
   gap: '1rem',

   '& .back-button': {
      border: '1px solid #048741',
      color: '#048741!important',
      width: '201px',
      height: '39px',
   },

   '& .confirm-button': {
      borderRadius: '8px',
      width: '201px',
      height: '39px',
   },
}))
