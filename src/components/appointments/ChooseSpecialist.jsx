import { useCallback } from 'react'
import { styled, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { UsersIcon } from '../../assets/icons'
import Button from '../UI/Button'
import SpecialistCard from './SpecialistCard'
import { APPOINTMENTS_THUNKS } from '../../store/slices/appointments/appointmentsThunk'

const ChooseSpecialist = ({ goBack, setDoctorName, setTime }) => {
   const { doctorsTimesheet } = useSelector((state) => state.appointments)
   const dispatch = useDispatch()

   const currentDate = new Date()
   const currentYear = currentDate.getFullYear()
   const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0')

   const startDate = `${currentYear}-${currentMonth}-01`
   const endDate = `${currentYear}-${currentMonth}-${new Date(
      currentYear,
      currentDate.getMonth() + 1,
      0
   ).getDate()}`

   const getRandomDoctor = useCallback(() => {
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
   }, [doctorsTimesheet, goBack, setDoctorName, setTime])

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

   const formatDates = useCallback((dateString) => {
      const options = {
         day: 'numeric',
         month: 'long',
         weekday: 'short',
      }

      const date = new Date(dateString)
      return date.toLocaleDateString('ru-RU', options)
   }, [])

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
                  {doctorsTimesheet?.map((doctor) => (
                     <SpecialistCard
                        key={doctor.doctorId}
                        doctor={doctor}
                        getDoctorName={getDoctorName}
                        formatDates={formatDates}
                     />
                  ))}
               </Box>
            </>
         ) : (
            <Typography>Нет доступных докторов для этой услуги</Typography>
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
