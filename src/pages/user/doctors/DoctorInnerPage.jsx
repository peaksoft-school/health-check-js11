import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { DOCTOR_THUNK } from '../../../store/slices/doctors/doctorThunk'
import Button from '../../../components/UI/Button'
import { ArrowLeftIcon } from '../../../assets/icons'
import Reviews from '../../../components/landing/Reviews'

const DoctorInnerPage = () => {
   const { doctor } = useSelector((state) => state.doctors)

   const { doctorId } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(DOCTOR_THUNK.getDoctorsById({ doctorId }))
   }, [doctorId])

   return (
      <StyledContainer>
         <Box className="box">
            <StyledSpecialistRow>
               <Typography variant="span">
                  <NavLinkStyle to="/">
                     <span>Главная</span> {' > '}
                  </NavLinkStyle>
                  <NavLink style={{ textDecoration: 'none' }} to="/doctors">
                     <span>Врачи</span>
                  </NavLink>
                  {' > '}
                  <NavLink style={{ textDecoration: 'none' }}>
                     <span>Хирургия</span>
                  </NavLink>
                  {' > '}
                  <span className="colors">{doctor.fullName}</span>
               </Typography>
            </StyledSpecialistRow>
            <Typography className="name">{doctor.fullName}</Typography>
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
            <StyledBoxContainer>
               <img alt="img" src={doctor.image} className="img" />
               <Box className="flex">
                  <Typography className="doctor-name">
                     {doctor.fullName}
                  </Typography>
                  <Typography className="label">
                     Отделение :{' '}
                     <span className="mark">{doctor.department}</span>
                  </Typography>
                  <Typography className="label">
                     Должность :{' '}
                     <span className="mark"> {doctor.position}</span>{' '}
                  </Typography>
                  <Button variant="secondary" className="btn">
                     <span className="btn-text">Записаться на приём</span>
                  </Button>
               </Box>
            </StyledBoxContainer>
            <Typography className="description">
               {doctor.description}
            </Typography>
            <NavLink to="/doctors" className="line">
               <Typography className="arrow">
                  <ArrowLeftIcon /> Список Сотрудников
               </Typography>
            </NavLink>
            <Reviews />
         </Box>
      </StyledContainer>
   )
}

export default DoctorInnerPage
const StyledContainer = styled(Box)(() => ({
   '& .line': {
      textDecoration: 'none',
   },
   '& .name': {
      fontSize: '36px',
      fontWeight: '600',
      fontFamily: 'Manrope',
      marginLeft: '6.25rem',
   },
   '& .text': {
      fontSize: '18px',
      padding: '3.125rem 0 0 6.5rem',
      color: '#4D4E51',
      fontFamily: 'Manrope',
      marginTop: '-1rem',
   },
   '& .description': {
      padding: '1rem 0 2rem 6.5rem',
      fontSize: '16px',
      fontWeight: '600',
   },
   '& .arrow': {
      padding: '0 0 2rem 6.5rem',
      color: '#048741',
      fontSize: '16px',
   },
}))
const StyledSpecialistRow = styled(Typography)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   padding: '3.125rem 0 2rem 6.5rem',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },

   '& .colors': {
      color: '#384255',
   },
}))

const NavLinkStyle = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: theme.palette.secondary.lightGrey,
   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const StyledBoxContainer = styled(Box)(() => ({
   padding: '3.125rem 0 2rem 6.5rem',
   display: 'flex',
   justifyContent: 'space-between',

   '& .img': {
      width: '319px',
      height: '349px',
      borderRadius: '4px',
   },

   '& .flex': {
      marginRight: '49rem',
      marginTop: '5rem',

      '& .doctor-name': {
         fontSize: '24px',
         color: ' #009344',
         fontFamily: 'Manrope',
         fontWeight: '500',
         marginBottom: '1rem',
      },

      '& .label': {
         fontSize: '18px',
         color: '#58595B',
         fontFamily: 'Manrope',
         fontWeight: '400',

         '& .mark': {
            fontSize: '18px',
            color: '#222222',
            fontFamily: 'Manrope',
            fontWeight: '500',
         },
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
}))
