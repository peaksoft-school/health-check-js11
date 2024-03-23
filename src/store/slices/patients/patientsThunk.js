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
   'patients/deleteById',

   async (id, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/user/${id}`)
         dispatch(getPatients())

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

export const PATIENTS_THUNKS = { getPatients, deletePatients, searchPatients }
