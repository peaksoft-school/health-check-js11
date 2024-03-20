import { useEffect } from 'react'
import { styled, Typography, Box } from '@mui/material'
import { useFormik } from 'formik'
import { format } from 'date-fns'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import {
   DAYS,
   DEPARTMENTS,
   INTERVAL_TIME,
   RUSSIAN_DAYS,
} from '../../../utils/constants/index'
import Modal from '../../UI/Modal'
import Select from '../../UI/Select'
import DatePicker from '../../UI/DatePicker'
import TimePicker from '../../UI/TimePicker'
import { scheduleError } from '../../../utils/helpers'
import { VALIDATION_SCHEDULE } from '../../../utils/helpers/validate'
import { SCHEDULE_THUNK } from '../../../store/slices/schedule/scheduleThunk'
import Button from '../../UI/Button'

const selectStyles = {
   control: (styles, state) => {
      let borderColor = state.isFocused ? 'rgba(4, 135, 65, 0.80)' : '#cccccc'

      if (state.selectProps.error) {
         borderColor = 'red'
      }

      return {
         ...styles,
         width: '270px',
         // borderColor: state.isFocused
         //    ? 'rgba(4, 135, 65, 0.80) !important'
         //    : '#d9d9d9',
         boxShadow: 'none',
         border: `1px solid ${borderColor}`,
         borderRadius: '6px',
         '& span': {
            width: '0',
         },
      }
   },
}

const AddSchedule = ({ open, onClose }) => {
   const dispatch = useDispatch()

   const { doctors } = useSelector((state) => state.schedule)

   const onSubmit = (values, { resetForm }) => {
      const createStartDate = format(values.createStartDate, 'yyyy-MM-dd')

      const createEndDate = format(values.createEndDate, 'yyyy-MM-dd')

      const startTime = format(values.startTime, 'HH:mm')
      const endTime = format(values.endTime, 'HH:mm')
      const startBreak = format(values.startBreak, 'HH:mm')
      const endBreak = format(values.endBreak, 'HH:mm')

      const dataToSend = {
         createStartDate,
         createEndDate,
         startTime,
         endTime,
         interval: values.interval,
         startBreak,
         endBreak,

         dayOfWeek: values.dayOfWeek,
      }

      const selectedDoctorName = values.doctor

      const selectedDoctor = doctors?.find(
         (doctor) => doctor.fullNameDoctor === selectedDoctorName
      )

      const selectedDoctorId = selectedDoctor.id

      dispatch(
         SCHEDULE_THUNK.postNewSchedule({
            doctorId: selectedDoctorId,
            departmentName: values.departmentName,
            schedule: dataToSend,
            resetForm,
            onClose,
         })
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

   const getDoctors = (selectedOption) => {
      handleChange('departmentName')(selectedOption.label)

      dispatch(
         SCHEDULE_THUNK.getDoctorsByDepartment({ params: selectedOption.label })
      )
   }

   useEffect(() => {
      setFieldValue('doctor', '')
   }, [values.departmentName])

   const doctorsFullname = doctors?.map((doctor) => ({
      value: doctor.id,
      label: doctor.fullNameDoctor,
   }))

   const handleDayButtonClick = (dayLabel) => {
      setFieldValue(`dayOfWeek.${dayLabel}`, !values.dayOfWeek[dayLabel])
   }

   const dateToday = dayjs()
   const endDate = dateToday.add(1, 'day')

   const selectDoctor = (selectedOption) => {
      setFieldValue('doctor', selectedOption.label)
   }

   return (
      <Modal open={open} handleClose={onClose}>
         <StyledForm onSubmit={handleSubmit}>
            <Typography variant="h2">Добавление записи</Typography>

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
                  variant="schedule"
               />
            </Box>

            <Box>
               <Typography>Специалисты</Typography>

               <Select
                  value={doctorsFullname.find(
                     (option) => option.label === values.doctor
                  )}
                  options={doctorsFullname}
                  onChange={selectDoctor}
                  placeholder="Выберите специалиста"
                  error={!!errors.doctor}
                  variant="schedule"
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
                     minDate={dateToday}
                  />
               </Box>

               <Box component="span">-</Box>

               <Box>
                  <Typography>Дата окончания</Typography>

                  <DatePicker
                     value={values.createEndDate}
                     onChange={(date) => setFieldValue('createEndDate', date)}
                     error={!!errors.createEndDate}
                     variant="custom"
                     minDate={endDate}
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

               <Box component="span">-</Box>

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
                     styles={{ ...selectStyles }}
                     variant="schedule"
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

               <Box component="span">-</Box>

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

            <Box className="day-of-week-box">
               {DAYS.map((day, index) => (
                  <button
                     key={day.id}
                     onClick={() => handleDayButtonClick(day.label)}
                     type="button"
                     className={
                        values.dayOfWeek[day.label] ? 'day-of-week' : 'active'
                     }
                  >
                     {RUSSIAN_DAYS[index].label}
                  </button>
               ))}
            </Box>

            <Box className="button-group">
               <StyledButton onClick={onClose} type="button" variant="grey">
                  ОТМЕНИТЬ
               </StyledButton>
               <StyledButton type="submit">ОПУБЛИКОВАТЬ</StyledButton>
            </Box>
         </StyledForm>
      </Modal>
   )
}

export default AddSchedule

const StyledForm = styled('form')(({ theme }) => ({
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
      color: theme.palette.primary.lightBlack,
   },

   '& > .input-block': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',

      span: {
         marginTop: '1rem',
      },
   },

   '&  .day-of-week-box': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2em',

      '& > .active': {
         backgroundColor: theme.palette.primary.main,
         padding: '10px 17px 10px 16px',
         justifyContent: 'center',
         alignItems: 'center',

         borderRadius: '10px',
         border: `1px solid ${theme.palette.secondary.main}`,
         fontSize: '16px',
         fontWeight: '600',
         color: theme.palette.secondary.lightGrey,
      },

      '& >.day-of-week': {
         padding: '10px 17px 10px 16px',
         justifyContent: 'center',
         alignItems: 'center',

         borderRadius: '10px',
         fontSize: '16px',
         fontWeight: '600',
         backgroundColor: '#3977c0',
         color: theme.palette.primary.main,
         border: '0.3px solid #3977c0',
      },
   },

   '& > .button-group': {
      display: 'flex',
      justifyContent: 'space-between',
   },

   '& .error-message': {
      color: ' red',
      position: 'absolute',
      top: '560px',
      left: '56px',
   },
}))

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
}))
