import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   REGISTER,
   PURGE,
   PERSIST,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './slices/auth/authSlice'
import appointmentsSlice from './slices/online-appointments/appointmentsSlice'
import { addOnlineAppointmentsSlice } from './schedule/addOnlineAppointmentsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [addOnlineAppointmentsSlice.name]: addOnlineAppointmentsSlice.reducer,
   [appointmentsSlice.name]: appointmentsSlice.reducer,
})

const persistConfig = {
   key: 'HEALTH_CHECK',
   storage,
   whitelist: ['auth', 'Appointments'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
         },
      }),
})

export const persistor = persistStore(store)
