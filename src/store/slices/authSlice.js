import { createSlice } from '@reduxjs/toolkit'
import { routes } from '../../utils/constants'

const initialState = {
   accessToken: null,
   isAuth: false,
   role: null,
   email: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,

   reducers: {
      loginAction(state, { payload }) {
         const { data, navigate } = payload
         state.isAuth = true
         state.role = data.role
         state.accessToken = data.token
         state.email = data.email
         navigate(routes[data.role].index)
      },

      logoutAction(state) {
         state = initialState
      },
   },
})

export const { loginAction, logoutAction } = authSlice.actions
export const getIsAuthorized = (state) => state.login
