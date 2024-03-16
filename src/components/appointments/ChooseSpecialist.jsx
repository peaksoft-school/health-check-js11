import { useState } from 'react'
import { styled, Typography, Box, Rating } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { UsersIcon } from '../../assets/icons'
import Button from '../UI/Button'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'

const ChooseSpecialist = ({ goBack, setDoctorName, setTime }) => {
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

   const getDoctorName = ({ time, id, doctor }) => {
      goBack()
      setDoctorName({ doctor })
      setTime(time)
      dispatch(
         ONLINE_APPOINTMENTS_THUNKS.getDoctorSchedule({
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

   return (
      <StyledContainer>
         <StyledButton variant="grey">
            <UsersIcon /> <Typography>Свободные специалисты</Typography>
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
                           <Rating size="small" value={5} readOnly />
                           <Typography className="reviews" variant="span">
                              166
                           </Typography>
                        </Box>
                     </Box>
                  </Box>

                  <Typography className="date">
                     ближайшее время для записи <span> </span>
                     {formatDates(doctor.dateOfConsultation)}:
                  </Typography>

                  <Box className="times-box">
                     {doctor.startTimeOfConsultation.map((time) => {
                        const appointmentTime = time.slice(0, 5)

                        return (
                           <StyledTimeButton
                              key={time}
                              onClick={() => {
                                 getDoctorName({
                                    doctor,
                                    id: doctor.doctorId,
                                    time: appointmentTime,
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

export default ChooseSpecialist

const StyledContainer = styled(Box)(({ theme }) => ({
   marginTop: '20px',
   padding: '7px',

   '& .doctors': {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '10px ',

      '& .date': {
         fontFamily: 'Manrope',
         color: theme.palette.primary.darkGrey,
      },

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
               borderRadius: '50%',
               width: '50px',
               alignSelf: 'start',
               height: '50px',
            },

            '& .rating-box': {
               display: 'flex',
               alignIntems: 'center',
               gap: '8px',

               '& > .reviews': {
                  fontFamily: 'Manrope',
                  fontSize: '14px',
                  color: '#707070',
               },
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

const Users = styled('span')(() => ({}))
