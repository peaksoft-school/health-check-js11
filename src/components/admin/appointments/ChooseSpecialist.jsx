import { styled, Typography, Box, CircularProgress } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { UsersIcon } from '../../../assets/icons'
import Button from '../../UI/Button'
import SpecialistCard from './SpecialistCard'
import { APPOINTMENTS_THUNKS } from '../../../store/slices/appointments/appointmentsThunk'

const ChooseSpecialist = ({ goBack, setDoctorName, setTime }) => {
   const { doctorsTimesheet, isLoading } = useSelector(
      (state) => state.appointments
   )
   const dispatch = useDispatch()

   const currentDate = new Date()
   const currentYear = currentDate.getFullYear()
   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0')

   const targetDate = new Date(currentYear, currentDate.getMonth() + 5, 1)
   const targetYear = targetDate.getFullYear()
   const targetMonth = (targetDate.getMonth() + 1).toString().padStart(2, '0')

   const startDate = `${currentYear}-${currentMonth}-01`
   const endDate = `${targetYear}-${targetMonth}-${new Date(
      targetYear,
      targetDate.getMonth() + 1,
      0
   ).getDate()}`

   const getRandomDoctor = () => {
      const doctor =
         doctorsTimesheet[Math.floor(Math.random() * doctorsTimesheet.length)]
      const firstAppointmentTime = doctor.startTimeOfConsultation[0]

      setTime(firstAppointmentTime)
      goBack()
      setDoctorName({ doctor })

      dispatch(
         APPOINTMENTS_THUNKS.getDoctorSchedule({
            id: doctor.doctorId,
            startDate,
            endDate,
         })
      )
   }

   const getDoctorName = ({ time, id, doctor }) => {
      goBack()
      setDoctorName({ doctor })
      setTime(time)
      dispatch(
         APPOINTMENTS_THUNKS.getDoctorSchedule({
            id,
            startDate,
            endDate,
         })
      )
   }

   const formatDates = (dateString) => {
      const options = {
         day: 'numeric',
         month: 'long',
         weekday: 'short',
      }

      const date = new Date(dateString)
      return date.toLocaleDateString('ru-RU', options)
   }

   const updatedDoctorsTimesheet = doctorsTimesheet.map((doctor) => ({
      ...doctor,
      costomId: Math.random(),
   }))

   const loadingMessage = () => {
      return isLoading ? (
         <StyledLoading />
      ) : (
         <Typography>Нет доступных докторов для этой услуги</Typography>
      )
   }

   return (
      <StyledContainer>
         {doctorsTimesheet.length > 0 ? (
            <>
               <StyledButton onClick={getRandomDoctor} variant="grey">
                  <UsersIcon />
                  <Typography> Любой свободный специалист</Typography>
                  <span> </span>
               </StyledButton>

               <Box className="doctors">
                  {updatedDoctorsTimesheet?.map((doctor) => (
                     <SpecialistCard
                        key={doctor.costomId}
                        doctor={doctor}
                        getDoctorName={getDoctorName}
                        formatDates={formatDates}
                     />
                  ))}
               </Box>
            </>
         ) : (
            loadingMessage()
         )}
      </StyledContainer>
   )
}

export default ChooseSpecialist

const StyledContainer = styled(Box)(() => ({
   marginTop: '1.25rem',
   padding: '7px',

   '& .doctors': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      padding: '0.625rem ',
   },

   '& p': {
      fontFamily: 'Manrope',
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      backgroundColor: theme.palette.primary.main,
      border: 'none',
      width: '100%',

      '&:hover': {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.secondary.lightGrey,
         border: 'none',
      },
   },

   '& > div': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',

      '& > p ': {
         fontFamily: 'Manrope',
      },
   },
}))

const StyledLoading = styled(CircularProgress)(() => ({
   position: 'absolute',
   bottom: 260,
   left: 140,
   color: '#1c8b5a',
   width: '100px !important',
   height: '100px !important',
   zIndex: 10000,
}))
