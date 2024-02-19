import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'

const getAppointments = createAsyncThunk(
   'appointments/admin',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('api/appointment/all')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const updateAppointmentStatus = createAsyncThunk(
   'appointments/updateStatus',
   async ({ appointmentId, active, setIsChecked }, { dispatch }) => {
      try {
         const response = await axiosInstance.put(`/api/appointment/update`, {
            id: appointmentId,
            active,
         })

         dispatch(getAppointments())

         setIsChecked((prev) => !prev)

         return response.data
      } catch (error) {
         throw new Error('Error updating status:', error)
      }
   }
)

const searchAppointments = createAsyncThunk(
   'appointments/search',
   async ({ searchName, otherParam }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/appointment/getAppointment?word=${searchName}`,
            {
               params: { searchName, otherParam },
            }
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const deleteAppointmentById = createAsyncThunk(
   'appointments/deleteById',
   async (appointmentId, { dispatch }) => {
      try {
         await axiosInstance.delete(`/api/appointment/${appointmentId}`)
         dispatch(getAppointments())
         return appointmentId
      } catch (error) {
         throw new Error('Error deleting appointment:', error)
      }
   }
)

const deleteAllAppointments = createAsyncThunk(
   'appointments/deleteAll',
   async (appointmentIds, { dispatch }) => {
      try {
         await axiosInstance.delete('/api/appointment/deleteAll', {
            data: appointmentIds,
         })

         dispatch(getAppointments())

         return appointmentIds
      } catch (error) {
         throw new Error('Error deleting all appointments', error)
      }
   }
)

export {
   getAppointments,
   updateAppointmentStatus,
   searchAppointments,
   deleteAppointmentById,
   deleteAllAppointments,
}
