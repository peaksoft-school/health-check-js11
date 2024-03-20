import { Box, Typography, styled } from '@mui/material'

const SpecialistInfo = ({ image, firstName, lastName, position, isActive }) => (
   <StyledContainer isactive={isActive.toString()}>
      <img src={image} alt="doctor" />

      <Box>
         <Typography variant="span">
            {firstName} {lastName}
         </Typography>

         <br />

         <Typography variant="span">{position}</Typography>
      </Box>
   </StyledContainer>
)

export default SpecialistInfo

const StyledContainer = styled(Box)(({ isactive }) => ({
   display: 'flex',
   alignItems: 'center',

   '& > img': {
      width: '38px',
      height: '38px',
      marginRight: '13px',
      borderRadius: '50%',
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
