import { Avatar, Box, Typography, styled } from '@mui/material'
import { NotFoundSpecialistImage } from '../../../assets/images'
import Navigate from '../../UI/admin/Navigate'
import { containsTheHTTPS } from '../../../utils/helpers'

const SpecialistInfo = ({
   id,
   image,
   firstName,
   lastName,
   position,
   isActive,
}) => {
   const doctorImage = containsTheHTTPS(image) ? image : NotFoundSpecialistImage

   return (
      <StyledContainer isactive={isActive.toString()}>
         <Avatar className="image" src={doctorImage} alt="doctor" />

         <Box>
            <Typography variant="span">
               <Navigate id={id} text={`${firstName} ${lastName}`} />
            </Typography>

            <br />

            <Typography variant="span">{position}</Typography>
         </Box>
      </StyledContainer>
   )
}
export default SpecialistInfo

const StyledContainer = styled(Box)(({ isactive }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '13px',

   '& .image': {
      filter: isactive !== 'true' && 'brightness(0.7)',
      transition: 'filter 1s linear',
   },

   '& > div > span:first-of-type': {
      color: '#222222',
      fontSize: '16px',
      opacity: isactive !== 'true' && '0.7',
   },

   '& > div > span:last-of-type': {
      color: '#959595',
      fontSize: '14px',
   },
}))
