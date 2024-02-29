import { Box, ButtonBase, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../Button'
import { DeleteIcon } from '../../../../assets/icons'
import Modal from '../../Modal'
import { APPLICATION_THUNK } from '../../../../store/slices/application/applicationThunk'
import { handleRemoveChecked } from '../../../../store/slices/application/aplicationSlice'

const DeleteSelected = ({ disabled }) => {
   const [open, setOpen] = useState(false)

   const dispatch = useDispatch()

   const { selectAllApplications } = useSelector((store) => store.applications)

   const openModal = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const deleteAllFunction = () => {
      if (selectAllApplications.length) {
         dispatch(APPLICATION_THUNK.deleteAllApplication(selectAllApplications))
         dispatch(handleRemoveChecked())
         setOpen(false)
      }
   }
   return (
      <>
         <StyledDeleteButton
            onClick={openModal}
            disabled={!selectAllApplications.length}
         >
            <DeleteIcon />
         </StyledDeleteButton>

         <Modal handleClose={handleClose} open={open} isCloseIcon={false}>
            <StyledContainer>
               <Typography className="description">
                  Вы уверены, что хотите удалить выбранные записи?
               </Typography>

               <div className="buttonsContainer">
                  <Button
                     variant="grey"
                     className="button"
                     onClick={handleClose}
                  >
                     Отменить
                  </Button>

                  <Button onClick={deleteAllFunction} className="button">
                     Удалить
                  </Button>
               </div>
            </StyledContainer>
         </Modal>
      </>
   )
}

export default DeleteSelected

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

   '& .description': {
      fontFamily: 'Manrope',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '24.59px',
      marginBottom: '40px',
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
