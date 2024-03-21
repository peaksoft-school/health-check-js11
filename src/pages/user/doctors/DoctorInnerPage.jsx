import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDateField } from '@mui/x-date-pickers/DateField/useDateField'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { DOCTOR_THUNK } from '../../../store/slices/doctors/doctorThunk'

const DoctorInnerPage = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { doctors } = useSelector((state) => state.doctors)
   console.log(doctors, 'kndfldjn')

   const data = {
      ...doctors,
   }

   useEffect(() => {
      dispatch(DOCTOR_THUNK.getDoctors(id))
   }, [id, dispatch])

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
                  <span className="colors">Гаталусский Артур</span>
               </Typography>
            </StyledSpecialistRow>
            <Typography className="name">Гаталусский Артур</Typography>
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
            <img alt="img" />
         </Box>
      </StyledContainer>
   )
}

export default DoctorInnerPage
const StyledContainer = styled(Box)(() => ({
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
