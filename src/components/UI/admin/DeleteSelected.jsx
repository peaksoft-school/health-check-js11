import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteIcon } from '../../../assets/icons'
import Modal from '../Modal'
import Button from '../Button'

const DeleteSelected = ({ disabled, deleteFn, clearFn, variant }) => {
   const { deletedAppointmentsIds } = useSelector((state) => state.appointments)

   const { selectAllApplications } = useSelector((store) => store.applications)

   const [toggleModal, setToggleModal] = useState(false)

   const dispatch = useDispatch()

   const getIds = () => {
      if (variant === 'appointments') return deletedAppointmentsIds

      if (variant === 'applications') return selectAllApplications

      return []
   }

   const toggleModalHandler = () => setToggleModal((prev) => !prev)

   const deleteHandler = () => {
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
         toggleModalHandler()
      }
   }

   return (
      <>
         <StyledDeleteButton
            onClick={toggleModalHandler}
            disabled={disabled || getIds().length === 0}
         >
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal
            handleClose={toggleModalHandler}
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
                     onClick={toggleModalHandler}
                  >
                     Отменить
                  </Button>

                  <Button className="button" onClick={deleteHandler}>
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

   '& > .description': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24.59px',
      marginBottom: '40px',
   },

   '& > .buttons-container': {
      display: 'flex',
      gap: '18px',
   },

   '& > div > .button': {
      height: '2.625rem',
      padding: '0.625rem 1.25rem !important',
   },
}))
