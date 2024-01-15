// import { Typography, styled } from '@mui/material'
// import { Vector } from '../assets/icons/serviceIcons '
// import Building from '../assets/images/3blockImage.png'
// import Conference from '../assets/images/3blockImage2.png'
// import Photos from '../assets/images/3blockImage3.png'
// import Doctors from '../assets/images/3blockImage4.png'

// const AboutHealthCheck = () => {
//    return (
//       <StyledThirdBlock>
//          <StyledMainContainer>
//             <StyledTitle variant="h2">
//                О нашей клинике
//                <Typography variant="p"> “HealthCheck”</Typography>
//             </StyledTitle>
//             <StyledContainer>
//                <StyledTextContainer>
//                   <Typography variant="p">
//                      Вся наша команда готова обеспечить вам медицинский уход и
//                      заботу на cамом высоком уровне. Наша главная задача —
//                      оказать Вам теплый прием и обеспечить самый лучший
//                      медицинский уход. У нас Вы в хороших руках! B нашей клинике
//                      используются только качественные материалы и проверенные
//                      технологии. Для каждого клиента специалисты нашей клиники
//                      разработают индивидуальный план лечения, подробно
//                      рассказывая o каждом этапе.
//                      <br />
//                      <br />
//                      Доброжелательность и уважительное отношение к пациентам, не
//                      только материальная, но и моральная ответственность за
//                      результаты лечения — все это взято за основу политики
//                      Medical Clinic. Профессионализм и высокое качество
//                      оказываемых услуг помогают нам привлечь пациентов которые
//                      рекомендуют нас своим родным и близким.
//                      <br />
//                      <br />
//                      Уже 20 лет мы работаем на уровне лучших мировых стандартов,
//                      внедряя и развивая передовые методы лечения для сохранения
//                      здоровья наших пациентов.
//                   </Typography>
//                   <StyledNavlink variant="p">
//                      Читать подробнее о клинике <Vector />
//                   </StyledNavlink>
//                </StyledTextContainer>
//                <StyledImagesContainer>
//                   <StyledBuildingImg src={Building} alt="Здание" />
//                   <StyledSlidingImG>
//                      <StyledBuildingImG src={Conference} alt="доктора" />
//                      <StyledCenterBuildingImG src={Photos} alt="доктора" />
//                      <StyledBuildingImG src={Doctors} alt="доктора" />
//                   </StyledSlidingImG>
//                </StyledImagesContainer>
//             </StyledContainer>
//          </StyledMainContainer>
//       </StyledThirdBlock>
//    )
// }

// export default AboutHealthCheck

// const StyledThirdBlock = styled('div')(({ theme }) => ({
//    display: 'flex',
//    justifyContent: 'center',
//    [theme.breakpoints.down('lg')]: {},
// }))

// const StyledMainContainer = styled('div')(() => ({
//    display: 'flex',
//    flexDirection: 'column',
//    gap: '3.75rem',
// }))

// const StyledContainer = styled('div')(() => ({
//    display: 'flex',
//    gap: '6.313rem',
//    alignItems: 'stretch',
//    height: '34.125rem',
// }))

// const StyledTitle = styled(Typography)(({ theme }) => ({
//    fontFamily: 'Manrope',
//    fontSize: '2.25rem',
//    fontStyle: 'normal',
//    fontWeight: '600',
//    lineHeight: 'normal',

//    '& .MuiTypography-root': {
//       color: theme.palette.primary.darkGreen,
//    },
// }))

// const StyledTextContainer = styled('div')(({ theme }) => ({
//    display: 'flex',
//    flexDirection: 'column',
//    maxHeight: '30.875rem',
//    maxWidth: '32.063rem',
//    minWidth: '32rem',
//    width: 'auto',

//    '& .MuiTypography-root': {
//       fontSize: '1rem',
//       fontFamily: 'Manrope',
//       fontStyle: 'normal',
//       fontWeight: '400',
//       lineHeight: '160%',
//       color: '#4D4E51',
//    },
//    [theme.breakpoints.down('lg')]: {
//       // width: '28rem',
//       '& .MuiTypography-root': {
//          fontSize: '0.8rem',
//       },
//    },
// }))

// const StyledImagesContainer = styled('div')(() => ({
//    display: 'flex',
//    flexDirection: 'column',
//    alignItems: 'center',
//    gap: '1.625rem',
//    maxWidth: '36.625rem',
//    minWidth: '36rem',
//    width: 'auto',

//    '& > div': {
//       display: 'flex',
//       gap: '1.625rem',
//    },
// }))

// const StyledBuildingImG = styled('img')(() => ({
//    width: '95%',
//    height: '24.875rem',
//    marginTop: '1.25rem ',
// }))
// const StyledBuildingImg = styled('img')(() => ({
//    maxWidth: '36.625em',
// }))

// const StyledCenterBuildingImG = styled('img')(() => ({
//    marginLeft: '1.25rem',
//    marginRight: '1.25rem',
// }))
// const StyledSlidingImG = styled('div')(({ theme }) => ({
//    display: ' flex',
//    img: {
//       width: '29%',
//       height: '7.5rem',
//       borderRadius: '0.5rem',
//       gap: '1.625rem',
//       marginTop: '1.25rem ',

//       [theme.breakpoints.down('lg')]: {
//          width: '20%`',
//       },
//    },
// }))

// const StyledNavlink = styled('p')(() => ({
//    width: '15.5rem',
//    color: '#009344',
//    fontSize: '1rem',
//    fontWeight: 500,
//    textDecoration: 'none',
//    cursor: 'pointer',
//    paddingTop: '1rem',
//    marginTop: '2.875rem',
// }))

import { Typography, styled } from '@mui/material'
import Building from '../assets/images/3blockImage.png'
import Conference from '../assets/images/3blockImage2.png'
import Photos from '../assets/images/3blockImage3.png'
import Doctors from '../assets/images/3blockImage4.png'
import { Vector } from '../assets/icons/serviceIcons '

const StyledThirdBlock = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   // [theme.breakpoints.down('lg')]: {
   // flexDirection: 'column',
   // alignItems: 'center',
   // },
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
      flexDirection: 'column',
      gap: '2rem',
   },
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
   fontFamily: 'Manrope',
   fontSize: '2.25rem',
   fontStyle: 'normal',
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
   minWidth: '32rem',
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
      maxWidth: '28rem',
   },
}))

const StyledImagesContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '1.625rem',
   maxWidth: '36.625rem',
   minWidth: '36rem',
   width: 'auto',

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

const StyledBuildingImg = styled('img')(() => ({
   width: '100%',
   height: 'auto',
   maxWidth: '36.625em',
}))

const StyledCenterBuildingImG = styled('img')(() => ({
   marginLeft: '1.25rem',
   marginRight: '1.25rem',
   width: '29%',
   height: 'auto',
}))

const StyledSlidingImG = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '1.625rem',
   marginTop: '1.25rem',
   img: {
      width: '29%',
      height: 'auto',
      borderRadius: '0.5rem',
      [theme.breakpoints.down('lg')]: {
         width: '20%',
      },
   },
}))

const StyledNavlink = styled('p')(() => ({
   width: '15.5rem',
   color: '#009344',
   fontSize: '1rem',
   fontWeight: 500,
   textDecoration: 'none',
   cursor: 'pointer',
   paddingTop: '1rem',
   marginTop: '2.875rem',
}))

const AboutHealthCheck = () => {
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
                  <StyledNavlink variant="p">
                     Читать подробнее о клинике <Vector />
                  </StyledNavlink>
               </StyledTextContainer>
               <StyledImagesContainer>
                  <StyledBuildingImg src={Building} alt="Здание" />
                  <StyledSlidingImG>
                     <StyledBuildingImG src={Conference} alt="доктора" />
                     <StyledCenterBuildingImG src={Photos} alt="доктора" />
                     <StyledBuildingImG src={Doctors} alt="доктора" />
                  </StyledSlidingImG>
               </StyledImagesContainer>
            </StyledContainer>
         </StyledMainContainer>
      </StyledThirdBlock>
   )
}

export default AboutHealthCheck
