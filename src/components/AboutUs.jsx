import { Typography, styled } from '@mui/material'
import Building from '../assets/images/building.png'
import Conference from '../assets/images/conference.png'
import Stady from '../assets/images/doctors.png'
import Doctors from '../assets/images/stady.png'
import { Arrow } from '../assets/icons/index'

const AboutUs = () => (
   <StyledMain>
      <StyledContainer>
         <StyledTitle variant="h2">
            О нашей клинике
            <Typography variant="p"> “HealthCheck”</Typography>
         </StyledTitle>

         <StyledContent>
            <StyledTextContainer>
               <StyledReadMore variant="p">
                  Читать подробнее о клинике <Arrow />
               </StyledReadMore>
            </StyledTextContainer>

            <StyledImagesContainer>
               <StyledBuildingImg src={Building} alt="здание" />
               <StyledSlidingImG>
                  <StyledImg src={Stady} alt="доктора учатся" />
                  <StyledImg src={Doctors} alt="доктора" />
                  <StyledImg src={Conference} alt="доктора в конфернеции" />
               </StyledSlidingImG>
            </StyledImagesContainer>
         </StyledContent>
      </StyledContainer>
   </StyledMain>
)

export default AboutUs

const StyledMain = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '3.75rem',

   [theme.breakpoints.down('lg')]: {
      gap: '2rem',
   },
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
   fontFamily: 'Manrope',
   fontSize: '2.25rem',
   fontWeight: '600',
   lineHeight: 'normal',

   '& .MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },

   [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
   },
}))

const StyledContent = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '6.313rem',
   alignItems: 'stretch',
   height: '34.125rem',

   [theme.breakpoints.down('lg')]: {
      gap: '5rem',
   },
}))

const StyledTextContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   maxHeight: '30.875rem',
   maxWidth: '32.063rem',
   width: 'auto',

   '& .MuiTypography-root': {
      fontSize: '1rem',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '160%',
      color: '#4D4E51',
   },

   [theme.breakpoints.down('lg')]: {
      '& .MuiTypography-root': {
         fontSize: '0.8rem',
      },
      width: '370px',
   },
}))

const StyledImagesContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '0.5rem',
   maxWidth: '36.625rem',

   [theme.breakpoints.down('lg')]: {
      width: '33rem',
   },

   '& > div': {
      display: 'flex',
      gap: '1.625rem',
   },
}))

const StyledImg = styled('img')(() => ({
   width: '100%',
   height: 'auto',
   marginTop: '1.25rem',
}))

const StyledBuildingImg = styled('img')(({ theme }) => ({
   maxWidth: '36.625em',
   [theme.breakpoints.down('lg')]: {
      width: '30rem',
   },
}))

const StyledSlidingImG = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '1.625rem',
   img: {
      width: '173px',
      height: 'auto',
      borderRadius: '0.5rem',
      [theme.breakpoints.down('lg')]: {
         alignItems: 'center',
         width: '140px',
      },
   },
}))

const StyledReadMore = styled('a')(({ theme }) => ({
   width: '15.5rem',
   color: '#009344',
   fontWeight: 500,
   textDecoration: 'none',
   cursor: 'pointer',
   paddingTop: '1rem',
   marginTop: '1.4rem',
   [theme.breakpoints.down('lg')]: {
      marginTop: '0.5rem',
      fontSize: '0.8rem',
   },
}))
