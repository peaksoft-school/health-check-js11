import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { axiosInstanceFile } from '../../../configs/axiosInstaseFile'

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

const postFile = createAsyncThunk('patients/postFile', async (data) => {
   try {
      const response = await axiosInstanceFile.post('/api/static', data)

      return response.data
   } catch (error) {
      return error
   }
})

const postPatientResult = createAsyncThunk(
   'patientsResult/addResult',
   async (result, { rejectWithValue, dispatch }) => {
      try {
         const getFile = await dispatch(postFile(result.url))
         const response = await axiosInstance.post('/api/result/save', {
            ...result,
            url: getFile.payload.link,
         })

         result.resetForm()
         result.setFile(null)
         result.onClose()

         return response.data
      } catch (error) {
         const errorMessage = error.response.data.message.replace(
            /^\[|\]$/g,
            ''
         )
         return rejectWithValue(error)
      }
   }
)

export { getAllPatients, deletePatients, searchPatients, postPatientResult }
