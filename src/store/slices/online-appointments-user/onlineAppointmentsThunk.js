import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getDoctorsByFacility = createAsyncThunk(
   'online-appointments/getDoctors',

   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/appointment/getDoctor?id=${id}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const getDoctorsAvailableTimesheet = createAsyncThunk(
   'online-appointments/getTimesheet',

   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/appointment/${id}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const ONLINE_APPOINTMENTS_THUNKS = {
   getDoctorsByFacility,
   getDoctorsAvailableTimesheet,
}
