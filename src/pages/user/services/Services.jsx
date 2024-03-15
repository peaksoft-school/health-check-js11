import { useState } from 'react'
import {
   Box,
   Collapse,
   List,
   ListItemButton,
   ListItemText,
   Typography,
   styled,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ArrowUpIcon } from '../../../assets/icons'
import { PROSEDURA, SERVICES } from '../../../utils/constants'
import Leave from '../../../components/landing/Leave'

const Services = () => {
   const [open, setOpen] = useState(false)
   const [secons, setSecond] = useState(false)
   const [third, setThird] = useState(false)
   const [fourth, setFourth] = useState(false)
   const [fifth, setFifth] = useState(false)

   const handleClick = () => setOpen(!open)
   const handleClickSecond = () => setSecond(!secons)
   const handleClickThird = () => setThird(!third)
   const handleClickFouth = () => setFourth(!fourth)
   const handleClickFifth = () => setFifth(!fifth)

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
                     <StyledService key={id}>
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

               <StyledDropdown onClick={handleClick}>
                  <ListItemText primary="Как проходит процедура?" />

                  {open ? (
                     <ExpandLess className="open-icon" />
                  ) : (
                     <ExpandMore className="open-icon" />
                  )}
               </StyledDropdown>

               <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 4 }} className="listItem">
                        <ListItemText primary={PROSEDURA} />
                     </ListItemButton>
                  </List>
               </Collapse>

               <StyledSecondDropDown onClick={handleClickSecond}>
                  <ListItemText primary="Показания" />

                  {secons ? (
                     <ExpandLess className="open-icon" />
                  ) : (
                     <ExpandMore className="open-icon" />
                  )}
               </StyledSecondDropDown>

               <Collapse in={secons} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 4 }} className="listItem">
                        <ListItemText primary={PROSEDURA} />
                     </ListItemButton>
                  </List>
               </Collapse>

               <StyledSecondDropDown onClick={handleClickThird}>
                  <ListItemText primary="Противопоказания" />

                  {third ? (
                     <ExpandLess className="open-icon" />
                  ) : (
                     <ExpandMore className="open-icon" />
                  )}
               </StyledSecondDropDown>

               <Collapse in={third} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 4 }} className="listItem">
                        <ListItemText primary={PROSEDURA} />
                     </ListItemButton>
                  </List>
               </Collapse>

               <StyledSecondDropDown onClick={handleClickFouth}>
                  <ListItemText primary="Насколько безопасно отбеливание Zoom 4?" />

                  {fourth ? (
                     <ExpandLess className="open-icon" />
                  ) : (
                     <ExpandMore className="open-icon" />
                  )}
               </StyledSecondDropDown>

               <Collapse in={fourth} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 4 }} className="listItem">
                        <ListItemText primary={PROSEDURA} />
                     </ListItemButton>
                  </List>
               </Collapse>

               <StyledSecondDropDown onClick={handleClickFifth}>
                  <ListItemText primary="Сколько держится результат?" />

                  {fifth ? (
                     <ExpandLess className="open-icon" />
                  ) : (
                     <ExpandMore className="open-icon" />
                  )}
               </StyledSecondDropDown>

               <Collapse in={fifth} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItemButton sx={{ pl: 4 }} className="listItem">
                        <ListItemText primary={PROSEDURA} />
                     </ListItemButton>
                  </List>
               </Collapse>
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

const StyledService = styled(Box)(() => ({
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
      cursor: 'pointer',
      transform: 'translateY(-7px)',
      background: 'radial-gradient(circle #FDFDFD,#E4E7EE)',
   },

   '& .icon': {
      width: '3.375rem',
      height: '3.375rem',
   },
}))

const StyledDropdown = styled(ListItemButton)(() => ({
   width: '52.625rem',
   backgroundColor: '#048741',
   borderRadius: '10px',
   color: 'white',
   marginBottom: '20px',

   '&:hover': {
      width: '52.625rem',
      backgroundColor: '#048741',
      borderRadius: '10px',
      color: 'white',
   },

   '& .open-icon': {
      backgroundColor: 'white',
      borderRadius: '50%',
      fill: '#048741',
   },
}))

const StyledSecondDropDown = styled(ListItemButton)(() => ({
   width: '52.625rem',
   backgroundColor: '#DBF0E5',
   borderRadius: '10px',
   color: '#4D4E51',
   borderLeftColor: 'red',
   marginBottom: '15px',
   borderLeft: '8px solid rgb(4, 135, 65) !important',

   '&:hover': {
      width: '52.625rem',
      backgroundColor: '#DBF0E5',
      color: '#4D4E51',
   },

   '& .open-icon': {
      backgroundColor: 'white',
      borderRadius: '50%',
      fill: '#DBF0E5',
   },
}))
