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
const deletePatients = createAsyncThunk(
   'appointments/deleteById',
   async (patientsId, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/user/${patientsId}`)
         dispatch(getPatients())
         return patientsId
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
export const PATIENTS_THUNK = { getPatients, deletePatients }
