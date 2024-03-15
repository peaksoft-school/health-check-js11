import { useEffect, useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Drawer from '../UI/Drawer'
import { GoBackIcon, CloseIcon } from '../../assets/icons'
import OnlineAppointmentsContent from './OnlineAppointmentsContent'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'
import ChoseSpecialist from './ChoseSpecialist'
import ChooseDatePage from './ChooseDatePage'
import { showToast } from '../../utils/helpers/notification'
import Form from './Form'

const AddOnlineAppointments = ({ open, onClose }) => {
   const [mainPage, setMainPage] = useState(true)
   const [specialistPage, setSpecialistPage] = useState(false)
   const [doctorInfo, setDoctorInfo] = useState('')
   const [datePage, setDatePage] = useState(false)
   const [formPage, setFormPage] = useState(false)
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

   const specialistPafwHandler = () => {
      if (facility) {
         setMainPage((prev) => !prev)
         setSpecialistPage((prev) => !prev)
      } else {
         showToast({ message: 'выбурите услугу!', status: 'error' })
      }
   }

   const datePageHandler = () => {
      setMainPage(false)
      setFormPage(false)
      setDatePage(true)
   }

   const formPageHandler = () => {
      setDatePage(false)
      setMainPage(false)
      setFormPage(true)
   }

   const goBack = () => {
      setSpecialistPage(false)
      setFormPage(false)
      setDatePage(false)
      setMainPage(true)
   }

   return (
      <Drawer open={open} onClose={onClose}>
         <StyledDrawer>
            <div className="header-box">
               {mainPage ? (
                  <CloseIcon onClick={onClose} />
               ) : (
                  <GoBackIcon onClick={goBack} />
               )}

               <div className="header">
                  <Typography className="title">
                     {mainPage && 'Онлайн Запись'}
                     {specialistPage && 'Выбрать специалиста'}
                     {datePage && 'Выбрать дату и время'}
                     {formPage && 'Запись'}
                  </Typography>
               </div>
            </div>

            <StyledContainer>
               {mainPage && (
                  <OnlineAppointmentsContent
                     value={facility.label}
                     doctorName={doctorInfo}
                     date={time}
                     selectHandler={changeFacilityHandler}
                     toggleSpecialist={specialistPafwHandler}
                     toggleDate={datePageHandler}
                     setDoctorName={setDoctorInfo}
                     setDat={setTime}
                     validate={!!validate}
                     openForm={formPageHandler}
                  />
               )}

               {specialistPage && (
                  <ChoseSpecialist
                     setDoctorName={setDoctorInfo}
                     goBack={goBack}
                     setTime={setTime}
                  />
               )}

               {datePage && (
                  <ChooseDatePage
                     selectedDate={selectedDate}
                     setTime={setTime}
                     setSelectedDate={setSelectedDate}
                     selectedTime={time}
                     setSelectedTime={setTime}
                     formPageHandler={formPageHandler}
                  />
               )}
               {formPage && (
                  <Form
                     doctorInfo={doctorInfo}
                     facility={facility.label}
                     time={time}
                     date={selectedDate}
                  />
               )}
            </StyledContainer>
         </StyledDrawer>
      </Drawer>
   )
}

export default AddOnlineAppointments

const StyledDrawer = styled('div')(() => ({
   background: ' #F3F1F1',
   '& .header-box': {
      display: 'flex',
      boxSizing: 'content-box',
      padding: '10px',
      background: '#fff',
   },

   '& .header': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& .title': {
         margin: '0 0 0 75px ',
         fontFamily: 'Manrope',
         fontStyle: 'normal',
         fontWeight: '700',
         fontSize: '16px',
         color: '#048741',
      },
   },
}))

const StyledContainer = styled(Box)(() => ({
   height: '100vh',
   maginTop: '20px',
}))
