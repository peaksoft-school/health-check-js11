import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled, Box, Typography } from '@mui/material'
import { ResultsBackgroundImage } from '../../../assets/images'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import { CloseIconSchedule, HealthCheckIcon } from '../../../assets/icons'
import { RESULTS_THUNKS } from '../../../store/slices/result/resultsThunk'

const Results = () => {
   const [resultNumber, setResultNumber] = useState('')

   const { result } = useSelector((state) => state.result)

   const navigate = useNavigate()

   const changeInputValuesHandler = (e) => setResultNumber(e.target.value)

   const dispatch = useDispatch()

   const sendResultNumber = (e) => {
      e.preventDefault()

      const cleanedResultNumber = resultNumber.replace(/\s/g, '')

      dispatch(RESULTS_THUNKS.getResults(cleanedResultNumber))
   }

   return (
      <StyledContainer>
         <StyledForm>
            <Box className="logo">
               <HealthCheckIcon />

               <Typography variant="h1">
                  <Typography variant="p">HEALTH</Typography> CHECK
               </Typography>
            </Box>

            <form onSubmit={sendResultNumber} className="form-container">
               <StyledInput
                  autocomplete="off"
                  value={resultNumber}
                  onChange={changeInputValuesHandler}
                  placeholder="Введите код..."
               />

               <StyledButton type="submit">Найти</StyledButton>
            </form>
         </StyledForm>

         <hr />

         <Box>
            <Box className="file">
               <StyledFormContainer>
                  <Box>
                     <Typography variant="h4">Выдача результатов</Typography>

                     <Typography variant="span">Вы можете:</Typography>
                  </Box>

                  <StyledCloseButton onClick={() => navigate(-1)}>
                     <CloseIconSchedule />
                     ЗАКРЫТЬ РЕЗУЛЬТАТЫ
                  </StyledCloseButton>
               </StyledFormContainer>

               <ul>
                  <li>
                     Просмотреть свои результаты анализов онлайн Вы можете,
                     введя в поле слева индивидуальный <br /> цифровой код,
                     который указан в верхней части Вашей квитанции под
                     штрих-кодом или отправлен вам на почту;
                  </li>

                  <li>
                     Распечатать результат можно непосредсвенно с этой страницы
                     или сохранить в PDF формате <br /> с помощью кнопок,
                     расположенной в верхней части сайта;
                  </li>

                  <li className="red-text">
                     При возникновении проблем с отображением результатов, Вы
                     можете оставить заявку <br /> на получение результатов по
                     электронной почте, позвонив в Службу поддержки клиентов
                     <br /> по номеру +996 (223) 234 765
                  </li>
               </ul>
            </Box>

            <Box>
               <object
                  data={result}
                  title="submit"
                  type="application/pdf"
                  width="850px"
                  height="412px"
               />
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default Results

const StyledContainer = styled(Box)(({ theme }) => ({
   background: `url(${ResultsBackgroundImage})`,
   backgroundSize: 'cover',
   backgroundPositionY: 'center',
   backgroundRepeat: 'no-repeat',
   width: '100%',
   height: '100vh',
   display: 'flex',

   '& .file': {
      width: '65.5vw',
      background: 'rgba(254, 251, 251, 0.50)',
      backdropFilter: 'blur(156px)',
      color: '#346EFB',
      opacity: 0.8,
   },

   '& ul': {
      paddingLeft: '3.2rem',
      paddingBottom: '1rem',
      fontFamily: 'Manrope',
      color: '#346EFB',

      '& > li': {
         paddingTop: '0.5rem',
         paddingRight: '0.5rem',
         fontSize: '14px',
         fontWeight: '400',
      },

      '& .red-text': {
         color: '#F91515',
      },
   },

   '& .MuiTypography-root': {
      fontSize: '1.375rem',
      fontWeight: 600,
      letterPacing: '0.044rem',
      color: theme.palette.primary.lightBlack,

      '& .MuiTypography-root': {
         color: theme.palette.primary.darkGreen,
      },
   },

   '& .form-container': {
      display: 'flex',
      flexWrap: 'nowrap',
      gap: '10px',
   },

   '& hr': {
      width: '15px',
      border: 'none',
      backgroundColor: '#3977C0',
   },
}))

const StyledFormContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: '0rem 2rem 0 0 ',
   paddingLeft: '1rem',
   paddingTop: '1rem',

   '& .MuiTypography-h4': {
      color: '#3977C0',
      fontSize: '15px',
   },

   '& .MuiTypography-span': {
      color: '#3977C0',
      fontSize: '15px',
   },
}))

const StyledForm = styled(Box)(() => ({
   height: '14rem',
   margin: '1.7rem 1.9rem',
   display: 'flex',
   flexDirection: 'column',
   background: '#ffffff',
   gap: '0.9rem',
   alignItems: 'center',
   padding: '0.8rem',
   borderRadius: '10px',
   zIndex: 10,

   '& > .logo': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 0',
   },
}))

const StyledInput = styled(Input)(() => ({
   '& .MuiOutlinedInput-input': {
      height: '0.5rem',
      borderRadius: '0.5rem',
   },

   '& .MuiOutlinedInput-root ': {
      width: '300px !important',
      height: '2.625rem',
      borderRadius: '0.5rem',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButtonBase-root': {
      width: '100',
      height: '2.75rem',
      fontSize: '0.875rem',

      '&:active': {
         borderRadius: '0.625rem',
      },
   },
}))

const StyledCloseButton = styled('button')(() => ({
   display: 'flex',
   alignItems: 'center',
   border: 'none',
   color: 'white',
   borderRadius: '0.625rem',
   padding: '0 15px 0 5px',
   background: 'red',
   fontSize: '0.75rem',
   fontWeight: '600',

   '& svg': {
      width: '25px',

      '& #close': {
         '& #Vector': {
            fill: '#fff',
         },
      },
   },
}))
