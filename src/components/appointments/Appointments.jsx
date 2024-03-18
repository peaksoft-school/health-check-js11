import { useCallback } from 'react'
import { styled, Box, Typography, Rating } from '@mui/material'
import { useSelector } from 'react-redux'
import { CalendarWithDotsIcon, DeleteIcon, UsersIcon } from '../../assets/icons'
import Select from '../UI/Select'
import Button from '../UI/Button'

const Appointments = ({
   toggleSpecialist,
   toggleDate,
   selectHandler,
   doctorInfo,
   time,
   setDoctorName,
   openForm,
   validate,
   value,
   date,
   setDat,
}) => {
   const { facilityArray } = useSelector((state) => state.appointments)

   const getfacility = facilityArray?.map((facility) => ({
      value: facility.id,
      label: facility.facility,
   }))

   const appointmentTime = time ? time.slice(0, 5) : ''

   const formatDates = useCallback((dateString) => {
      const options = {
         day: 'numeric',
         month: 'long',
         weekday: 'long',
      }

      const date = new Date(dateString)
      return date.toLocaleDateString('ru-RU', options)
   }, [])

   const deleteDateHandler = () => setDat('')

   const deleteDoctorHandler = () => {
      setDat('')
      setDoctorName('')
   }

   return (
      <StyledContainer>
         <StyledSelect
            variant="appointments"
            placeholder={value || 'Выбрать услуги'}
            options={getfacility}
            value={getfacility}
            icon={<DeleteIcon />}
            onChange={selectHandler}
         />

         {doctorInfo ? (
            <Box className="first-part">
               <img
                  className="image"
                  src={doctorInfo.doctor.imageDoctor}
                  alt="doctor"
               />

               <Box onClick={toggleSpecialist} className="doctor-info">
                  <Typography className="doctor-name">
                     {doctorInfo.doctor.doctorFullName}
                  </Typography>

                  <Typography className="facility">
                     {doctorInfo.doctor.department}
                  </Typography>

                  <Box className="rating-box">
                     <Rating size="small" value={5} readOnly />

                     <Typography className="reviews" variant="span">
                        166
                     </Typography>
                  </Box>
               </Box>

               <DeleteIcon onClick={deleteDoctorHandler} />
            </Box>
         ) : (
            <StyledButton onClick={toggleSpecialist} variant="grey">
               <>
                  <UsersIcon className="icon" />
                  <Typography>Выбрать специалиста</Typography>
               </>
            </StyledButton>
         )}

         {time ? (
            <Box className="time">
               <StyledButton onClick={toggleDate} variant="grey">
                  <CalendarWithDotsIcon className="icon" />
                  <Box className="date-box">
                     <Box className="date-content">
                        <Typography className="date">
                           {formatDates(
                              date || doctorInfo.doctor.dateOfConsultation
                           )}
                        </Typography>
                        <Typography>{appointmentTime}</Typography>
                     </Box>
                  </Box>
               </StyledButton>
               <DeleteIcon className="delete" onClick={deleteDateHandler} />
            </Box>
         ) : (
            <StyledButton onClick={toggleDate} variant="grey">
               <CalendarWithDotsIcon className="icon" />
               <Typography>Выбрать дату и время</Typography>
            </StyledButton>
         )}

         {validate && (
            <StyledButtonContinue onClick={openForm}>
               Продолжить
            </StyledButtonContinue>
         )}
      </StyledContainer>
   )
}

export default Appointments

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '7px',
   marginTop: '10px',
   display: 'flex',
   flexDirection: 'column',
   gap: '0.938rem',

   '& .time': {
      width: '100%',
      display: 'flex',
      gap: '3.75rem',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '0.938rem',
   },

   '& .delete': {
      marginLeft: '2.4rem',
   },

   '& .first-part': {
      backgroundColor: 'white',
      borderRadius: '0.938rem',
      boxSizing: 'content-box',
      padding: '0.313rem',

      '& img': {
         marginLeft: '0.75rem',
         marginRight: '0.75rem',
         borderRadius: '50%',
         width: '2.5rem',
         alignSelf: 'start',
         height: '2.5rem',
      },

      '& .doctor-info': {
         marginRight: '8.125rem',
         display: 'flex',
         width: 'auto',
         flexDirection: 'column',
         alignItems: 'start',

         svg: {
            marginRight: '0',
         },
      },

      '& .doctor-name': {
         fontSize: '14px',
      },

      '& .rating-box': {
         display: 'flex',
         alignIntems: 'center',
         gap: '0.75rem',

         '& > .reviews': {
            fontFamily: 'Manrope',
            fontSize: '14px',
            color: '#707070',
         },
      },

      '& .facility': {
         fontFamily: 'Manrope',
         fontSize: '9px',
         color: theme.palette.secondary.lightGrey,
      },

      display: 'flex',
      alignItems: 'center',
   },

   '& .date-box': {
      display: 'flex',
      justifyContent: 'space-between',

      '& > .date-content': {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'start',

         '& .date': {
            fontSize: '14px',
            fontFamily: 'Manrope',
            color: theme.palette.secondary.lightGrey,
         },
      },
   },
}))

const StyledButtonContinue = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '100%',
      marginTop: '10px',
      height: '2.75rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      '& div': {
         display: 'flex',
         alignItems: 'center',
         width: '100%',

         '& .icon': {
            marginRight: '20px',
         },
      },

      height: '100%',
      color: 'black',
      backgroundColor: theme.palette.primary.main,
      border: 'none',

      '&:hover': {
         color: 'black',
         backgroundColor: theme.palette.primary.main,
         border: 'none',
      },
   },
}))

const StyledSelect = styled(Select)(({ theme }) => ({
   backroungColor: 'white',

   '& .MuiSelect-select': {
      display: 'flex',
      marginLeft: '2.5rem',
      border: 'none',
      padding: '1.25rem',
      color: 'black',
   },

   '& #react-select-3-placeholder': {
      color: theme.palette.primary.lightBlack,
   },

   '& svg': {
      fill: theme.palette.primary.darkGrey,
   },
}))