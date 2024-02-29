import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const AdminNavigations = ({ links }) => {
   const { pathname } = useLocation()

   return (
      <>
         {links.map(({ id, to, label }) => (
            <StyledNavLink key={id} to={to}>
               {label}
               <div className={`line ${pathname === to && 'tab'}`} />
            </StyledNavLink>
         ))}
      </>
   )
}

export default AdminNavigations

const StyledNavLink = styled(NavLink)(() => ({
   textDecoration: 'none',
   position: 'relative',
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
   },

   '& .line': {
      width: '0px',
      height: '2px',
      background: 'none',
      position: 'absolute',
      bottom: -36.5,
      transition: '0.5s width ease',
   },

   '& .line.tab': {
      width: '100%',
      color: '#222222',
      fontWeight: 500,
      backgroundColor: '#048741',
   },
}))
