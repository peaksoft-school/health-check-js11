import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Typography, styled, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_THUNKS } from '../../store/slices/profie/profileThunk'
import Input from '../UI/inputs/Input'
import Button from '../UI/Button'
import NumberInput from '../UI/inputs/NumberInput'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'
import { showToast } from '../../utils/helpers/notification'

const AppointmentsForm = ({ facility, doctorInfo, time, date, open }) => {
   const dispatch = useDispatch()
   const [verificationCode, setVerificationCode] = useState('')

   const { accessToken } = useSelector((state) => state.auth)
   const { code, appoinmentId } = useSelector(
      (state) => state.onlineAppointments
   )

   useEffect(() => {
      dispatch(PROFILE_THUNKS.getUserProfile(accessToken))
   }, [accessToken])

   const dates = date ? date.format('YYYY-MM-DD') : null
   const { userData } = useSelector((state) => state.profile)

   const onSubmit = (values) => {
      const data = {
         ...values,
         startTimeConsultation: time,
         doctorId: doctorInfo.doctor.doctorId,
         date: dates || doctorInfo.doctor.dateOfConsultation,
      }

      dispatch(
         ONLINE_APPOINTMENTS_THUNKS.addAppointment({
            facility,
            data,
         })
      )
   }

   const sendCode = () => {
      if (verificationCode === code) {
         dispatch(
            ONLINE_APPOINTMENTS_THUNKS.checkVerificationCode({
               verificationCode,
               id: appoinmentId,
               open,
            })
         )
      } else showToast({ status: 'error', message: 'не верный код' })
   }

   useEffect(() => {
      dispatch(PROFILE_THUNKS.getUserProfile(accessToken))
   }, [accessToken])

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         fullName: `${userData.firstName} ${userData.lastName}`,
         email: userData.email,
         phoneNumber: userData.number,
      },

      validateOnChange: false,
      onSubmit,
   })

   const changeVerificationCodeHandler = (e) =>
      setVerificationCode(e.target.value)

   return (
      <StyledContainer>
         <Box className="container">
            <StyledForm onSubmit={handleSubmit}>
               <div className="form-container">
                  <Typography>Ваше имя и фамилия </Typography>
                  <StyledInput
                     value={values.fullName}
                     placeholder="Введите имя и фамилия"
                     onChange={handleChange('fullName')}
                  />

                  <Typography>Номер телефона</Typography>
                  <NumberInput
                     value={values.phoneNumber}
                     onChange={handleChange('phomeNumber')}
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
               </div>

               {code ? (
                  ''
               ) : (
                  <StyledButton type="submit">Продолжить</StyledButton>
               )}
            </StyledForm>

            {code && <StyledButton onClick={sendCode}>Записаться</StyledButton>}
         </Box>
      </StyledContainer>
   )
}

export default AppointmentsForm

const StyledContainer = styled(Box)(() => ({
   marginTop: '10px',
   padding: '5px',

   '& .container': {
      padding: '15px',
      backgroundColor: 'white',
      borderRadius: '15px',
   },
}))

const StyledForm = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '10px',

   '& p': {
      fontFamily: 'Manrope',
   },

   '& .form-container': {
      marginTop: '15px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
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
      borderRadius: '5px    ',
   },

   '& .MuiOutlinedInput-root ': {
      color: 'black',
      width: '336px',
      borderRadius: '5px',
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
      borderRadius: '5px',
      height: '2.625rem',
   },
}))
