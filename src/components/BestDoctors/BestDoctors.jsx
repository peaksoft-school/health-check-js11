import { Grid, Typography, styled } from '@mui/material'
import { INFO_DOCTORS } from '../../utils/constants/index'
import Button from '../UI/Button'

const BestDoctors = () => {
   return (
      <StyledBlock>
         <StyledMainText>
            Лучшие <Typography variant="p">врачи </Typography>
         </StyledMainText>
         <StyledSmallText variant="p">
            Попасть в команду медицинской клиники «MedCheck» могут <br />
            только лучшие специалисты с многолетней практикой и доказанным
            опытом.
         </StyledSmallText>
         <StyledContainer container spacing={2}>
            {INFO_DOCTORS.map(({ id, name, doctor, image }) => (
               <Grid item xs={6} sm={3} md={2} key={id} className="doctorCard">
                  <div className="imgWrapper">
                     <img className="img" src={image} alt="hdhal" />
                  </div>
                  <Grid className="name" variant="h5">
                     {name}
                  </Grid>
                  <Grid className="doctor" variant="h6">
                     {doctor}
                  </Grid>
               </Grid>
            ))}
         </StyledContainer>
         <StyledButton variant="shortBtn">Все врачи клиники</StyledButton>
      </StyledBlock>
   )
}

export default BestDoctors

const StyledBlock = styled('div')(() => ({
   width: '90%',
   margin: 'auto',
   padding: '2em',
   boxSizing: 'border-box',
}))

const StyledMainText = styled(Typography)(({ theme }) => ({
   fontSize: '2.25rem',
   fontWeight: '600',
   lineHeight: 'normal',
   '.MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },
   marginBottom: '1.7em',
}))

const StyledContainer = styled(Grid)(({ theme }) => ({
   paddingTop: '4.6875em',
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
   width: '100%',

   '& .doctorCard': {
      flexBasis: '48%',
      marginBottom: '2em',
   },
   '& .imgWrapper': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
   },
   '& .img': {
      width: '203px',
      height: '203px',
      borderRadius: '50%',
      backgroundColor: '#E4E7EE',
      display: 'block',
      imageRendering: 'crisp-edges',
   },
   '& .name': {
      textAlign: 'center',
      fontSize: '1em',
      fontWeight: '500',
      lineHeight: '1.25em',
   },
   '& .doctor': {
      color: theme.palette.secondary.lightGrey,
      textAlign: 'center',
      fontSize: '0.875em',
      fontWeight: '500',
      lineHeight: '1.25em',
   },
}))

const StyledButton = styled(Button)(() => ({
   marginTop: '4.875em',
   width: 'fit-content',
   marginLeft: '35%',
   marginRight: 'auto',
}))

const StyledSmallText = styled(Typography)(() => ({
   fontSize: '1.125em',
}))
