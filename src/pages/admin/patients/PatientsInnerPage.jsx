import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import { useDropzone } from 'react-dropzone'
import { postPatientResult } from '../../../store/slices/patients/patientsThunk'
import Button from '../../../components/UI/Button'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import Loading from '../../../components/Loading'
import DatePicker from '../../../components/UI/DatePicker'
import { DEPARTMENTS } from '../../../utils/constants'
import { getPatient } from '../../../store/slices/patient/patientThunk'
import { showToast } from '../../../utils/helpers/notification'
import { FileIcon, GetPdfFileIcon } from '../../../assets/icons'

const PatientsInnerPage = () => {
   const [toggleModal, setToggleModal] = useState(false)
   const [newData, setNewData] = useState({ service: '', date: '' })
   const [file, setFile] = useState(null)

   const { id } = useParams()
   const { data, isLoading } = useSelector((state) => state.patient)

   const toggleModalHandler = () => setToggleModal((prev) => !prev)

   const validateForm = () => {
      const isValid = newData.service !== '' && newData.date !== ''
   }

   useEffect(() => {
      validateForm()
   }, [newData])

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPatient(id))
   }, [id])

   const onServiceChange = (value) => {
      setNewData((prev) => ({ ...prev, service: value }))
      validateForm()
   }

   const onDateChange = (value) => {
      setNewData((prev) => ({
         ...prev,
         date: value.toISOString().split('T')[0],
      }))
      validateForm()
   }

   const handleDrop = (AcceptFiles) => {
      const file = AcceptFiles[0]
      if (file.type === 'application/pdf') {
         setFile(file)
      } else {
         showToast({
            status: 'error',
            message: 'Должен быть PDF файл',
         })
      }
   }

   const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      Accept: 'application/pdf',
   })

   const onAddResult = (e) => {
      e.preventDefault()

      const formData = new FormData()
      formData.append('file', file)

      dispatch(
         postPatientResult({
            facility: newData.service.label,
            dataOfDelivery: newData.date,
            userId: data.id,
            url: formData,

            setNewData,
            setFile,
         })
      )
   }

   const handleChange = (e) => {
      const file = e.target.files[0]
      if (file.type === 'application/pdf') {
         setFile(file)
      }
   }

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title" variant="h5">
                  {data.first_name} <span> </span>
                  {data.last_name}
               </Typography>

               <Button className="button" onClick={toggleModalHandler}>
                  + Добавить Результат
               </Button>
            </Box>

            <Modal open={toggleModal} handleClose={toggleModalHandler}>
               <form onSubmit={onAddResult} className="modal">
                  <Typography variant="h5"> Добавление результата</Typography>

                  <div className="select-asd">
                     <Box className="select-box">
                        <label htmlFor="department">Услуги</label>

                        <div className="select">
                           <Select
                              id="department"
                              placeholder="Выберите услугу"
                              options={DEPARTMENTS}
                              onChange={onServiceChange}
                           />
                        </div>
                     </Box>

                     <Box className="select-box">
                        <label htmlFor="due-date">Дата сдачи</label>

                        <DatePicker
                           className="custom-date-picker"
                           id="due-date"
                           onChange={onDateChange}
                           defaultValue={dayjs()}
                           variant="custom"
                        />
                     </Box>
                  </div>
                  <div>
                     <label htmlFor="file">Файлы</label>
                     <Container
                        {...getRootProps()}
                        onClick={(e) => e.stopPropagation()}
                     >
                        <label htmlFor="file">
                           {file ? (
                              <div>
                                 {file.type === 'application/pdf' && (
                                    <FileIcon className="insert-file" />
                                 )}
                              </div>
                           ) : (
                              <GetPdfFileIcon className="insert-file" />
                           )}

                           <input
                              id="file"
                              style={{ display: 'none' }}
                              type="file"
                              onChange={handleChange}
                              {...getInputProps()}
                           />
                        </label>
                        <div>
                           <p>Нажмите или перетащите файл</p>
                           <p>
                              Минимальное <br /> разрешение 450x600
                           </p>
                        </div>
                     </Container>
                  </div>
                  <Box className="button-group">
                     <StyledButton
                        onClick={toggleModalHandler}
                        type="button"
                        variant="grey"
                     >
                        ОТМЕНИТЬ
                     </StyledButton>
                     <StyledButton type="submit">ДОБАВИТЬ</StyledButton>
                  </Box>
               </form>
            </Modal>

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

   '& .modal': {
      width: '100%',
      height: '100%',
   },

   '& .select-asd': {
      display: 'flex',
      // flexDirection: 'row',
   },

   '& .select-box': {
      display: 'flex',
      flexDirection: 'column',
   },

   '& .insert-file': {
      cursor: 'pointer',
      width: '7rem',
      height: '16vh',
      borderRadius: '8px',
      padding: '35px',
      backgroundColor: '#e0e2e7',
      marginTop: '5px',
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

            '& .label': {
               color: '#4d4e51',
            },
            '& .value': {
               color: theme.palette.primary.lightBlack,
               fontFamily: 'Manrope',
               fontWeight: '500',
               fontSize: '16px',
            },
         },
      },

      '& > .button-group': {
         display: 'flex',
         justifyContent: 'space-between',
      },

      '& .full-name': {
         fontWeight: '400',
         fontSize: '22px',
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

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
}))

const Container = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '20px',

   '& .insert-file': {
      cursor: 'pointer',
      width: ' 7rem',
      height: ' 16vh',
      borderRadius: '8px',
      padding: '35px',
      backgroundColor: '#e0e2e7',
      marginTop: '5px',
   },

   '& p': {
      margin: '10px 0',
   },

   // '&  p:nth-of-type(2)': {
   //    fontSize: '12px',
   //    fontWeight: '400',
   //    color: '#959595',
   // },
}))
