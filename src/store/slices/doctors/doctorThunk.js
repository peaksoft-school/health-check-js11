import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getDoctors = createAsyncThunk(
   'doctors/getDoctors',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            'api/doctor/getDoctorsSortByDepartments'
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const getDoctorsById = createAsyncThunk(
   'doctors/getDoctorsById',
   async ({ doctorId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`api/doctor/${doctorId}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const DOCTORS_THUNK = { getDoctors, getDoctorsById }
