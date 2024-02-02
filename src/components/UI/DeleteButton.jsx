import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { DeleteIcon } from '../../assets/icons'
import Modal from './Modal'
import Button from './Button'

const DeleteButton = () => {
   const [open, setOpen] = useState(false)

   const openModal = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <>
         <StyledDeleteIcon onClick={openModal} />
         <Modal handleClose={handleClose} open={open} isCloseIcon={false}>
            <StyledContainer>
               <Typography className="description">
                  Вы уверены, что хотите удалить запись
               </Typography>

               <Typography className="name">Салтанат Жумагуловой?</Typography>

               <div className="buttonsContainer">
                  <Button
                     variant="grey"
                     className="button"
                     onClick={handleClose}
                  >
                     Отменить
                  </Button>

                  <Button className="button">Удалить</Button>
               </div>
            </StyledContainer>
         </Modal>
      </>
   )
}

export default DeleteButton

const StyledDeleteIcon = styled(DeleteIcon)(() => ({
   cursor: 'pointer',
   width: '26px',
   height: '22px',
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
