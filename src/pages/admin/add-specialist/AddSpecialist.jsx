import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
import TextEditor from '../../../components/UI/TextEditor'
import { AddPhotoImage } from '../../../assets/images'
import { FILE_THUNKS } from '../../../store/slices/file/fileThunk'
import { ROUTES } from '../../../routes/routes'
import { DEPARTMENTS } from '../../../utils/constants'
import { showToast } from '../../../utils/helpers/notification'
import { VALIDATION_ADD_SPECIALIST } from '../../../utils/helpers/validate'
import { containsOnlyText } from '../../../utils/helpers'
import { SPECIALISTS_THUNKS } from '../../../store/slices/specialists/specialictsThunk'

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

const ID = 'add-specialist'

const AddSpecialist = () => {
   const { isLoading } = useSelector((state) => state.specialists)

   const link = useSelector((state) => state.file)

   const [isDisabled, setIsDisabled] = useState(false)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const onSubmit = (values) => {
      dispatch(SPECIALISTS_THUNKS.addSpecialist({ navigate, values }))
   }

   const { values, errors, handleChange, handleSubmit, setFieldValue } =
      useFormik({
         initialValues: {
            department: 'Анестезиология',
            firstName: '',
            lastName: '',
            position: '',
            image: '',
            description: '',
         },

         validationSchema: VALIDATION_ADD_SPECIALIST,
         validateOnChange: false,
         onSubmit,
      })

   useEffect(() => {
      setFieldValue('image', link[ID] || '')
   }, [link])

   useEffect(() => {
      setIsDisabled(
         !values.firstName.trim() ||
            !values.image.trim() ||
            !values.lastName.trim() ||
            !values.position.trim() ||
            !containsOnlyText(values.description)
      )
   }, [values])

   const clickAvatarHandler = () => document.getElementById('file').click()

   const changeFileHandler = (e) => {
      const file = e.target.files[0]

      const fileSizeInKB = file.size / 1024

      if (fileSizeInKB <= 1000) {
         dispatch(FILE_THUNKS.addFile({ id: ID, file }))
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
      navigate(`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`)
   }

   const avatar = values.image ? values.image : AddPhotoImage

   return (
      <StyledContainer>
         <BreadCrumbs
            to={`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`}
            before="Специалисты"
            text="Добавление специалиста"
         />

         <Typography className="title">Добавление специалиста</Typography>

         <form onSubmit={handleSubmit} autoComplete="off">
            <div className="image-box">
               {link.isDownloading ? (
                  <Box>
                     <CircularProgress color="success" />
                  </Box>
               ) : (
                  <>
                     <Avatar
                        className="image"
                        alt="Фото специалиста"
                        src={avatar}
                        onClick={clickAvatarHandler}
                     />

                     <label htmlFor="file">
                        Нажмите для добавления фотографии
                     </label>
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
               <Box className="inputs-box">
                  <Box className="first-column">
                     <Box>
                        <InputLabel>Имя</InputLabel>

                        <StyledInput
                           value={values.firstName}
                           onChange={handleChange}
                           error={errors.firstName}
                           placeholder="Имя"
                           name="firstName"
                        />
                     </Box>

                     <Box>
                        <InputLabel>Отделение</InputLabel>

                        <Select
                           options={DEPARTMENTS}
                           onChange={changeSelectHandler}
                           styles={selectStyles}
                           placeholder={values.department}
                           error={errors.department}
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
                           error={errors.lastName}
                           placeholder="Фамилия"
                           name="lastName"
                        />
                     </Box>

                     <Box>
                        <InputLabel>Должность</InputLabel>

                        <StyledInput
                           value={values.position}
                           onChange={handleChange}
                           error={errors.position}
                           placeholder="Должность"
                           name="position"
                        />
                     </Box>
                  </Box>
               </Box>

               <Box className="description">
                  <InputLabel>Описание</InputLabel>

                  <TextEditor onChange={changeTextEditorHandler} />
               </Box>

               <Box className="buttons-box">
                  <StyledButton
                     type="button"
                     variant="secondary"
                     onClick={navigateHandler}
                  >
                     ОТМЕНИТЬ
                  </StyledButton>

                  <StyledButton
                     isLoading={isLoading}
                     disabled={isDisabled}
                     type="submit"
                  >
                     ДОБАВИТЬ
                  </StyledButton>
               </Box>
            </div>
         </form>
      </StyledContainer>
   )
}

export default AddSpecialist

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
            width: '169px',
            display: 'flex',
            justifyContent: 'center',
         },

         '& > div > .MuiCircularProgress-root': {
            margin: '20px 0 0 0',
            width: '100px !important',
            height: '100px !important',
         },

         '& > label': {
            textAlign: 'center',
            color: '#909CB5',
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

const StyledButton = styled(Button)(() => ({
   height: '39px',
   width: '243px',
}))
