import { Typography, styled, Box } from '@mui/material'
import { AboutClinicImage } from '../../../assets/images'
import AboutUs from '../../../components/landing/AboutUs'

const AboutClinic = () => {
   return (
      <StyledContainer>
         <Typography>Главная {'>'} о клинике</Typography>

         <Typography className="title" variant="h3">
            Здоровье — самое <span> </span>
            <Typography className="mark" variant="span">
               ценное в жизни
            </Typography>
         </Typography>

         <Box className="image-box">
            <img src={AboutClinicImage} alt="clinic-info" />
         </Box>

         <AboutUs />
      </StyledContainer>
   )
}

export default AboutClinic

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .title': {
      marginLeft: '100px',
      marginTop: '100px',
      '& > .mark': {
         color: theme.palette.primary.darkGreen,
      },
   },

   '& .image-box': {
      padding: '50px 0 0 180px',
      display: 'flex',
      justifyContent: 'center',
   },
}))
