import { Link } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import { EditIcon } from '../../../assets/icons'
import Delete from '../../UI/admin/Delete'
import { SPECIALISTS_THUNKS } from '../../../store/slices/specialists/specialictsThunk'

const SpecialistActions = ({ id, lastName, firstName }) => (
   <StyledContainer>
      <Link to={`${id.toString()}?status=edit`}>
         <EditIcon />
      </Link>

      <Delete
         name={`${firstName} ${lastName}`}
         deleteFn={SPECIALISTS_THUNKS.deleteSpecialist}
         id={id}
         variant="patients"
         text="специалиста"
      />
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
