import { useState } from 'react'
import { styled, Box, Typography } from '@mui/material'
import { ResultsBackgroundImage } from '../../../assets/images'
import Input from '../../../components/UI/inputs/Input'
import Button from '../../../components/UI/Button'
import { HealthCheckIcon } from '../../../assets/icons'

const Records = () => {
   const [showButton, setShowButton] = useState(false)
   const [resultNumber, setResultNumber] = useState('')

   return (
      <StyledContainer>
         <StyledForm>
            <Box className="FormLogo">
               <HealthCheckIcon />

               <Typography variant="h1">
                  <Typography variant="p">HEALTH</Typography> CHECK
               </Typography>
            </Box>

            <Box className="form-container">
               <StyledInput placeholder="Введите номер заказа..." />
               <StyledButton>Найти</StyledButton>
            </Box>
         </StyledForm>

         <hr />

         <Box>
            <div className="file">
               <HeaderContainer>
                  <div>
                     <h4>Выдача результатов</h4>
                     <span>Вы можете:</span>
                  </div>
                  <div className="buttonsBox">
                     {showButton && (
                        <Button
                           className="closeBtn"
                           //  onClick={handleClose}
                        >
                           {/* <RemoveIcon /> */}
                           Закрыть результаты
                        </Button>
                     )}
                     {showButton && (
                        <Button
                        // onClick={handleSavePDF}
                        >
                           {/* <SortDescIcon /> */}
                           PDF
                        </Button>
                     )}
                     {showButton && (
                        <Button
                        // onClick={handlePrint}
                        >
                           {/* <PrinterIcon /> */}
                           Распечатать
                        </Button>
                     )}
                  </div>
               </HeaderContainer>
               <ul
               // ref={pdfRef}
               >
                  <li>
                     Просмотреть свои результаты анализов онлайн Вы можете,
                     введя в поле слева индивидуальный <br /> цифровой код,
                     который указан в верхней части Вашей квитанции под
                     штрих-кодом;
                  </li>

                  <li>
                     Распечатать результат можно непосредсвенно с этой страницы
                     или сохранить в PDF формате <br /> с помощью кнопок,
                     расположенной в верхней части сайта;
                  </li>
                  <li className="liRed">
                     При возникновении проблем с отображением результатов, Вы
                     можете оставить заявку <br /> на получение результатов по
                     электронной почте, позвонив в Службу поддержки клиентов
                     <br /> по номеру 909 090
                  </li>
               </ul>

               <div className="resultpaper">
                  {showButton && (
                     <object
                        // data={result.pdgFileCheque}
                        title="submit"
                        type="application/pdf"
                        width="900px"
                        height="590px"
                     >
                        <p>Ваш браузер не поддерживает просмотр PDF.</p>
                     </object>
                  )}
               </div>
            </div>
         </Box>
      </StyledContainer>
   )
}

export default Records

const StyledContainer = styled(Box)(({ theme }) => ({
   background: `url(${ResultsBackgroundImage})`,
   backgroundSize: 'cover',
   backgroundPositionY: 'center',
   backgroundRepeat: 'no-repeat',
   width: '100%',
   height: '100vh',
   display: 'flex',

   '.file': {
      width: '66vw',
      height: '33vh',
      background: 'rgba(254, 251, 251, 0.50)',
      backdropFilter: 'blur(156px)',
      opacity: 0.8,
      color: '#346EFB',
   },

   ul: {
      paddingLeft: '3.2rem',
      fontFamily: 'Manrope',
      fontSize: '0.8rem',
      color: '#346EFB',

      li: {
         paddingTop: '0.5rem',
         paddingRight: '0.5rem',
         fontSize: '15px',
         fontWeight: '400',
      },

      '.liRed': {
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

const HeaderContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   margin: '1rem 2rem',

   '.buttonsBox': {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',

      button: {
         background: ' #3977C0',
         gap: '1rem',
         '&.closeBtn': {
            background: 'red',
         },
      },
   },

   '.file': {
      width: '100%',
      height: '33vh',
      background: 'rgba(254, 251, 251, 0.50)',
      backdropFilter: 'blur(156px)',
      opacity: 0.8,
   },
   ul: {
      paddingLeft: '3.2rem',
      fontFamily: 'Manrope',
      fontSize: '0.8rem',
      li: {
         paddingTop: '0.5rem',
         paddingRight: '0.5rem',
         fontSize: '15px',
         fontWeight: '400',
      },
      '.liRed': {
         color: 'red',
      },
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

   '.FormLogo': {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 0',
   },

   '.FormInput': {
      div: {
         display: 'flex',
         gap: '0.5rem',
      },
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
