import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'

const getAppointments = createAsyncThunk(
   'appointments/getAppointments',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('api/appointment/all')

         return response.data
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })

         return rejectWithValue(error)
      }
   }
)

const updateAppointment = createAsyncThunk(
   'appointments/updateStatus',
   async (
      { appointmentId: id, active, setIsChecked },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await axiosInstance.put(`/api/appointment/update`, {
            active,
            id,
         })

         dispatch(getAppointments())

         setIsChecked((prev) => !prev)

         return { id }
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })
         return rejectWithValue(error)
      }
   }
)

const searchAppointment = createAsyncThunk(
   'appointments/search',
   async ({ searchName }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/appointment/getAppointment?word=${searchName}`,
            {
               params: { searchName },
            }
         )

         return response.data
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })
         return rejectWithValue(error)
      }
   }
)

const deleteAppoinment = createAsyncThunk(
   'appointments/deleteById',
   async (appointmentId, { dispatch, rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/appointment/${appointmentId}`
         )

         dispatch(getAppointments())

         showToast({ message: response.data.messageCode })

         return appointmentId
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })

         return rejectWithValue(error)
      }
   }
)

const deleteAllAppointments = createAsyncThunk(
   'appointments/deleteAll',
   async (appointmentsIds, { dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            '/api/appointment/deleteAll',
            {
               data: appointmentsIds,
            }
         )

         dispatch(getAppointments())
         showToast({ message: response.data.messageCode })
         return response.data
      } catch (error) {
         showToast({ message: error.response.data.message, status: 'error' })
         throw new Error('Error deleting all appointments', error)
      }
   }
)

export const ONLINE_APPOINTMENTS_THUNK = {
   getAppointments,
   updateAppointment,
   searchAppointment,
   deleteAllAppointments,
   deleteAppoinment,
}
