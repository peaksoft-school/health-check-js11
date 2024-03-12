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
import Select from '../../../components/UI/Select'
import Modal from '../../../components/UI/Modal'
import Button from '../../../components/UI/Button'
import { VALIDATION_RESULT } from '../../../utils/helpers/validate'
import { resultsError } from '../../../utils/helpers'
import { PATIENT_THUNK } from '../../../store/slices/patient/patientThunk'

const AddResult = ({ open, onClose }) => {
   const { data, isLoading } = useSelector((state) => state.patient)

   const handlerClose = () => onClose()

   const dispatch = useDispatch()

   const onAddResult = (values, { resetForm }) => {
      const formData = new FormData()
      formData.append('file', values.file)

      const date = format(new Date(values.date), 'yyyy-MM-dd')

      dispatch(
         PATIENT_THUNK.postPatientResult({
            facility: values.service,
            dataOfDelivery: date,
            userId: data.id,
            url: formData,

            resetForm,
            handlerClose,
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
      onSubmit: onAddResult,
      validationSchema: VALIDATION_RESULT,
   })

   const handleDrop = (AcceptFiles) => {
      const file = AcceptFiles[0]
      if (file.type === 'application/pdf') {
         setFieldValue('file', file)
      } else {
         showToast({
            status: 'warning',
            message: 'Пожалуйста, выберите файл в формате PDF',
         })
      }
   }

   const { getRootProps, getInputProps } = useDropzone({
      onDrop: handleDrop,
      Accept: 'application/pdf',
   })

   const handleChangeFile = (e) => {
      const file = e.target.files[0]
      if (file.type === 'application/pdf') {
         setFieldValue('file', file)
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
                        value={values.service}
                        onChange={(service) =>
                           setFieldValue('service', service)
                        }
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
                        format="DD/MM/YYYY"
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
                        {values.file ? (
                           <div>
                              {values.file.type === 'application/pdf' && (
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
                        {values.file ? (
                           <p>{values.file.name}</p>
                        ) : (
                           <p className="text">Нажмите или перетащите файл</p>
                        )}

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
      top: '310px',
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
