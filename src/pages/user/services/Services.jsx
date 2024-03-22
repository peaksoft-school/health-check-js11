import { useState } from 'react'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Box,
   Typography,
   styled,
} from '@mui/material'
import { ExpandLess } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowUpIcon } from '../../../assets/icons'
import { ROUTES } from '../../../routes/routes'
import { SERVICES } from '../../../utils/constants/services'
import Leave from '../../../components/landing/Leave'
import Prosedura from '../../../layout/user/Prosedura'

const Services = () => {
   const navigate = useNavigate()

   const handleNavigate = (id) => {
      navigate(`${ROUTES.USER.INDEX}${ROUTES.USER.SERVICE}/${id}`)
   }

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="main-link-box">
               <Link to="/" className="main-link">
                  Главная <ArrowUpIcon className="link-arrow" />
               </Link>

               <Typography className="services">Услуги</Typography>
            </Box>

            <Box className="our-services-container">
               <Typography className="title-our">
                  Наши
                  <Box component="span" className="title-services">
                     услуги
                  </Box>
               </Typography>

               <Box className="cards-box">
                  {SERVICES.map(({ id, name, icon }) => (
                     <StyledService key={id} onClick={() => handleNavigate(id)}>
                        <Box className="icon">{icon}</Box>

                        <Typography className="name">{name}</Typography>
                     </StyledService>
                  ))}
               </Box>
            </Box>

            <Box className="questions-box">
               <Typography variant="h3" className="questions-title">
                  Часто задаваемые вопросы
               </Typography>

               <Typography className="questions-description">
                  Специалисты нашей клиники с удовольствием ответят на все ваши
                  вопросы. Ниже представленны наиболее популярные.
               </Typography>

               <StyledDropdown>
                  <AccordionSummary
                     expandIcon={<ExpandLess className="open-icon" />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     Как проходит процедура?
                  </AccordionSummary>

                  <AccordionDetails className="answer">
                     <Prosedura />
                  </AccordionDetails>
               </StyledDropdown>

               <StyledSecondDropDown>
                  <AccordionSummary
                     expandIcon={<ExpandLess className="open-icon" />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     Показания
                  </AccordionSummary>

                  <AccordionDetails className="answer">
                     <Prosedura />
                  </AccordionDetails>
               </StyledSecondDropDown>

               <StyledSecondDropDown>
                  <AccordionSummary
                     expandIcon={<ExpandLess className="open-icon" />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     Противопоказания
                  </AccordionSummary>

                  <AccordionDetails className="answer">
                     <Prosedura />
                  </AccordionDetails>
               </StyledSecondDropDown>

               <StyledSecondDropDown>
                  <AccordionSummary
                     expandIcon={<ExpandLess className="open-icon" />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     Насколько безопасно отбеливание Zoom 4?
                  </AccordionSummary>

                  <AccordionDetails className="answer">
                     <Prosedura />
                  </AccordionDetails>
               </StyledSecondDropDown>

               <StyledSecondDropDown>
                  <AccordionSummary
                     expandIcon={<ExpandLess className="open-icon" />}
                     aria-controls="panel1-content"
                     id="panel1-header"
                  >
                     Сколько держится результат?
                  </AccordionSummary>

                  <AccordionDetails className="answer">
                     <Prosedura />
                  </AccordionDetails>
               </StyledSecondDropDown>
            </Box>
         </Box>
         <Leave />
      </StyledContainer>
   )
}

export default Services

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
            color: 'rgb(4, 135, 65)',
         },

         '& .main-link': {
            fontWeight: '400',
            fontSize: '14px',
            textDecoration: 'none',

            '& .link-arrow': {
               transform: 'rotate(90deg)',
               width: '10px',
               height: '10px',
               margin: '0 4px 0 2px',
            },
         },
      },

      '& .our-services-container': {
         marginTop: '16px',

         '& .title-our': {
            fontSize: '36px',
            fontWeight: '600',
            color: 'rgb(34, 34, 34)',
         },

         '& .title-services': {
            color: 'rgb(4, 135, 65)',
            marginLeft: '10px',
         },

         '& .cards-box': {
            marginTop: '60px',
            display: 'flex',
            gap: '26px',
            flexWrap: 'wrap',
            width: '62.5rem',
         },
      },

      '& .questions-box': {
         marginTop: '120px',

         '& .questions-title': {
            fontWeight: '400',
            fontSize: '36px',
            marginBottom: '36px',
         },

         '& .questions-description': {
            fontWeight: '400',
            fontSize: '18px',
            width: '43.75rem',
            marginBottom: '16px',
         },

         '& .listItem': {
            padding: '0px',
            marginBottom: '40px',

            '&:hover': {
               backgroundColor: 'white',
               cursor: 'auto',
            },
         },
      },
   },
}))

const StyledService = styled(Box)(({ theme }) => ({
   width: '26.875rem',
   height: '5.625rem',
   display: 'flex',
   alignItems: 'center',
   border: '2px solid rgb(217, 217, 217)',
   borderRadius: '4px',
   padding: '12px 22px',
   gap: '24px',
   transition: '0.3s',

   '&:hover': {
      color: 'white',
      cursor: 'pointer',
      transform: 'translateY(-7px)',
      backgroundColor: theme.palette.primary.darkGreen,

      '& .icon': {
         width: '3.375rem',
         height: '3.375rem',

         '& > svg path': {
            fill: 'white',
         },
      },
   },

   '& .icon': {
      width: '3.375rem',
      height: '3.375rem',
   },
}))

const StyledDropdown = styled(Accordion)(() => ({
   '&:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
   },

   width: '52.625rem',
   backgroundColor: '#048741',
   borderRadius: '10px',
   color: 'white',
   marginBottom: '20px',

   '&:hover': {
      width: '52.625rem',
      backgroundColor: '#048741',
      color: 'white',
   },

   '& .answer': {
      backgroundColor: 'white',

      '& > div > ul': {
         marginLeft: '15px',
         display: 'flex',
         gap: '5px',
         flexDirection: 'column',
      },
   },

   '& .open-icon': {
      backgroundColor: 'white',
      borderRadius: '50%',
      fill: '#048741',
   },
}))

const StyledSecondDropDown = styled(Accordion)(() => ({
   width: '52.625rem',
   backgroundColor: '#DBF0E5',
   borderRadius: '10px',
   color: '#4D4E51',
   borderLeftColor: 'red',
   marginBottom: '15px',
   borderLeft: '8px solid rgb(4, 135, 65)',
   borderBottom: 'none',

   '& > div .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
   },

   '& .answer': {
      backgroundColor: 'white',

      '& > div > ul': {
         marginLeft: '15px',
         display: 'flex',
         gap: '5px',
         flexDirection: 'column',
      },
   },

   '& .open-icon': {
      backgroundColor: 'white',
      borderRadius: '50%',
      fill: '#DBF0E5',
      transform: 'rotate(90deg)',
      border: '1px solid green',

      '& > path': {
         fill: 'green',
      },
   },

   '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
   },

   '&:hover': {
      width: '52.625rem',
      backgroundColor: '#DBF0E5',
      color: '#4D4E51',
   },

   '&::before': {
      backgroundColor: 'white',
   },
}))
