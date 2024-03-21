import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getSpecialists = createAsyncThunk(
   'specialists/getSpecialists',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/doctor/getAllDoctors')

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const getSpecialistById = createAsyncThunk(
   'specialists/getSpecialistsById',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/doctor?id=${id}`)

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const deleteSpecialists = createAsyncThunk(
   'specialists/deleteSpecialists',
   async ({ id, handleClose }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/doctor/${id}`)
         dispatch(getSpecialists())
         handleClose()
         return id
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const updateDoctorStatus = createAsyncThunk(
   'specialists/updateDoctorStatus',
   async ({ id, checked }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.patch(`/api/doctor/${id}?b=${checked}`)

         dispatch(getSpecialists())

         return { checked, id }
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

const searchSpecilaist = createAsyncThunk(
   'specialists/search',
   async ({ searchName, rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/doctor/doctors/search?word=${searchName}`,
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

const getDepartment = createAsyncThunk(
   'specialists/getDepartment',
   async ({ departmentName }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/doctor/byDepartment?facility=${departmentName}`
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const updateButton = createAsyncThunk(
   'specialists/updateButton',
   async ({ id, values }, { dispatch, rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.patch(
            `api/doctor?facility=${values.department}&id=${id}`,
            values
         )

         dispatch(getSpecialistById())
         return data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

export const SPECIALISTS_THUNK = {
   getSpecialists,
   deleteSpecialists,
   updateDoctorStatus,
   getSpecialistById,
   searchSpecilaist,
   getDepartment,
   updateButton,
}
