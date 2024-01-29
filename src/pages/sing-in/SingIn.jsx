import { useState } from 'react'
import { useFormik } from 'formik'
import {
   styled,
   Typography,
   ButtonBase,
   IconButton,
   InputAdornment,
} from '@mui/material'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
import {
   CloseEyesIcon,
   GoogleIcon,
   OpenEyesIcon,
} from '../../assets/icons/index'
import { validationSchemaSingIn } from '../../utils/helpers/validate/singInValidate'
import { showErrors } from '../../utils/helpers/validate/errors'

const SingIn = () => {
   const [showPassword, setShowPassword] = useState(false)

   const showPasswordHandle = () =>
      setShowPassword((prevShowPassword) => !prevShowPassword)

   const onSubmit = ({ resetForm }) => resetForm()

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         name: '',
         password: '',
      },
      validateOnChange: false,
      onSubmit,
      validationSchema: validationSchemaSingIn,
   })

   const open = true

   return (
      <StyledModal open={open}>
         <StyledForm onSubmit={handleSubmit}>
            <Typography> ВОЙТИ </Typography>

            <div className="input-box">
               <Input
                  placeholder="Логин"
                  value={values.name}
                  onChange={handleChange('name')}
               />
               <Input
                  placeholder="Пароль"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showPasswordHandle}>
                              {showPassword ? (
                                 <OpenEyesIcon />
                              ) : (
                                 <CloseEyesIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />
            </div>

            {showErrors(errors) && (
               <p className="message">{showErrors(errors)}</p>
            )}

            <StyledButton type="submit">ВОЙТИ</StyledButton>

            <a href="gsdfgsdfgsdgsfsd#">Забыли пароль?</a>

            <Line>
               <hr className="lineFirst" />

               <span>или</span>

               <hr className="lineSecond" />
            </Line>

            <ButtonBase className="google-button" type="button">
               <GoogleIcon />
               Продолжить с Google
            </ButtonBase>

            <Typography>
               Нет аккаунта?
               <a href="#[pvot9hyi8ujikglf"> Зарегистрироваться </a>
            </Typography>
         </StyledForm>
      </StyledModal>
   )
}

export default SingIn

const StyledForm = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: theme.palette.primary.main,

   '& a ': {
      textDecoration: 'none',
      color: theme.palette.tertiary.lightBlue,
   },

   '& > .input-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '26px',
      marginTop: '24px',

      '& .MuiOutlinedInput-input ': {
         height: '15px',
         borderRadius: '30px',
      },

      '& .error-input': {
         border: '1px solid red',
      },
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

   '& .message': {
      color: 'red',
      fontSize: '0.ыы8rem',
      position: 'absolute',
      bottom: '295px',
   },
}))

const Line = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   gap: '1rem',
   marginBottom: '20px',
   marginTop: '20px',

   '& .lineFirst': {
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

   '& .lineSecond': {
      width: '10.313rem',
      color: '#F3F1F1',
      margin: '0.5rem 0',
      height: '0rem',
   },
}))
