import { useEffect } from 'react'
import { styled, Typography, Box } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import DatePicker from '../../../components/UI/DatePicker'
import TimePicker from '../../../components/UI/TimePicker'
import Button from '../../../components/UI/Button'
import { DAYS, DEPARTMENTS, INTERVAL_TIME } from '../../../utils/constants'
import { VALIDATION_SCHEDULE } from '../../../utils/helpers/validate'
import { getAllDoctors } from '../../../store/schedule/scheduleThunk'

const AddOnlineAppointments = ({ open, onClose }) => {
   const open1 = true
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllDoctors())
   }, [])

   const serviceChangeHandler = (e) => {
      const departmentId = DEPARTMENTS.id
      dispatch(getAllDoctors({ departmentId }))
   }

   const onSubmit = (values, { resetForm }) => {
      resetForm()
      console.log(values)
   }

   const { values, handleChange, handleSubmit, errors, setFieldValue } =
      useFormik({
         initialValues: {
            departmentName: 'ehjkjubz',
            doctor: 'cnkdsnkdcncsk',
            createStartDate: '',
            createEndDate: '',
            startTime: '',
            endTime: '',
            interval: '45',
            startBreak: '',
            endBreak: '',
            dayOfWeek: {},
         },

         validateOnChange: false,
         onSubmit,
         validationSchema: VALIDATION_SCHEDULE,
      })

   return (
      <Modal open={open1}>
         <StyledForm onSubmit={handleSubmit}>
            <h2>Добавление расписания</h2>
            <Box>
               <Typography>Услуги</Typography>
               <Select
                  options={DEPARTMENTS}
                  value={values.departmentName}
                  onChange={serviceChangeHandler}
                  error={!!errors.departmentName}
                  placeholder="Выберите услугу"
                  className="custom-select"
               />
            </Box>

            <Box>
               <Typography>Специалисты</Typography>
               <Select placeholder="Выберите специалиста" />
               {errors.doctorId && (
                  <Typography color="error">{errors.doctorId}</Typography>
               )}
            </Box>

            <Box className="input-block">
               <Box>
                  <Typography>Дата начала</Typography>
                  <DatePicker
                     value={values.createStartDate}
                     onChange={(date) => setFieldValue('createStartDate', date)}
                     error={!!errors.createStartDate}
                  />
                  {errors.createStartDate && (
                     <Typography color="error">
                        {errors.createStartDate}
                     </Typography>
                  )}
               </Box>

               <span>-</span>

               <Box>
                  <Typography>Дата окончания</Typography>
                  <DatePicker
                     value={values.createEndDate}
                     onChange={(date) => setFieldValue('createEndDate', date)}
                     error={!!errors.createEndDate}
                  />
                  {errors.createEndDate && (
                     <Typography color="error">
                        {errors.createEndDate}
                     </Typography>
                  )}
               </Box>
            </Box>

            <Box className="input-block">
               <Box>
                  <Typography>Время от</Typography>

                  <TimePicker
                     value={values.startTime}
                     onChange={(time) => setFieldValue('startTime', time)}
                     error={!!errors.startTime}
                  />

                  {errors.startTime && (
                     <Typography color="error">{errors.startTime}</Typography>
                  )}
               </Box>

               <span>-</span>

               <Box>
                  <Typography>Время до</Typography>

                  <TimePicker
                     value={values.endTime}
                     onChange={(time) => setFieldValue('endTime', time)}
                     error={!!errors.endTime}
                  />

                  {errors.endTime && (
                     <Typography color="error">{errors.endTime}</Typography>
                  )}
               </Box>

               <Box>
                  <Typography>Интервал часов</Typography>

                  <Select
                     options={INTERVAL_TIME}
                     value={values.interval}
                     onChange={handleChange}
                     error={!!errors.interval}
                     placeholder="Выберите интервал часов"
                     className="custom-select"
                  />

                  {errors.interval && (
                     <Typography color="error">{errors.interval}</Typography>
                  )}
               </Box>
            </Box>
            <Box className="input-block">
               <Box>
                  <Typography>Время от</Typography>

                  <TimePicker
                     value={values.startBreak}
                     onChange={(time) => setFieldValue('startBreak', time)}
                     error={!!errors.startBreak}
                  />

                  {errors.startBreak && (
                     <Typography color="error">{errors.startBreak}</Typography>
                  )}
               </Box>

               <span>-</span>

               <Box>
                  <Typography>Время до</Typography>
                  <TimePicker
                     value={values.endBreak}
                     onChange={(time) => setFieldValue('endBreak', time)}
                     error={!!errors.endBreak}
                  />
                  {errors.endBreak && (
                     <Typography color="error">{errors.endBreak}</Typography>
                  )}
               </Box>
               <Box>
                  <Typography>Выберите время для перерыва </Typography>
               </Box>
            </Box>
            <Box className="asd">
               {DAYS.map(({ id, label }) => (
                  <button
                     type="button"
                     className={`active ${
                        values.dayOfWeek[id] ? 'selected' : ''
                     }`}
                     key={id}
                     onClick={() =>
                        setFieldValue(`dayOfWeek.${id}`, !values.dayOfWeek[id])
                     }
                  >
                     {label}
                  </button>
               ))}
            </Box>
            <Box className="button-group">
               <StyledButton type="button" variant="grey">
                  ОТМЕНИТЬ
               </StyledButton>
               <StyledButton type="submit">ОПУБЛИКОВАТЬ</StyledButton>
            </Box>
         </StyledForm>
      </Modal>
   )
}

export default AddOnlineAppointments

const StyledForm = styled('form')(() => ({
   padding: '10px',
   width: '490px',
   height: '594px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',

   '& > h2': {
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: '500',
      color: '#222',
   },

   '& > .custom-select': {
      borderRadius: '6px !important',
      height: '5.2vh',
      border: 'none',
   },

   '& > .input-block': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      span: {
         marginTop: '1rem',
      },
   },

   '& > .asd': {
      display: 'flex',
      justifyContent: 'space-between',
   },

   '& .active': {
      backgroundColor: '#fff',
      padding: '10px 17px 10px 16px',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '10px',
      border: '1px solid #d9d9d9',
      fontSize: '16px',
      fontWeight: '600',
      color: '#959595',
      // backgroundColor: '#3977c0',
      // color: '#ffffff',
      // border: '0.3px solid #3977c0',
   },

   '& > .button-group': {
      display: 'flex',
      justifyContent: 'space-between',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
}))
