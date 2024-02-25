import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getPatients = createAsyncThunk(
   'patients/getPatients',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/user/getAllPatients')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const PATIENTS_THUNK = { getPatients }
