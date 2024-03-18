import { useEffect, useState } from 'react'
import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { DeleteIcon } from '../../assets/icons'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import { SPECIALISTS_THUNK } from '../../store/slices/specialistsSlice/specialictsThunk'

const DeleteButton = ({ id, lastName, firstName }) => {
   const [open, setOpen] = useState(false)

   const dispatch = useDispatch()

   const openModal = () => setOpen(true)

   const handleClose = () => setOpen(false)

   const handleDelete = () => {
      dispatch(SPECIALISTS_THUNK.deleteSpecialists({ id, handleClose }))
   }

   return (
      <>
         <StyledDeleteButton onClick={openModal}>
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal handleClose={handleClose} open={open} isCloseIcon={false}>
            <StyledContainer>
               <Typography className="description">
                  Вы уверены, что хотите удалить запись
               </Typography>

               <Typography className="name">
                  {firstName} <span> </span>
                  {lastName}?{' '}
               </Typography>

               <div className="buttonsContainer">
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
               </div>
            </StyledContainer>
         </Modal>
      </>
   )
}

export default DeleteButton

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

const StyledContainer = styled(Box)(() => ({
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

   '& .buttonsContainer': {
      display: 'flex',
      gap: '18px',
   },

   '& > div > .button': {
      height: '2.625rem',
      padding: '0.625rem 1.25rem !important',
   },
}))