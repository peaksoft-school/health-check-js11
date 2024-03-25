import { styled, Typography, Box, Rating, Avatar } from '@mui/material'
import Button from '../../UI/Button'
import { NotFoundSpecialistImage } from '../../../assets/images'
import { containsTheHTTPS } from '../../../utils/helpers'

const SpecialistCard = ({ doctor, getDoctorName, formatDates }) => {
   const {
      imageDoctor,
      doctorFullName,
      department,
      dateOfConsultation,
      doctorId,
      startTimeOfConsultation,
   } = doctor

   return (
      <StyledContainer>
         <Box className="first-part">
            {containsTheHTTPS(imageDoctor) ? (
               <Avatar className="image" src={imageDoctor} alt="doctor" />
            ) : (
               <Avatar
                  className="image"
                  src={NotFoundSpecialistImage}
                  alt="doctor"
               />
            )}

            <Box>
               <Typography>{doctorFullName}</Typography>

               <Typography className="facility">{department}</Typography>

               <Box className="rating-box">
                  <Rating size="small" value={5} readOnly />

                  <Typography className="reviews" variant="span">
                     166
                  </Typography>
               </Box>
            </Box>
         </Box>

         <Typography className="date">
            Ближайшее время для записи <span> </span>
            {formatDates(dateOfConsultation)}:
         </Typography>

         <Box className="times-box">
            {startTimeOfConsultation.map((time) => (
               <StyledTimeButton
                  key={time}
                  onClick={() => {
                     getDoctorName({ doctor, id: doctorId, time })
                  }}
                  variant="grey"
               >
                  {time.slice(0, 5)}
               </StyledTimeButton>
            ))}
         </Box>
      </StyledContainer>
   )
}

export default SpecialistCard

const StyledContainer = styled(Box)(({ theme }) => ({
   '& .date': {
      fontSize: '14px',
      fontFamily: 'Manrope',
      color: theme.palette.primary.darkGrey,
   },

   padding: '10px 20px',
   borderRadius: '20px',
   border: `1px solid ${theme.palette.secondary.lightGrey}`,
   backgroundColor: 'white',
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',

   '& > .first-part': {
      '& > .image': {
         borderRadius: '50%',
         width: '50px',
         alignSelf: 'start',
         height: '50px',
      },

      '& .rating-box': {
         display: 'flex',
         alignIntems: 'center',
         gap: '8px',

         '& > .reviews': {
            fontFamily: 'Manrope',
            fontSize: '14px',
            color: '#707070',
         },
      },

      '& .facility': {
         fontFamily: 'Manrope',
         fontSize: '14px',
         color: theme.palette.secondary.lightGrey,
      },

      display: 'flex',
      alignItems: 'center',
      gap: '10px',
   },

   '& .times-box': {
      width: '300px ',
   },
}))

const StyledTimeButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      padding: '5px 0',
      width: '91px',
      borderRadius: '1.5rem',
      height: '33px',
      margin: '4px',
      fontSize: '10px',
   },

   '&:active': {
      borderRadius: '1.5rem',
   },

   '&:hover': {
      borderRadius: '1.5rem',
   },
}))
