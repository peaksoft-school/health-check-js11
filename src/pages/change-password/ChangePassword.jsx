import { useState } from 'react'
import {
   Typography,
   styled,
   IconButton,
   InputAdornment,
   Box,
} from '@mui/material'
import { useFormik } from 'formik'
import Modal from '../../components/UI/Modal'
import Input from '../../components/UI/inputs/Input'
import Button from '../../components/UI/Button'
import { VALIDATION_FORGOT_PASSWORD } from '../../utils/helpers/validate'
import { passwordError } from '../../utils/helpers/index'
import { CloseEyeIcon, OpenEyeIcon } from '../../assets/icons'

const ChangePassword = () => {
   const [showNewPassword, setShowNewPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const toggleShowNewPassword = () =>
      setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword)

   const toggleShowConfirmPassword = () =>
      setShowConfirmPassword(
         (prevShowConfirmPassword) => !prevShowConfirmPassword
      )

   const onSubmit = ({ resetForm }) => resetForm()

   const { values, handleChange, handleSubmit, errors } = useFormik({
      initialValues: {
         newPassword: '',
         confirmPassword: '',
      },
      validateOnChange: false,
      onSubmit,
      validationSchema: VALIDATION_FORGOT_PASSWORD,
   })

   const open = true

   return (
      <Modal open={open}>
         <StyledContainer>
            <Typography variant="h2" className="title">
               СМЕНА ПАРОЛЯ
            </Typography>

            <form onSubmit={handleSubmit}>
               <Typography className="text">
                  Вам будет отправлена ссылка для сброса пароля
               </Typography>

               <StyledInput
                  type={showNewPassword ? 'text' : 'password'}
                  value={values.newPassword}
                  placeholder="Введите новый пароль"
                  onChange={handleChange('newPassword')}
                  autoComplete="on"
                  error={!!errors.newPassword}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={toggleShowNewPassword}>
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

               <StyledInput
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Повторите пароль"
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  error={!!errors.confirmPassword}
                  autoComplete="on"
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="end">
                           <IconButton onClick={toggleShowConfirmPassword}>
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

               {passwordError(errors) && (
                  <Typography className="error-message">
                     {passwordError(errors)}
                  </Typography>
               )}

               <StyledButton type="submit">ПОДТВЕРДИТЬ</StyledButton>
            </form>
         </StyledContainer>
      </Modal>
   )
}

export default ChangePassword

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   color: theme.palette.secondary.lightGrey,
   fontFamily: 'Manrope',
   gap: '1.5rem',
   alignItems: 'center',

   '& > .title': {
      color: theme.palette.primary.lightBlack,
      fontSize: '1.125rem',
   },

   '& > form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.813rem',

      '& > .text': {
         marginRight: '1.875rem',
      },

      '& > .error-message': {
         color: 'red',
         fontSize: '0.8rem',
         position: 'absolute',
         bottom: '6.563rem',

         '& > .input-box': {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
         },
      },
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
      marginTop: '1.5rem',
      width: '25.875rem',
      height: '2.75rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))
