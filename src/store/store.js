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
import { patientsSlice } from './slices/patients/patientsSlice'
import { patientSlice } from './slices/patient/patientSlice'
import { addScheduleSlice } from './slices/schedule/addScheduleSlice'
import { appointmentsSlice } from './slices/online-appointments/appointmentsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [addScheduleSlice.name]: addScheduleSlice.reducer,
   [appointmentsSlice.name]: appointmentsSlice.reducer,
   [patientsSlice.name]: patientsSlice.reducer,
   [patientSlice.name]: patientSlice.reducer,
})

const persistConfig = {
   key: 'HEALTH_CHECK',
   storage,
   whitelist: ['auth', 'Appointments', 'patients'],
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
