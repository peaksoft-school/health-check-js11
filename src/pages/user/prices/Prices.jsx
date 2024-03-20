import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { prices } from '../../../utils/constants/prices'
import CustomizedAccordions from '../../../components/UI/CustomizedAccordions'

const Contacts = () => (
   <>
      <StyledLine> </StyledLine>

      <StyledContainer>
         <StyledSpecialistRow>
            <Typography variant="span">
               <NavLinkStyle to="/">Главная {' > '}</NavLinkStyle>

               <span>Прайс</span>
            </Typography>
         </StyledSpecialistRow>

         <Typography className="title" variant="h3">
            Наш<span> </span>
            <Typography className="mark-title" variant="span">
               прайс
            </Typography>
         </Typography>

         <Typography className="text">
            Цены на услуги формируются в соответствии с действующими
            Прейскурантами. <br />
            Общая стоимость зависит от объема услуг, оказываемых в рамках
            приёма. <br />
            Объём оказываемых услуг определяется врачом, исходя из показаний для{' '}
            <br />
            обследования и пожеланий клиента.
         </Typography>

         <AccordionContainer>
            <StyledAccordions>
               {prices.map((el) => (
                  <CustomizedAccordions key={el.id} title={el.title}>
                     <StyledPrice>
                        <Box className="prices-data">
                           <Typography variant="h2">{el.data}</Typography>{' '}
                           <Typography variant="h2">{el.price} com</Typography>
                        </Box>

                        <Typography className="description">
                           {el.description}
                        </Typography>
                        {el.prices.map((item) => (
                           <Box className="prices">
                              <Typography className="data-text">
                                 {item.data}
                              </Typography>
                              <Typography variant="h2" className="price">
                                 {item.price} com
                              </Typography>
                           </Box>
                        ))}
                     </StyledPrice>
                  </CustomizedAccordions>
               ))}
            </StyledAccordions>
         </AccordionContainer>
      </StyledContainer>
   </>
)

export default Contacts

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .title': {
      marginLeft: '6.25rem',
      fontSize: '36px',
      fontWeight: '500',

      '& > .mark-title': {
         color: theme.palette.primary.darkGreen,
      },
   },

   '& .image-box': {
      padding: '3.125rem 0 0 11.25rem',
      display: 'flex',
      justifyContent: 'center',
   },

   '& .text': {
      fontSize: '18px',
      padding: '3.125rem 0 2rem 6.5rem',
      color: '#4D4E51',
      fontFamily: 'Manrope',
   },

   '& > .map': {
      border: 'none',
      marginTop: '6rem',
   },
}))

const StyledSpecialistRow = styled(Typography)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   padding: '3.125rem 0 2rem 6.5rem',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(({ theme }) => ({
   textDecoration: 'none',
   color: theme.palette.secondary.lightGrey,
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))

const StyledAccordions = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',

   '& .MuiTypography-root ': {
      fontFamily: 'Manrope',
      fontSize: '20px',
   },

   '& .description': {
      fontSize: '18px',
      marginTop: '1rem',
      marginBottom: '1rem',
   },

   '& .data-text': {
      fontSize: '18px',
      fontWeight: '500',
   },

   '& .price': {
      fontWeight: '500',
      fontSize: '20px',
   },

   '& .prices-data': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
   },

   '& .prices': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 0px',
      borderTop: '1px solid #e0e2e7',
   },
}))

const StyledPrice = styled(Box)(() => ({
   textAlign: 'left',
}))

const AccordionContainer = styled(Box)(() => ({
   width: '60%',
   marginLeft: '98px',
   marginBottom: '100px',
}))
