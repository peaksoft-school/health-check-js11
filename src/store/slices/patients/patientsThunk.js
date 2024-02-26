import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getAllPatients = createAsyncThunk(
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
   'patients/deleteById',
   async (id, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/user/${id}`)

         dispatch(getAllPatients())

         return id
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const searchPatients = createAsyncThunk(
   'patients/search',
   async ({ searchName }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/user/search?word=${searchName}`,

            {
               params: { searchName },
            }
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const getPatient = createAsyncThunk(
   'patients/getPatient',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/user/${id}`)
         console.log(response, 'response')
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export { getAllPatients, deletePatients, searchPatients, getPatient }
