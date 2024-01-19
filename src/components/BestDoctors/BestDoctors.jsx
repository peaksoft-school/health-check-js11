import { Grid, Typography, styled } from '@mui/material'
import { INFO_DOCTORS } from '../../utils/constants/index'
import Button from '../UI/Button'

const BestDoctors = () => (
   <StyledBlock>
      <StyledMainText>
         Лучшие
         <Typography variant="p">врачи </Typography>
      </StyledMainText>

      <StyledSmallText variant="p">
         Попасть в команду медицинской клиники «MedCheck» могут <br />
         только лучшие специалисты с многолетней практикой и доказанным опытом.
      </StyledSmallText>

      <StyledContainer container spacing={2}>
         {INFO_DOCTORS.map(({ id, name, doctor, image }) => (
            <Grid item xs={6} sm={3} md={2} key={id}>
               <StyledImgWrapper>
                  <StyledImg src={image} alt="doctor" />
               </StyledImgWrapper>

               <StyledName>{name}</StyledName>

               <StyledDoctor>{doctor}</StyledDoctor>
            </Grid>
         ))}
      </StyledContainer>

      <StyledButton variant="shortBtn">Все врачи клиники</StyledButton>
   </StyledBlock>
)

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

const StyledContainer = styled(Grid)(() => ({
   paddingTop: '4.6875em',
   display: 'flex',
   justifyContent: 'space-between',
   flexWrap: 'wrap',
   width: '100%',
   cursor: 'pointer',

   '& .doctorCard': {
      flexBasis: '48%',
      marginBottom: '2em',
   },
}))

const StyledImgWrapper = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
}))

const StyledImg = styled('img')(({ theme }) => ({
   width: '203px',
   height: '203px',
   borderRadius: '50%',
   backgroundColor: theme.palette.secondary.linearGradient,
   display: 'block',
   imageRendering: 'pixelated',
}))

const StyledName = styled(Grid)(() => ({
   textAlign: 'center',
   fontSize: '1em',
   fontWeight: '500',
   lineHeight: '1.25em',
}))

const StyledDoctor = styled(Grid)(({ theme }) => ({
   color: theme.palette.secondary.lightGrey,
   textAlign: 'center',
   fontSize: '0.875em',
   fontWeight: '500',
   lineHeight: '1.25em',
}))

const StyledButton = styled(Button)(() => ({
   marginTop: '4.875em',
   width: 'fit-content',
   marginLeft: '42%',
   marginRight: 'auto',
}))

const StyledSmallText = styled(Typography)(() => ({
   fontSize: '1.125em',
}))
