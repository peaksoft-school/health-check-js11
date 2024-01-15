import React from 'react'
import { Grid, Typography, styled } from '@mui/material'
import { infoDoctors } from '../../utils/constants/index'
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
            {infoDoctors.map(({ id, name, doctor, image }) => (
               <Grid item xs={6} sm={3} md={2} key={id}>
                  {/* <DoctorCard> */}
                  <StyledImg src={image} alt="hdhal" />
                  <StyledName variant="h5">{name}</StyledName>
                  <StyledDoctor variant="h6">{doctor}</StyledDoctor>
                  {/* </DoctorCard> */}
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
   fontFamily: 'Manrope',
   fontSize: '2.25rem',
   fontWeight: '600',
   lineHeight: 'normal',
   '.MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },
   marginBottom: '1.7em',
}))

const StyledImg = styled('img')(() => ({
   width: '12.6875em',
   height: '12.6875em',
   marginBottom: '1.5em',
   borderRadius: '50%',
   backgroundColor: '#E4E7EE',
}))

const StyledDoctor = styled(Typography)(({ theme }) => ({
   color: theme.palette.secondary.lightGrey,
   textAlign: 'center',
   fontFamily: 'Manrope',
   fontSize: '0.875em',
   fontWeight: '500',
   lineHeight: '1.25em',
}))

const StyledName = styled(Typography)(() => ({
   textAlign: 'center',
   fontFamily: 'Manrope',
   fontSize: '1em',
   fontWeight: '500',
   lineHeight: '1.25em',
}))

const StyledContainer = styled(Grid)(() => ({
   paddingTop: '4.6875em',
}))

const StyledButton = styled(Button)(() => ({
   marginTop: '4.875em',
   width: 'fit-content',
   marginLeft: '35%',
   marginRight: 'auto',
}))

const StyledSmallText = styled(Typography)(() => ({
   fontFamily: 'Manrope',
   fontSize: '1.125em',
}))
