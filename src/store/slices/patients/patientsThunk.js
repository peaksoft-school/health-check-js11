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

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const postPatientResult = createAsyncThunk(
   'patientsResult/addResult',
   async (result, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('/api/results/add-result', {
            result,
         })

         return data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         return rejectWithValue(error)
      }
   }
)

export {
   getAllPatients,
   deletePatients,
   searchPatients,
   getPatient,
   postPatientResult,
}
