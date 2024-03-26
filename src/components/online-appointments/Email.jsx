import { Tooltip } from '@mui/material'

const Email = ({ row }) => {
   const { email, processed } = row.original
   const maxLength = 22

   if (email.length > maxLength) {
      const shortenedEmail = `${email.substring(0, maxLength)}...`
      return (
         <Tooltip title={email} enterDelay={1250} leaveDelay={100}>
            {shortenedEmail}
         </Tooltip>
      )
   }

   return (
      <Tooltip
         title={email}
         enterDelay={1500}
         leaveDelay={100}
         style={{
            color: processed ? 'black' : '#707070',
         }}
      >
         {email}
      </Tooltip>
   )
}

export default Email
