import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getDoctors = createAsyncThunk(
   'doctors/getDoctors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            'api/doctor/getDoctorsSortByDepartments'
         )

         return response.data
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })
         return rejectWithValue(error)
      }
   }
)

export const DOCTOR_THUNK = { getDoctors }
