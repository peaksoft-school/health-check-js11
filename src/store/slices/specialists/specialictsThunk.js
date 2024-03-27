import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/notification'
import { ROUTES } from '../../../routes/routes'

const getSpecialists = createAsyncThunk(
   'specialists/getSpecialists',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/doctor/getAllDoctors')

         return response.data
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const addSpecialist = createAsyncThunk(
   'specialists/addSpecialist',
   async ({ navigate, values }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(`/api/doctor`, values)

         navigate(`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`)

         showToast({ message: response.messageCode, status: 'success' })

         return response.data
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const getSpecialist = createAsyncThunk(
   'specialists/getSpecialist',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/doctor/${id}`)

         return response.data
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const updateSpecialist = createAsyncThunk(
   'specialists/updateSpecialist',
   async (
      { facility, id, data, searchParams, setSearchParams, setStatus },
      { dispatch, rejectWithValue }
   ) => {
      try {
         const response = await axiosInstance.patch(
            `/api/doctor?facility=${facility}&id=${id}`,
            data
         )

         searchParams.set('status', 'personal')

         setSearchParams(searchParams)
         setStatus(searchParams.get('status'))

         dispatch(getSpecialist(id))

         showToast({
            message: response.data.messageCode,
            status: 'success',
         })

         return response.data
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const deleteSpecialist = createAsyncThunk(
   'specialists/deleteSpecialist',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/doctor/${id}`)

         dispatch(getSpecialists())

         showToast({
            message: 'Доктор удалён!',
         })

         return id
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const updateDoctorStatus = createAsyncThunk(
   'specialists/updateDoctorStatus',
   async ({ id, checked, setChecked }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.patch(`/api/doctor/${id}?b=${checked}`)

         dispatch(getSpecialists())

         setChecked(checked)

         return { id, checked }
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

const searchSpecialist = createAsyncThunk(
   'specialists/searchSpecialist',
   async (word, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/doctor/doctors/search?word=${word}`
         )

         return response.data
      } catch (error) {
         showToast({
            message: error.message,
            status: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const SPECIALISTS_THUNKS = {
   getSpecialists,
   addSpecialist,
   getSpecialist,
   updateSpecialist,
   deleteSpecialist,
   updateDoctorStatus,
   searchSpecialist,
}
