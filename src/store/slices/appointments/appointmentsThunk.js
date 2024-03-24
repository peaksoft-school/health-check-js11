import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getDoctorsAvailableTimesheet = createAsyncThunk(
   'appointments/getDoctorsAvailableTimesheet',

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
   'appointments/getAllFacility',

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
   'appointments/getDoctorSchedule',

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
   'appointments/addAppointment',

   async ({ facility, data }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/appointment/add?facility=${facility}`,
            data
         )

         return response.data
      } catch (error) {
         if (error.response.status === 403) {
            showToast({
               message: 'произошла ошибка',
               status: 'error',
            })
         } else {
            showToast({
               message: error.data.message,
               status: 'error',
            })
         }
         return rejectWithValue(error)
      }
   }
)

const checkVerificationCode = createAsyncThunk(
   'appointments/checkVerificationCode',

   async ({ verificationCode, id, openCodeInput }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/appointment?appointmentId=${id}&code=${verificationCode}`
         )

         openCodeInput()

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
         await axiosInstance.delete(
            `/appointment?appointmentId=${appointmentId}`
         )

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
