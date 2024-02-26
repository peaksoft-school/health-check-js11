import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import { getPatient } from '../../../store/slices/patients/patientsThunk'
import Button from '../../../components/UI/Button'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import { DEPARTMENTS } from '../../../utils/constants'

const PatientsInnerPage = () => {
   const [toggleModal, setToggleModal] = useState(false)
   const { id } = useParams()
   const { data } = useSelector((state) => state.patients)

   const toggleModalHandler = () => setToggleModal((prev) => !prev)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPatient(id))
   }, [id])

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title" variant="h5">
                  {data.first_name} <span> </span>
                  {data.last_name}
               </Typography>

               <Button onClick={toggleModalHandler}>
                  + Добавить Результат
               </Button>
            </Box>

            <Modal open={toggleModal} handleClose={toggleModalHandler}>
               <Box className="modal">
                  <Select options={DEPARTMENTS} />
               </Box>
            </Modal>

            <Box className="content-box">
               <Box className="inner-box">
                  <Typography className="full-name">
                     {data.first_name} <span> </span>
                     {data.last_name}
                  </Typography>

                  <Box>
                     <Typography className="asd">Имя</Typography>
                     <Typography className="dsa">{data.first_name}</Typography>
                  </Box>

                  <Box>
                     <Typography className="asd">Фамилия</Typography>
                     <Typography className="dsa">{data.last_name}</Typography>
                  </Box>

                  <Box>
                     <Typography className="asd">Email</Typography>
                     <Typography className="dsa">{data.email}</Typography>
                  </Box>

                  <Box>
                     <Typography className="asd">Номер телефона</Typography>
                     <Typography className="dsa">{data.first_name}</Typography>
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

   '& .modal': {
      width: '100%',
      height: '100%',
   },

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& .input-container': {
         width: '37.5rem',
         marginTop: '2.12rem',
      },

      '& .content-box': {
         width: '100%',
         borderRadius: '0.375rem',
         bordeRradius: ' 0.375rem',
         background: 'white',
         marginTop: '1.25rem',
         padding: '20px',
         height: '100vh',

         '& .inner-box': {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',

            '& .asd': {
               color: '#4d4e51',
            },
            '& .dsa': {
               color: theme.palette.primary.lightBlack,
               fontFamily: 'Manrope',
               fontWeight: '500',
               fontSize: '16px',
            },
         },
      },

      '& .full-name': {
         fontWeight: '400',
         fontSize: '22px',
      },

      '& .button-container': {
         display: 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
      },
   },
}))
