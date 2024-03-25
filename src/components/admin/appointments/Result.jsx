import { useState } from 'react'
import { Rating, styled, Typography, Box, Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { PlusIcon, RegisteredIcon } from '../../../assets/icons'
import Button from '../../UI/Button'
import DeleteAppointmentModal from './DeleteAppointmentModal'
import { NotSpecialistImage } from '../../../assets/images'
import { containsTheHTTPS } from '../../../utils/helpers'

const Result = ({ goBack, goBackAndClear }) => {
   const { doctorData } = useSelector((state) => state.appointments)
   const [toggleModal, setToggleModal] = useState(false)

   const formatDate = () => {
      const options = { weekday: 'long', day: 'numeric', month: 'long' }
      const date = new Date(doctorData.localDate)
      const formattedDate = date.toLocaleDateString('ru-RU', options)
      const capitalizedWeekday =
         formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
      return capitalizedWeekday
   }

   const closeModal = () => {
      setToggleModal((prev) => !prev)
   }

   const startTime = doctorData ? doctorData.startTime.slice(0, 5) : ''
   const endTime = doctorData ? doctorData.endTime.slice(0, 5) : ''

   return (
      <StyledContainer>
         <RegisteredIcon />

         <Typography className="submited">Вы записаны</Typography>

         <Typography className="date">
            {formatDate()}, {`${startTime}-${endTime}`}
         </Typography>

         <Box className="doctor">
            <Box className="image-box">
               {containsTheHTTPS(doctorData.imageDoctor) ? (
                  <Avatar
                     className="image"
                     src={doctorData.imageDoctor}
                     alt="doctor"
                  />
               ) : (
                  <Avatar
                     className="image"
                     src={NotSpecialistImage}
                     alt="doctor"
                  />
               )}
            </Box>

            <Box className="doctor-info">
               <Typography variant="h4" className="name">
                  {doctorData.doctorFullName}
               </Typography>

               <Typography className="facility">
                  {doctorData.facility}
               </Typography>

               <Box className="raiting-box">
                  <Rating size="small" value={5} readOnly />

                  <Typography variant="span" className="revews">
                     166
                  </Typography>
               </Box>
            </Box>
         </Box>

         <Typography className="cancel" onClick={closeModal}>
            Отменить запись
         </Typography>

         <br />

         <StyledButton onClick={goBack}>
            <PlusIcon />
            Записаться еще
         </StyledButton>

         {toggleModal && (
            <DeleteAppointmentModal
               goBackAndClear={goBackAndClear}
               handleClose={closeModal}
               goBack={goBack}
            />
         )}
      </StyledContainer>
   )
}

export default Result

const StyledContainer = styled(Box)(({ theme }) => ({
   margin: '6px',
   padding: '1.875rem 1rem',
   backgroundColor: theme.palette.primary.main,
   borderRadius: '1rem',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontFamily: 'Manrope',

   '& .date': {
      fontWeight: 500,
      fontFamily: 'Manrope',
   },

   '& > .cancel': {
      fontFamily: 'Manrope',
      fontWeight: '500',
      color: '#ff0000',
      cursor: 'pointer',
   },

   '& > .submited': {
      fontFamily: 'Manrope',
      fontWeight: '600',
      fontSize: '1.188rem',
      margin: '0.313rem 0',
   },

   '& > .doctor': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1.25rem',
      marginBottom: '2.5rem',
      gap: '0.625rem',

      '& > .image-box': {
         width: '36px',
         height: '36px',
         alignSelf: 'start',

         '& > .image': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
         },
      },

      '& > .doctor-info': {
         marginLeft: '10px',

         '& > .name': {
            fontFamily: 'Manrope',
            fontWeight: 500,
            fontSize: '1rem',
            lineHeight: '19px',
         },

         '& > .facility': {
            fontFamily: 'Manrope',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '16px',
            color: theme.palette.secondary.lightGrey,
            marginBottom: '3px',
         },

         '& > .raiting-box': {
            display: 'flex',
            alignItems: 'center',

            '& > .revews': {
               marginLeft: '8px',
               fontFamily: 'Manrope',
               fontWeight: 400,
               fontSize: '12px',
               lineHeight: '16px',
               color: '#707070',
            },
         },
      },
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '100%',
      height: '2.75rem',
      fontSize: '0.875rem',
      textTransform: 'none',

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
