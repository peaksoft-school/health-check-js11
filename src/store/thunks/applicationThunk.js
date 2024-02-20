import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'

const BASE_URL = process.env.API_URL

const getApplicationData = createAsyncThunk(
   'data/fetchData',
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
   'aplication/search',
   async (searchText, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/application/getApplication?word=${searchText}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const deleteApplicationById = createAsyncThunk(
   'data/deleteData',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.delete(`/api/application/${id}`)
         dispatch(getApplicationData())
         return id
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

const updateApplication = createAsyncThunk(
   'data/updateData',
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
   'application/all',
   async (ids, { dispatch }) => {
      try {
         await axiosInstance.delete('/api/application/all', {
            data: ids,
         })
      } catch (error) {
         throw new Error('Error', error)
      }
   }
)

export {
   getApplicationData,
   searchApplications,
   deleteApplicationById,
   updateApplication,
   deleteAllApplication,
}
