import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getSpecialists = createAsyncThunk(
   'specialists/getSpecialists',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/doctor/getAllDoctors')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const deleteSpecialists = createAsyncThunk(
   'specialists/deleteSpecialists',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/doctor/${id}`)
         dispatch(getSpecialists())

         return id
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const SPECIALISTS_THUNK = {
   getSpecialists,
   deleteSpecialists,
}
