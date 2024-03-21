import { Box, Typography, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Button from '../../../components/UI/Button'

const DataDoctors = ({ doctor }) => {
   return (
      <StyledDataContainer>
         <NavLink style={{ textDecoration: 'none' }} to="/doctors/doctor">
            <Typography variant="h4" className="department">
               {doctor.department}
            </Typography>
         </NavLink>

         <Box className="global-container">
            {doctor.doctors.map((doctor) => (
               <Box className="map-container">
                  <Box className="image-container">
                     <img
                        src={doctor.image}
                        alt="img"
                        className="surgeon-image"
                     />
                  </Box>
                  <Box className="main-container">
                     <Box className="name-container">
                        <Typography variant="span" className="name">
                           {doctor.fullName}
                        </Typography>
                        <Typography className="position-doctor">
                           {doctor.position}
                        </Typography>
                        <NavLink to={`/doctors/${doctor.id}`}>
                           <Button variant="secondary" className="btn">
                              <span className="btn-text">
                                 Записаться на приём
                              </span>
                           </Button>
                        </NavLink>
                     </Box>
                  </Box>
               </Box>
            ))}
         </Box>
      </StyledDataContainer>
   )
}

export default DataDoctors

const StyledDataContainer = styled(Box)(() => ({
   '& .global-container': {
      width: '1017px',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '3.125rem 0 0 6.50rem',
      gap: '2rem',

      '& > .map-container': {
         '& .text-container': {
            '& .label': {
               fontFamily: 'Manrope',
               fontSize: '24px',
               fontWeight: '600',
            },
         },
      },

      '& > .image-container': {
         display: 'flex',
         justifyContent: 'space-between',

         '& .surgeon-image': {
            backgroundColor: '#E4E7EE',
            borderRadius: '4px',
         },
      },

      '& .main-container': {
         display: 'flex',
         justifyContent: 'flex-start',
         gap: '1.50rem',

         '& .name-container': {
            padding: '1rem 0 0 0.10rem',

            '& .name': {
               fontSize: '18px',
               fontFamily: 'Manrope',
               fontWeight: '500',
            },

            '& .position-doctor': {
               fontSize: '15px',
               color: '#969393',
            },

            '& .btn': {
               marginTop: '1rem',
               borderRadius: '0.5rem',
               width: '204px',
               height: '42px',

               '& .btn-text': {
                  fontSize: '12px',
               },
            },
         },
      },
   },

   '& .department': {
      padding: '3.125rem 0 0 6.50rem',
      color: '#4D4E51',
      fontSize: '24px',
   },
}))
