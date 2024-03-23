import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const signUp = createAsyncThunk(
   'auth/signUp',

   async ({ dataToSend, resetForm, onClose }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            '/api/auth/signUp',
            dataToSend
         )

         showToast({
            message: 'Вы успешно зарегистрировались',
         })

         const { email, role, token } = response.data

         if (email && role && token) {
            resetForm()
            onClose()
         }

         return response.data
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'Ошибка на стороне сервера',
               status: 'error',
            })
         } else {
            showToast({
               message: error.response.data.message,
               status: 'error',
            })
         }

         return rejectWithValue(error)
      }
   }
)

const signIn = createAsyncThunk(
   'auth/signIn',
   async ({ values, resetForm, onClose }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signIn', values)

         showToast({
            message: 'Вы успешно вошли в аккаунт',
         })

         resetForm()
         onClose()

         return response.data
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'Не верный пароль или email',
               status: 'error',
            })
         } else {
            showToast({
               message: error.response.data.message,
               status: 'error',
            })
         }

         return rejectWithValue(error)
      }
   }
)

const forgotPassword = createAsyncThunk(
   'auth/forgotPassword',
   async ({ email, link, onClose, setEmail }, { rejectWithValue }) => {
      try {
         const response = await axios.post(
            `${process.env.REACT_APP_API_URL}api/auth/send-email?email=${email}&link=${link}`
         )

         showToast({
            message: 'Вам отправлено ссылка для сброса пароля',
         })

         onClose()
         setEmail('')

         return response
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'Ошибка на стороне сервера',
               status: 'error',
            })
         } else {
            showToast({
               message: error.response.data.message,
               status: 'error',
            })
         }

         return rejectWithValue(error)
      }
   }
)

const changePassword = createAsyncThunk(
   'auth/changePassword',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axios.post(
            `${process.env.REACT_APP_API_URL}api/auth/forgot-password?token=${payload.token}&newPassword=${payload.newPassword}`
         )

         showToast({
            message: 'Пароль успешно изменен!',
         })

         return response
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'Ошибка на стороне сервера',
               status: 'error',
            })
         } else {
            showToast({
               message: error.response.data.message,
               status: 'error',
            })
         }

         return rejectWithValue(error)
      }
   }
)

const authWithGoogle = createAsyncThunk(
   'auth/authWithGoogle',
   async ({ tokenId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/auth/authenticate/google?tokenId=${tokenId}`
         )

         showToast({
            message: 'Вы успешно зарегистрировались',
         })

         return response
      } catch (error) {
         showToast({
            status: 'error',
            message: 'Извините, регистрация не удалась, попробуйте еще раз',
         })

         return rejectWithValue(error)
      }
   }
)

export { signUp, signIn, forgotPassword, authWithGoogle, changePassword }
