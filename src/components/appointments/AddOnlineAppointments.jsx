import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import Drawer from '../UI/Drawer'
import { GoBackIcon, CloseIcon } from '../../assets/icons'
import OnlineAppointmentsContent from './OnlineAppointmentsContent'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'
import { DEPARTMENTS } from '../../utils/constants'

const AddOnlineAppointments = ({ open, onClose }) => {
   const [mainPage, setMainPage] = useState(true)
   const [specialistTimePage, setSpecialistTimePage] = useState(false)
   const [specialistPage, setSpecialistPage] = useState(false)
   const [datePage, setDatePage] = useState(false)
   const [formPage, setFormPage] = useState(false)
   const [registeredPage, setRegisteredPage] = useState(false)
   const [selectedDoctorId, setSelectedDoctorId] = useState(null)
   const [service, setService] = useState('')
   const [selectedService, setSelectedService] = useState('')

   const dispatch = useDispatch()

   const openChooseSpecialist = () => {
      if (service) {
         setMainPage(false)
         setSpecialistPage(true)
      } else {
         // showToast('Для начала выберите услугу', 'error')
      }
   }

   const serviceChangeHandler = (e) => {
      const selectedService = e.target.value
      setService(selectedService)
      const selectedServiceObject = DEPARTMENTS.find(
         (service) => service.id === selectedService
      )

      console.log(selectedServiceObject, 'e')

      setSelectedService(selectedServiceObject.title)
      if (selectedServiceObject) {
         const departmentId = selectedServiceObject.id
         dispatch(
            ONLINE_APPOINTMENTS_THUNKS.getDoctorsByFacility({ departmentId })
         )
      } else {
         console.log('hello')
      }
   }

   const openChooseSpecialistTime = ({ id }) => {
      setSpecialistPage(false)
      dispatch(
         ONLINE_APPOINTMENTS_THUNKS.getDoctorsAvailableTimesheet({
            doctorId: id,
         })
      )
      setSpecialistTimePage(true)
      setSelectedDoctorId(id)
   }

   return (
      <Drawer open={open} onClose={onClose}>
         <StyledDrawer>
            <div className="header-box">
               {mainPage ? (
                  <CloseIcon onClick={onClose} />
               ) : (
                  <GoBackIcon
                  //    onClick={specialistTimePage ? goBackInSpecialists : goBack}
                  />
               )}

               <div className="header">
                  <Typography className="title">
                     {mainPage && 'Онлайн Запись'}
                     {specialistPage && 'Выбрать специалиста'}
                     {specialistTimePage && 'Выбрать дату и время'}
                     {datePage && 'Выбрать дату и время'}
                     {formPage && 'Запись'}
                     {registeredPage && 'Онлайн Запись'}
                  </Typography>
               </div>
            </div>

            <StyledContainer>
               {mainPage && (
                  <OnlineAppointmentsContent
                     service={service}
                     // specialist={specialist}
                     openChooseSpecialist={openChooseSpecialist}
                     serviceChangeHandler={serviceChangeHandler}
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
