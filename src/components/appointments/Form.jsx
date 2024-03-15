import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { PROFILE_THUNKS } from '../../store/slices/profie/profileThunk'
import Input from '../UI/inputs/Input'
import Button from '../UI/Button'
import NumberInput from '../UI/inputs/NumberInput'
import { ONLINE_APPOINTMENTS_THUNKS } from '../../store/slices/online-appointments-user/onlineAppointmentsThunk'

const Form = ({ facility, doctorInfo, time, date }) => {
   const [code, setCode] = useState(false)
   const dispatch = useDispatch()

   const { accessToken } = useSelector((state) => state.auth)
   useEffect(() => {
      dispatch(PROFILE_THUNKS.getUserProfile(accessToken))
   }, [accessToken])

   const dates = date ? date.format('YYYY-MM-DD') : null
   const { userData } = useSelector((state) => state.profile)

   const onSubmit = (values) => {
      const data = {
         ...values,
         startTimeConsultation: time,
         doctorId: doctorInfo.id,
         date: dates || doctorInfo.date,
      }

      dispatch(
         ONLINE_APPOINTMENTS_THUNKS.addAppointment({
            facility,
            data,
            setCode,
         })
      )
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

   return (
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
                  <Typography variant="small">Введите код из почты </Typography>
                  <StyledSmsCodeInput />
               </>
            )}
         </div>

         <StyledButton type="onSubmit">Продолжить</StyledButton>
      </StyledForm>
   )
}

export default Form

const StyledForm = styled('form')(() => ({
   width: '400px',
   marginTop: '10px',
   padding: '15px',
   margin: '5px',
   borderRadius: '15px',
   backgroundColor: 'white',
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
      width: '91%',

      '&:active': {
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
   },

   '& .MuiOutlinedInput-root ': {
      width: '120px',
      borderRadius: '5px',
      height: '2.625rem',
   },
}))
