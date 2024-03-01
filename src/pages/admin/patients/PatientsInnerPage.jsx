import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import Button from '../../../components/UI/Button'
import Loading from '../../../components/Loading'
import { getPatient } from '../../../store/slices/patient/patientThunk'
import AddResult from './AddResult'
import { PlusIcon } from '../../../assets/icons'

const PatientsInnerPage = () => {
   const [toggleModal, setToggleModal] = useState(false)

   const { id } = useParams()
   const { data, isLoading } = useSelector((state) => state.patient)

   const toggleModalHandler = () => setToggleModal((prev) => !prev)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPatient(id))
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
                  <PlusIcon className="plus-icon" /> Добавить Результат
               </Button>
            </Box>

            <AddResult open={toggleModal} onClose={toggleModalHandler} />

            {isLoading ? (
               <Loading />
            ) : (
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
                           {data.first_name}
                        </Typography>
                     </Box>
                  </Box>
               </Box>
            )}
         </Box>
      </StyledContainer>
   )
}

export default PatientsInnerPage

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& .insert-file': {
      cursor: 'pointer',
      width: '7rem',
      height: '16vh',
      borderRadius: '8px',
      padding: '35px',
      backgroundColor: '#e0e2e7',
      marginTop: '5px',
   },

   '& > .patient': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& .content-box': {
         width: '100%',
         borderRadius: '0.375rem',
         bordeRradius: ' 0.375rem',
         background: 'white',
         marginTop: '1.25rem',
         padding: '20px',
         height: '100vh',

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

      '& .button-container': {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',

         '& > .button': {
            padding: '0',
            fontSize: '13px',
            height: '40px',
            width: '232px',
         },
      },
   },
}))
