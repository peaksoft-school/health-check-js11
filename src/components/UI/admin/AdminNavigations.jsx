import { NavLink, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'

const AdminNavigations = ({ links }) => {
   const { pathname } = useLocation()

   return links?.map(({ id, to, label }) => (
      <StyledNavLink
         className={({ isActive }) => isActive && 'active'}
         key={id}
         to={to}
      >
         {label}

         <div className={`line ${pathname === to && 'tab'}`} />
      </StyledNavLink>
   ))
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
      fontWeight: 500,
      color: 'black',

      '& > div': {
         width: '100%',
         fontWeight: 500,
         backgroundColor: '#048741',
      },
   },

   '& > .line': {
      width: '0px',
      height: '2px',
      background: 'none',
      position: 'absolute',
      bottom: -36.5,
   },
}))
