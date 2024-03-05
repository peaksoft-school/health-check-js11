import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getUserProfile = createAsyncThunk(
   'profile/getUrefData',
   async (accessToken, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`api/getUser/${accessToken}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const ACTION_PROFILE = { getUserProfile }
