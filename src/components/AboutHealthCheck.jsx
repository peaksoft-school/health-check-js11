import { Typography, styled } from '@mui/material'

const AboutHealthCheck = () => {
   return (
      <div>
         <StyledTitle variant="h2">
            О нашей клинике <Typography variant="p"> “HealthCheck”</Typography>
         </StyledTitle>
      </div>
   )
}

export default AboutHealthCheck
const StyledTitle = styled(Typography)(() => ({}))
