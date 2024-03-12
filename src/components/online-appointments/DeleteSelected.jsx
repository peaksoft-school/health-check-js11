import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments/appointmentsSlice'
import { APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/appointmentThunk'
import { DeleteIcon } from '../../assets/icons'
import Modal from '../UI/Modal'
import Button from '../UI/Button'

const DeleteSelected = ({ disabled }) => {
   const [open, setOpen] = useState(false)

   const { deletedAppointmentsIds } = useSelector((state) => state.Appointments)

   const dispatch = useDispatch()

   const openModal = () => setOpen(true)

   const handleClose = () => setOpen(false)

   const handleDelete = () => {
      try {
         dispatch(
            APPOINTMENTS_THUNK.deleteAllAppointments(deletedAppointmentsIds)
         )

         dispatch(APPOINTMENTS_ACTIONS.clearDeletedAppointmentsIds())
      } catch (error) {
         console.error('Error deleting appointments:', error)
      } finally {
         handleClose()
      }
   }

   return (
      <>
         <StyledDeleteButton
            onClick={openModal}
            disabled={disabled || deletedAppointmentsIds.length === 0}
         >
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal handleClose={handleClose} open={open} isCloseIcon={false}>
            <StyledContainer>
               <Typography className="description">
                  Вы уверены, что хотите удалить выбранные записи?
               </Typography>

               <Box className="buttons-container">
                  <Button
                     variant="grey"
                     className="button"
                     onClick={handleClose}
                  >
                     Отменить
                  </Button>

                  <Button className="button" onClick={handleDelete}>
                     Удалить
                  </Button>
               </Box>
            </StyledContainer>
         </Modal>
      </>
   )
}

export default DeleteSelected

const StyledDeleteButton = styled(ButtonBase)(() => ({
   width: '26px',
   height: '22px',
   transition: '0.3s ease-in-out',

   '&:disabled': {
      opacity: 0.2,
      cursor: 'not-allowed',
   },
}))

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   margin: '0.63rem 1.38rem',

   '& .description': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24.59px',
      marginBottom: '40px',
   },

   '& .buttons-container': {
      display: 'flex',
      gap: '18px',
   },

   '& > div > .button': {
      height: '2.625rem',
      padding: '0.625rem 1.25rem !important',
   },
}))