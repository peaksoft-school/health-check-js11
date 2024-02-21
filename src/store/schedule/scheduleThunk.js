import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'
import { showToast } from '../../utils/helpers/notification'

const getAllDoctors = createAsyncThunk(
   'doctors/fetchDoctors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('api/doctor/getAllDoctors')

         return response.data
      } catch (error) {
         showToast({
            message: 'error',
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export { getAllDoctors }
