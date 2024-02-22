import { createSlice } from '@reduxjs/toolkit'
import { ROLES, ROUTES } from '../../routes/routes'

const initialState = {
   accessToken: null,
   isAuth: false,
   role: ROLES.GUEST,
   email: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,

   reducers: {
      logIn: (state, { payload }) => {
         const { data, navigate } = payload

         state.isAuth = true
         state.role = data.role
         state.accessToken = data.token
         state.email = data.email

         navigate(ROUTES[data.role].index)
      },

      logOut: (state) => {
         state = initialState
      },
   },
})

export const { logIn, logOut } = authSlice.actions
