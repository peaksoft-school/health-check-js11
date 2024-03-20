import { Avatar, Box, Typography, styled } from '@mui/material'
import { containsTheHTTPS } from '../../utils/helpers'
import { NotUserImage } from '../../assets/images'

const SpecialistInfo = ({ image, firstName, lastName, position, isActive }) => {
   const doctorImage = containsTheHTTPS(image) ? image : NotUserImage

   return (
      <StyledContainer isactive={isActive.toString()}>
         <Avatar src={doctorImage} alt="doctor" />

         <Box>
            <Typography variant="span">
               {firstName} {lastName}
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

   '& img': {
      filter: isactive !== 'true' && 'brightness(0.7)',
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
