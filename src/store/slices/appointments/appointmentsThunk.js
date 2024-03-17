import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getDoctorsAvailableTimesheet = createAsyncThunk(
   'online-appointments/getTimesheet',

   async (facility, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/appointment/getTimesheet?facility=${facility}`
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const getAllFacility = createAsyncThunk(
   'online-appointments/facility',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/department/getAllFacility`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const getDoctorSchedule = createAsyncThunk(
   'online-appointments/getDoctorSchedule',

   async ({ id, startDate, endDate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/appointment/${id}/getDoctorSchedule?startDate=${startDate}&endDate=${endDate}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const addAppointment = createAsyncThunk(
   'online-appointments/addAppointment',

   async ({ facility, data }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/appointment/add?facility=${facility}`,
            data
         )

         return response.data
      } catch (error) {
         showToast({
            message: error.data.message,
            status: 'error',
         })
         return rejectWithValue(error)
      }
   }
)

const checkVerificationCode = createAsyncThunk(
   'online-appointments/code',

   async ({ verificationCode, id, open }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/appointment?appointmentId=${id}&code=${verificationCode}`
         )

         open()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const deleteAppoinment = createAsyncThunk(
   'appointments/deleteById',
   async ({ appointmentId, setDeleteSuccess }, { rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/appointment/${appointmentId}`)

         setDeleteSuccess(true)

         return appointmentId
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const APPOINTMENTS_THUNKS = {
   getDoctorSchedule,
   getAllFacility,
   getDoctorsAvailableTimesheet,
   addAppointment,
   checkVerificationCode,
   deleteAppoinment,
}
