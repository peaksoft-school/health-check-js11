import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ROLES, ROUTES } from '../../../routes/routes'
import { axiosInstance } from '../../../configs/axiosInstance'

export const signUp = createAsyncThunk('auth/signUp', async (userData) => {
   try {
      const response = await axiosInstance.post('/api/auth/signUp', userData)

      return response.data
   } catch (error) {
      throw error.response.data
   }
})

const initialState = {
   accessToken: null,
   isAuth: false,
   role: ROLES.GUEST,
   userData: {},
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logIn: (state, { payload }) => {
         const { data, navigate } = payload

         state.isAuth = false
         state.role = data.role
         state.accessToken = data.token
         state.userData.email = data.email

         navigate(ROUTES[data.role].index)
      },

      logOut: (state) => {
         state = initialState
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(signUp.fulfilled, (state, action) => {
            state.isLoading = false
            state.role = action.payload.role
            state.userData = action.payload
            // console.log(state, 'fhdsahaklf')
            // console.log(action, 'action')
         })

         .addCase(signUp.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(signUp.pending, (state) => {
            state.isLoading = true
         })
   },
})

export const { logIn, logOut } = authSlice.actions
