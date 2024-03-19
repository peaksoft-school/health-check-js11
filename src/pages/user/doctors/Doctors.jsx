import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Button from '../../../components/UI/Button'
import { DOCTOR_THUNK } from '../../../store/slices/doctors/doctorThunk'

const Doctors = () => {
   const { doctors } = useSelector((state) => state.doctors)
   console.log(doctors)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(DOCTOR_THUNK.getDoctors())
   }, [])

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

            <Box className="global-container">
               {doctors.map((doctor) => (
                  <Box className="map-container">
                     <Box key={doctor.id} className="text-container">
                        <Typography className="label">
                           {doctor.position}
                        </Typography>
                     </Box>
                     <Box className="image-container">
                        <img
                           src={doctor.image}
                           alt="img"
                           className="surgeon-image"
                        />
                     </Box>
                     <Box className="main-container">
                        <Box className="name-container">
                           <Typography variant="span" className="name">
                              {doctor.fullName}
                           </Typography>
                           <Typography className="position-doctor">
                              {doctor.department}
                           </Typography>
                           <Button variant="secondary" className="btn">
                              <span className="btn-text">
                                 Записаться на приём
                              </span>
                           </Button>
                        </Box>
                     </Box>
                  </Box>
               ))}
            </Box>

            <StyledSpecialist>
               <Typography variant="span">
                  <span>
                     В нашей клинике работают:
                     <span className="marker"> более 30 специалистов</span>{' '}
                  </span>
                  <NavLinkStyles to="/">Показать больше</NavLinkStyles>
               </Typography>
            </StyledSpecialist>
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

   '&  > .global-container': {
      width: '1017px',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '3.125rem 0 0 6.50rem',
      gap: '2rem',

      '& > .map-container': {
         '& .text-container': {
            '& .label': {
               fontFamily: 'Manrope',
               fontSize: '24px',
               fontWeight: '600',
            },
         },

         '& > .image-container': {
            marginTop: '1.50rem',
            display: 'flex',
            justifyContent: 'space-between',

            '& .surgeon-image': {
               backgroundColor: '#E4E7EE',
               borderRadius: '4px',
            },
         },

         '& > .main-container': {
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '1.50rem',

            '& > .name-container': {
               padding: '1rem 0 0 0.10rem',

               '& .name': {
                  fontSize: '18px',
                  fontFamily: 'Manrope',
                  fontWeight: '500',
               },
               '& .position-doctor': {
                  fontSize: '15px',
                  color: '#969393',
               },

               '& .btn': {
                  marginTop: '1rem',
                  borderRadius: '0.5rem',
                  width: '204px',
                  height: '42px',

                  '& .btn-text': {
                     fontSize: '12px',
                  },
               },
            },
         },
      },
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
   },
}))

const NavLinkStyles = styled(NavLink)(({ theme }) => ({
   color: '#048741',
   marginLeft: '1rem',
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
