import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

const LinkPatient = ({ row }) => {
   return (
      <StyledLink to={row.original.id.toString()}>
         {row.original.surname}
      </StyledLink>
   )
}

export default LinkPatient

const StyledLink = styled(Link)(() => ({
   color: 'black',
   textDecoration: 'none',

   '&:hover': {
      textDecoration: 'underline',
   },
}))
