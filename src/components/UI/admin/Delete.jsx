import { useEffect, useState } from 'react'
import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { DeleteIcon } from '../../../assets/icons'
import Modal from '../Modal'
import Button from '../Button'

const Delete = ({ name, id, deleteFn, disabled, variant, text }) => {
   const [open, setOpen] = useState(false)
   const [isButtonDisabled, setIsButtonDisabled] = useState(!disabled)

   useEffect(() => {
      setIsButtonDisabled(!disabled)
   }, [disabled])

   const toggleModal = () => setOpen((prev) => !prev)

   const dispatch = useDispatch()

   const handleDelete = () => {
      try {
         dispatch(deleteFn(id))
      } catch (error) {
         console.error('Error deleting appointment:', error)
      } finally {
         toggleModal()
      }
   }

   return (
      <>
         <StyledDeleteButton
            disabled={variant === 'patients' ? false : isButtonDisabled}
            onClick={toggleModal}
         >
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal handleClose={toggleModal} open={open} isCloseIcon={false}>
            <StyledModalContent>
               <Typography className="description">
                  Вы уверены, что хотите удалить {text}
               </Typography>

               <Typography className="name">{name}?</Typography>

               <Box className="buttons-container">
                  <Button
                     variant="grey"
                     className="button"
                     onClick={toggleModal}
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

export default Delete

const StyledDeleteButton = styled(ButtonBase)(() => ({
   cursor: 'pointer',
   width: '26px',
   height: '22px',
   transition: '0.3s linear',

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

   '& > .name': {
      fontFamily: 'Manrope',
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '24.59px',
      marginBottom: '1.25rem',
   },

   '& > .description': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24.59px',
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
