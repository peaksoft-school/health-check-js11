import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { styled, Box, Typography, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Button from '../../../components/UI/Button'
import Input from '../../../components/UI/inputs/Input'
import { ACTION_PROFILE } from '../../../store/slices/profie/profileThunk'
import NumberInput from '../../../components/UI/inputs/NumberInput'
import ChangeUserPassword from './ChangeUserPassword'
import { changeUserPasswordError } from '../../../utils/helpers'

const Profile = () => {
   const [value, setValue] = useState('1')

   const { userData } = useSelector((state) => state.profile)
   const { accessToken } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const onSubmit = (values) => {
      dispatch(ACTION_PROFILE.updateUserProfile(values))
   }

   const { values, handleChange, errors, handleSubmit } = useFormik({
      initialValues: {
         firstName: userData.firstName,
         lastName: userData.lastName,
         email: userData.email,
         numberPhone: userData.number,
      },

      validateOnChange: false,
      onSubmit,
   })

   useEffect(() => {
      dispatch(ACTION_PROFILE.getUserProfile(accessToken))
   }, [accessToken])

   const tabsChange = (_, newValue) => {
      setValue(newValue)
   }

   return (
      <StyledContainer>
         <Box className="box">
            <Box className="button-container">
               <Typography className="title">Профиль</Typography>
            </Box>

            <Box>
               <TabContext value={value}>
                  <Box className="tabs-container">
                     <TabList
                        onChange={tabsChange}
                        aria-label="lab API tabs example"
                     >
                        <Tab
                           label="ЛИЧНЫЕ ДАННЫЕ"
                           value="1"
                           className="route"
                        />

                        <Tab
                           label="СМЕНИТЬ ПАРОЛЬ"
                           value="2"
                           className="route"
                        />
                     </TabList>
                  </Box>

                  <TabPanel value="1" className="tables">
                     <form onSubmit={handleSubmit} className="table-container">
                        <Box className="table-container">
                           <div className="first-box">
                              <Typography className="label">Имя</Typography>
                              <Input
                                 className="input"
                                 value={values.firstName}
                                 onChange={handleChange('firstName')}
                              />

                              <Typography className="label">Email</Typography>
                              <Input
                                 className="input"
                                 onChange={handleChange('email')}
                                 value={values.email}
                              />
                           </div>

                           <div className="first-box">
                              <Typography className="label">Фамилия</Typography>
                              <Input
                                 onChange={handleChange('lastName')}
                                 className="input"
                                 value={values.lastName}
                              />

                              <Typography className="label">Телефон</Typography>
                              <NumberInput
                                 variant="secondary"
                                 className="input"
                                 onChange={handleChange('numberPhone')}
                                 value={values.numberPhone}
                                 mask="_"
                                 format="+996#########"
                                 placeholder="+996 (___) ___ ___"
                              />

                              {changeUserPasswordError(errors) && (
                                 <Typography className="error-message">
                                    {changeUserPasswordError(errors)}
                                 </Typography>
                              )}

                              <div>
                                 <Button>НАЗАД</Button>
                                 <Button type="submit">РЕДАКТИРОВАТЬ</Button>
                              </div>
                           </div>
                        </Box>
                     </form>
                  </TabPanel>

                  <TabPanel value="2" className="tables">
                     <ChangeUserPassword />
                  </TabPanel>
               </TabContext>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default Profile

const StyledBox = styled(Box)(({ theme }) => ({
   display: 'flex',

   '& .input': {
      width: '490px',
      height: '38px',
   },

   '& .tables': {
      padding: '0rem',
   },

   '& .label': {
      color: '#464444',
      fontFamily: 'Manrope',
   },

   '& > .first-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
   },

   '& .route': {
      fontSize: '0.75rem',
      lineHeight: 'normal',
      marginRight: '1.87rem',
      padding: '0rem',
      transition: '0.3s',
      fontWeight: '500',
      color: theme.palette.secondary.LightGrey,
   },
}))

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '1.87rem 4.37rem 0',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',

      '& .button-container': {
         display: 'flex',
         justifyContent: 'space-between',

         '& .title': {
            fontSize: '1.375rem',
            fontWeight: '400',
            lineHeight: 'normal',
            marginBottom: '1.87rem',
         },

         '& > .add-button': {
            fontFamily: 'Manrope',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            letterSpacing: '0.02625rem',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            height: '2.75rem',
            padding: '0.625rem 1.5rem 0.625rem 1rem !important',
            gap: '0.625rem',
            width: '13.0625rem !important',
            flexShrink: '0',

            '& > .plus-icon': {
               width: '1.125rem',
               padding: '0.625rem',
               height: '1.125rem',
            },
         },
      },

      '& .MuiTabs-scroller > .MuiTabs-indicator': {
         backgroundColor: '#048741 !important',
      },

      '& .route': {
         fontSize: '0.75rem',
         lineHeight: 'normal',
         marginRight: '1.87rem',
         padding: '0rem',
         transition: '0.3s',
         fontWeight: '500',
         color: theme.palette.secondary.LightGrey,
      },

      '& .Mui-selected': {
         transition: '1s',
         color: '#048741 !important',
      },

      '& .tables': {
         padding: '0rem',
      },

      '& .input-container': {
         width: '37.5rem',
         marginTop: '2.12rem',
      },

      '& .table-container': {
         width: '100%',
         borderRadius: '0.375rem',
         bordeRradius: ' 0.375rem',
         background: 'white',
         marginTop: '1.25rem',
      },
   },
}))
