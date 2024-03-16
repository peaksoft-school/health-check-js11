import React, { useEffect, useState } from 'react'
import { Rating, styled, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../UI/Button'
import { PlusIcon, RegisteredIcon } from '../../assets/icons'
import DeleteAppointmentModal from './DeleteAppointmentModal'
import { ONLINE_APPOINTMENTS_ACTIONS } from '../../store/slices/online-appointments-user/onlineAppointmentsSlice'

const Registered = ({ goBack }) => {
   const [toggleModal, setToggleModal] = useState(false)

   const closeModal = () => setToggleModal((prev) => !prev)

   const { doctorData } = useSelector((state) => state.onlineAppointments)

   const formatDate = (dateString) => {
      const options = { weekday: 'long', day: 'numeric', month: 'long' }
      const date = new Date(dateString)
      const formattedDate = date.toLocaleDateString('ru-RU', options)
      const capitalizedWeekday =
         formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
      return capitalizedWeekday
   }

   const dispatch = useDispatch()

   const startTime = doctorData ? doctorData?.startTime.slice(0, 5) : ''
   const endTime = doctorData ? doctorData?.endTime.slice(0, 5) : ''

   useEffect(() => {
      dispatch(ONLINE_APPOINTMENTS_ACTIONS.setIsResult())
   })

   return (
      <Container>
         <RegisteredIcon />

         <Submited>Вы записаны</Submited>

         <Typography className="date">
            {formatDate(doctorData.localDate)}, {`${startTime}-${endTime}`}
         </Typography>

         <Profile>
            <ImageContainer>
               <Image src={doctorData.doctorImage} alt="doctor" />
            </ImageContainer>

            <About>
               <Title>{doctorData.doctorFullName}</Title>

               <Specialist>{doctorData.facility}</Specialist>

               <RatingContainer>
                  <Rating size="small" value={5} readOnly />

                  <Users>166</Users>
               </RatingContainer>
            </About>
         </Profile>

         <Cancel onClick={closeModal}>Отменить запись</Cancel>

         <StyledButton onClick={goBack}>
            <PlusIcon />
            Записаться еще
         </StyledButton>

         {toggleModal && (
            <DeleteAppointmentModal handleClose={closeModal} goBack={goBack} />
         )}
      </Container>
   )
}

export default Registered

const Container = styled('div')(() => ({
   margin: '6px',
   padding: '30px 16px',
   backgroundColor: '#fff',
   borderRadius: '16px',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontFamily: 'Manrope',

   '& .date': {
      fontWeight: 500,
      fontFamily: 'Manrope',
   },
}))

const Submited = styled('p')(() => ({
   fontFamily: 'Manrope',
   fontWeight: '600',
   fontSize: '19px',
   margin: '5px 0',
}))

const Profile = styled('div')(() => ({
   display: 'flex',
   marginRight: '5rem',
   marginTop: '20px',
   marginBottom: '40px',
   gap: '10px',
}))

const ImageContainer = styled('div')(() => ({
   width: '36px',
   height: '36px',
   alignSelf: 'start',
}))

const Image = styled('img')(() => ({
   width: '100%',
   height: '100%',
   borderRadius: '50%',
}))

const About = styled('div')(() => ({
   marginLeft: '10px',
}))

const Title = styled('h4')(() => ({
   fontFamily: 'Manrope',
   fontWeight: 500,
   fontSize: '1rem',
   lineHeight: '19px',
}))

const Specialist = styled('p')(() => ({
   fontFamily: 'Manrope',
   fontWeight: 500,
   fontSize: '14px',
   lineHeight: '16px',
   color: '#959595',
   marginBottom: '3px',
}))

const RatingContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
}))

const Users = styled('span')(() => ({
   marginLeft: '8px',
   fontFamily: 'Manrope',
   fontWeight: 400,
   fontSize: '12px',
   lineHeight: '16px',
   color: '#707070',
}))

const Cancel = styled('p')(() => ({
   fontFamily: 'Manrope',
   fontWeight: '500',
   color: '#ff0000',
   cursor: 'pointer',
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '100%',
      marginTop: '24px',
      height: '2.75rem',
      fontSize: '0.875rem',

      '& div ': {
         display: 'flex',
         alignItems: 'center',
         gap: '5px',
      },

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))
