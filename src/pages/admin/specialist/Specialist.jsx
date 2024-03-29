import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import {
   Typography,
   Box,
   styled,
   Avatar,
   InputLabel,
   CircularProgress,
} from '@mui/material'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'
import Select from '../../../components/UI/Select'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import Loading from '../../../components/Loading'
import TextEditor from '../../../components/UI/TextEditor'
import {
   NotFoundDoctorImage,
   NotFoundSpecialistImage,
} from '../../../assets/images'
import { SPECIALISTS_THUNKS } from '../../../store/slices/specialists/specialictsThunk'
import { FILE_THUNKS } from '../../../store/slices/file/fileThunk'
import { ROUTES } from '../../../routes/routes'
import { DEPARTMENTS } from '../../../utils/constants'
import { VALIDATION_SPECIALIST } from '../../../utils/helpers/validate'
import {
   containsOnlyText,
   containsTheHTTPS,
   isEqualObjects,
} from '../../../utils/helpers'
import { showToast } from '../../../utils/helpers/notification'

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
         cursor: 'pointer',

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

   const link = useSelector((state) => state.file)

   const [status, setStatus] = useState('personal')
   const [isSaveDisabled, setSaveDisabled] = useState(false)

   const [searchParams, setSearchParams] = useSearchParams()

   const { id } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const isReadOnly = status === 'personal'

   useEffect(() => {
      dispatch(SPECIALISTS_THUNKS.getSpecialist(id))

      const currentStatus = searchParams.get('status') || 'personal'

      setStatus(currentStatus)
   }, [id])

   const onSubmit = (values) => {
      searchParams.set('status', 'edit')

      setSearchParams(searchParams)
      setStatus(searchParams.get('status'))

      if (status === 'edit') {
         dispatch(
            SPECIALISTS_THUNKS.updateSpecialist({
               id: specialist.id,
               facility: values.department,

               data: {
                  firstName: values.firstName,
                  lastName: values.lastName,
                  position: values.position,
                  image: link[specialist?.id] || specialist?.image,
                  description: values.description,
               },

               searchParams,
               setSearchParams,
               setStatus,
            })
         )
      }
   }

   const {
      values,
      errors,
      handleChange,
      handleSubmit,
      setValues,
      setFieldValue,
   } = useFormik({
      initialValues: {
         id: 0,
         image: '',
         fullName: '',
         firstName: '',
         lastName: '',
         department: '',
         position: '',
         description: '',
      },

      validationSchema: VALIDATION_SPECIALIST,
      onSubmit,
   })
   useEffect(() => {
      setSaveDisabled(
         !values.firstName.trim() ||
            !values.lastName.trim() ||
            !values.position.trim() ||
            !containsOnlyText(values.description)
      )
   }, [values])

   useEffect(() => {
      setValues((prev) => ({
         ...prev,
         ...specialist,
      }))
   }, [specialist])

   useEffect(() => {
      setFieldValue('image', link[id])
   }, [link])

   const clickAvatarHandler = () => document.getElementById('file').click()

   const changeFileHandler = (e) => {
      const file = e.target.files[0]

      const fileSizeInKB = file.size / 1024

      if (fileSizeInKB <= 1000) {
         dispatch(FILE_THUNKS.addFile({ id, file }))
      } else {
         showToast({
            message: 'Нельзя загружать файлы с размером больше 1000 байтов!',
            status: 'error',
         })
      }
   }

   const changeSelectHandler = (selectedOption) => {
      handleChange('department')(selectedOption.label || '')
   }

   const changeTextEditorHandler = (value) => handleChange('description')(value)

   const navigateHandler = () => {
      if (isReadOnly) {
         navigate(`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`)
      } else {
         searchParams.set('status', 'personal')

         setFieldValue('department', specialist?.department)
         setSearchParams(searchParams)
         setStatus(searchParams.get('status'))
      }
   }

   const isOpen = isReadOnly ? false : undefined

   const isDisabled = isEqualObjects(values, specialist) || isSaveDisabled

   const doctorImage = () => {
      if (isReadOnly) {
         if (containsTheHTTPS(specialist?.image)) {
            return specialist?.image
         }

         return NotFoundSpecialistImage
      }

      if (link[specialist?.id]?.length > 0) {
         return link[specialist?.id]
      }

      if (containsTheHTTPS(specialist?.image)) {
         return specialist?.image
      }

      return NotFoundSpecialistImage
   }

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

         <form onSubmit={handleSubmit} autoComplete="off">
            <div className="image-box">
               {link.isDownloading ? (
                  <Box>
                     <CircularProgress color="success" />
                  </Box>
               ) : (
                  <>
                     <Avatar
                        onClick={clickAvatarHandler}
                        src={doctorImage()}
                        className="image"
                        alt="Фото специалиста"
                     />

                     {isReadOnly || <label htmlFor="file">Сменить фото</label>}
                  </>
               )}

               <input
                  id="file"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={changeFileHandler}
               />
            </div>

            <div className="personal-box">
               <Typography className="personal-title">
                  {isReadOnly ? 'Личные данные' : 'Редактирование данных'}
               </Typography>

               <Box className="inputs-box">
                  <Box className="first-column">
                     <Box>
                        <InputLabel>Имя</InputLabel>

                        <StyledInput
                           value={
                              isReadOnly
                                 ? specialist?.firstName
                                 : values.firstName
                           }
                           onChange={(e) =>
                              handleChange('firstName')(e.target.value.trim())
                           }
                           readOnly={isReadOnly}
                           error={errors.firstName}
                           placeholder="Имя"
                        />
                     </Box>

                     <Box>
                        <InputLabel>Отделение</InputLabel>

                        <Select
                           options={DEPARTMENTS}
                           onChange={changeSelectHandler}
                           placeholder={values.department}
                           styles={selectStyles}
                           menuIsOpen={isOpen}
                           error={errors.department}
                           variant="schedule"
                        />
                     </Box>
                  </Box>

                  <Box className="second-column">
                     <Box>
                        <InputLabel>Фамилия</InputLabel>

                        <StyledInput
                           value={
                              isReadOnly
                                 ? specialist?.lastName
                                 : values.lastName
                           }
                           onChange={(e) =>
                              handleChange('lastName')(e.target.value.trim())
                           }
                           readOnly={isReadOnly}
                           error={errors.lastName}
                           placeholder="Фамилия"
                        />
                     </Box>

                     <Box>
                        <InputLabel>Должность</InputLabel>

                        <StyledInput
                           value={
                              isReadOnly
                                 ? specialist?.position
                                 : values.position
                           }
                           onChange={(e) =>
                              handleChange('position')(e.target.value.trim())
                           }
                           readOnly={isReadOnly}
                           error={errors.position}
                           name="position"
                           placeholder="Должность"
                        />
                     </Box>
                  </Box>
               </Box>

               <Box className="description">
                  <InputLabel>Описание</InputLabel>

                  {isReadOnly ? (
                     <StyledTextarea
                        dangerouslySetInnerHTML={{
                           __html: specialist?.description,
                        }}
                     />
                  ) : (
                     <TextEditor
                        onChange={changeTextEditorHandler}
                        initialContent={specialist?.description}
                        error={!containsOnlyText(values.description)}
                     />
                  )}
               </Box>

               <Box className="buttons-box">
                  <StyledButton
                     type="button"
                     variant="secondary"
                     onClick={navigateHandler}
                  >
                     {isReadOnly ? 'НАЗАД' : 'ОТМЕНИТЬ'}
                  </StyledButton>

                  <StyledButton
                     isLoading={isLoading}
                     disabled={isReadOnly ? false : Boolean(isDisabled)}
                     type="submit"
                  >
                     {isReadOnly ? 'РЕДАКТИРОВАТЬ' : 'СОХРАНИТЬ'}
                  </StyledButton>
               </Box>
            </div>
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

         '& > div': {
            width: '135px',
            display: 'flex',
            justifyContent: 'center',
         },

         '& > div > .MuiCircularProgress-root': {
            margin: '20px 0 0 0',
            width: '100px !important',
            height: '100px !important',
         },

         '& > label': {
            color: '#346EFB',
            fontSize: '12px',
            cursor: 'pointer',
         },

         '& > .image': {
            width: '135px',
            height: '135px',
            cursor: 'pointer',
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

const StyledTextarea = styled(Box)(({ theme }) => ({
   padding: '20px',
   borderRadius: '4px',
   border: `1px solid ${theme.palette.secondary.main}`,

   '&:hover': {
      borderColor: theme.palette.secondary.lightGrey,
   },

   '&:active': {
      borderColor: theme.palette.primary.darkGreen,
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
