import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { GoBackIcon, CloseIcon } from '../../../assets/icons'
import { APPOINTMENTS_THUNKS } from '../../../store/slices/appointments/appointmentsThunk'
import { showToast } from '../../../utils/helpers/notification'
import Drawer from '../../UI/Drawer'
import Appointments from './Appointments'
import ChooseSpecialist from './ChooseSpecialist'
import ChooseDate from './ChooseDate'
import AppointmentsForm from './AppointmentsForm'
import Result from './Result'
import Button from '../../UI/Button'
import { APPOINTMENTS_ACTIONS } from '../../../store/slices/appointments/appointmentsSlice'

const AddAppointments = ({ open, onClose }) => {
   const [currentPart, setCurrentPart] = useState('main')
   const [doctorInfo, setDoctorInfo] = useState('')
   const [facility, setFacility] = useState('')
   const [selectedDate, setSelectedDate] = useState(null)
   const [selectedTime, setSelectedTime] = useState('')

   const dispatch = useDispatch()

   const isFilled = facility && doctorInfo && selectedTime

   const changeFacilityHandler = (selectedOption) => {
      setFacility(selectedOption)

      if (selectedOption)
         dispatch(
            APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet(
               selectedOption.label
            )
         )
      else showToast({ message: 'Выберите услугу!', status: 'error' })
   }

   const specialistHandler = () => {
      if (facility) setCurrentPart('specialist')
      else showToast({ message: 'Выберите специалиста!', status: 'error' })
   }

   const datePageHandler = () => {
      if (doctorInfo) setCurrentPart('date')
      else showToast({ message: 'Выберите доктора!', status: 'error' })
   }

   const formHandler = () => setCurrentPart('form')

   const goBack = () => setCurrentPart('main')

   const goBackAndClear = () => {
      setCurrentPart('main')
      setFacility('')
      setDoctorInfo('')
      setSelectedDate(null)
      setSelectedTime('')
      onClose()
   }

   const goBackAndClearCode = () => {
      setCurrentPart('main')
      dispatch(APPOINTMENTS_ACTIONS.goBackClearCode())
   }

   const closeHandler = () => {
      onClose()
      goBackAndClear()
   }

   const openLast = () => setCurrentPart('result')

   const renderPart = () => {
      switch (currentPart) {
         case 'main':
            return (
               <Appointments
                  value={facility.label}
                  doctorInfo={doctorInfo}
                  time={selectedTime}
                  date={selectedDate}
                  selectHandler={changeFacilityHandler}
                  toggleSpecialist={specialistHandler}
                  toggleDate={datePageHandler}
                  setDoctorName={setDoctorInfo}
                  setDat={setSelectedTime}
                  validate={!!isFilled}
                  openForm={formHandler}
               />
            )

         case 'specialist':
            return (
               <ChooseSpecialist
                  setDoctorName={setDoctorInfo}
                  goBack={goBack}
                  setTime={setSelectedTime}
               />
            )

         case 'date':
            return (
               <>
                  <ChooseDate
                     selectedDate={selectedDate}
                     setTime={setSelectedTime}
                     setSelectedDate={setSelectedDate}
                     selectedTime={selectedTime}
                     setSelectedTime={setSelectedTime}
                  />

                  <StyledButton className="button" onClick={formHandler}>
                     Продолжить
                  </StyledButton>
               </>
            )

         case 'form':
            return (
               <AppointmentsForm
                  doctorInfo={doctorInfo}
                  facility={facility.label}
                  time={selectedTime}
                  date={selectedDate}
                  open={openLast}
               />
            )

         case 'result':
            return <Result />

         default:
            return 'main'
      }
   }

   return (
      <Drawer open={open} onClose={closeHandler}>
         <StyledDrawer>
            <Box className="header-box">
               {currentPart === 'main' || currentPart === 'result' ? (
                  <CloseIcon className="close" onClick={closeHandler} />
               ) : (
                  <GoBackIcon className="close" onClick={goBackAndClearCode} />
               )}

               <Box className="header">
                  <Typography className="title">
                     {currentPart === 'main' && 'Онлайн Запись'}
                     {currentPart === 'specialist' && 'Выбрать специалиста'}
                     {currentPart === 'date' && 'Выбрать дату и время'}
                     {currentPart === 'form' && 'Запись'}
                     {currentPart === 'result' && 'Онлайн Запись'}
                  </Typography>
               </Box>

               <Box> </Box>
            </Box>

            <Box className="content">{renderPart()}</Box>
         </StyledDrawer>
      </Drawer>
   )
}

export default AddAppointments

const StyledDrawer = styled(Box)(({ theme }) => ({
   '& > .header-box': {
      display: 'flex',
      boxSizing: 'content-box',
      background: theme.palette.primary.main,
      padding: '0.938rem',
      justifyContent: 'space-between',

      '& svg': {
         cursor: 'pointer',
      },

      '& > .header': {
         alignItems: 'center',
         display: 'flex',

         '& .title': {
            fontFamily: 'Manrope',
            fontWeight: '700',
            color: '#048741',
         },
      },
   },

   '& > .content': {
      height: '100%',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '92%',
      margin: '15px ',
      height: '2.5rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))
