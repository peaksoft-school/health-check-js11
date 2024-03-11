import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteIcon } from '../../../assets/icons'
import Modal from '../Modal'
import Button from '../Button'

const DeleteSelected = ({ disabled, deleteFn, clearFn, variant }) => {
   const { deletedAppointmentsIds } = useSelector((state) => state.Appointments)
   const [toggleModal, setToggleModal] = useState(false)

   const { selectAllApplications } = useSelector((store) => store.applications)

   const getIds = () => {
      if (variant === 'appointments') {
         return deletedAppointmentsIds
      }
      if (variant === 'applications') {
         return selectAllApplications
      }

      return []
   }

   const dispatch = useDispatch()

   const toggleHandleModal = () => setToggleModal((prev) => !prev)

   const handleDelete = () => {
      try {
         if (variant === 'application') {
            if (selectAllApplications.length) {
               dispatch(deleteFn(selectAllApplications))

               dispatch(clearFn())
            }
         }
         dispatch(deleteFn(getIds()))

         dispatch(clearFn())
      } catch (error) {
         console.error('Error deleting appointments:', error)
      } finally {
         toggleHandleModal()
      }
   }

   const deleteAllFunction = () => {}

   return (
      <>
         <StyledDeleteButton
            onClick={toggleHandleModal}
            disabled={disabled || getIds().length === 0}
         >
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal
            handleClose={toggleHandleModal}
            open={toggleModal}
            isCloseIcon={false}
         >
            <StyledContainer>
               <Typography className="description">
                  Вы уверены, что хотите удалить выбранные записи?
               </Typography>

               <Box className="buttons-container">
                  <Button
                     variant="grey"
                     className="button"
                     onClick={toggleHandleModal}
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
