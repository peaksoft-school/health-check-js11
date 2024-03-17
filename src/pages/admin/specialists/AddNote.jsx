import { useEffect, useState, useMemo } from 'react'
import { Typography, Box, styled, Card } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import Select from '../../../components/UI/Select'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import { DEPARTMENTS } from '../../../utils/constants'
import { ADD_NOTE } from '../../../store/slices/addNote/AddNoteThunk'
import MyEditor from './Editor'
import PhotoSvg from '../../../assets/icons/svgs/зhoto.svg'

const AddNote = () => {
   const { doctors } = useSelector((state) => state.addNote)

   console.log(doctors)
   const dispatch = useDispatch()

   const data = {
      ...doctors,
      imageSrc: '',
   }

   const onSubmit = (values) => {
      if (
         !values.firstName ||
         !values.lastName ||
         !values.position ||
         !values.departmentId
      ) {
         return
      }

      dispatch(ADD_NOTE.postAddNote({ values }))
   }

   const { values, handleChange, handleSubmit, dirty, setValues } = useFormik({
      initialValues: data,
      validateOnChange: false,
      onSubmit,
   })

   const handleFileChange = (event) => {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
         const imageSrc = e.target.result
         setValues((prevValues) => ({
            ...prevValues,
            imageSrc,
         }))
      }

      if (file) {
         reader.readAsDataURL(file)
      }
   }

   useEffect(() => {
      setValues((prevState) => {
         return { ...prevState, ...data }
      })
   }, [])

   const changeSelectHandler = (selectedOption) => {
      setValues((prevValues) => ({
         ...prevValues,
         departmentId: selectedOption.id,
      }))
   }

   return (
      <StyledMainContainer>
         <Box className="box">
            <StyledSpecialistRow>
               Специалисты
               <span className="doctor-name">&gt; Добавление специалиста</span>
            </StyledSpecialistRow>

            <Typography className="title">Добавление специалиста</Typography>

            <form onSubmit={handleSubmit} className="table-container">
               <StyledImage>
                  <img
                     className="image"
                     src={values.imageSrc || PhotoSvg}
                     alt="Фото специалиста"
                  />

                  <label htmlFor="fileInput" className="change-photo">
                     Нажмите для добавления фотографии
                  </label>

                  <input
                     id="fileInput"
                     type="file"
                     accept="image/*"
                     style={{ display: 'none' }}
                     onChange={handleFileChange}
                  />
               </StyledImage>

               <Box className="depatment-container">
                  <Typography className="personal-data">
                     Добавление специалиста
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
                           onChange={changeSelectHandler}
                           className="custom-select"
                           placeholder={values.departmentId}
                           variant="schedule"
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

                  <MyEditor
                     value={values.description}
                     onChange={handleChange('description')}
                  />

                  <Box className="button-group">
                     <StyledButton type="button" variant="grey">
                        ОТМЕНИТЬ
                     </StyledButton>

                     <StyledButton type="submit">ДОБАВИТЬ</StyledButton>
                  </Box>
               </Box>
            </form>
         </Box>
      </StyledMainContainer>
   )
}

export default AddNote

const StyledMainContainer = styled(Box)(() => ({
   padding: '1.87rem 4.37rem 0',
   backgroundColor: '#F5F5F5',

   '& > .box': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '1600px',
      margin: '0 auto',
      paddingBottom: '30px',
   },
   '& .title': {
      fontSize: '1.375rem',
      fontWeight: '400',
      lineHeight: 'normal',
      marginBottom: '1.87rem',
   },
   '& .table-container': {
      width: '100%',
      borderRadius: '0.375rem',
      bordeRradius: ' 0.375rem',
      background: 'white',
      padding: '1.90rem 15rem 1rem',
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
      cursor: 'pointer',
      width: '490px',
      height: '5px',
   },
   '& .depatment-container': {
      marginTop: '-10.10rem',
      '& > .Alisher': {
         border: '1px solid #D9D9D9',
         borderRadius: '4px',
         width: '1060px',
         height: '274px',

         '& .ToolBar': {
            border: '1px solid #D9D9D9',
            height: '50px',

            '& > .rdw-inline-wrapper': {
               justifyContent: 'flex-start',
               marginLeft: '1.50rem',
               gap: '1rem',
               '& .rdw-option-wrapper': {
                  fontSize: '50rem',
                  width: '80px',
                  height: '40px',
                  border: 'none',
               },
            },
            '& > .rdw-list-wrapper': {
               gap: '1rem',
               '& .rdw-option-wrapper': {
                  fontSize: '50rem',
                  width: '80px',
                  height: '40px',
                  border: 'none',
               },
            },
         },
         '& .Muslima': {
            width: '1070px',
            height: '200px',
            '& .DraftEditor-root': {
               overflow: 'hidden',
            },
         },
      },
   },
   '& .button-group': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1rem',
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

const StyledImage = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   marginLeft: '-12rem',
   marginTop: '1rem',
   borderRadius: '50%',
   border: '1px solid #E0E2E7',
   width: '150px',
   height: '140px',
   backgroundColor: '#E0E2E7',
   '& .image': {
      width: '35px',
      height: '35px',
      marginLeft: '3.50rem',
   },
   '& .change-photo': {
      width: '100%',
      marginLeft: '-3rem',
      marginTop: '12rem',
      color: '#909CB5',
      fontSize: '12px',
   },
}))