import { useState } from 'react'
import { Typography, styled, IconButton, InputAdornment } from '@mui/material'
import { useFormik } from 'formik'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/input/Input'
import Button from '../../components/UI/Button'
import { validationSchemForgotPassword } from '../../utils/helpers/validation/formValidate'
import { passwordErrorrs } from '../../utils/helpers/validation/errors'
import { CloseEyesIcon, OpenEyesIcon } from '../../assets/icons'

const ChangePassword = () => {
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
         newPassword: '',
         confirmPassword: '',
      },
      validateOnChange: false,
      onSubmit,
      validationSchema: validationSchemForgotPassword,
   })

   const open = true

   return (
      <Modal open={open}>
         <StyledContainer>
            <Typography className="title">СМЕНА ПАРОЛЯ</Typography>

            <form className="form" onSubmit={handleSubmit} action="">
               <Typography className="text">
                  Вам будет отправлена ссылка для сброса пароля
               </Typography>

               <StyledInput
                  type={showPassword1 ? 'text' : 'password'}
                  value={values.newPassword}
                  placeholder="Введите новый пароль"
                  onChange={handleChange('newPassword')}
                  autoComplete="on"
                  error={!!errors.newPassword}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showPasswordHandle1}>
                              {showPassword1 ? (
                                 <OpenEyesIcon />
                              ) : (
                                 <CloseEyesIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />

               <StyledInput
                  type={showPassword2 ? 'text' : 'password'}
                  placeholder="Повторите пароль"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  error={!!errors.confirmPassword}
                  autoComplete="on"
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={showPasswordHandle2}>
                              {showPassword2 ? (
                                 <OpenEyesIcon />
                              ) : (
                                 <CloseEyesIcon />
                              )}
                           </IconButton>
                        </InputAdornment>
                     ),
                  }}
               />

               {passwordErrorrs(errors) && (
                  <p className="message">{passwordErrorrs(errors)}</p>
               )}

               <StyledButton type="submit">ОТПРАВИТЬ</StyledButton>
            </form>
         </StyledContainer>
      </Modal>
   )
}

export default ChangePassword

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   color: theme.palette.secondary.lightGrey,
   fontFamily: 'Manrope',
   gap: '24px',
   alignItems: 'center',

   '& .title': {
      color: '#222',
      fontSize: '18px',
   },

   '& .form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '13px',

      '& .text': { marginRight: '30px' },

      '& .message': {
         color: 'red',
         fontSize: '0.8rem',
         position: 'absolute',
         bottom: '105px',

         '& .input-box': {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
         },
      },
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
      marginTop: '24px',

      width: '414px',
      height: '44px',
      fontSize: '14px',

      '&:active': { borderRadius: '10px' },
   },
}))
