import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Box, styled, Typography } from '@mui/material'
import { SERVICES } from '../../utils/constants'
import { ArrowUpIcon } from '../../assets/icons'

const Service = () => {
   const { id } = useParams()

   const serid = parseInt(id, 10)

   const selectedService = SERVICES.find((service) => service.id === serid)

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="main-link-box">
               <Link to="/" className="main-link">
                  Главная <ArrowUpIcon className="link-arrow" />
               </Link>

               <Link to="/services" className="main-link">
                  Услуги <ArrowUpIcon className="link-arrow" />
               </Link>

               <Typography className="services">
                  {selectedService.name}
               </Typography>
            </Box>

            <Typography className="title">{selectedService.name}</Typography>

            <Typography className="description">
               {selectedService.description}
            </Typography>

            <Box className="question-box">
               <Typography className="question">
                  {selectedService.whenToConsult.question}
               </Typography>

               <Typography className="description">
                  {selectedService.whenToConsult.answer}
               </Typography>

               <ul className="causes">
                  {selectedService.whenToConsult.cases.map((cause) => (
                     <li>{cause}</li>
                  ))}
               </ul>
            </Box>

            <Box className="question-box">
               <Typography className="question">
                  {selectedService.diseasesTreated.question}
               </Typography>

               <Typography className="description question-desc">
                  {selectedService.diseasesTreated.answer}
               </Typography>

               <ul className="causes">
                  {selectedService.diseasesTreated.diseases.map((disease) => (
                     <li>{disease}</li>
                  ))}
               </ul>
            </Box>

            <Typography>
               Цены на прием <span> врача-дерматолога</span>
            </Typography>
         </Box>
      </StyledContainer>
   )
}
export default Service

const StyledContainer = styled(Box)(() => ({
   padding: '30px 0 0 120px',

   '& .box': {
      maxWidth: '1600px',
      margin: '0 auto',

      '& .main-link-box': {
         display: 'flex',

         '& .services': {
            fontWeight: '400',
            fontSize: '14px',
         },

         '& .main-link': {
            fontWeight: '400',
            fontSize: '14px',
            textDecoration: 'none',
            color: 'rgb(4, 135, 65)',

            '& .link-arrow': {
               transform: 'rotate(90deg)',
               width: '10px',
               height: '10px',
               margin: '0 4px 0 2px',
            },
         },
      },

      '& .title': {
         fontWeight: '600',
         fontSize: '36px',
         fontFamily: 'Manrope',
         color: 'rgb(4, 135, 65)',
         margin: '20px 0 34px',
      },

      '& .description': {
         width: '48rem',
         fontFamily: 'Manrope',
         fontSize: '16px',
         fontWeight: '300',
      },

      '& .question-desc': {
         width: '500px',
      },

      '& .causes': {
         marginTop: '12px',
         paddingLeft: '25px',
         gap: '5px',

         '& > li': {
            marginBottom: '5px',
            fontFamily: 'Manrope',
            fontSize: '16px',
            fontWeight: '300',

            '&::marker': {
               color: 'rgb(4, 135, 65)',
            },
         },
      },

      '& .question-box': {
         marginTop: '50px',
         width: '48rem',

         '& .question': {
            fontWeight: '600',
            fontSize: '24px',
            fontFamily: 'Manrope',
            marginBottom: '16px',
         },
      },
   },
}))
