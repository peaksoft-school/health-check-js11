import { Grid, Typography, styled } from '@mui/material'
import { INFO_DOCTORS } from '../../utils/constants/index'
import Button from '../UI/Button'

const BestDoctors = () => (
   <StyledBlock>
      <StyledMainText>
         Лучшие
         <Typography className="title" variant="span">
            врачи{' '}
         </Typography>
      </StyledMainText>

      <StyledSmallText variant="p">
         Попасть в команду медицинской клиники «MedCheck» могут <br />
         только лучшие специалисты с многолетней практикой и доказанным опытом.
      </StyledSmallText>

      <StyledContainer container spacing={2}>
         {INFO_DOCTORS.map(({ id, name, doctor, image }) => (
            <Grid item xs={6} sm={3} md={2} key={id}>
               <StyledImgWrapper>
                  <StyledImg objectFit="contain" src={image} alt="doctor" />
               </StyledImgWrapper>

               <StyledName>{name}</StyledName>

               <StyledDoctor>{doctor}</StyledDoctor>
            </Grid>
         ))}
      </StyledContainer>
      <StyledButton variant="secondary">Все врачи клиники</StyledButton>
   </StyledBlock>
)

export default BestDoctors

const StyledBlock = styled('div')(() => ({
   width: '90%',
   margin: 'auto',
   padding: '2em',
   boxSizing: 'border-box',
   maxWidth: '1440px',
}))

const StyledMainText = styled(Typography)(({ theme }) => ({
   fontSize: '2.25rem',
   fontWeight: '600',
   lineHeight: 'normal',
   marginBottom: '1.7em',

   '& .title': {
      marginLeft: '10px',
   },

   '.MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },

   [theme.breakpoints.down('lg')]: {
      fontSize: '1.85rem',
      marginBottom: '1em',
   },
}))

const StyledContainer = styled(Grid)(({ theme }) => ({
   paddingTop: '4.6875em',
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
   cursor: 'pointer',

   '& .doctorCard': {
      flexBasis: '48%',
      marginBottom: '2em',
   },

   [theme.breakpoints.down('lg')]: {
      paddingTop: '3rem',
   },
}))

const StyledImgWrapper = styled('div')(() => ({
   width: '100%',
   height: '15.1rem',
   display: 'flex',
   justifyContent: 'center',
}))

const StyledImg = styled('img')(({ theme }) => ({
   borderRadius: '50%',
   backgroundColor: theme.palette.secondary.linearGradient,
   width: '12.5rem',
   height: '15rem',
   display: 'block',
   imageRendering: 'pixelated',

   [theme.breakpoints.down('lg')]: {
      width: '9rem',
      height: '11rem',
   },
}))

const StyledName = styled(Grid)(({ theme }) => ({
   paddingTop: '10px',
   textAlign: 'center',
   fontSize: '1em',
   fontWeight: '500',
   lineHeight: '1.25em',

   [theme.breakpoints.down('lg')]: {
      marginTop: '-4rem',
      fontSize: '0.8rem',
   },
}))

const StyledDoctor = styled(Grid)(({ theme }) => ({
   color: theme.palette.secondary.lightGrey,
   textAlign: 'center',
   fontSize: '0.875em',
   fontWeight: '500',
   lineHeight: '1.25em',
   paddingTop: '2px',

   [theme.breakpoints.down('lg')]: {
      fontSize: '0.7rem',
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   marginTop: '3em',
   marginLeft: 'auto',
   marginRight: 'auto',
   display: 'block',
   [theme.breakpoints.down('lg')]: {
      marginTop: '0.3rem',
   },
}))

const StyledSmallText = styled(Typography)(({ theme }) => ({
   fontSize: '1.125em',
   alignContent: 'center',

   [theme.breakpoints.down('lg')]: {
      fontSize: '1em',
   },
}))
