import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const BASE_URL = process.env.API_URL

export const getApplicationData = createAsyncThunk(
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
export const searchApplications = createAsyncThunk(
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

export const deleteApplicationById = createAsyncThunk(
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

export const updateApplication = createAsyncThunk(
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
// const deleteAllAplications = createAsyncThunk(
//    'application/deleteAll',
//    async (applicatio) => {
//       try{

//       }catch(error) {
//          trow new Error('Error deleting all apontments',error)
//       }
//    }
// )

export const applicationSlice = createSlice({
   name: 'data',
   initialState: {
      items: [],
      status: 'idle',
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getApplicationData.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getApplicationData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload
         })
         .addCase(getApplicationData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(deleteApplicationById.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(deleteApplicationById.fulfilled, (state, action) => {
            state.status = 'succeeded'
         })
         .addCase(deleteApplicationById.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(updateApplication.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(updateApplication.fulfilled, (state) => {
            state.error = false
         })
         .addCase(updateApplication.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(searchApplications.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(searchApplications.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.items = action.payload
         })
         .addCase(searchApplications.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export const applicationActions = applicationSlice.actions
