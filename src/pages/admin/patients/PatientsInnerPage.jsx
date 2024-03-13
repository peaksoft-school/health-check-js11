import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { Box, Typography, styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import Button from '../../../components/UI/Button'
import Loading from '../../../components/Loading'
import { PATIENT_THUNKS } from '../../../store/slices/patient/patientThunk'
import AddResult from './AddResult'
import { PlusIcon, ResultFileIcon } from '../../../assets/icons'

const PatientsInnerPage = () => {
   const [toggleModal, setToggleModal] = useState(false)

   const { id } = useParams()
   const { data, isLoading, results } = useSelector((state) => state.patient)

   const toggleModalHandler = () => setToggleModal((prev) => !prev)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(PATIENT_THUNKS.getPatient(id))
      dispatch(PATIENT_THUNKS.getPatientResult(id))
   }, [id])

   return (
      <StyledContainer>
         <Box className="patient">
            <Box className="button-container">
               <Typography className="title" variant="h5">
                  {data.first_name} <span> </span>
                  {data.last_name}
               </Typography>

               <Button className="button" onClick={toggleModalHandler}>
                  <PlusIcon className="plus-icon" />
                  Добавить Результат
               </Button>
            </Box>
            <AddResult open={toggleModal} onClose={toggleModalHandler} />

            {isLoading && <Loading />}

            <Box className="user-info">
               <Box className="content-box">
                  <Box className="inner-box">
                     <Typography className="full-name">
                        {data.first_name} <span> </span>
                        {data.last_name}
                     </Typography>

                     <Box>
                        <Typography className="label">Имя</Typography>

                        <Typography className="value">
                           {data.first_name}
                        </Typography>
                     </Box>

                     <Box>
                        <Typography className="label">Фамилия</Typography>

                        <Typography className="value">
                           {data.last_name}
                        </Typography>
                     </Box>

                     <Box>
                        <Typography className="label">Email</Typography>

                        <Typography className="value">{data.email}</Typography>
                     </Box>

                     <Box>
                        <Typography className="label">
                           Номер телефона
                        </Typography>

                        <Typography className="value">
                           {data.phone_number}
                        </Typography>
                     </Box>
                  </Box>

                  <Box className="results-container">
                     {results?.map(
                        ({ numberResult, pdf, facility, date, localTime }) => {
                           const time = localTime.slice(0, 5)

                           return (
                              <Box
                                 key={numberResult}
                                 className="results-inner-container"
                              >
                                 <Box>
                                    <Typography className="result-label">
                                       Услуга
                                    </Typography>

                                    <Typography>{facility}</Typography>
                                 </Box>

                                 <Box className="result-date">
                                    <Typography className="result-label">
                                       Дата и время:
                                    </Typography>

                                    <Box>
                                       <Typography variant="span">
                                          {format(new Date(date), 'dd.MM.yyyy')}
                                       </Typography>

                                       <Typography variant="span">
                                          {time}
                                       </Typography>
                                    </Box>
                                 </Box>

                                 <Box>
                                    <Typography className="result-label">
                                       Номер заказа:
                                    </Typography>

                                    <Typography>{numberResult}</Typography>
                                 </Box>

                                 <Box className="file">
                                    <Typography className="result-label">
                                       Загруженный файл
                                    </Typography>

                                    <a aria-label="pdf-url" href={pdf}>
                                       <ResultFileIcon className="insert-file" />
                                    </a>
                                 </Box>
                              </Box>
                           )
                        }
                     )}
                  </Box>
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default PatientsInnerPage

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& > .patient': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& > .user-info': {
         height: '100vh',
         background: 'white',
         marginTop: '1.25rem',
         borderRadius: '0.375rem',

         '& > .content-box': {
            display: 'flex',
            width: '100%',
            gap: '90px',
            padding: '20px',

            '& > .inner-box': {
               display: 'flex',
               flexDirection: 'column',
               gap: '1rem',

               '& .label': {
                  color: '#4d4e51',
               },

               '& .value': {
                  color: theme.palette.primary.lightBlack,
                  fontFamily: 'Manrope',
                  fontWeight: '500',
                  fontSize: '16px',
               },

               '& > .full-name': {
                  fontWeight: '400',
                  fontSize: '22px',
               },
            },
         },
      },

      '& .results-container': {
         display: 'flex',
         flexDirection: 'column',
         width: '100%',
         height: '100%',
         gap: '10px',
         borderRadius: '8px',
         padding: ' 2vh 2vh 7vh 2vh',

         '& > .results-inner-container': {
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            backgroundColor: '#DBEBFF',
            borderRadius: '8px',
            padding: ' 2vh 2vh 7vh 2vh',
         },

         '& > .result-label': {
            fontWeight: '500',
            fontSize: '18px',
         },

         '& .result-date': {
            '& > div': {
               display: 'flex',
               flexDirection: 'column',
            },
         },

         '&  .file': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

            '& a > .insert-file': {
               cursor: 'pointer',
               boxSizing: 'content-box',
               width: '2rem',
               height: '5vh',
               padding: '0.5rem',
               borderRadius: '6px',
               backgroundColor: theme.palette.primary.main,
               marginTop: '5px',

               '&:hover': {
                  backgroundColor: theme.palette.tertiary.lightBlue,

                  '& > path': {
                     fill: theme.palette.primary.main,
                     width: '2rem',
                     height: '5vh',
                  },
               },
            },
         },
      },

      '& > .button-container': {
         display: 'flex',
         justifyContent: 'space-between',

         '& > .button': {
            padding: '0',
            fontSize: '13px',
            height: '40px',
            width: '232px',

            '& > div': {
               display: 'flex',
               alignItems: 'center',
               gap: '4px',
            },
         },
      },
   },
}))
