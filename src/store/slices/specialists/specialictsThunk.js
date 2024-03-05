import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getSpecialists = createAsyncThunk(
   'specialists/getSpecialists',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('api/schedule/all')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const SPECIALISTS_THUNK = {
   getSpecialists,
}
