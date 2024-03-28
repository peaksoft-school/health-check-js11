import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../../routes/routes'
import {
   authWithGoogle,
   changePassword,
   forgotPassword,
   signIn,
   signUp,
} from './authThunk'

const initialState = {
   isLoading: false,
   isAuth: false,
   role: ROLES.GUEST,
   email: null,
   accessToken: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,

   reducers: {
      logOut: (state, { payload }) => {
         state.isLoading = false
         state.accessToken = null
         state.isAuth = false
         state.role = ROLES.GUEST
         state.email = null

         localStorage.removeItem('HEALTH_CHECK')
         payload.navigate('/')
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(signUp.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.role = payload.role
            state.isAuth = true
            state.accessToken = payload.token
            state.email = payload.email
         })

         .addCase(signUp.pending, (state) => {
            state.isLoading = true
         })

         .addCase(signUp.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(signIn.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.accessToken = payload.token
            state.role = payload.role
            state.isAuth = true
            state.email = payload.email
         })

         .addCase(signIn.pending, (state) => {
            state.isLoading = true
         })

         .addCase(signIn.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(forgotPassword.fulfilled, (state, { payload }) => {
            state.isLoading = false
            localStorage.setItem(
               'changePasswordToken',
               payload.data.messageCode
            )
         })

         .addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
         })

         .addCase(forgotPassword.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(changePassword.fulfilled, (state, { payload }) => {
            const { email, role, token } = payload.data
            state.isLoading = false
            state.accessToken = token
            state.isAuth = true
            state.role = role
            state.email = email
         })

         .addCase(changePassword.pending, (state) => {
            state.isLoading = true
         })

         .addCase(changePassword.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(authWithGoogle.fulfilled, (state, { payload }) => {
            const { role, token, email } = payload.data
            state.isLoading = false
            state.accessToken = token
            state.isAuth = true
            state.role = role
            state.email = email
         })

         .addCase(authWithGoogle.pending, (state) => {
            state.isLoading = true
         })

         .addCase(authWithGoogle.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const { logOut } = authSlice.actions
