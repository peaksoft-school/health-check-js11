import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { signInWithPopup } from 'firebase/auth'
import {
   Typography,
   styled,
   ButtonBase,
   IconButton,
   InputAdornment,
   Box,
} from '@mui/material'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/inputs/Input'
import NumberInput from '../../components/UI/inputs/NumberInput'
import Button from '../../components/UI/Button'
import { CloseEyeIcon, GoogleIcon, OpenEyeIcon } from '../../assets/icons'
import { VALIDATION_SIGN_UP } from '../../utils/helpers/validate'
import { signUpError } from '../../utils/helpers/index'
import { authWithGoogle, signUp } from '../../store/slices/auth/authThank'
import { auth, provider } from '../../utils/constants/logInWithGoogle'
import SignIn from '../sign-in/SignIn'

const SignUp = ({ onClose, open, closeSignUp }) => {
   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
   const [openSignIn1, setOpenSignIn1] = useState(false)

   const dispatch = useDispatch()

   const showPasswordHandle = () => setShowPassword((prev) => !prev)
   const openSignInHandle = () => setOpenSignIn1((prev) => !prev)

   const showConfirmPasswordHandle = () =>
      setShowConfirmPassword((prev) => !prev)

   const onSubmit = async (values, { resetForm }) => {
      const dataToSend = {
         name: values.name,
         lastName: values.lastName,
         email: values.email,
         number: values.number,
         password: values.password,
      }

      dispatch(signUp(dataToSend)).then((res) => {
         const { email, role, token } = res.payload

         if (email && role && token) {
            resetForm()
            onClose()
         }
      })
   }

   const openSignIn = () => {
      setOpenSignIn1((prev) => !prev)
      onClose()
   }

   const signUpWithGoogleHandler = async () => {
      await signInWithPopup(auth, provider).then((data) => {
         dispatch(
            authWithGoogle({
               tokenId: data.user.accessToken,
            })
         )
      })
   }

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         name: '',
         lastName: '',
         email: '',
         number: '',
         password: '',
         confirmPassword: '',
      },

      validateOnChange: false,
      onSubmit,
      validationSchema: VALIDATION_SIGN_UP,
   })

   return (
      <Modal open={open} handleClose={onClose}>
         <StyledForm onSubmit={handleSubmit}>
            <Typography>РЕГИСТРАЦИЯ</Typography>
            <Box className="input-box">
               <StyledInput
                  placeholder="Имя"
                  name="name"
                  autoComplete="on"
                  value={values.name}
                  onChange={handleChange}
                  error={!!errors.name}
               />

               <StyledInput
                  name="lastName"
                  placeholder="Фамилия"
                  autoComplete="on"
                  value={values.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
               />

               <NumberInput
                  variant="secondary"
                  name="number"
                  id="number"
                  autoComplete="on"
                  value={values.number}
                  onChange={handleChange('number')}
                  error={errors.number}
                  mask="_"
                  format="+996#########"
                  placeholder="+996 (___) ___ ___"
               />

               <StyledInput
                  name="email"
                  placeholder="Email"
                  autoComplete="on"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
               />

               <StyledInput
                  name="password"
                  placeholder="Введите пароль"
                  autoComplete="on"
                  value={values.password}
                  onChange={handleChange('password')}
                  error={!!errors.password}
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showPasswordHandle}>
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

               <StyledInput
                  name="confirmPassword"
                  placeholder="Повторите пароль"
                  autoComplete="on"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  error={!!errors.confirmPassword}
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
            </Box>
            {signUpError(errors) && (
               <Typography className="error-message">
                  {signUpError(errors)}
               </Typography>
            )}

            <SignIn
               open={openSignIn1}
               onClose={openSignInHandle}
               closeSignUp={closeSignUp}
            />

            <StyledButton type="submit">СОЗДАТЬ АККАУНТ</StyledButton>

            <StyledLine>
               <hr />
               <Typography variant="span">или</Typography>
               <hr />
            </StyledLine>

            <ButtonBase
               onClick={signUpWithGoogleHandler}
               className="google"
               type="button"
            >
               <GoogleIcon />
               Зарегистрироваться с Google
            </ButtonBase>
            <Typography>
               У вас уже есть аккаунт?
               <Typography
                  onClick={openSignIn}
                  variant="span"
                  className="navigate"
               >
                  Войти
               </Typography>
            </Typography>
         </StyledForm>
      </Modal>
   )
}

export default SignUp

const StyledForm = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   paddingRight: '1rem',

   '& > .input-box': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '0.875rem',
      marginTop: '1.5rem',
   },

   '& .navigate ': {
      marginLeft: '0.625rem',
      textDecoration: 'none',
      color: theme.palette.tertiary.lightBlue,
   },

   '& .error-message': {
      color: 'red',
      marginTop: '0.625rem',
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

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '1.25rem',
      marginBottom: '1.25rem',
      width: '25.875rem',
      height: '2.75rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '10px',
      },
   },
}))

const StyledLine = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   marginBottom: '1.25rem',
   marginTop: '1.25rem',

   '& > hr': {
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
