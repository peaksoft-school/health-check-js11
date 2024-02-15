import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const signUp = createAsyncThunk(
   'auth/signUp',
   async (userData, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signUp', userData)

         showToast({
            message: 'Регистрация прошла успешно',
            position: 'top-right',
            duration: 3000,
            autoClose: true,
         })

         return response.data
      } catch (error) {
         showToast({
            message: 'ошибка',
            status: 'error',
            position: 'top-right',
            autoClose: true,
         })

         return rejectWithValue(error)
      }
   }
)

const signIn = createAsyncThunk(
   'auth/signIn',
   async (userData, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signIn', userData)

         showToast({
            message: 'вы успешно вошли в аккаунт',
            position: 'top-right',
            autoClose: true,
         })

         return response.data
      } catch (error) {
         showToast({
            message: error.response.data.message,
            status: 'error',
            position: 'top-right',
            autoClose: true,
         })

         return rejectWithValue(error)
      }
   }
)

const forgotPassword = createAsyncThunk(
   'auth/forgotPassword',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/auth/send-email?email=${payload.email}&link=${payload.link}`
         )
         showToast({
            message: 'Вам отправлено ссылка для сброса пароля',
            position: 'top-right',
            autoClose: true,
         })

         return response
      } catch (error) {
         showToast({
            message: '403 forbidden',
            status: 'error',
            position: 'top-right',
            autoClose: true,
         })

         return rejectWithValue(error.response.data)
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
            title: 'Success',
            message: 'You have just successfully registered',
         })

         return response
      } catch (error) {
         showToast({
            title: 'Reject',
            status: 'error',
            message: 'Sorry, registration failed, try again',
         })

         return rejectWithValue(error)
      }
   }
)

export { signUp, signIn, forgotPassword, authWithGoogle }
