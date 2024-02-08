import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material'

const AppLinks = ({ link }) => (
   <>
      {link.map(({ id, to, label }) => (
         <StyledNavLink
            style={({ isActive }) => ({
               color: isActive ? '#027B44' : null,
            })}
            key={id}
            to={to}
         >
            {label}
         </StyledNavLink>
      ))}
   </>
)

export default AppLinks

const StyledNavLink = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: 'black',
}))
