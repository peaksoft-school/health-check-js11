import { forwardRef } from 'react'
import { Dialog, DialogContent, Slide, styled } from '@mui/material'
import { CloseIcon } from '../../assets/icons'

const Transition = forwardRef((props, ref) => (
   <Slide direction="up" ref={ref} {...props} />
))

const Modal = ({ children, isCloseIcon = true, handleClose, open }) => (
   <StyledContainer
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
   >
      {isCloseIcon ? (
         <div className="close-button-container">
            <StyledCloseButton onClick={handleClose}>
               <CloseIcon />
            </StyledCloseButton>
         </div>
      ) : null}

      <DialogContent className="dialog-content">{children}</DialogContent>
   </StyledContainer>
)

export default Modal

const StyledContainer = styled(Dialog)(() => ({
   '& .MuiPaper-root': {
      borderRadius: '0.625rem',
      padding: '0.87rem 1.62rem 3.13rem 2.5rem',
   },

   '& .close-button-container': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
   },

   '& .dialog-content': {
      padding: ' 0rem',
      marginRight: '0.88rem',
   },
}))

const StyledCloseButton = styled('button')(() => ({
   width: '2.25rem',
   height: '2.25rem',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   border: 'none',
   backgroundColor: 'transparent',
   cursor: 'pointer',
}))
