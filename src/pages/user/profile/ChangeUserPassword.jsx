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
import { PROFILE_THUNKS } from '../../../store/slices/profie/profileThunk'
import { VALIDATION_FORGOT_PASSWORD } from '../../../utils/helpers/validate'
import { passwordError } from '../../../utils/helpers'

const ChangeUserPassword = () => {
   const [showOldPassword, setShowOldPassword] = useState(false)
   const [showNewPassword, setShowNewPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const dispatch = useDispatch()

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
      validationSchema: VALIDATION_FORGOT_PASSWORD,
   })

   const sentEmai = (e) => {
      e.preventDefault()
      const { email } = values

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
   const showConfirmPasswordHandle = () =>
      setShowConfirmPassword((prev) => !prev)

   return (
      <Box>
         <StyledContainer>
            <Box className="box">
               <Box className="change-password-box">
                  <h3 className="change-password">Смена пароля</h3>

                  <Typography className="label">Старый пароль</Typography>

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

                  <Typography className="label">Hовый пароль</Typography>

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

                  <Typography className="label">
                     Подтвердите новый пароль
                  </Typography>

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
                     {passwordError(errors) && (
                        <Typography className="error-message">
                           {passwordError(errors)}
                        </Typography>
                     )}
                  </div>

                  <StyledButtonContainer>
                     <NavLink to="/">
                        <Button className="back-button" variant="grey">
                           НАЗАД
                        </Button>
                     </NavLink>

                     <Button className="confirm-button" onClick={handleSubmit}>
                        ПОДТВЕРДИТЬ
                     </Button>
                  </StyledButtonContainer>
               </Box>

               <Box className="reset-password-box">
                  <h3 className="change-password">Cброс пароля</h3>

                  <Typography className="label">Введите email</Typography>

                  <StyledInput
                     value={values.email}
                     onChange={handleChange('email')}
                     type="email"
                     placeholder="Email"
                  />

                  <Button className="email-button" onClick={sentEmai}>
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

      '& .label': {
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
   },

   '& .MuiOutlinedInput-input': {
      color: 'black',
      height: '0.4375em',
      borderRadius: '0.5rem',
   },
}))

const StyledButtonContainer = styled(Box)(({ theme }) => ({
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