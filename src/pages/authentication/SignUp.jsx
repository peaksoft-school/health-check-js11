import { useState } from 'react'
import { useFormik } from 'formik'
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
import { singUpError } from '../../utils/helpers/index'

const SingUp = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const showPasswordHandle = () =>
      setShowPassword((prevShowPassword1) => !prevShowPassword1)

   const showConfirmPasswordHandle = () =>
      setShowConfirmPassword((prevShowPassword2) => !prevShowPassword2)

   const onSubmit = ({ resetForm }) => resetForm()

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         name: '',
         surename: '',
         email: '',
         phoneNumber: '',
         password: '',
         confirmPassword: '',
      },

      validateOnChange: false,
      onSubmit,
      validationSchema: VALIDATION_SIGN_UP,
   })

   const open = true

   return (
      <Modal open={open}>
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
                  name="surename"
                  placeholder="Фамилия"
                  autoComplete="on"
                  value={values.surename}
                  onChange={handleChange}
                  error={!!errors.surename}
               />

               <NumberInput
                  variant="authentication"
                  id="number"
                  name="phoneNumber"
                  autoComplete="on"
                  value={values.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  error={errors.phoneNumber}
                  mask="_"
                  format="+996 (###) ##-##-##"
                  placeholder="+996 (_ _ _) _ _-_ _-_ _"
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

            {singUpError(errors) && (
               <Typography className="message">
                  {singUpError(errors)}
               </Typography>
            )}

            <StyledButton type="submit">СОЗДАТЬ АККАУНТ</StyledButton>

            <Line>
               <hr className="line-first" />
               <Typography variant="span">или</Typography>
               <hr className="line-second" />
            </Line>

            <ButtonBase className="google" type="button">
               <GoogleIcon />
               Зарегистрироваться с Google
            </ButtonBase>

            <Typography>
               У вас уже есть аккаунт?
               <Typography variant="span" className="navigate">
                  Войти
               </Typography>
            </Typography>
         </StyledForm>
      </Modal>
   )
}

export default SingUp

const StyledForm = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

   '& > .input-box': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '14px',
      marginTop: '24px',
   },

   '& .navigate ': {
      marginLeft: '10px',
      textDecoration: 'none',
      color: theme.palette.tertiary.lightBlue,
   },

   '& .message': {
      color: 'red',
      marginTop: '10px',
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

const Line = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   marginBottom: '1.25rem',
   marginTop: '1.25rem',

   '& .line-first': {
      width: '10.313rem',
      margin: '0.5rem 0',
      height: '0rem',
      color: '#F3F1F1',
   },

   '& span': {
      fontFamily: 'Manrope',
      fontWeight: '500',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      color: theme.palette.primary.lightBlack,
   },

   '& .line-second': {
      width: '10.313rem',
      color: '#F3F1F1',
      margin: '0.5rem 0',
      height: '0rem',
   },
}))
