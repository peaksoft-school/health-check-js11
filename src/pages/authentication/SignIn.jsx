import { useState } from 'react'
import { useFormik } from 'formik'
import {
   styled,
   Typography,
   ButtonBase,
   IconButton,
   InputAdornment,
} from '@mui/material'
import Input from '../../components/UI/inputs/Input'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
import { CloseEyeIcon, GoogleIcon, OpenEyeIcon } from '../../assets/icons/index'
import { validationSchemaSingIn } from '../../utils/helpers/validation/formValidate'
import { showErrors } from '../../utils/helpers/validation/errors'

const SingIn = () => {
   const [showPassword, setShowPassword] = useState(false)

   const showPasswordHandle = () =>
      setShowPassword((prevShowPassword) => !prevShowPassword)

   const onSubmit = (values, { resetForm }) => {
      console.log(values)
      resetForm()
   }

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
      <Modal open={open}>
         <StyledForm onSubmit={handleSubmit}>
            <Typography> ВОЙТИ </Typography>

            <div className="input-box">
               <StyledInput
                  placeholder="Логин"
                  autoComplete="on"
                  value={values.name}
                  error={!!errors.name}
                  onChange={handleChange('name')}
               />

               <StyledInput
                  placeholder="Пароль"
                  autoComplete="on"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  error={!!errors.password}
                  onChange={handleChange('password')}
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
            </div>

            {showErrors(errors) && (
               <p className="message">{showErrors(errors)}</p>
            )}

            <StyledButton type="submit">ВОЙТИ</StyledButton>

            <Typography className="navigate">Забыли пароль?</Typography>

            <Line>
               <hr className="line-first" />

               <Typography variant="span">или</Typography>

               <hr className="line-second" />
            </Line>

            <ButtonBase className="google-button" type="button">
               <GoogleIcon />
               Продолжить с Google
            </ButtonBase>

            <Typography>
               Нет аккаунта?
               <Typography variant="span" className="navigate">
                  Зарегистрироваться
               </Typography>
            </Typography>
         </StyledForm>
      </Modal>
   )
}

export default SingIn

const StyledForm = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   background: theme.palette.primary.main,

   '& .navigate ': {
      textDecoration: 'none',
      color: theme.palette.tertiary.lightBlue,
   },

   '& > .input-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '26px',
      marginTop: '24px',
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

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-input': {
      height: '8px',
      borderRadius: '8px',
   },

   '& .MuiOutlinedInput-root ': {
      height: '42px',
      borderRadius: '8px',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '40px',
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
