import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import {
   Box,
   Collapse,
   List,
   ListItemButton,
   ListItemText,
   styled,
   Typography,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { ArrowUpIcon } from '../../assets/icons'
import { SERVICES } from '../../utils/constants/services'
import { MedicImage, NotFoundSpecialistImage } from '../../assets/images'
import Reviews from '../../components/landing/Reviews'
import Button from '../../components/UI/Button'
import Leave from '../../components/landing/Leave'
import { SPECIALISTS_THUNKS } from '../../store/slices/specialists/specialictsThunk'

const InnerService = () => {
   const [initialAppointment, setInitialAppointment] = useState(false)
   const [initialAppointment2, setInitialAppointment2] = useState(false)

   const handleClick = () => setInitialAppointment(!initialAppointment)
   const handleInitialClick = () => setInitialAppointment2(!initialAppointment2)

   const { id } = useParams()

   const dispatch = useDispatch()

   const serid = parseInt(id, 10)

   const selectedService = SERVICES.find((service) => service.id === serid)

   useEffect(() => {
      dispatch(SPECIALISTS_THUNKS.getDoctorsByDepartment(selectedService.name))
   }, [dispatch])

   const { getDoctorsByDepartment } = useSelector((state) => state.specialists)

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="main-box">
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

               <Typography className="name">{selectedService.name}</Typography>

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
                        <li key={cause}>{cause}</li>
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
                     {selectedService.diseasesTreated.diseases.map(
                        (disease) => (
                           <li key={disease}>{disease}</li>
                        )
                     )}
                  </ul>
               </Box>

               <Typography className="price-title">
                  Цены на прием
                  <span className="green-price-title">
                     {selectedService.priceTitle}
                  </span>
               </Typography>

               <Box className="price-box">
                  <Box className="service-price-box">
                     <Typography className="service-price">Услуга</Typography>
                     <Typography className="service-price">
                        Стоимость
                     </Typography>
                  </Box>

                  <Box className="drop-down-box">
                     <StyledListItemButton onClick={handleClick}>
                        <ListItemText
                           primary={selectedService.initialAppointment.type}
                           className="reception"
                        />
                        <ListItemText
                           primary={`${selectedService.initialAppointment.price} сом`}
                           className="price"
                        />

                        {initialAppointment ? (
                           <ExpandLess className="open-icon" />
                        ) : (
                           <ExpandMore className="open-icon" />
                        )}
                     </StyledListItemButton>

                     <Collapse
                        in={initialAppointment}
                        timeout="auto"
                        unmountOnExit
                     >
                        <List component="div" disablePadding>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText
                                 className="list-item-text"
                                 primary="Показано при любых формах ишемической болезни и пороках сердца, повышенном артериальном давлении, кардиомиопатии, аритмии и других патологиях."
                              />
                           </ListItemButton>
                        </List>
                     </Collapse>
                  </Box>

                  <Box className="drop-down-box">
                     <StyledListItemButton onClick={handleInitialClick}>
                        <ListItemText
                           primary={selectedService.initialAppointment2.type}
                           className="reception"
                        />

                        <ListItemText
                           primary={`${selectedService.initialAppointment2.price} сом`}
                           className="price"
                        />

                        {initialAppointment2 ? (
                           <ExpandLess className="open-icon" />
                        ) : (
                           <ExpandMore className="open-icon" />
                        )}
                     </StyledListItemButton>

                     <Collapse
                        in={initialAppointment2}
                        timeout="auto"
                        unmountOnExit
                     >
                        <List component="div" disablePadding>
                           <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText
                                 className="list-item-text"
                                 primary={
                                    selectedService.initialAppointment2
                                       .description
                                 }
                              />
                           </ListItemButton>
                        </List>
                     </Collapse>
                  </Box>

                  <Box className="repeated-appointment">
                     <Typography className="repeat">
                        {selectedService.repeatedAppointment.type}
                     </Typography>

                     <Typography className="price">{`${selectedService.repeatedAppointment.price} сом`}</Typography>
                  </Box>
               </Box>
            </Box>

            <Reviews />

            <Typography className="doctors-title">
               Специалисты в данном направлении
            </Typography>

            <Box className="doctors-box">
               {getDoctorsByDepartment.length > 0 ? (
                  getDoctorsByDepartment?.map(
                     ({ id, image, fullNameDoctor, position }) => (
                        <Box key={id} className="doctors-card">
                           {!image?.startsWith('https://') ? (
                              <Box className="not-photo-box">
                                 <img
                                    src={NotFoundSpecialistImage}
                                    alt="doctor-img"
                                    className="doctor-img"
                                 />
                              </Box>
                           ) : (
                              <img
                                 src={image}
                                 className="image"
                                 alt="doctor-img"
                              />
                           )}

                           <Typography className="doctor-name">
                              {fullNameDoctor}
                           </Typography>

                           <Typography className="doctor-position">
                              {position}
                           </Typography>

                           <Button variant="secondary" className="leave-button">
                              Записаться на прием
                           </Button>
                        </Box>
                     )
                  )
               ) : (
                  <>
                     <Typography className="no-doctors-text">
                        В данном направлении нету специалистов...
                     </Typography>
                     <img
                        src={MedicImage}
                        alt="no-doctor"
                        className="no-doctor"
                     />
                  </>
               )}
            </Box>

            <Leave />
         </Box>
      </StyledContainer>
   )
}
export default InnerService

const StyledListItemButton = styled(ListItemButton)(() => ({
   marginTop: '15px',
   padding: '16px 0',

   '& > .price': {
      width: '85px',

      '& > span': {
         width: '100px',
         marginLeft: '185px',
         fontSize: '18px',
         fontWeight: '500',
         fontFamily: 'Manrope',
      },
   },

   '& .reception': {
      '& > span': {
         fontSize: '18px',
         fontWeight: '500',
         fontFamily: 'Manrope',
         marginLeft: '10px',
         width: '340px',
      },
   },

   '& .open-icon > path': {
      fill: 'green',
   },

   '&:hover': {
      backgroundColor: 'white',
   },
}))

const StyledContainer = styled(Box)(() => ({
   paddingTop: '30px',

   '& .box': {
      maxWidth: '1600px',
      margin: '0 auto',

      '& .doctors-title': {
         fontFamily: 'Manrope',
         fontSize: '24px',
         fontWeight: '600',
         margin: '120px 0 40px 120px',
      },

      '& .main-box': {
         paddingLeft: '120px',
      },

      '& .doctors-box': {
         display: 'flex',
         flexWrap: 'wrap',
         gap: '30px',
         margin: '0px 0 120px 120px',

         '& .doctors-card': {
            width: '20rem',
            height: '29.5rem',

            '& .not-photo-box': {
               borderRadius: '4px',
               height: '21.875rem',
               width: '20rem',
               objectFit: 'cover',
               marginBottom: '16px',
               border: '2px solid #b3bec3',
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',

               '& .doctor-img': {
                  width: '250px',
               },
            },

            '& > .image': {
               borderRadius: '4px',
               height: '21.875rem',
               width: '20rem',
               objectFit: 'cover',
               marginBottom: '16px',
            },

            '& .doctor-name': {
               fontFamily: 'Manrope',
               fontWeight: '500',
               fontSize: '18px',
            },

            '& .doctor-position': {
               fontSize: '16px',
               fontFamily: 'Manrope',
               fontWeight: '500',
               color: 'rgb(145, 147, 153)',
            },

            '& .leave-button': {
               marginTop: '18px',
               width: '12.625rem',
               padding: '10px 20px !important',
               fontSize: '13px',
               fontWeight: '400',
               height: '2.625rem',

               '&:hover': {
                  width: '12.625rem',
                  padding: '10px, 20px !important',
                  height: '2.625rem',
                  border: 'none',
               },
            },
         },

         '& .no-doctors-text': {
            fontFamily: 'Manrope',
         },

         '& .no-doctor': {
            width: '800px',
         },
      },

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

      '& .name': {
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

      '& .price-title': {
         fontFamily: 'Manrope',
         fontWeight: '700',
         fontSize: '36px',
         marginTop: '120px',

         '& .green-price-title': {
            color: 'rgb(4, 135, 65)',
         },
      },

      '& .price-box': {
         width: '53.375rem',

         '& .drop-down-box': {
            borderBottom: '1px solid rgb(224, 226, 231)',

            '& .MuiListItemButton-root': {
               paddingRight: '8px',
               margin: '0px',
            },
         },

         '& .repeated-appointment': {
            borderBottom: '1px solid rgb(224, 226, 231)',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '120px',
            padding: '24px 43px 24px 11px',

            '& .price': {
               fontSize: '18px',
               fontWeight: '500',
               fontFamily: 'Manrope',
            },

            '& .repeat': {
               fontSize: '18px',
               fontWeight: '500',
               fontFamily: 'Manrope',
            },
         },

         '& .list-item-text > span': {
            fontWeight: '300',
            fontSize: '16px',
            color: 'rgb(77, 78, 81)',
            fontFamily: 'Manrope',
         },

         '& .service-price-box': {
            marginTop: '60px',
            display: 'flex',
            height: '59px',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(219, 240, 229)',
            padding: '0 38px',

            '& .service-price': {
               fontFamily: 'Manrope',
               fontWeight: '600',
               fontSize: '18px',
            },
         },
      },
   },
}))
