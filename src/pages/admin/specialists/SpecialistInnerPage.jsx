import { useEffect } from 'react'
import { Typography, Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { SPECIALISTS_THUNK } from '../../../store/slices/specialistsSlice/specialictsThunk'
import Select from '../../../components/UI/Select'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import { DEPARTMENTS } from '../../../utils/constants'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const SpecialistInnerPage = () => {
   const { id } = useParams()

   const { specialist, isLoading } = useSelector((state) => state.specialists)

   const dispatch = useDispatch()

   const data = {
      ...specialist,
   }

   useEffect(() => {
      dispatch(SPECIALISTS_THUNK.getSpecialistById(id))
   }, [id])

   const onSubmit = (values) => {
      const formData = new FormData()
      formData.append('file', values.file)
      dispatch(SPECIALISTS_THUNK.updateButton({ id, values }))
   }

   const { values, handleChange, handleSubmit, dirty, setValues } = useFormik({
      initialValues: {
         data,
         file: null,
      },

      validateOnChange: false,
      onSubmit,
   })

   const handleFileChange = (event) => {
      const { name, files } = event.target
      const file = files[0]
      const imageUrl = URL.createObjectURL(file)
      setValues((prevValues) => ({
         ...prevValues,
         [name]: file,
         image: imageUrl,
      }))
   }

   const changeSelectHandler = (selectedOption) => {
      handleChange('department')(selectedOption.label)
   }

   useEffect(() => {
      setValues((prevState) => ({
         ...prevState,
         ...specialist,
      }))
   }, [specialist])
   return (
      <StyledMainContainer>
         <Box className="box">
            <BreadCrumbs
               to="/admin/specialists"
               before="Специалисты"
               text={`${specialist.firstName} ${specialist.lastName}`}
            />

            <Typography className="title">
               {specialist.firstName} {specialist.lastName}
            </Typography>

            <form onSubmit={handleSubmit} className="table-container">
               <StyledImage>
                  <img
                     className="image"
                     src={values.image}
                     alt="Фото специалиста"
                  />
                  <label htmlFor="fileInput" className="change-photo">
                     Сменить фото
                  </label>
                  <input
                     id="fileInput"
                     type="file"
                     accept="image/*"
                     onChange={handleFileChange}
                     style={{ display: 'none' }}
                  />
               </StyledImage>

               <Box className="depatment-container">
                  <Typography className="personal-data">
                     Личные данные
                  </Typography>

                  <Box className="input-container">
                     <Box className="one-row">
                        <StyledInfo>Имя</StyledInfo>

                        <StyledInput
                           value={values.firstName}
                           onChange={handleChange('firstName')}
                        />

                        <StyledInfo>Отделение</StyledInfo>

                        <Select
                           options={DEPARTMENTS}
                           onChange={(selectedOption) =>
                              changeSelectHandler(selectedOption)
                           }
                           className="custom-select"
                           variant="schedule"
                           value={DEPARTMENTS.find(
                              (option) => option.value === values.departmentName
                           )}
                           placeholder={values.department}
                        />
                     </Box>
                     <Box className="two-row">
                        <StyledInfo>Фамилия</StyledInfo>
                        <StyledInput
                           value={values.lastName}
                           onChange={handleChange('lastName')}
                        />
                        <StyledInfo>Должность</StyledInfo>
                        <StyledInput
                           value={values.position}
                           onChange={handleChange('position')}
                        />
                     </Box>
                  </Box>

                  <StyledDescription>Описание</StyledDescription>

                  <StyledTextInput
                     onChange={handleChange('description')}
                     value={values.description}
                  />
                  <NavLink to="/admin/specialists" className="back">
                     <Box className="button-group">
                        <StyledButton type="button" variant="grey">
                           НАЗАД
                        </StyledButton>

                        <StyledButton type="submit" disabled={!dirty}>
                           РЕДАКТИРОВАТЬ
                        </StyledButton>
                     </Box>
                  </NavLink>
               </Box>
            </form>
         </Box>
      </StyledMainContainer>
   )
}

export default SpecialistInnerPage

const StyledMainContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0 ',
   backgroundColor: '#F5F5F5',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',
   },

   '& .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: 'white',
      padding: '1.90rem 15rem 1rem',
      '& .css-1jo93l0-MuiFormControl-root-MuiTextField-root': {
         border: 'none',
      },
   },

   '& .personal-data': {
      fontSize: '22px',
   },

   '& .one-row': {
      padding: '1.90rem 0 1rem',
      gap: '1rem',
   },

   '& .two-row': {
      padding: '1.97rem 5rem 1rem',
   },

   '& .input-container': {
      display: 'flex',
   },

   '& .custom-select': {
      width: '490px',
      height: '5px',
   },

   '& .depatment-container': {
      marginTop: '-10.10rem',
   },

   '& .back': {
      textDecoration: 'none',
      '& .button-group': {
         display: 'flex',
         justifyContent: 'end',
         gap: '1rem',
      },
   },
   '& .title': {
      marginBottom: '2rem',
   },
}))

const StyledInfo = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#464444',
   marginBottom: '0.5rem',
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-input': {
      height: '0.5rem',
      borderRadius: '6px',
   },

   '& .MuiOutlinedInput-root ': {
      width: '490px',
      height: '2.375rem',
      borderRadius: '0.3rem',
   },
}))

const StyledDescription = styled(Typography)(() => ({
   fontSize: '14px',
   color: '#464444',
}))

const StyledTextInput = styled(Input)(() => ({
   marginTop: '0.2rem',
   borderRadius: '0.375rem',
   color: '#464444',
   width: '1060px',
}))

const StyledButton = styled(Button)(() => ({
   width: '14.3rem',
   height: '2.5rem',
   marginTop: '5rem',
}))

const StyledSpecialistRow = styled(Typography)(() => ({
   marginBottom: '2rem',
   color: 'grey',
   fontSize: '14px',

   '& .doctor-name': {
      color: 'green',
   },
}))

const StyledImage = styled(Box)(({ theme }) => ({
   display: 'flex',
   marginLeft: '-12rem',
   marginTop: '1rem',
   '& .image': {
      width: '135px',
      height: '135px',
      borderRadius: '50%',
   },
   '& .change-photo': {
      marginLeft: '-6.80rem',
      marginTop: '8.90rem',
      color: theme.palette.tertiary.lightBlue,
      fontSize: '12px',
   },
}))
