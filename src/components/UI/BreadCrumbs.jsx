import React from 'react'
import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'

const BreadCrumbs = ({ text, to, before }) => (
   <Box>
      <StyledSpecialistRow>
         <Typography variant="span">
            <NavLinkStyle to={to}>
               {before} {' > '}
            </NavLinkStyle>
            <span>{text}</span>
         </Typography>
      </StyledSpecialistRow>
   </Box>
)

export default BreadCrumbs
const StyledSpecialistRow = styled(Typography)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   padding: '3.125rem 0 2rem 6.5rem',
   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))
const NavLinkStyle = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: theme.palette.secondary.lightGrey,
}))
