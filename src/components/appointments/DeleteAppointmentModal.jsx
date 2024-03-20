import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import { APPOINTMENTS_THUNKS } from '../../store/slices/appointments/appointmentsThunk'
import { CloseAndDeleteIcon } from '../../assets/icons'

const DeleteAppointmentModal = ({ handleClose, goBack }) => {
   const { appointmentId } = useSelector((state) => state.appointments)

   const [deleteSuccess, setDeleteSuccess] = useState(false)

   const dispatch = useDispatch()

   const deleteHandler = () => {
      dispatch(
         APPOINTMENTS_THUNKS.deleteAppoinment({
            appointmentId,
            setDeleteSuccess,
         })
      )
   }

   return (
      <StyledContainer>
         {deleteSuccess ? (
            <StyledModalContent>
               <Box className="close-container">
                  <CloseAndDeleteIcon onClick={goBack} />
               </Box>

               <Typography>Запись отменена</Typography>

               <Button onClick={goBack}>Записаться еще</Button>
            </StyledModalContent>
         ) : (
            <StyledModalContent>
               <Typography variant="h3">Отмена записи</Typography>

               <hr />

               <Typography>
                  После отмены запись будет невозможно восстановить
               </Typography>

               <Box className="buttons-box">
                  <Button
                     variant="secondary"
                     className="calceled-button"
                     onClick={deleteHandler}
                  >
                     Отменить запись
                  </Button>
                  <Button onClick={handleClose}>Закрыть</Button>
               </Box>
            </StyledModalContent>
         )}
      </StyledContainer>
   )
}

export default DeleteAppointmentModal

const StyledContainer = styled(Box)(() => ({
   position: 'fixed',
   top: 0,
   right: 0,
   width: '380px',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'rgba(0, 0, 0, 0.3)',
   transition: 'background-color 0.3s ease',
   padding: '0 2rem',
}))

const StyledModalContent = styled(Box)(({ theme }) => ({
   width: '100%',
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: theme.palette.primary.main,
   padding: '1.25rem',
   borderRadius: '1rem',
   textAlign: 'center',
   gap: '14px',
   marginBottom: '44%',

   '& .close-container': {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '40%',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',

      '&:hover': {
         '& svg ': {
            cursor: 'pointer',
         },
      },

      '& svg': {
         cursor: 'pointer',
         transition: 'transform 0.3s',

         '&:hover': {
            '& path': {
               fill: 'red',
            },

            transform: 'scale(1.1)',

            '& circle': {
               stroke: 'red',
            },
         },
      },
   },

   '& button': {
      width: '100%',
      height: '2.5rem',
      fontSize: '16px',
      textTransform: 'none',
      fontFamily: 'Manrope',
   },

   '& > h3': {
      fontWeight: '500',
      fontSize: '1.3rem',
   },

   '& p': {
      margin: '1rem 0',
   },

   '& > hr': {
      position: 'absolute',
      top: '22%',
      left: '0',
      border: 'none',
      height: '1px',
      width: '100%',
      backgroundColor: '#F3F1F1',
   },

   '& >.buttons-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',

      '& > .calceled-button': {
         height: '2.75rem',
      },
   },
}))
