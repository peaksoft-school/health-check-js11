import React from 'react'
import { Typography, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const BreadCrumbs = ({ text, to, before, ...rest }) => (
   <StyledSpecialistRow>
      <Typography variant="span">
         <NavLinkStyle to={to}>
            {before} {' > '}
         </NavLinkStyle>
         <span>{text}</span>
      </Typography>
   </StyledSpecialistRow>
)

export default BreadCrumbs

const StyledSpecialistRow = styled(Typography)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   paddingBottom: '2rem',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: theme.palette.secondary.lightGrey,
}))
