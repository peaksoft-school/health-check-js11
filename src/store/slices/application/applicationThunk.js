import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getApplicationData = createAsyncThunk(
   'applications/getApplications',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/application/getAll')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const searchApplications = createAsyncThunk(
   'applications/search',

   async ({ searchText, rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/application/getApplication?word=${searchText}`,
            { params: { searchText } }
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const deleteApplication = createAsyncThunk(
   'applications/deleteApplications',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(`/api/application/${id}`)

         dispatch(getApplicationData())

         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

const updateApplication = createAsyncThunk(
   'applications/updateApplications',
   async ({ id, isActive }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.put('/api/application/update', {
            isActive,
            id,
         })

         dispatch(getApplicationData())

         return { isActive, id }
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

const deleteAllApplication = createAsyncThunk(
   'applications/all',
   async (ids, { dispatch }) => {
      try {
         await axiosInstance.delete('/api/application/all', {
            data: ids,
         })

         dispatch(getApplicationData())
      } catch (error) {
         throw new Error('Error', error)
      }
   }
)
export const APPLICATION_THUNK = {
   getApplicationData,
   searchApplications,
   deleteApplication,
   updateApplication,
   deleteAllApplication,
}
