import { Typography } from '@mui/material'
import HealthCheckIcon from '../../assets/icons'
import HEADER_NAV from '../../utils/constants/index'
import Select from '../UI/select/Select'

const HeaderAdmin = () => {
   return (
      <header>
         <HealthCheckIcon />

         <Typography>
            <Typography>HEALTH</Typography>CHECK
         </Typography>
         <div>
            {HEADER_NAV.map(({ text, id }) => (
               <div key={id}>
                  <p>{text}</p>
               </div>
            ))}
         </div>
         <Select />
      </header>
   )
}

export default HeaderAdmin
