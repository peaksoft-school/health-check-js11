import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import SpecialistDelete from './SpecialistDelete'
import { EditIcon } from '../../assets/icons'

const SpecialistActions = ({ id, lastName, firstName }) => (
   <StyledContainer>
      <Link to={id.toString()}>
         <EditIcon />
      </Link>

      <SpecialistDelete lastName={lastName} firstName={firstName} />
   </StyledContainer>
)

export default SpecialistActions

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '30px',

   '& > a': {
      height: '22px',
   },
}))
