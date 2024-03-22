import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Box, InputBase, Paper, Typography, styled } from '@mui/material'
import { ActivePhoneIcon, LeaveArrowIcon, UserIcon } from '../../assets/icons'
import { DoctorLeaveImage } from '../../assets/images'
import { APPLICATIONS_THUNKS } from '../../store/slices/application/applicationThunk'
import Button from '../UI/Button'
import NumberInput from '../UI/inputs/NumberInput'

const Leave = () => {
   const dispatch = useDispatch()

   const onSubmit = (values, { resetForm }) =>
      dispatch(APPLICATIONS_THUNKS.createApplication({ values, resetForm }))

   const { values, handleChange, handleSubmit } = useFormik({
      initialValues: {
         username: '',
         phoneNumber: '',
      },

      onSubmit,
   })

   return (
      <StyledContainer>
         <Box className="box">
            <Typography className="title" variant="h1">
               Оставьте заявку
            </Typography>

            <Typography className="description">
               Оставьте свой номер и наши специалисты свяжутся с Вами в
               ближайшее время
            </Typography>

            <form className="form" onSubmit={handleSubmit} autoComplete="off">
               <Box className="inputs-box">
                  <StyledInputContainer>
                     <label htmlFor="name">Как к Вам обратиться?</label>

                     <StyledInputBox>
                        <UserIcon className="input-icons" />

                        <InputBase
                           className="name-input"
                           id="name"
                           type="text"
                           placeholder="Введите имя"
                           value={values.username}
                           onChange={handleChange('username')}
                        />
                     </StyledInputBox>
                  </StyledInputContainer>

                  <StyledInputContainer>
                     <label htmlFor="number">Номер мобильного телефона</label>

                     <Box className="number-input-container">
                        <NumberInput
                           id="number"
                           mask="_"
                           format="+996#########"
                           placeholder="+996 (___) __-__-__"
                           value={values.phoneNumber}
                           onChange={handleChange('phoneNumber')}
                        >
                           <ActivePhoneIcon className="input-icons" />
                        </NumberInput>
                     </Box>
                  </StyledInputContainer>
               </Box>

               <StyledButton type="submit">
                  ОТПРАВИТЬ ЗАЯВКУ <LeaveArrowIcon className="circle-arrow" />
               </StyledButton>
            </form>
         </Box>

         <img src={DoctorLeaveImage} alt="доктор" />
      </StyledContainer>
   )
}

export default Leave

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   margin: '120px 0',
   justifyContent: 'center',
   alignItems: 'flex-end',

   [theme.breakpoints.down('lg')]: {
      margin: '0.625rem',
   },

   '& > .box': {
      display: 'flex',
      width: '41.1875rem',
      height: '28.75rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#DBEBFF',
      borderRadius: '1.25rem',

      [theme.breakpoints.down('lg')]: {
         height: '21rem',
         width: '33rem',
      },

      '& .form': {
         display: 'flex',
         flexDirection: 'column',
         alignItems: 'center',
      },

      '& > .title': {
         fontSize: '2.25rem',
         fontWeight: '500',
         marginBottom: '1.25rem',

         [theme.breakpoints.down('lg')]: {
            fontSize: '1.25rem',
            marginBottom: '0.375rem',
         },
      },

      '& > .description': {
         fontSize: '1.125rem',
         fontWeight: '400',
         width: '32.375rem',

         [theme.breakpoints.down('lg')]: {
            width: '26rem',
            fontSize: '0.9rem',
         },
      },

      '& .inputs-box': {
         display: 'flex',
         gap: '0.8125rem',
         marginTop: '3.13rem',
         marginBottom: '2.5rem',
      },
   },

   '& > img': {
      width: '36.375rem',
      height: '33.125rem',

      [theme.breakpoints.down('lg')]: {
         width: '25rem',
         height: '23rem',
      },
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      display: 'flex',
      borderRadius: '1.5rem',
      padding: '0.5rem 0.75rem 0.5rem 1.5rem',
      height: '3.1875rem',
      fontSize: '0.875rem',
      textTransform: 'uppercase',
      width: '13.5625rem',
      marginTop: '40px',

      '& > div': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         width: '100%',
      },

      '&:hover': {
         padding: '0.5rem 0.75rem 0.5rem 1.5rem',
         background: theme.palette.primary.linearGradient,
      },

      [theme.breakpoints.down('lg')]: {
         width: '11.5rem',
         height: '2.5rem',
         fontSize: '0.70rem',
         padding: '0.5rem 0.50rem 0.5rem 1.4rem',

         '&:hover': {
            padding: '0.5rem 0.50rem 0.5rem 1.4rem',
         },
      },
   },

   '& > .circle-arrow': {
      width: '1.625rem',
      height: '1.625rem',
   },
}))

const StyledInputContainer = styled(Box)(({ theme }) => ({
   height: '2.3rem',
   display: 'flex',
   alignItems: 'flex-start',
   flexDirection: 'column',

   '& > .number-input-container': {
      marginTop: '6px !important',
   },

   '& > label': {
      [theme.breakpoints.down('lg')]: {
         fontSize: '0.813rem',
      },
   },

   '&  .input-icons': {
      margin: '0.75rem 0rem 0.875rem 0.75rem',
      width: '1.125rem',
      height: '1rem',
   },
}))

const StyledInputBox = styled(Paper)(({ theme }) => ({
   width: '16.4375rem',
   height: ' 2.625rem',
   display: 'flex',
   alignItems: 'center',
   border: '1px solid rgba(0, 147, 68, 0.50)',
   marginTop: '0.375rem',

   [theme.breakpoints.down('lg')]: {
      width: '13.4375rem',
      height: ' 2.3rem',
   },

   '& .name-input': {
      marginLeft: '0.5rem',
   },

   '& #name': {
      borderRadius: '0.3125rem',
      background: ' #FFF',
      padding: '0px 0.625rem px',
      border: 'none',

      '&:active': {
         border: 'none',
      },

      [theme.breakpoints.down('lg')]: {
         width: '10rem',
         fontSize: '0.85rem',
      },
   },
}))
