import { useSelector } from 'react-redux'

const TableSchedule = () => {
   const { schedules } = useSelector((state) => state.schedule)
   console.log(schedules)

   return (
      <table>
         <thead>
            <tr>
               <th>Image</th>
               <th>Surname</th>
               <th>Position</th>
            </tr>
         </thead>
         <tbody>
            {schedules.map((item) => (
               <tr>
                  <td>{item.image}</td>
                  <td>{item.surname}</td>
                  <td>{item.position}</td>
               </tr>
            ))}
         </tbody>
      </table>
   )
}

export default TableSchedule
