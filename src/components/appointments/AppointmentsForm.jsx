import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Typography, styled, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../UI/inputs/Input'
import Button from '../UI/Button'
import NumberInput from '../UI/inputs/NumberInput'
import { APPOINTMENTS_THUNKS } from '../../store/slices/appointments/appointmentsThunk'
import { showToast } from '../../utils/helpers/notification'
import { PROFILE_THUNKS } from '../../store/slices/profie/profileThunk'

const AppointmentsForm = ({ facility, doctorInfo, time, date, open }) => {
   const [verificationCode, setVerificationCode] = useState('')

   const dispatch = useDispatch()

   const { accessToken } = useSelector((state) => state.auth)
   const { code, appointmentId, isLoading } = useSelector(
      (state) => state.appointments
   )

   const { userData } = useSelector((state) => state.profile)

   useEffect(() => {
      dispatch(PROFILE_THUNKS.getUserProfile(accessToken))
   }, [accessToken, dispatch])

   const appointmentTime = time ? time.slice(0, 5) : ''

   const onSubmit = (values) => {
      const data = {
         ...values,
         startTimeConsultation: appointmentTime,
         doctorId: doctorInfo.doctor.doctorId,
         date: date
            ? date.format('YYYY-MM-DD')
            : doctorInfo.doctor.dateOfConsultation,
      }

      dispatch(
         APPOINTMENTS_THUNKS.addAppointment({
            facility,
            data,
         })
      )
   }

   const sendCode = () => {
      if (verificationCode === code) {
         dispatch(
            APPOINTMENTS_THUNKS.checkVerificationCode({
               verificationCode,
               id: appointmentId,
               open,
            })
         )
      } else {
         showToast({ status: 'error', message: 'Неверный код' })
      }
   }

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         fullName: `${userData.firstName} ${userData.lastName}`,
         email: userData.email,
         phoneNumber: userData.number,
      },
      onSubmit,
   })

   const changeVerificationCodeHandler = (e) =>
      setVerificationCode(e.target.value)

   return (
      <StyledContainer>
         <Box className="container">
            <StyledForm onSubmit={handleSubmit}>
               <Box className="form-container">
                  <Typography>Ваше имя и фамилия </Typography>

                  <StyledInput
                     value={values.fullName}
                     placeholder="Введите имя и фамилия"
                     onChange={handleChange('fullName')}
                  />

                  <Typography>Номер телефона</Typography>

                  <NumberInput
                     value={values.phoneNumber}
                     onChange={handleChange('phoneNumber')}
                     mask="_"
                     name="number"
                     id="number"
                     variant="drawer"
                     format="+996#########"
                     placeholder="+996 (___) ___ ___"
                  />

                  <Typography>Ваш e-mail</Typography>
                  <StyledInput
                     value={values.email}
                     onChange={handleChange('email')}
                     placeholder="Введите e-mail"
                  />

                  {code && (
                     <>
                        <Typography variant="small">
                           Введите код из почты
                        </Typography>

                        <StyledSmsCodeInput
                           onChange={changeVerificationCodeHandler}
                           value={verificationCode}
                        />
                     </>
                  )}
               </Box>

               {!code && (
                  <StyledButton
                     type="submit"
                     colorLoading="secondary"
                     isLoading={isLoading}
                  >
                     Продолжить
                  </StyledButton>
               )}
            </StyledForm>

            {code && <StyledButton onClick={sendCode}>Записаться</StyledButton>}
         </Box>
      </StyledContainer>
   )
}

export default AppointmentsForm

const StyledContainer = styled(Box)(() => ({
   marginTop: '0.625rem',
   padding: '0.313rem',
   width: '100%',

   '& .container': {
      padding: '0.938rem',
      width: '23.125rem',
      backgroundColor: 'white',
      borderRadius: '0.938rem',
   },
}))

const StyledForm = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '0.625rem',

   '& p': {
      fontFamily: 'Manrope',
   },

   '& .form-container': {
      marginTop: '0.938rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.625rem',
      width: '400px',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      marginTop: '1rem',
      marginBottom: '1rem',
      fontSize: '0.875rem',
      height: '2.5rem',
      width: '100%',

      '&:active': {
         width: '100%',
         borderRadius: '0.625rem',
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiFormControl-root': {
      width: '100% !important',
      color: 'black',
   },

   '& .MuiOutlinedInput-input': {
      height: '0.5rem',
      width: '336px',
      color: 'black',
      borderRadius: '0.313rem',
   },

   '& .MuiOutlinedInput-root ': {
      color: 'black',
      width: '336px',
      borderRadius: '0.313rem',
      height: '2.625rem',
   },
}))

const StyledSmsCodeInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-input': {
      height: '0.5rem',
      borderRadius: '5px',
      color: 'black',
   },

   '& .MuiOutlinedInput-root ': {
      color: 'black',
      width: '120px',
      borderRadius: '0.313rem',
      height: '2.625rem',
   },
}))
