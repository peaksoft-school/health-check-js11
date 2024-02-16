import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'
import {
   styled,
   Typography,
   ButtonBase,
   IconButton,
   InputAdornment,
   Box,
} from '@mui/material'
import Input from '../../components/UI/inputs/Input'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
import { CloseEyeIcon, GoogleIcon, OpenEyeIcon } from '../../assets/icons/index'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validate'
import { signInError } from '../../utils/helpers/index'
import ForgotPassword from '../forgot-password/ForgotPassword'
import { authWithGoogle, signIn } from '../../store/slices/auth/authThank'
import { auth, provider } from '../../utils/constants/authWithGoogle'

const SignIn = ({ onClose, open, closeSignUp }) => {
   const { isLoading } = useSelector((state) => state.auth)

   const [showPassword, setShowPassword] = useState(false)
   const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false)

   const dispatch = useDispatch()

   const openModalForgotPasswordHandler = () => {
      setIsForgotPasswordVisible((prev) => !prev)
      onClose()
   }

   const toggleForgotPassword = () =>
      setIsForgotPasswordVisible((prev) => !prev)

   const toggleShowPassword = () =>
      setShowPassword((prevShowPassword) => !prevShowPassword)

   const onSubmit = (values, { resetForm }) => {
      dispatch(signIn({ values, resetForm, onClose }))
   }

   const openSignUp = () => {
      closeSignUp()
      onClose()
   }

   const signInWithGoogleHandler = async () => {
      await signInWithPopup(auth, provider)
         .then((data) => {
            dispatch(
               authWithGoogle({
                  tokenId: data.user.accessToken,
               })
            )
         })
         .catch((error) => {
            throw error
         })
   }

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         email: '',
         password: '',
      },

      validateOnChange: false,
      onSubmit,
      validationSchema: VALIDATION_SIGN_IN,
   })

   return (
      <Modal open={open} handleClose={onClose}>
         <StyledForm onSubmit={handleSubmit} autoComplete="off">
            <Typography> ВОЙТИ </Typography>

            <Box className="input-box">
               <StyledInput
                  placeholder="Логин"
                  value={values.email}
                  error={!!errors.email}
                  onChange={handleChange('email')}
               />

               <StyledInput
                  placeholder="Пароль"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  error={!!errors.password}
                  onChange={handleChange('password')}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={toggleShowPassword}>
                              {showPassword ? (
                                 <OpenEyeIcon />
                              ) : (
                                 <CloseEyeIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
            </Box>

            {signInError(errors) && (
               <Typography className="error-message">
                  {signInError(errors)}
               </Typography>
            )}

            <StyledButton
               type="submit"
               colorLoading="secondary"
               isLoading={isLoading}
            >
               ВОЙТИ
            </StyledButton>

            <Typography
               className="navigate"
               onClick={openModalForgotPasswordHandler}
            >
               Забыли пароль?
            </Typography>

            <ForgotPassword
               open={isForgotPasswordVisible}
               onClose={toggleForgotPassword}
            />

            <StyledLine>
               <hr />
               <Typography variant="span">или</Typography>
               <hr />
            </StyledLine>

            <ButtonBase
               onClick={signInWithGoogleHandler}
               className="google"
               type="button"
            >
               <GoogleIcon />
               Продолжить с Google
            </ButtonBase>

            <Typography>
               Нет аккаунта?
               <Typography
                  onClick={openSignUp}
                  variant="span"
                  className="navigate"
               >
                  Зарегистрироваться
               </Typography>
            </Typography>
         </StyledForm>
      </Modal>
   )
}

export default SignIn

const StyledForm = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: theme.palette.primary.main,
   paddingRight: '15px',

   '& .navigate ': {
      cursor: 'pointer',
      textDecoration: 'none',
      marginLeft: '0.625rem',
      color: theme.palette.tertiary.lightBlue,
   },

   '& > .input-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.625rem',
      marginTop: '1.5rem',
   },

   '& .google': {
      '&.MuiButtonBase-root': {
         backgroundColor: theme.palette.primary.backgroundAdmin,
         width: '25.875rem',
         color: theme.palette.primary.lightBlack,
         height: '44px',
         borderRadius: '0.5rem',
         fontFamily: ' Manrope',
         fontWeight: '600',
         marginBottom: '1.25rem',
         fontSize: '1rem',
         display: 'flex',
         gap: '0.875rem',
      },
   },

   '& .error-message': {
      color: 'red',
      fontSize: '0.8rem',
      position: 'absolute',
      bottom: '16rem',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-input': {
      height: '0.5rem',
      borderRadius: '0.5rem',
   },

   '& .MuiOutlinedInput-root ': {
      height: '2.625rem',
      borderRadius: '0.5rem',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '2.5rem',
      marginBottom: '1.25rem',
      width: '25.875rem',
      height: '2.75rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))

const StyledLine = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   marginBottom: '1.25rem',
   marginTop: '1.25rem',

   '& hr': {
      width: '10.313rem',
      margin: '0.5rem 0',
      height: '0rem',
      border: '1px solid #F3F1F1',
   },

   '& > span': {
      fontFamily: 'Manrope',
      fontWeight: '500',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      color: theme.palette.primary.lightBlack,
   },
}))
