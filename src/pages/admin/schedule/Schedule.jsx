import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SCHEDULE_THUNK } from '../../../store/slices/schedule/scheduleThunk'
import TableSchedule from '../../../components/UI/ScheduleTable'
import { SCHEDULE_COLUMN } from '../../../utils/constants/columns'

const SchedulePage = () => {
   const { schedules } = useSelector((state) => state.schedule)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(SCHEDULE_THUNK.getAllSchedules({}))
   }, [dispatch])

   console.log(SCHEDULE_COLUMN)

   return (
      <div>
         <h1>Schedule Page</h1>
         <TableSchedule columns={SCHEDULE_COLUMN} rows={schedules} />
      </div>
   )
}

export default SchedulePage
