import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import Drawer from '../UI/Drawer'
import { GoBackIcon, CloseIcon } from '../../assets/icons'
import Appointments from './Appointments'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'
import ChooseSpecialist from './ChooseSpecialist'
import ChooseDate from './ChooseDate'
import { showToast } from '../../utils/helpers/notification'
import AppointmentsForm from './AppointmentsForm'
import Registered from './Result'

const AddAppointments = ({ open, onClose }) => {
   const [main, setMain] = useState(true)
   const [result, setResult] = useState(false)
   const [specialist, setSpecialist] = useState(false)
   const [doctorInfo, setDoctorInfo] = useState('')
   const [date, setDate] = useState(false)
   const [form, setForm] = useState(false)
   const [facility, setFacility] = useState('')
   const [selectedDate, setSelectedDate] = useState(null)
   const [time, setTime] = useState('')

   const dispatch = useDispatch()

   const validate = facility && doctorInfo && time

   const changeFacilityHandler = (selectedOption) => {
      setFacility(selectedOption)

      if (selectedOption) {
         dispatch(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet(
               selectedOption.label
            )
         )
      } else {
         showToast({ message: 'выбурите услугу!', status: 'error' })
      }
   }

   const specialistHandler = () => {
      if (facility) {
         setMain((prev) => !prev)
         setSpecialist((prev) => !prev)
      } else {
         showToast({ message: 'выбурите услугу!', status: 'error' })
      }
   }

   const datePageHandler = () => {
      setMain(false)
      setForm(false)
      setDate(true)
   }

   const formHandler = () => {
      setDate(false)
      setMain(false)
      setForm(true)
   }

   const handlerClose = () => {
      onClose()
      setMain(true)
      setDoctorInfo('')
      setTime('')
      setResult(false)
      setFacility('')
   }

   const goBack = () => {
      setSpecialist(false)
      setForm(false)
      setDate(false)
      setMain(true)
      setResult(false)
   }

   const goBackAndClear = () => {
      setMain(true)
      setSpecialist(false)
      setDate(false)
      setResult(false)
      setTime('')
      setFacility('')
      setDoctorInfo('')
      setSelectedDate('')
      setForm(false)
   }

   const openLast = () => {
      setForm(false)
      setResult(true)
   }

   return (
      <Drawer open={open} onClose={onClose}>
         <StyledDrawer>
            <Box className="header-box">
               {main || result ? (
                  <CloseIcon onClick={handlerClose} />
               ) : (
                  <GoBackIcon onClick={goBack} />
               )}

               <Box className="header">
                  <Typography className="title">
                     {main && 'Онлайн Запись'}
                     {specialist && 'Выбрать специалиста'}
                     {date && 'Выбрать дату и время'}
                     {form && 'Запись'}
                     {result && 'Онлайн Запись'}
                  </Typography>
               </Box>

               <Box> </Box>
            </Box>

            <StyledContainer>
               {main && (
                  <Appointments
                     value={facility.label}
                     doctorInfo={doctorInfo}
                     date={time}
                     selectHandler={changeFacilityHandler}
                     toggleSpecialist={specialistHandler}
                     toggleDate={datePageHandler}
                     setDoctorName={setDoctorInfo}
                     setDat={setTime}
                     validate={!!validate}
                     openForm={formHandler}
                  />
               )}

               {specialist && (
                  <ChooseSpecialist
                     setDoctorName={setDoctorInfo}
                     goBack={goBack}
                     setTime={setTime}
                  />
               )}

               {date && (
                  <ChooseDate
                     selectedDate={selectedDate}
                     setTime={setTime}
                     setSelectedDate={setSelectedDate}
                     selectedTime={time}
                     setSelectedTime={setTime}
                     formHandler={formHandler}
                  />
               )}

               {form && (
                  <AppointmentsForm
                     doctorInfo={doctorInfo}
                     facility={facility.label}
                     time={time}
                     date={selectedDate}
                     open={openLast}
                  />
               )}

               {result && <Registered goBack={goBackAndClear} />}
            </StyledContainer>
         </StyledDrawer>
      </Drawer>
   )
}

export default AddAppointments

const StyledDrawer = styled(Box)(() => ({
   '& .header-box': {
      display: 'flex',
      boxSizing: 'content-box',
      padding: '15px',
      background: '#fff',
      justifyContent: 'space-between',
   },

   '& .header': {
      alignItems: 'center',
      display: 'flex',

      '& .title': {
         fontFamily: 'Manrope',
         fontWeight: '700',
         color: '#048741',
      },
   },
}))

const StyledContainer = styled(Box)(() => ({
   height: '100vh',
   maginTop: '20px',
}))
