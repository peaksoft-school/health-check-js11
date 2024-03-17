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
import { scheduleSlice } from './slices/schedule/scheduleSlice'
import { patientsSlice } from './slices/patients/patientsSlice'
import { patientSlice } from './slices/patient/patientSlice'
import { applicationSlice } from './slices/application/aplicationSlice'
import { onlineAppointmentsSlice } from './slices/online-appointments/onlineAppointmentsSlice'
import { profileSlice } from './slices/profie/profileSlice'
import { appointmentsSlice } from './slices/appointments/appointmentsSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [appointmentsSlice.name]: appointmentsSlice.reducer,
   [scheduleSlice.name]: scheduleSlice.reducer,
   [patientsSlice.name]: patientsSlice.reducer,
   [patientSlice.name]: patientSlice.reducer,
   [applicationSlice.name]: applicationSlice.reducer,
   [profileSlice.name]: profileSlice.reducer,
   [onlineAppointmentsSlice.name]: onlineAppointmentsSlice.reducer,
})

const persistConfig = {
   key: 'HEALTH_CHECK',
   storage,
   whitelist: ['auth', 'onlineAppointments', 'applications', 'profile'],
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
