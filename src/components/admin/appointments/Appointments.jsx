import { styled, Box, Avatar, Typography, Rating } from '@mui/material'
import { useSelector } from 'react-redux'
import {
   CalendarWithDotsIcon,
   DeleteIcon,
   UsersIcon,
} from '../../../assets/icons'
import Select from '../../UI/Select'
import Button from '../../UI/Button'
import { containsTheHTTPS, formatDates } from '../../../utils/helpers'
import { NotSpecialistImage } from '../../../assets/images'

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
   const { facilities } = useSelector((state) => state.appointments)

   const transformedFacilities = facilities?.map(({ id, facility }) => ({
      value: id,
      label: facility,
   }))

   const appointmentTime = time ? time.slice(0, 5) : ''

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
            options={transformedFacilities}
            value={transformedFacilities}
            icon={<DeleteIcon />}
            onChange={selectHandler}
         />

         {doctorInfo ? (
            <Box className="first-part">
               <Box className="info">
                  {containsTheHTTPS(doctorInfo.doctor.imageDoctor) ? (
                     <Avatar
                        className="image"
                        src={doctorInfo.doctor.imageDoctor}
                        alt="doctor"
                     />
                  ) : (
                     <Avatar
                        className="image"
                        src={NotSpecialistImage}
                        alt="doctor"
                     />
                  )}

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

   '& > .time': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '0.938rem',

      '& >.delete': {
         marginRight: '15px',
      },
   },

   '& .first-part': {
      backgroundColor: 'white',
      borderRadius: '0.938rem',
      boxSizing: 'content-box',
      padding: ' 0.4rem 1rem 0.4rem 1.513rem ',

      '& > .info': {
         display: 'flex',
         gap: '15px',
      },

      '& img': {
         marginLeft: '1.2rem',
         marginRight: '1rem',
         borderRadius: '50%',
         width: '2.3rem',
         alignSelf: 'start',
         height: '2.3rem',
      },

      '& .image-icon': {
         marginLeft: '1.2rem',
         marginRight: '1rem',
         borderRadius: '50%',
         width: '2.3rem',
         alignSelf: 'start',
         height: '2.3rem',
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
            fontSize: '13px',
            textAlign: 'start',
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
      display: 'flex',
      justifyContent: 'start',

      '& div': {
         display: 'flex',
         alignItems: 'center',

         '& .icon': {
            marginRight: '15px',
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
      fontWeight: '500',
   },

   '& .select-placeholder-text': {
      fontWeight: '500',
   },

   '& #react-select-3-placeholder': {
      color: 'black',
      fontWeight: '500',
   },

   '& svg': {
      fill: theme.palette.primary.darkGrey,
   },
}))
