import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import { format } from 'date-fns'
import { useFormik } from 'formik'
import DatePicker from '../../../components/UI/DatePicker'
import { DEPARTMENTS } from '../../../utils/constants'
import { showToast } from '../../../utils/helpers/notification'
import { FileIcon, GetPdfFileIcon } from '../../../assets/icons'
import { postPatientResult } from '../../../store/slices/patients/patientsThunk'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import Button from '../../../components/UI/Button'
import { VALIDATION_RESULT } from '../../../utils/helpers/validate'
import { resultsError } from '../../../utils/helpers'

const AddResult = ({ open, onClose }) => {
   const [file, setFile] = useState(null)

   const { data } = useSelector((state) => state.patient)

   const dispatch = useDispatch()

   const onAddResult = (values, { resetForm }) => {
      const formData = new FormData()
      formData.append('file', file)

      const date = format(new Date(values.date), 'yyyy-MM-dd')

      dispatch(
         postPatientResult({
            facility: values.service,
            dataOfDelivery: date,
            userId: data.id,
            url: formData,

            resetForm,
            setFile,
            onClose,
         })
      )
   }

   const { values, handleChange, handleSubmit, errors, setFieldValue } =
      useFormik({
         initialValues: {
            service: '',
            date: '',
         },
         validateOnChange: false,
         onSubmit: onAddResult,
         validationSchema: VALIDATION_RESULT,
      })

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

   const handlerClose = () => {
      setFile(null)
      onClose()
   }

   const handleChangeFile = (e) => {
      const file = e.target.files[0]
      if (file.type === 'application/pdf') {
         setFile(file)
      }
   }

   const dateToday = dayjs()

   return (
      <Modal open={open} handleClose={onClose}>
         <StyledForm onSubmit={handleSubmit}>
            <Typography variant="h5"> Добавление результата</Typography>

            <div className="content-box">
               <div className="select-asd">
                  <div className="select-box">
                     <label htmlFor="department">Услуги</label>

                     <StyledSelect
                        id="department"
                        placeholder="Выберите услугу"
                        error={!!errors.service}
                        options={DEPARTMENTS}
                        value={DEPARTMENTS.find(
                           (option) => option.value === values.service
                        )}
                        onChange={(selectedOption) => {
                           handleChange('service')(selectedOption.label)
                        }}
                     />
                  </div>

                  <div className="box">
                     <label htmlFor="dataOfDelivery">Дата сдачи</label>

                     <DatePicker
                        className="custom-date-picker"
                        id="dataOfDelivery"
                        error={!!errors.date}
                        onChange={(date) => setFieldValue('date', date)}
                        value={values.date}
                        variant="custom"
                        minDate={dateToday}
                     />
                  </div>
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
                           onChange={handleChangeFile}
                           {...getInputProps()}
                        />
                     </label>

                     <div>
                        <p className="text">Нажмите или перетащите файл</p>

                        <p className="permission">
                           Минимальное <br /> разрешение 450x600
                        </p>
                     </div>
                  </Container>
               </div>
            </div>

            {resultsError(errors) && (
               <Typography className="error-message">
                  {resultsError(errors)}
               </Typography>
            )}

            <Box className="button-group">
               <StyledButton
                  onClick={handlerClose}
                  type="button"
                  variant="grey"
               >
                  ОТМЕНИТЬ
               </StyledButton>

               <StyledButton type="submit">ДОБАВИТЬ</StyledButton>
            </Box>
         </StyledForm>
      </Modal>
   )
}

export default AddResult

const Container = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   gap: '20px',

   '& .insert-file': {
      cursor: 'pointer',
      width: ' 6.5rem',
      height: ' 14.5vh',
      borderRadius: '8px',
      padding: '35px',
      backgroundColor: '#e0e2e7',
      marginTop: '5px',
   },

   '& .text': {
      fontSize: '14px',
   },

   '& .permission': {
      fontSize: '12px',
      color: theme.palette.secondary.lightGrey,
   },

   '& p': {
      margin: '10px 0',
   },
}))

const StyledSelect = styled(Select)(() => ({
   '& > div': {
      width: '312px',
      height: '38px',
   },

   '& > div:hover': {
      width: '312px',
      height: '38px',
   },
}))

const StyledForm = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   '& > h5': {
      textAlign: 'center',
   },

   '& > .content-box': {
      marginBottom: '30px',
   },

   '& .select-asd': {
      display: 'flex',
      margin: '30px 0 15px 0',
      gap: '30px',
   },
   '& .box': {
      display: 'flex',
      flexDirection: 'column',
   },

   '& .error-message': {
      position: 'absolute',
      top: '290px',
      color: 'red',
   },

   '& .button-group': {
      display: 'flex',
      gap: '30px',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
}))
