import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import { Typography, Box, styled, Avatar, InputLabel } from '@mui/material'
import Select from '../../../components/UI/Select'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import Loading from '../../../components/Loading'
import TextEditor from '../../../components/UI/TextEditor'
import {
   NotFoundDoctorImage,
   NotFoundSpecialistImage,
} from '../../../assets/images'
import { SPECIALISTS_THUNK } from '../../../store/slices/specialistsSlice/specialictsThunk'
import { ROUTES } from '../../../routes/routes'
import { DEPARTMENTS } from '../../../utils/constants'
import { containsTheHTTPS } from '../../../utils/helpers'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const selectStyles = {
   control: (provided, state) => {
      let borderColor = state.isFocused ? 'rgba(4, 135, 65, 0.80)' : '#cccccc'

      if (state.selectProps.error) {
         borderColor = 'red'
      }

      return {
         ...provided,
         height: '38px',
         width: '100%',
         border: `1px solid ${borderColor}`,
         borderRadius: '4px',
         boxShadow: 'none',

         '& span': {
            width: '0px',
         },

         '&:hover': {
            borderColor: state.isFocused ? 'none' : '#c1b5b5',
            width: '100%',
         },

         '& > div:first-of-type > div': {
            color: 'black',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: '1rem',
         },
      }
   },

   menu: (provided) => ({
      ...provided,
      width: '350px',
      zIndex: 10000,
   }),
}

const Specialist = () => {
   const { specialist, isLoading } = useSelector((state) => state.specialists)

   const [status, setStatus] = useState('personal')

   const [searchParams, setSearchParams] = useSearchParams()

   const { id } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(SPECIALISTS_THUNK.getSpecialistById(id))

      const currentStatus = searchParams.get('status') || 'personal'

      setStatus(currentStatus)
   }, [id])

   const onSubmit = (values) => {
      if (status === 'personal') {
         searchParams.set('status', 'edit')

         setSearchParams(searchParams)
         setStatus(searchParams.get('status'))
      } else {
         const formData = new FormData()

         formData.append('file', values.file)

         dispatch(SPECIALISTS_THUNK.updateButton({ id, values }))

         searchParams.set('status', 'personal')

         setSearchParams(searchParams)
         setStatus(searchParams.get('status'))
      }
   }

   const { values, handleChange, handleSubmit, setValues } = useFormik({
      initialValues: {
         ...specialist,
         file: null,
      },

      validateOnChange: false,
      onSubmit,
   })

   useEffect(() => {
      setValues((prevState) => ({
         ...prevState,
         ...specialist,
      }))
   }, [specialist])

   const changeFileHandler = (event) => {
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

   const changeTextEditorHandler = (value) => {
      handleChange('description')(value)
   }

   const navigateHandler = () => {
      if (status === 'personal') {
         navigate(`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`)
      } else {
         searchParams.set('status', 'personal')

         setSearchParams(searchParams)
         setStatus(searchParams.get('status'))
      }
   }

   const selectOptions = DEPARTMENTS.find(
      (option) => option.value === values.departmentName
   )

   const isOpen = status === 'personal' ? false : undefined

   const isReadOnly = status === 'personal'

   const doctorImage = containsTheHTTPS(values.image)
      ? values.image
      : NotFoundSpecialistImage

   if (!specialist.firstName) {
      return (
         <StyledNotFoundDoctor>
            <img src={NotFoundDoctorImage} alt="not-found-doctor" />
         </StyledNotFoundDoctor>
      )
   }

   return (
      <StyledContainer>
         <BreadCrumbs
            to={`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`}
            before="Специалисты"
            text={`${specialist.firstName} ${specialist.lastName}`}
         />

         {isLoading && <Loading />}

         <Typography className="title">
            {specialist.firstName} {specialist.lastName}
         </Typography>

         <form onSubmit={handleSubmit}>
            <Box className="image-box">
               <Avatar
                  className="image"
                  src={doctorImage}
                  alt="Фото специалиста"
               />

               {status === 'personal' || (
                  <label htmlFor="file">Сменить фото</label>
               )}

               <input
                  id="file"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={changeFileHandler}
               />
            </Box>

            <Box className="personal-box">
               <Typography className="personal-title">Личные данные</Typography>

               <Box className="inputs-box">
                  <Box className="first-column">
                     <Box>
                        <InputLabel>Имя</InputLabel>

                        <StyledInput
                           value={values.firstName}
                           onChange={handleChange}
                           readOnly={isReadOnly}
                        />
                     </Box>

                     <Box>
                        <InputLabel>Отделение</InputLabel>

                        <Select
                           options={DEPARTMENTS}
                           onChange={changeSelectHandler}
                           placeholder={values.department}
                           value={selectOptions}
                           styles={selectStyles}
                           menuIsOpen={isOpen}
                           variant="schedule"
                        />
                     </Box>
                  </Box>

                  <Box className="second-column">
                     <Box>
                        <InputLabel>Фамилия</InputLabel>

                        <StyledInput
                           value={values.lastName}
                           onChange={handleChange}
                           readOnly={isReadOnly}
                        />
                     </Box>

                     <Box>
                        <InputLabel>Должность</InputLabel>

                        <StyledInput
                           value={values.position}
                           onChange={handleChange}
                           readOnly={isReadOnly}
                        />
                     </Box>
                  </Box>
               </Box>

               <Box className="description">
                  <InputLabel>Описание</InputLabel>
                  {status === 'personal' ? (
                     <StyledTextarea
                        value={values.description}
                        rows={values.description?.length > 1 ? 20 : 1}
                        readOnly
                     />
                  ) : (
                     <TextEditor onChange={changeTextEditorHandler} />
                  )}
               </Box>

               <Box className="buttons-box">
                  <StyledButton
                     type="button"
                     variant="secondary"
                     onClick={navigateHandler}
                  >
                     {status === 'personal' ? 'НАЗАД' : 'ОТМЕНИТЬ'}
                  </StyledButton>

                  <StyledButton type="submit">
                     {status === 'personal' ? 'РЕДАКТИРОВАТЬ' : 'СОХРАНИТЬ'}
                  </StyledButton>
               </Box>
            </Box>
         </form>
      </StyledContainer>
   )
}

export default Specialist

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   maxWidth: '1600px',
   margin: '0 auto',
   paddingBottom: '30px',
   height: '100vh',
   minHeight: '100vh',

   '& > .title': {
      fontSize: '22px',
   },

   '& > form': {
      marginTop: '30px',
      padding: '30px',
      borderRadius: '6px',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      gap: '2.5rem',

      '& > .image-box': {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
         gap: '6px',

         '& > label': {
            color: '#346EFB',
            fontSize: '12px',
            cursor: 'pointer',
         },

         '& > .image': {
            width: '135px',
            height: '135px',
         },

         '& > input': {
            display: 'none',
         },
      },

      '& > .personal-box': {
         width: '100%',
         display: 'flex',
         flexDirection: 'column',
         gap: '20px',

         '& > .personal-title': {
            fontSize: '18px',
            fontWeight: '600',
         },

         '& > .inputs-box': {
            display: 'flex',
            gap: '20px',

            '& > .first-column, & > .second-column': {
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               gap: '20px',

               '& > div': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',

                  '& > label': {
                     fontSize: '14px',
                     color: '#464444',
                  },
               },
            },
         },

         '& > .description': {
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',

            '& > label': {
               fontSize: '14px',
               color: '#464444',
            },
         },

         '& > .buttons-box': {
            display: 'flex',
            justifyContent: 'end',
            gap: '16px',
            marginTop: '48px',
         },
      },
   },
}))

const StyledInput = styled(Input)(() => ({
   width: '100%',

   '& input': {
      height: '38px',
      padding: '8px 18px',
      boxSizing: 'border-box',
   },

   '& .MuiOutlinedInput-input': {
      color: 'black',
   },
}))

const StyledTextarea = styled('textarea')(({ theme }) => ({
   padding: '8px 18px',
   caretColor: theme.palette.primary.darkGreen,
   borderRadius: '4px',
   borderColor: theme.palette.secondary.main,
   resize: 'none',
   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
   fontSize: '1rem',
   boxSizing: 'border-box',

   '&:hover': {
      borderColor: theme.palette.secondary.lightGrey,
   },

   '&:focus': {
      borderColor: theme.palette.primary.darkGreen,
      outline: 'none',
      padding: '8px 18px',
   },

   '&:disabled': {
      borderColor: theme.palette.tertiary.red,
      backgroundColor: 'white',
   },

   '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: '#d9d9d9',
   },

   '::-webkit-scrollbar': {
      borderRadius: '10px',
      width: '7px',
      backgroundColor: '#f5f5f5',
   },
}))

const StyledButton = styled(Button)(() => ({
   height: '39px',
   width: '243px',
}))

const StyledNotFoundDoctor = styled(Box)(() => ({
   margin: '0 auto',
   maxWidth: '1600px',
   display: 'flex',
   justifyContent: 'center',

   '& > img': {
      width: '40%',
      height: '40%',
   },
}))
