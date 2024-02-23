import { styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Navigations = ({ links }) => (
   <>
      {links.map(({ id, to, label }) => (
         <StyledNavLink
            className={({ isActive }) => isActive && 'active'}
            key={id}
            to={to}
         >
            {label}
         </StyledNavLink>
      ))}
   </>
)

export default Navigations

const StyledNavLink = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: 'black',

   '&.active': {
      color: theme.palette.primary.darkGreen,
   },
}))
