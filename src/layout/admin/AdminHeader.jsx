import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Typography, styled, Box, Menu, MenuItem } from '@mui/material'
import { ADMIN_NAVIGATIONS } from '../../utils/constants/index'
import { HealthCheckIcon, ArrowDownIcon, ArrowUpIcon } from '../../assets/icons'
import AdminNavigations from '../../components/UI/admin/AdminNavigations'
import { logOut } from '../../store/slices/auth/authSlice'
import Modal from '../../components/UI/Modal'
import Button from '../../components/UI/Button'

const AdminHeader = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const [toggleLogOutModal, setToggleLogOutModal] = useState(false)

   const dispatch = useDispatch()

   const open = Boolean(anchorEl)

   const handleClick = (e) => setAnchorEl(e.currentTarget)

   const toggleLogOutHandler = () => setToggleLogOutModal((prev) => !prev)

   const handleClose = () => setAnchorEl(null)

   const navigate = useNavigate()

   const handlelogOut = () => {
      dispatch(logOut({ navigate }))
      handleClose()
   }

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="logo">
               <HealthCheckIcon />
               HEALTH
               <Typography className="title" variant="span">
                  CHECK
               </Typography>
            </Box>

            <nav className="navigation">
               <AdminNavigations links={ADMIN_NAVIGATIONS} />
            </nav>

            <Box>
               <Typography className="exit" onClick={handleClick}>
                  Администратор
                  {open ? (
                     <ArrowUpIcon className="cursor" />
                  ) : (
                     <ArrowDownIcon
                        aria-controls={open ? 'basic-menu' : null}
                        onClick={handleClick}
                     />
                  )}
               </Typography>

               <StyledMenu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                     'aria-labelledby': 'basic-button',
                  }}
               >
                  <Modal
                     open={toggleLogOutModal}
                     onClose={toggleLogOutHandler}
                     isCloseIcon={false}
                  >
                     <StyledModal>
                        Вы уврены, что хотите выйти?
                        <br />
                        <br />
                        <Box className="buttons-box">
                           <Button
                              className="closeButton"
                              onClick={toggleLogOutHandler}
                              variant="grey"
                           >
                              Отменить
                           </Button>
                           <Button onClick={handlelogOut}>Выйти</Button>
                        </Box>
                     </StyledModal>
                  </Modal>

                  <StyledMenuItem onClick={toggleLogOutHandler}>
                     Выйти
                  </StyledMenuItem>
               </StyledMenu>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default AdminHeader

const StyledContainer = styled('header')(({ theme }) => ({
   padding: '0 70px',
   position: 'sticky',
   top: '0px',
   zIndex: '1000',

   '& > .box': {
      margin: '0 auto',
      maxWidth: '1600px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      padding: '10px 0',
      color: '#048741',

      '& > .logo': {
         display: 'flex',
         alignItems: 'center',
         gap: '0.5rem',
         fontSize: '1.375rem',
         fontWeight: '600',
         lineHeight: 'normal',

         '& > .title': {
            color: theme.palette.primary.lightBlack,
         },
      },

      '& > .navigation': {
         display: 'flex',
         gap: '2.88rem',
         color: '#707070',
      },

      '& .exit': {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         color: theme.palette.primary.lightBlack,
         gap: '0.625rem',
         fontSize: '1.10rem',
         cursor: 'pointer',
      },

      '& .cursor': {
         cursor: 'pointer',
      },
   },
}))

const StyledMenu = styled(Menu)(() => ({
   position: 'absolute',
   zIndex: '1000',
   marginLeft: '20px',
}))

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
   '&.MuiMenuItem-root': {
      backgroundColor: 'white',
      color: 'black',
      height: '40px',
      width: '135px',
      boxShadow: ' 0px 1px 12px -70px rgba(241, 241, 241, 0.71)',
   },

   '&.MuiMenuItem-root:hover': {
      color: theme.palette.primary.darkGreen,
   },
}))

const StyledModal = styled(Box)(() => ({
   boxSizing: 'content-box',
   padding: '10px  45px 10px 45px',
   textAlign: 'center',

   '& >.buttons-box': {
      display: 'flex',
      gap: '30px',

      '& > .MuiButtonBase-root': {
         padding: '5px 0',
         width: '120px',
         height: '40px',
         fontSize: '12px',
      },
   },
}))
