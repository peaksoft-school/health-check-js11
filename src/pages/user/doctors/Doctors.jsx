import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { DOCTOR_THUNK } from '../../../store/slices/doctors/doctorThunk'
import DataDoctors from './DataDoctors'

const Doctors = () => {
   const [showAllDoctors, setShowAllDoctors] = useState(false)

   const { doctors } = useSelector((state) => state.doctors)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(DOCTOR_THUNK.getDoctors())
   }, [])

   const visibleDoctors = showAllDoctors ? doctors : doctors.slice(0, 10)
   const handleShowMore = () => {
      setShowAllDoctors(true)
   }
   return (
      <>
         <StyledLine> </StyledLine>

         <StyledContainer>
            <StyledSpecialistRow>
               <Typography variant="span">
                  <NavLinkStyle to="/">Главная {' > '}</NavLinkStyle>

                  <span>Врачи</span>
               </Typography>
            </StyledSpecialistRow>

            <Typography className="title" variant="h3">
               Наши <span> </span>
               <Typography className="mark-title" variant="span">
                  врачи
               </Typography>
            </Typography>

            <Typography className="text">
               Попасть в команду медицинской клиники «Medical Clinic» могут{' '}
               <br />
               только лучшие специалисты с многолетней практикой и доказанным
               опытом.
            </Typography>
            <Typography className="text">
               Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
               ведущих университетах <br /> Европы, чтобы еще на шаг стать ближе
               к совершенству.
            </Typography>

            {visibleDoctors.map((doctor) => (
               <DataDoctors doctor={doctor} key={doctor.id} />
            ))}

            {!showAllDoctors && doctors.length > 10 && (
               <StyledSpecialist>
                  <Typography variant="span">
                     В нашей клинике работают более :{' '}
                     <span className="marker">30 специалистов </span>
                     <Typography
                        component="span"
                        onClick={handleShowMore}
                        style={{ cursor: 'pointer' }}
                     >
                        <span className="click"> Показать больше</span>
                     </Typography>
                  </Typography>
               </StyledSpecialist>
            )}

            {showAllDoctors && (
               <StyledSpecialist>
                  <Typography variant="span">
                     В нашей клинике работают более 30 специалистов
                  </Typography>
               </StyledSpecialist>
            )}
         </StyledContainer>
      </>
   )
}

export default Doctors

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .title': {
      marginLeft: '6.25rem',
      fontSize: '36px',
      fontWeight: '500',

      '& > .mark-title': {
         color: theme.palette.primary.darkGreen,
      },
   },

   '& .image-box': {
      padding: '3.125rem 0 0 11.25rem',
      display: 'flex',
      justifyContent: 'center',
   },

   '& .text': {
      fontSize: '18px',
      padding: '3.125rem 0 0 6.5rem',
      color: '#4D4E51',
      fontFamily: 'Manrope',
      marginTop: '-1rem',
   },
}))

const StyledSpecialist = styled(Typography)(() => ({
   fontSize: '1rem',
   fontWeight: '400',
   display: 'flex',
   justifyContent: 'flex-start',
   marginLeft: '24rem',
   padding: '3rem 0 0 ',
   marginBottom: '6rem',

   span: {
      cursor: 'pointer',
      '& .marker': {
         fontWeight: '500',
      },
      '& .click': {
         color: '#048741',
         fontSize: '16px',
         fontWeight: '500',
         marginLeft: '1rem',
         textDecoration: 'line',
      },
   },
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))

const StyledSpecialistRow = styled(Typography)(() => ({
   fontSize: '1rem',
   fontWeight: '400',
   padding: '3.125rem 0 2.50rem 6.25rem',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: theme.palette.secondary.lightGrey,
}))
