import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../UI/Button'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'
import { CloseIcon } from '../../assets/icons'

const DeleteAppointmentModal = ({ handleClose, goBack }) => {
   const [deleteSuccess, setDeleteSuccess] = useState(false)

   const { appoinmentId } = useSelector((state) => state.onlineAppointments)

   const dispatch = useDispatch()

   const deleteHandler = () => {
      dispatch(
         ONLINE_APPOINTMENTS_THUNKS.deleteAppoinment({
            appoinmentId,
            setDeleteSuccess,
         })
      )
   }

   return (
      <StyledContainer>
         {deleteSuccess ? (
            <StyledModalContent>
               <Box className="close-container">
                  <CloseIcon onClick={goBack} />
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
                     variant="outlined"
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
   width: '26.3%',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'rgba(0, 0, 0, 0.3)',
   transition: 'background-color 0.3s ease',
   padding: '0 2rem',
}))

const StyledModalContent = styled(Box)(() => ({
   width: '100%',
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: '#fff',
   padding: '20px',
   borderRadius: '1rem',
   textAlign: 'center',
   marginBottom: '44%',

   '.close-container': {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '40%',
      width: '3rem',
      height: '3rem',
      borderRadius: '50%',
      border: '3px solid #959595',

      svg: {
         cursor: 'pointer',
      },
   },

   '& button': {
      width: '100%',
      height: '2.5rem',
   },

   '&> h3': {
      fontWeight: '500',
      fontSize: '1.1rem',
   },

   '& p': {
      margin: '1.8rem 0',
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
