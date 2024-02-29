import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getPatient = createAsyncThunk(
   'patients/getPatient',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/user/${id}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export { getPatient }
