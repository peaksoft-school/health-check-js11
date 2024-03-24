/* eslint-disable react/no-this-in-sfc */
import { styled, Box, Typography } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PDFDocument } from 'pdf-lib'
import dayjs from 'dayjs'
import { format } from 'date-fns'
import { useFormik } from 'formik'
import { PATIENT_THUNKS } from '../../../store/slices/patient/patientThunk'
import { VALIDATION_RESULT } from '../../../utils/helpers/validate'
import { DEPARTMENTS } from '../../../utils/constants'
import DatePicker from '../../UI/DatePicker'
import { FileIcon, GetPdfFileIcon } from '../../../assets/icons'
import { showResultError } from '../../../utils/helpers'
import { showToast } from '../../../utils/helpers/notification'
import Modal from '../../UI/Modal'
import Select from '../../UI/Select'
import Button from '../../UI/Button'

const AddResult = ({ open, onClose }) => {
   const { data, isLoading } = useSelector((state) => state.patient)

   const closeHandler = () => onClose()

   const dispatch = useDispatch()

   const onSubmit = (values, { resetForm }) => {
      const formData = new FormData()
      formData.append('file', values.file)

      const date = format(new Date(values.date), 'yyyy-MM-dd')

      dispatch(
         PATIENT_THUNKS.addPatientResult({
            facility: values.service,
            dataOfDelivery: date,
            userId: data.id,
            url: formData,

            id: data.id,
            resetForm,
            closeHandler,
         })
      )
   }

   const { values, handleSubmit, errors, setFieldValue } = useFormik({
      initialValues: {
         service: '',
         date: '',
         file: '',
      },
      validateOnChange: false,
      onSubmit,
      validationSchema: VALIDATION_RESULT,
   })

   const handleDrop = async (acceptedFiles) => {
      const file = acceptedFiles[0]

      if (file) {
         try {
            const arrayBuffer = await file.arrayBuffer()
            const pdfDoc = await PDFDocument.load(arrayBuffer)
            const firstPage = pdfDoc.getPage(0)
            const { width, height } = firstPage.getSize()

            if (width > 450 && height > 600) setFieldValue('file', file)
            else
               showToast({
                  message: 'не допустимый размер файла',
                  status: 'error',
               })
         } catch (error) {
            console.error('Error reading PDF: ', error)
         }
      }
   }

   const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      Accept: 'application/pdf',
   })

   const handleChangeFile = (e) => {
      const file = e.target.files[0]

      if (file.type === 'application/pdf') setFieldValue('file', file)
   }

   const stopPropagationHandler = (e) => e.stopPropagation()

   const changeSelectHandler = (service) => {
      setFieldValue('service', service)
   }

   const changeDateHandler = (date) => setFieldValue('date', date)

   const dateToday = dayjs()

   return (
      <Modal open={open} handleClose={onClose}>
         <StyledForm onSubmit={handleSubmit}>
            <Typography variant="h5"> Добавление результата</Typography>

            <Box className="content-box">
               <Box className="select">
                  <Box className="select-box">
                     <label htmlFor="service">Услуги</label>

                     <StyledSelect
                        id="service"
                        placeholder="Выберите услугу"
                        error={!!errors.service}
                        options={DEPARTMENTS}
                        value={values.service}
                        onChange={changeSelectHandler}
                     />
                  </Box>

                  <Box className="box">
                     <label htmlFor="dataOfDelivery">Дата сдачи</label>

                     <DatePicker
                        className="custom-date-picker"
                        id="dataOfDelivery"
                        error={!!errors.date}
                        onChange={changeDateHandler}
                        value={values.date}
                        variant="custom"
                        format="DD/MM/YYYY"
                        minDate={dateToday}
                     />
                  </Box>
               </Box>

               <Box>
                  <label htmlFor="file">Файлы</label>

                  <Container
                     {...getRootProps()}
                     onClick={stopPropagationHandler}
                  >
                     <label htmlFor="file">
                        {values.file ? (
                           <Box>
                              {values.file.type === 'application/pdf' && (
                                 <FileIcon className="insert-file" />
                              )}
                           </Box>
                        ) : (
                           <GetPdfFileIcon className="insert-file" />
                        )}

                        <input
                           id="file"
                           className="input-file"
                           type="file"
                           onChange={handleChangeFile}
                           {...getInputProps()}
                        />
                     </label>

                     <Box>
                        {values.file ? (
                           <p>{values.file.name}</p>
                        ) : (
                           <>
                              <p className="text">
                                 Нажмите или перетащите файл
                              </p>

                              <p className="permission">
                                 Минимальное <br /> разрешение 450x600
                              </p>
                           </>
                        )}
                     </Box>
                  </Container>
               </Box>
            </Box>

            {showResultError(errors) && (
               <Typography className="error-message">
                  {showResultError(errors)}
               </Typography>
            )}

            <Box className="button-group">
               <StyledButton
                  onClick={closeHandler}
                  type="button"
                  variant="grey"
               >
                  ОТМЕНИТЬ
               </StyledButton>

               <StyledButton disabled={isLoading} isLoading={isLoading}>
                  ДОБАВИТЬ
               </StyledButton>
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
      height: '6rem',
      borderRadius: '8px',
      padding: '35px',
      backgroundColor: '#e0e2e7',
      marginTop: '5px',
   },

   '&  .text': {
      fontSize: '14px',
   },

   '& .permission': {
      fontSize: '12px',
      color: theme.palette.secondary.lightGrey,
   },

   '&  p': {
      margin: '10px 0',
   },
}))

const StyledSelect = styled(Select)(() => ({
   width: '312px',
   height: '38px',
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

   '& .select': {
      display: 'flex',
      margin: '30px 0 15px 0',
      gap: '30px',
   },

   '& .input-file': {
      display: 'none',
   },

   '& .box': {
      display: 'flex',
      flexDirection: 'column',
   },

   '&  .error-message': {
      position: 'absolute',
      top: '310px',
      color: 'red',
   },

   '& > .button-group': {
      display: 'flex',
      gap: '30px',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
}))
