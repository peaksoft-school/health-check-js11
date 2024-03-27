import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authSlice } from './slices/auth/authSlice'
import { scheduleSlice } from './slices/schedule/scheduleSlice'
import { patientsSlice } from './slices/patients/patientsSlice'
import { patientSlice } from './slices/patient/patientSlice'
import { applicationsSlice } from './slices/applications/aplicationsSlice'
import { onlineAppointmentsSlice } from './slices/online-appointments/onlineAppointmentsSlice'
import { profileSlice } from './slices/profie/profileSlice'
import { doctorSlice } from './slices/doctors/doctorSlice'
import { appointmentsSlice } from './slices/appointments/appointmentsSlice'
import { specialistsSlice } from './slices/specialists/specialistsSlice'
import { fileSlice } from './slices/file/fileSlice'

const rootReducer = combineReducers({
   [fileSlice.name]: fileSlice.reducer,
   [authSlice.name]: authSlice.reducer,
   [appointmentsSlice.name]: appointmentsSlice.reducer,
   [scheduleSlice.name]: scheduleSlice.reducer,
   [patientsSlice.name]: patientsSlice.reducer,
   [patientSlice.name]: patientSlice.reducer,
   [applicationsSlice.name]: applicationsSlice.reducer,
   [profileSlice.name]: profileSlice.reducer,
   [doctorSlice.name]: doctorSlice.reducer,
   [onlineAppointmentsSlice.name]: onlineAppointmentsSlice.reducer,
   [specialistsSlice.name]: specialistsSlice.reducer,
})

const persistConfig = {
   key: 'HEALTH_CHECK',
   storage,
   whitelist: ['auth', 'profile'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export const persistor = persistStore(store)
