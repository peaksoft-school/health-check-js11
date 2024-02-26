import { Link } from 'react-router-dom'

const LinkPatient = ({ row }) => {
   return <Link to={row.original.id.toString()}>{row.original.surname}</Link>
}

export default LinkPatient
