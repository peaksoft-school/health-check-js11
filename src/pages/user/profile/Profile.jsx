import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { styled, Box, Typography, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { NavLink } from 'react-router-dom'
import Button from '../../../components/UI/Button'
import Input from '../../../components/UI/inputs/Input'
import NumberInput from '../../../components/UI/inputs/NumberInput'
import ChangeUserPassword from './ChangeUserPassword'
import { PROFILE_THUNKS } from '../../../store/slices/profie/profileThunk'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const Profile = () => {
   const [value, setValue] = useState('1')

   const { accessToken } = useSelector((state) => state.auth)
   const { userData, isLoading } = useSelector((state) => state.profile)

   const data = {
      ...userData,
      numberPhone: userData.number,
   }

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(PROFILE_THUNKS.getUserProfile(accessToken))
   }, [accessToken])

   const onSubmit = (values) => {
      dispatch(PROFILE_THUNKS.updateUserProfile(values))
   }

   const { values, handleChange, handleSubmit, dirty, setValues } = useFormik({
      initialValues: data,

      validateOnChange: false,
      onSubmit,
   })

   useEffect(() => {
      setValues((prevState) => {
         return { ...prevState, ...data }
      })
   }, [])

   const tabsChange = (_, newValue) => {
      setValue(newValue)
   }

   return (
      <Box>
         <StyledLine> </StyledLine>
         <StyledContainer>
            <Box className="box">
               <BreadCrumbs to="/" text="Профиль" before="Главная" />

               <Box className="title-container">
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
                        <form
                           onSubmit={handleSubmit}
                           className="table-container"
                        >
                           <Box className="table-container">
                              <div className="first-box">
                                 <Typography className="label">Имя</Typography>

                                 <StyledInput
                                    className="input"
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                 />

                                 <Typography className="label">
                                    E-mail
                                 </Typography>

                                 <StyledInput
                                    className="input"
                                    onChange={handleChange('email')}
                                    value={values.email}
                                 />
                              </div>

                              <div className="first-box">
                                 <Typography className="label">
                                    Фамилия
                                 </Typography>

                                 <StyledInput
                                    onChange={handleChange('lastName')}
                                    className="input"
                                    value={values.lastName}
                                 />

                                 <Typography className="label">
                                    Телефон
                                 </Typography>

                                 <NumberInput
                                    variant="black"
                                    onChange={handleChange('numberPhone')}
                                    value={values.numberPhone}
                                    mask="_"
                                    format="+996#########"
                                    placeholder="+996 (___) ___ ___"
                                 />

                                 <StyledButtonContainer>
                                    <NavLink to="/">
                                       <Button
                                          variant="grey"
                                          className="back-button"
                                       >
                                          НАЗАД
                                       </Button>
                                    </NavLink>

                                    <Button
                                       className="confirm-button"
                                       type="submit"
                                       disabled={!dirty}
                                       // isLoading={isLoading}
                                       //       colorLoading="secondary"
                                    >
                                       РЕДАКТИРОВАТЬ
                                    </Button>
                                 </StyledButtonContainer>
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
      </Box>
   )
}

export default Profile

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '0 7.37rem 3.125rem !important',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      paddingBottom: '1.875rem',

      '& .title-container': {
         display: 'flex',
         justifyContent: 'space-between',

         '& > .title': {
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

      '& .label': {
         fontFamily: 'Manrope',
         fontSize: '14px',
         color: theme.palette.secondary.lightGrey,
      },

      '& .MuiTabs-scroller > .MuiTabs-indicator': {
         margin: '0 auto',
         backgroundColor: '#048741 !important',
      },

      '& .route': {
         fontSize: '0.75rem',
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
         margin: '0px',
      },

      '& .table-container': {
         display: 'flex',
         gap: '1rem',
         width: '100%',
         borderRadius: '0.375rem',
         bordeRradius: ' 0.375rem',
         background: 'white',
         marginTop: '1.25rem',
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   marginBottom: '1.5rem',

   '& .MuiOutlinedInput-root ': {
      width: '414px',
      height: '2.625rem',
      color: 'black',
      borderRadius: '0.5rem',
   },

   '& .MuiOutlinedInput-input': {
      width: '414px',
      height: '0.4375em',
      color: 'black',
      borderRadius: '0.5rem',
   },
}))

const StyledButtonContainer = styled(Box)(() => ({
   display: 'flex',
   marginTop: '1.5rem',
   gap: '1rem',

   '& .back-button': {
      border: `1px solid #048741`,
      color: `#048741!important`,
      width: '12.563rem',
      height: '2.438rem',
   },

   '& .confirm-button': {
      borderRadius: '8px',
      width: '12.563rem',
      height: '2.438rem',
   },
}))

const NavigatePathTitle = styled(Box)(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   margin: '1.5rem 0',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },

   '& .navigate': {
      textDecoration: 'none',
      color: '#959595',
   },
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))
