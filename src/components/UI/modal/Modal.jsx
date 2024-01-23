import { forwardRef, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { styled } from '@mui/material'
import { CloseIcon } from '../../../assets/icons'

const Transition = forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />
})

const Modal = ({ children }) => {
   const [open, setOpen] = useState(false)

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div>
         <StyledButton onClick={handleClickOpen}>
            Slide in alert dialog
         </StyledButton>

         <StyledContainer
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
         >
            <StyledCloseButtonContainer>
               <StyledCloseButton onClick={handleClose}>
                  <CloseIcon />
               </StyledCloseButton>
            </StyledCloseButtonContainer>

            <DialogContent>{children}</DialogContent>
         </StyledContainer>
      </div>
   )
}
export default Modal

const StyledCloseButtonContainer = styled('div')(() => ({
   width: '100$',
   display: 'flex',
   justifyContent: 'flex-end',
}))

const StyledButton = styled(Button)(() => ({
   backgroundColor: '#6c18cc',
   color: 'black',
}))

const StyledContainer = styled(Dialog)(() => ({
   '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
      borderRadius: '0.625rem',
      padding: '1.25rem',
   },
}))

const StyledCloseButton = styled('button')(() => ({
   padding: '0px',
   width: '2.25rem',
   height: '2.25rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   border: '0',
   backgroundColor: 'transparent',

   '&:hover': {
      cursor: 'pointer',
   },
}))
