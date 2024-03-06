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
import Input from '../../../components/UI/inputs/Input'
import { CloseEyeIcon, OpenEyeIcon } from '../../../assets/icons'
import { ACTION_PROFILE } from '../../../store/slices/profie/profileThunk'
import Button from '../../../components/UI/Button'
import { showToast } from '../../../utils/helpers/notification'

const ChangeUserPassword = () => {
   const [showOldPassword, setShowOldPassword] = useState(false)
   const [showNewPassword, setShowNewPassword] = useState(false)
   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

   const dispatch = useDispatch()

   const onSubmit = (values) => {
      if (
         !values.oldPassword ||
         !values.newPassword ||
         !values.resetNewPassword
      ) {
         showToast({
            status: 'error',
            message: 'Заполните все поля!',
         })
      } else {
         dispatch(ACTION_PROFILE.changeUserPassword(values))
      }
   }

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         oldPassword: '',
         newPassword: '',
         resetNewPassword: '',
      },

      validateOnChange: false,
      onSubmit,
   })

   const showOldPasswordHandle = () => setShowOldPassword((prev) => !prev)
   const showNewPasswordHandle = () => setShowNewPassword((prev) => !prev)
   const showConfirmPasswordHandle = () =>
      setShowConfirmPassword((prev) => !prev)

   return (
      <Box>
         <h3>Смена пароля</h3>

         <form onSubmit={handleSubmit}>
            <Typography> Старый пароль</Typography>
            <Input
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

            <Typography>Новый пароль</Typography>
            <Input
               value={values.newPassword}
               name="password"
               onChange={handleChange('newPassword')}
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

            <Typography>Подствердите новый пароль</Typography>
            <Input
               value={values.resetNewPassword}
               name="password"
               onChange={handleChange('resetNewPassword')}
               placeholder="Введите пароль"
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

            <Button>НАЗАД</Button>
            <Button type="submit">ПОДТВЕРДИТЬ</Button>
         </form>
      </Box>
   )
}

export default ChangeUserPassword
