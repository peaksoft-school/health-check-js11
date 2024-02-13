import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const AdminNavigations = ({ links }) => {
   return (
      <>
         {links.map(({ id, to, label }) => (
            <StyledNavLink key={id} to={to} activeClassName="active">
               {label}
            </StyledNavLink>
         ))}
      </>
   )
}

export default AdminNavigations

const StyledNavLink = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: '#707070',
   '&:before': {
      content: "''",
      width: '100%',
      height: '2px',
      background: 'red',
   },

   '&.active': {
      color: '#222222',
      fontWeight: 500,
      position: 'relative',
      '&:before': {
         content: "''",
         position: 'absolute',
         bottom: -36.5,
         width: '100%',
         height: '2px',
         background: '#048741',
         // transition: 'bottom 0.5s ease',
      },
   },
}))
