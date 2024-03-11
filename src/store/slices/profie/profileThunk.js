import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getUserProfile = createAsyncThunk(
   'profile/getUserData',

   async (accessToken, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/user/getResponse`,
            accessToken
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const updateUserProfile = createAsyncThunk(
   'profile/updateUserData',

   async (data, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/user/editUserProfile`,
            data
         )

         showToast({
            message: response.data.message,
         })

         return response.data
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'произошла ошибка',
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

const changeUserPassword = createAsyncThunk(
   'profile/changePassword',

   async ({ values, resetForm }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/user/changeUserPassword`,
            values
         )

         resetForm()

         showToast({
            message: response.data.message,
         })

         return response.data
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'произошла ошибка',
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

export const PROFILE_THUNKS = {
   getUserProfile,
   updateUserProfile,
   changeUserPassword,
}
