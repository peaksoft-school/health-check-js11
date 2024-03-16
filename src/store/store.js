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
import { applicationSlice } from './slices/application/aplicationSlice'
import { addScheduleSlice } from './slices/schedule/addScheduleSlice'
import { appointmentsSlice } from './slices/online-appointments/appointmentsSlice'
import { profileSlice } from './slices/profie/profileSlice'
import { specialistsSlice } from './slices/specialistsSlice/specialistsSlice'
import { addNoteSlice } from './slices/addNote/AddNoteSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [addScheduleSlice.name]: addScheduleSlice.reducer,
   [appointmentsSlice.name]: appointmentsSlice.reducer,
   [patientsSlice.name]: patientsSlice.reducer,
   [patientSlice.name]: patientSlice.reducer,
   [applicationSlice.name]: applicationSlice.reducer,
   [profileSlice.name]: profileSlice.reducer,
   [specialistsSlice.name]: specialistsSlice.reducer,
   [addNoteSlice.name]: addNoteSlice.reducer,
})

const persistConfig = {
   key: 'HEALTH_CHECK',
   storage,
   whitelist: ['auth', 'appointments', 'applications', 'profile'],
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
