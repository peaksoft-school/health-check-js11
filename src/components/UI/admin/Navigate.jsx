import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

const Navigate = ({ id, text }) => (
   <StyledLink to={id.toString()}>{text}</StyledLink>
)

export default Navigate

const StyledLink = styled(Link)(() => ({
   '&:hover': {
      textDecoration: 'underline',
   },
}))
