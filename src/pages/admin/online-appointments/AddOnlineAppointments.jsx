import { styled, Typography, Box } from '@mui/material'
import { useFormik } from 'formik'
import { format } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../../components/UI/Modal'
import Select from '../../../components/UI/Select'
import DatePicker from '../../../components/UI/DatePicker'
import TimePicker from '../../../components/UI/TimePicker'
import Button from '../../../components/UI/Button'
import {
   DAYS,
   DEPARTMENTS,
   INTERVAL_TIME,
   RUSSIAN_DAYS,
} from '../../../utils/constants'
import { VALIDATION_SCHEDULE } from '../../../utils/helpers/validate'
import {
   getDoctorsByDepartment,
   postNewSchedule,
} from '../../../store/schedule/scheduleThunk'
import { showToast } from '../../../utils/helpers/notification'
import { appointmentsError } from '../../../utils/helpers'

const AddOnlineAppointments = ({ open, onClose }) => {
   const open1 = true
   const dispatch = useDispatch()

   const { doctors } = useSelector((state) => state.schedule)

   const onSubmit = (values, { resetForm }) => {
      values.createStartDate = format(
         new Date(values.createStartDate),
         'yyyy-MM-dd'
      )

      values.createEndDate = format(
         new Date(values.createEndDate),
         'yyyy-MM-dd'
      )

      values.startTime = format(new Date(values.startTime), 'HH:mm')
      values.endTime = format(new Date(values.endTime), 'HH:mm')
      values.startBreak = format(new Date(values.startBreak), 'HH:mm')
      values.endBreak = format(new Date(values.endBreak), 'HH:mm')

      const dataToSend = {
         createStartDate: values.createStartDate,
         createEndDate: values.createEndDate,
         startTime: values.startTime,
         endTime: values.endTime,
         interval: values.interval,
         startBreak: values.startBreak,
         endBreak: values.endBreak,

         dayOfWeek: values.dayOfWeek,
      }

      const selectedDoctorName = values.doctor
      const selectedDoctor = doctors.find(
         (doctor) => doctor.fullNameDoctor === selectedDoctorName
      )

      const selectedDoctorId = selectedDoctor.id
      dispatch(
         postNewSchedule(
            {
               doctorId: selectedDoctorId,
               departmentName: values.departmentName,
               schedule: dataToSend,
            },
            resetForm
         )
      )
   }

   const { values, handleChange, handleSubmit, errors, setFieldValue } =
      useFormik({
         initialValues: {
            departmentName: '',
            doctor: '',
            createStartDate: '',
            createEndDate: '',
            startTime: '',
            endTime: '',
            interval: '',
            startBreak: '',
            endBreak: '',

            dayOfWeek: {},
         },

         validateOnChange: false,
         onSubmit,
         validationSchema: VALIDATION_SCHEDULE,
      })

   // const errorMessage = appointmentsError(errors)

   const getDoctors = (selectedOption) => {
      handleChange('departmentName')(selectedOption.value)
      dispatch(getDoctorsByDepartment({ params: selectedOption.label }))
   }

   const doctorsFullname = doctors.map((doctor) => ({
      value: doctor.id,
      label: doctor.fullNameDoctor,
   }))

   const handleDayButtonClick = (dayLabel) => {
      setFieldValue(`dayOfWeek.${dayLabel}`, !values.dayOfWeek[dayLabel])
   }

   return (
      <Modal open={open1}>
         <StyledForm onSubmit={handleSubmit}>
            <h2>Добавление записи</h2>

            <Box>
               <Typography>Услуги</Typography>

               <Select
                  name="departmentName"
                  options={DEPARTMENTS}
                  value={DEPARTMENTS.find(
                     (option) => option.value === values.departmentName
                  )}
                  onChange={(selectedOption) => getDoctors(selectedOption)}
                  error={!!errors.departmentName}
                  placeholder="Выберите услугу"
                  className="custom-select"
               />
            </Box>

            <Box>
               <Typography>Специалисты</Typography>

               <Select
                  value={doctorsFullname.find(
                     (option) => option.label === values.doctor
                  )}
                  options={doctorsFullname}
                  onChange={(selectedOption) => {
                     setFieldValue('doctor', selectedOption.label)
                  }}
                  placeholder="Выберите специалиста"
               />
            </Box>

            <Box className="input-block">
               <Box>
                  <Typography>Дата начала</Typography>

                  <DatePicker
                     value={values.createStartDate}
                     onChange={(date) => setFieldValue('createStartDate', date)}
                     error={!!errors.createStartDate}
                     variant="custom"
                  />
               </Box>

               <span>-</span>

               <Box>
                  <Typography>Дата окончания</Typography>

                  <DatePicker
                     value={values.createEndDate}
                     onChange={(date) => setFieldValue('createEndDate', date)}
                     error={!!errors.createEndDate}
                     variant="custom"
                  />
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
               </Box>

               <span>-</span>

               <Box>
                  <Typography>Время до</Typography>

                  <TimePicker
                     value={values.endTime}
                     onChange={(time) => setFieldValue('endTime', time)}
                     error={!!errors.endTime}
                  />
               </Box>

               <Box>
                  <Typography>Интервал часов</Typography>

                  <Select
                     options={INTERVAL_TIME}
                     value={INTERVAL_TIME.find(
                        (literval) => literval.label === values.interval
                     )}
                     onChange={(selectedInterval) =>
                        handleChange('interval')(selectedInterval.time)
                     }
                     error={!!errors.interval}
                     placeholder="Выберите интервал часов"
                     className="custom-select"
                  />
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
               </Box>

               <span>-</span>

               <Box>
                  <Typography>Время до</Typography>

                  <TimePicker
                     value={values.endBreak}
                     onChange={(time) => setFieldValue('endBreak', time)}
                     error={!!errors.endBreak}
                  />
               </Box>

               <Box>
                  <Typography>Выберите время для перерыва </Typography>
               </Box>
            </Box>
            <Typography>Дни повторения </Typography>
            <Box className="asd">
               {DAYS.map((day, index) => (
                  <button
                     key={day.id}
                     onClick={() => handleDayButtonClick(day.label)}
                     type="button"
                     className={
                        values.dayOfWeek[day.label] ? 'active' : 'bermet'
                     }
                  >
                     {RUSSIAN_DAYS[index].label}
                  </button>
               ))}
            </Box>
            {appointmentsError(errors) && (
               // showToast({
               //    message: appointmentsError(errors),
               //    status: 'error',
               // })
               <p> {appointmentsError(errors)}</p>
            )}
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

   '& .doctor-select-box': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',

      '& .select-image': {
         width: '35px',
         height: '35px',
         borderRadius: '50%',
      },
   },

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

   '& .bermet': {
      backgroundColor: '#fff',
      padding: '10px 17px 10px 16px',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '10px',
      border: '1px solid #d9d9d9',
      fontSize: '16px',
      fontWeight: '600',
      color: '#959595',
   },

   '&  .active': {
      padding: '10px 17px 10px 16px',
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      backgroundColor: '#3977c0',
      color: '#ffffff',
      border: '0.3px solid #3977c0',
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
