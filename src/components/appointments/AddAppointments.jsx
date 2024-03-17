import React, { useState, useCallback } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { GoBackIcon, CloseIcon } from '../../assets/icons'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'
import { showToast } from '../../utils/helpers/notification'
import Drawer from '../UI/Drawer'
import Appointments from './Appointments'
import ChooseSpecialist from './ChooseSpecialist'
import ChooseDate from './ChooseDate'
import AppointmentsForm from './AppointmentsForm'
import Result from './Result'

const AddAppointments = ({ open, onClose }) => {
   const [currentPage, setCurrentPage] = useState('main')
   const [doctorInfo, setDoctorInfo] = useState('')
   const [facility, setFacility] = useState('')
   const [selectedDate, setSelectedDate] = useState(null)
   const [selectedTime, setSelectedTime] = useState('')
   const dispatch = useDispatch()

   const validate = facility && doctorInfo && selectedTime

   const changeFacilityHandler = (selectedOption) => {
      setFacility(selectedOption)

      if (selectedOption) {
         dispatch(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet(
               selectedOption.label
            )
         )
      } else {
         showToast({ message: 'Выберите услугу!', status: 'error' })
      }
   }

   const specialistHandler = useCallback(() => {
      if (facility) {
         setCurrentPage('specialist')
      } else {
         showToast({ message: 'Выберите услугу!', status: 'error' })
      }
   }, [facility])

   const datePageHandler = useCallback(() => {
      setCurrentPage('date')
   }, [])

   const formHandler = useCallback(() => {
      setCurrentPage('form')
   }, [])

   const goBack = useCallback(() => {
      setCurrentPage('main')
   }, [])

   const goBackAndClear = useCallback(() => {
      setCurrentPage('main')
      setFacility('')
      setDoctorInfo('')
      setSelectedDate(null)
      setSelectedTime('')
   }, [])

   const handlerClose = useCallback(() => {
      onClose()
      goBackAndClear()
   }, [onClose, goBackAndClear])

   const openLast = useCallback(() => {
      setCurrentPage('result')
   }, [])

   const renderPage = () => {
      switch (currentPage) {
         case 'main':
            return (
               <Appointments
                  value={facility.label}
                  doctorInfo={doctorInfo}
                  date={selectedTime}
                  selectHandler={changeFacilityHandler}
                  toggleSpecialist={specialistHandler}
                  toggleDate={datePageHandler}
                  setDoctorName={setDoctorInfo}
                  setDat={setSelectedTime}
                  validate={!!validate}
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
               <ChooseDate
                  selectedDate={selectedDate}
                  setTime={setSelectedTime}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                  formHandler={formHandler}
               />
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
            return <Result goBack={goBackAndClear} />
         default:
            return null
      }
   }

   return (
      <Drawer open={open} onClose={handlerClose}>
         <StyledDrawer>
            <Box className="header-box">
               {currentPage === 'main' || currentPage === 'result' ? (
                  <CloseIcon onClick={handlerClose} />
               ) : (
                  <GoBackIcon onClick={goBack} />
               )}
               <Box className="header">
                  <Typography className="title">
                     {currentPage === 'main' && 'Онлайн Запись'}
                     {currentPage === 'specialist' && 'Выбрать специалиста'}
                     {currentPage === 'date' && 'Выбрать дату и время'}
                     {currentPage === 'form' && 'Запись'}
                     {currentPage === 'result' && 'Онлайн Запись'}
                  </Typography>
               </Box>
               <Box> </Box>
            </Box>
            <StyledContainer>{renderPage()}</StyledContainer>
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
   marginTop: '20px',
}))
