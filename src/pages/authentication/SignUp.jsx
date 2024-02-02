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
import { validationSchemaSingUp } from '../../utils/helpers/validation/formValidate'
import { showErrorsSingUp } from '../../utils/helpers/validation/errors'

const SingUp = () => {
   const [showPassword1, setShowPassword1] = useState(false)
   const [showPassword2, setShowPassword2] = useState(false)

   const showPasswordHandle1 = () =>
      setShowPassword1((prevShowPassword1) => !prevShowPassword1)

   const showPasswordHandle2 = () =>
      setShowPassword2((prevShowPassword2) => !prevShowPassword2)

   const onSubmit = (values, { resetForm }) => {
      console.log(values)
      resetForm()
   }

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         name: '',
         sureName: '',
         email: '',
         phoneNumber: '',
         password: '',
         confirmPassword: '',
      },
      validateOnChange: false,
      onSubmit,
      validationSchema: validationSchemaSingUp,
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
                  name="sureName"
                  placeholder="Фамилия"
                  autoComplete="on"
                  value={values.sureName}
                  onChange={handleChange}
                  error={!!errors.sureName}
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
                  type={showPassword1 ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showPasswordHandle1}>
                              {showPassword1 ? (
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
                  type={showPassword2 ? 'text' : 'password'}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showPasswordHandle2}>
                              {showPassword2 ? (
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

            {showErrorsSingUp(errors) && (
               <Typography className="message">
                  {showErrorsSingUp(errors)}
               </Typography>
            )}

            <StyledButton type="submit">СОЗДАТЬ АККАУНТ</StyledButton>

            <Line>
               <hr className="line-first" />
               <Typography variant="span">или</Typography>
               <hr className="line-second" />
            </Line>

            <ButtonBase className="google-button" type="button">
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
      textDecoration: 'none',
      color: theme.palette.tertiary.lightBlue,
   },

   '& .message': {
      color: 'red',
      marginTop: '10px',
   },

   '& .google-button': {
      '&.MuiButtonBase-root': {
         backgroundColor: theme.palette.primary.backgroundAdmin,
         width: '414px',
         color: theme.palette.primary.lightBlack,
         height: '44px',
         borderRadius: '8px',
         fontFamily: ' Manrope',
         fontWeight: '600',
         marginBottom: '20px',
         fontSize: '16px',
         display: 'flex',
         gap: '14px',
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-root ': {
      height: '42px',
      borderRadius: '8px',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '20px',
      marginBottom: '20px',
      width: '414px',
      height: '44px',
      fontSize: '14px',

      '&:active': {
         borderRadius: '10px',
      },
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   marginBottom: '20px',
   marginTop: '20px',

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
      color: '#222222',
   },

   '& .line-second': {
      width: '10.313rem',
      color: '#F3F1F1',
      margin: '0.5rem 0',
      height: '0rem',
   },
}))
