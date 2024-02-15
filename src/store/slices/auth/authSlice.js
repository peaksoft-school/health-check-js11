import { createSlice } from '@reduxjs/toolkit'
import { ROLES, ROUTES } from '../../../routes/routes'
import { authWithGoogle, forgotPassword, signIn, signUp } from './authThank'

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
      logIn: (state, { payload }) => {
         const { data, navigate } = payload

         state.isAuth = false
         state.role = data.role
         state.token = data.token
         state.email = data.email

         navigate(ROUTES[data.role].index)
      },

      logOut: (state) => {
         state = initialState
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(signUp.fulfilled, (state, { payload }) => {
            state.isLoading = false
            state.role = payload.role
            state.isAuth = true
            state.email = payload.email
         })

         .addCase(signUp.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(signUp.pending, (state) => {
            state.isLoading = true
         })

         .addCase(signIn.fulfilled, (state, { payload }) => {
            state.accessToken = payload.token
            state.role = payload.role
            state.email = payload.email
         })

         .addCase(signIn.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(signIn.pending, (state) => {
            state.isLoading = true
         })

         .addCase(forgotPassword.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
         })

         .addCase(forgotPassword.rejected, (state) => {
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

export const { logIn, logOut } = authSlice.actions
