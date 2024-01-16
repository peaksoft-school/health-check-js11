import { Typography, styled } from '@mui/material'
import Building from '../assets/images/building-image.png'
import Conference from '../assets/images/conference-image.png'
import Photos from '../assets/images/doctors-image.png'
import Doctors from '../assets/images/stady-image.png'
import { Arrow } from '../assets/icons/index'

const AboutUs = () => {
   return (
      <StyledThirdBlock>
         <StyledMainContainer>
            <StyledTitle variant="h2">
               О нашей клинике
               <Typography variant="p"> “HealthCheck”</Typography>
            </StyledTitle>
            <StyledContainer>
               <StyledTextContainer>
                  <Typography variant="p">
                     Вся наша команда готова обеспечить вам медицинский уход и
                     заботу на самом высоком уровне. Наша главная задача —
                     оказать Вам теплый прием и обеспечить самый лучший
                     медицинский уход. У нас Вы в хороших руках! B нашей клинике
                     используются только качественные материалы и проверенные
                     технологии. Для каждого клиента специалисты нашей клиники
                     разработают индивидуальный план лечения, подробно
                     рассказывая о каждом этапе.
                     <br />
                     <br />
                     Доброжелательность и уважительное отношение к пациентам, не
                     только материальная, но и моральная ответственность за
                     результаты лечения — все это взято за основу политики
                     Medical Clinic. Профессионализм и высокое качество
                     оказываемых услуг помогают нам привлечь пациентов которые
                     рекомендуют нас своим родным и близким.
                     <br />
                     <br />
                     Уже 20 лет мы работаем на уровне лучших мировых стандартов,
                     внедряя и развивая передовые методы лечения для сохранения
                     здоровья наших пациентов.
                  </Typography>
                  <StyledNavlink variant="a">
                     Читать подробнее о клинике <Arrow />
                  </StyledNavlink>
               </StyledTextContainer>
               <StyledImagesContainer>
                  <StyledBuildingImg src={Building} alt="здание" />
                  <StyledSlidingImG>
                     <StyledBuildingImG src={Doctors} alt="доктора" />
                     <StyledBuildingImG src={Photos} alt="доктора" />
                     <StyledBuildingImG src={Conference} alt="доктора" />
                  </StyledSlidingImG>
               </StyledImagesContainer>
            </StyledContainer>
         </StyledMainContainer>
      </StyledThirdBlock>
   )
}

export default AboutUs

const StyledThirdBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledMainContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '3.75rem',
   [theme.breakpoints.down('lg')]: {
      gap: '2rem',
   },
}))

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '6.313rem',
   alignItems: 'stretch',
   height: '34.125rem',
   [theme.breakpoints.down('lg')]: {
      gap: '5rem',
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

const StyledBuildingImG = styled('img')(() => ({
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

const StyledNavlink = styled('a')(({ theme }) => ({
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
