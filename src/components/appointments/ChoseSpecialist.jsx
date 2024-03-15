import { styled, Typography, Box, Rating } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { UsersIcon } from '../../assets/icons'
import Button from '../UI/Button'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'

const ChoseSpecialist = ({ goBack, setDoctorName, setTime }) => {
   const { doctorsTimesheet } = useSelector((state) => state.onlineAppointments)

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

   const getDoctorName = ({ name, time, id, date }) => {
      goBack()
      setDoctorName({ name, id, date })
      setTime(time)
      dispatch(
         ONLINE_APPOINTMENTS_THUNKS.getDoctorSchedule({
            id,
            startDate,
            endDate,
         })
      )
   }

   return (
      <StyledContainer>
         <StyledButton variant="grey">
            <UsersIcon /> <Typography>Любой свободный специалист</Typography>
         </StyledButton>

         <Box className="doctors">
            {doctorsTimesheet?.map((doctor) => (
               <Box key={doctor.doctorId} className="doctor">
                  <Box className="first-part">
                     <img
                        className="image"
                        src={doctor.imageDoctor}
                        alt="doc"
                     />

                     <Box>
                        <Typography>{doctor.doctorFullName}</Typography>
                        <Typography className="facility">
                           {doctor.department}
                        </Typography>

                        <Box className="rating-box">
                           <Rating className="rating" value={5} readOnly />
                           166
                        </Box>
                     </Box>
                  </Box>

                  <Typography>
                     ближайшее время для записи {startDate}
                  </Typography>

                  <Box className="times-box">
                     {doctor.startTimeOfConsultation.map((time) => {
                        const appointmentTime = time.slice(0, 5)

                        return (
                           <StyledTimeButton
                              key={time}
                              onClick={() => {
                                 getDoctorName({
                                    name: doctor.doctorFullName,
                                    id: doctor.doctorId,
                                    time: appointmentTime,
                                    date: doctor.dateOfConsultation,
                                 })
                              }}
                              variant="grey"
                           >
                              {appointmentTime}
                           </StyledTimeButton>
                        )
                     })}
                  </Box>
               </Box>
            ))}
         </Box>
      </StyledContainer>
   )
}

export default ChoseSpecialist

const StyledContainer = styled(Box)(({ theme }) => ({
   marginTop: '20px',

   '& .doctors': {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '10px ',

      '& > .doctor': {
         padding: '10px 20px',
         borderRadius: '20px',
         border: `1px solid ${theme.palette.secondary.lightGrey}`,
         backgroundColor: 'white',
         display: 'flex',
         flexDirection: 'column',
         gap: '10px',

         '& > .first-part': {
            '& > .image': {
               width: '40px',
               alignSelf: 'start',
               height: '40px',
            },

            '& .facility': {
               fontFamily: 'Manrope',
               fontSize: '14px',
               color: theme.palette.secondary.lightGrey,
            },

            display: 'flex',
            alignItems: 'center',
            gap: '10px',
         },
      },
   },

   '& .times-box': {
      width: '300px ',
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      backgroundColor: theme.palette.primary.main,
      border: 'none',

      '&:hover': {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.secondary.lightGrey,
         border: 'none',
      },
   },

   '& > div': {
      display: 'flex',
      alignItems: 'center',
   },
}))

const StyledTimeButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      padding: '5px 0',
      width: '91px',
      borderRadius: '1.5rem',
      height: '33px',
      margin: '4px',
      fontSize: '10px',
   },

   '&:active': {
      borderRadius: '1.5rem',
   },

   '&:hover': {
      borderRadius: '1.5rem',
   },
}))
