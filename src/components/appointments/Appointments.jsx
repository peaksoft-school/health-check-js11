import { styled, Box, Typography, Rating } from '@mui/material'
import { useSelector } from 'react-redux'
import { CalendarWithDotsIcon, UsersIcon } from '../../assets/icons'
import Select from '../UI/Select'
import Button from '../UI/Button'

const Appointments = ({
   toggleSpecialist,
   toggleDate,
   selectHandler,
   doctorInfo,
   date,
   openForm,
   validate,
}) => {
   const { facilityArray } = useSelector((state) => state.onlineAppointments)

   const getfacility = facilityArray?.map((facility) => ({
      value: facility.id,
      label: facility.facility,
   }))

   const appointmentTime = date ? date.slice(0, 5) : ''

   return (
      <StyledContainer>
         <StyledSelect
            variant="appointments"
            placeholder="Выбрать услуги"
            options={getfacility}
            value={getfacility}
            onChange={selectHandler}
         />

         <StyledButton onClick={toggleSpecialist} variant="grey">
            {doctorInfo ? (
               <Box className="first-part">
                  <img
                     className="image"
                     src={doctorInfo.doctor.imageDoctor}
                     alt="doctor"
                  />

                  <Box className="doctor-info">
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
            ) : (
               <>
                  <UsersIcon className="icon" />
                  <Typography>Выбрать специалиста</Typography>
               </>
            )}
         </StyledButton>

         <StyledButton onClick={toggleDate} variant="grey">
            <CalendarWithDotsIcon className="icon" />

            {date ? (
               <Typography>{appointmentTime}</Typography>
            ) : (
               <Typography>Выбрать дату и время</Typography>
            )}
         </StyledButton>

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
   gap: '15px',

   '& .first-part': {
      '& img': {
         borderRadius: '50%',
         width: '40px',
         alignSelf: 'start',
         height: '40px',
      },

      '& .doctor-info': {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'start',
      },

      '& .doctor-name': {
         fontSize: '14px',
      },

      '& .rating-box': {
         display: 'flex',
         alignIntems: 'center',
         gap: '12px',

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
      gap: '10px',
   },
}))

const StyledButtonContinue = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '100%',
      marginTop: '10px',
      height: '2.75rem',
      fontSize: '0.875rem',

      '& div ': {
         display: 'flex',
         alignItems: 'center',
         gap: '5px',
      },

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

const StyledSelect = styled(Select)(() => ({
   backroungColor: 'white',

   '& .MuiSelect-select': {
      display: 'flex',
      marginLeft: '40px',
      border: 'none',
      padding: '20px',
   },
}))
