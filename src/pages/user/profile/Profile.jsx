import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { styled, Box, Typography, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { NavLink, useSearchParams } from 'react-router-dom'
import Button from '../../../components/UI/Button'
import Input from '../../../components/UI/inputs/Input'
import NumberInput from '../../../components/UI/inputs/NumberInput'
import { PROFILE_THUNKS } from '../../../store/slices/profie/profileThunk'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'
import ChangeUserPassword from '../../../components/user/profile/ChangeUserPassword'

const Profile = () => {
   const [value, setValue] = useState('1')

   const { accessToken } = useSelector((state) => state.auth)
   const { userData, isLoading } = useSelector((state) => state.profile)

   const [searchParams, setSearchParams] = useSearchParams()

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
      const tabFormUrl = searchParams.get('tab')

      if (tabFormUrl) {
         setValue(tabFormUrl)
      } else {
         setValue('profile')
         searchParams.set('tab', '1')
         setSearchParams(searchParams)
      }

      setValues((prevState) => {
         return { ...prevState, ...data }
      })
   }, [])

   const tabsChange = (_, newValue) => {
      setValue(newValue)
      searchParams.set('tab', newValue)
      setSearchParams(searchParams)
   }

   return (
      <Box>
         <StyledLine> </StyledLine>
         <StyledContainer>
            <BreadCrumbs to="/" text="Профиль" before="Главная" />
            <Box className="box">
               <Box className="title-container">
                  <Typography className="title">Профиль</Typography>
               </Box>

               <Box>
                  <TabContext value={value}>
                     <Box>
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
                                 <label htmlFor="firstName">Имя</label>

                                 <StyledInput
                                    id="firstName"
                                    value={values.firstName}
                                    onChange={handleChange('firstName')}
                                 />

                                 <label htmlFor="email">E-mail</label>

                                 <StyledInput
                                    id="email"
                                    onChange={handleChange('email')}
                                    value={values.email}
                                 />
                              </div>

                              <div className="first-box">
                                 <label htmlFor="lastName">Фамилия</label>

                                 <StyledInput
                                    id="lastName"
                                    onChange={handleChange('lastName')}
                                    value={values.lastName}
                                 />

                                 <label htmlFor="numberPhone">Телефон</label>

                                 <NumberInput
                                    id="numberPhone"
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
                                       isLoading={isLoading}
                                       colorLoading="secondary"
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
   padding: '2rem 7.37rem 3.125rem !important',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      paddingBottom: '1.875rem',
      paddingTop: '1.875rem',

      '& .first-box': {
         display: 'flex',
         flexDirection: 'column',

         '& > label': {
            fontFamily: 'Manrope',
            fontSize: '14px',
            color: theme.palette.secondary.lightGrey,
         },
      },

      '& > .title-container': {
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

      '& .tables': {
         padding: '0rem',
         margin: '0px',

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

      '& .Mui-selected': {
         transition: '1s',
         color: '#048741 !important',
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

const StyledButtonContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   marginTop: '1.5rem',
   gap: '1rem',

   '& .back-button': {
      border: `1px solid #048741`,
      color: `#048741!important`,
      width: '12.563rem',
      height: '2.438rem',

      '&.Mui-disabled': {
         border: 'none',
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.secondary.input,
      },
   },

   '& .confirm-button': {
      borderRadius: '8px',
      width: '12.563rem',
      height: '2.438rem',

      '&.Mui-disabled': {
         border: 'none',
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.secondary.input,
      },
   },
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))
