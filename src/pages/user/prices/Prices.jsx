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
                        <div className="prices-data">
                           <h2>{el.data}</h2> <h2>{el.price}com</h2>
                        </div>

                        <p className="description">{el.description}</p>
                        {el.prices.map((item) => (
                           <div className="prices">
                              <h3>{item.data}</h3>
                              <h2>{item.price}com</h2>
                           </div>
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

   '& h3': {
      fontSize: '18px',
      fontWeight: '575',
   },

   '& h2': {
      fontWeight: '500',
      fontSize: '20px',
   },

   '& .prices-data': {
      display: 'flex',
      justifyContent: 'space-between',
   },

   '& .prices': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 0px',
      borderTop: '1px solid #e0e2e7',
   },
}))

const StyledPrice = styled('div')`
   text-align: left;
`

const AccordionContainer = styled('div')(() => ({
   width: '60%',
   marginLeft: '98px',
   marginBottom: '100px',
}))
