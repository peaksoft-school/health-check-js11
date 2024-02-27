import { useState, useEffect } from 'react'
import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { APPOINTMENTS_THUNK } from '../../store/slices/online-appointments/appointmentThunk'
import { DeleteIcon } from '../../assets/icons'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import { PATIENTS_THUNK } from '../../store/slices/patients/patientsThunk'

const DeletePatients = ({ name, patientsId }) => {
   const dispatch = useDispatch()

   const [open, setOpen] = useState(false)

   const openModal = () => setOpen(true)

   const handleClose = () => setOpen(false)

   const handleDelete = () => {
      try {
         dispatch(PATIENTS_THUNK.deletePatients(patientsId))
      } catch (error) {
         console.error('Error deleting appointment:', error)
      } finally {
         handleClose()
      }
   }

   return (
      <>
         <StyledDeleteButton onClick={openModal}>
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal handleClose={handleClose} open={open} isCloseIcon={false}>
            <StyledModalContent>
               <Typography className="description">
                  Вы уверены, что хотите удалить запись
               </Typography>

               <Typography className="name">{name}?</Typography>

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
            </StyledModalContent>
         </Modal>
      </>
   )
}

export default DeletePatients

const StyledDeleteButton = styled(ButtonBase)(() => ({
   cursor: 'pointer',
   width: '26px',
   height: '22px',
   transition: '0.3s ease-in-out',

   '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.2,
   },
}))

const StyledModalContent = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'column',
   margin: '0.63rem 1.38rem',

   '& .name': {
      fontFamily: 'Manrope',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '24.59px',
      marginBottom: '1.25rem',
   },

   '& .description': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24.59px',
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
