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
         showToast({
            message: error.response.data.message,
            status: 'error',
         })

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
         showToast({
            message: error.response.data.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const changeUserPassword = createAsyncThunk(
   'profile/changePassword',

   async (passwords, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/user/changeUserPassword`,
            passwords
         )

         showToast({
            message: response.data.message,
         })

         return response.data
      } catch (error) {
         showToast({
            message: error.response.data.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const ACTION_PROFILE = {
   getUserProfile,
   updateUserProfile,
   changeUserPassword,
}
