import { useSearchParams } from 'react-router-dom'
import { Typography } from '@mui/material'

const signInError = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Пожалуйста заполните все поля!'
   } else if (errors?.email) {
      errorMessage = errors?.email
   } else if (errors?.password) {
      errorMessage = errors?.password
   }

   return errorMessage
}

const passwordError = (errors) => {
   let errorMessage = null

   if (errors.newPassword) {
      errorMessage = errors.newPassword
   } else if (errors.confirmPassword) {
      errorMessage = errors.confirmPassword
   }

   return errorMessage
}
const resetPasswordError = (errors) => {
   let errorMessage = null

   if (errors.oldPassword) {
      errorMessage = errors.oldPassword
   } else if (errors.confirmPassword) {
      errorMessage = errors.confirmPassword
   } else if (errors.newPassword) {
      errorMessage = errors.newPassword
   }

   return errorMessage
}

const signUpError = (errors) => {
   let errorMessage = null

   if (errors?.firstName) {
      errorMessage = errors.firstName
   } else if (errors?.lastName) {
      errorMessage = errors.lastName
   } else if (errors?.email) {
      errorMessage = errors.email
   } else if (errors?.number) {
      errorMessage = errors.number
   } else if (errors.password) {
      errorMessage = errors.password
   } else if (errors.confirmPassword) {
      errorMessage = errors.confirmPassword
   }

   return errorMessage
}

const scheduleError = (errors) => {
   let errorMessage = null

   if (errors?.departmentName) {
      errorMessage = errors.departmentName
   } else if (errors?.doctor) {
      errorMessage = errors.doctor
   } else if (errors?.createStartDate) {
      errorMessage = errors.createStartDate
   } else if (errors?.createEndDate) {
      errorMessage = errors.createEndDate
   } else if (errors.startTime) {
      errorMessage = errors.startTime
   } else if (errors.interval) {
      errorMessage = errors.interval
   } else if (errors.dayOfWeek) {
      errorMessage = errors.dayOfWeek
   } else if (errors.startBreak) {
      errorMessage = errors.startBreak
   } else if (errors.endBreak) {
      errorMessage = errors.endBreak
   }

   return errorMessage
}

const showResultError = (errors) => {
   let errorMessage = null

   if (errors?.service) {
      errorMessage = errors.service
   } else if (errors?.date) {
      errorMessage = errors.date
   } else if (errors?.file) {
      errorMessage = errors.file
   }

   return errorMessage
}
const showAppointmentFormError = (errors) => {
   let errorMessage = null

   if (errors?.fullName) {
      errorMessage = errors.fullName
   } else if (errors?.phoneNumber) {
      errorMessage = errors.phoneNumber
   } else if (errors?.email) {
      errorMessage = errors.email
   }

   return errorMessage
}

const formatPhoneNumberWithSpaces = (phoneNumber = '') => {
   const countryCode = phoneNumber.slice(0, 4)
   const firstPart = phoneNumber.slice(4, 7)
   const secondPart = phoneNumber.slice(7, 10)
   const thirdPart = phoneNumber.slice(10)

   return [countryCode, firstPart, secondPart, thirdPart].join(' ')
}

const getRussianMonthName = (monthNumber) => {
   const russianMonthNames = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
   ]

   return russianMonthNames[monthNumber]
}

const generateDateRange = (startDate, endDate, daysOfWeek) => {
   if (!startDate || !endDate) {
      return []
   }

   const start = new Date(startDate)
   const end = new Date(endDate)
   const dateRange = []

   while (start <= end) {
      const dayOfWeek = daysOfWeek[start.getDay()]

      const date = String(start.getDate()).padStart(2, '0')
      const monthNumber = String(start.getMonth() + 1).padStart(2, '0')
      const monthText = getRussianMonthName(start.getMonth())
      const year = start.getFullYear()

      dateRange.push({ dayOfWeek, date, monthNumber, monthText, year })
      start.setDate(start.getDate() + 1)
   }

   return dateRange
}

const generateFreeTimes = (startTimeOfConsultation) => {
   if (!startTimeOfConsultation || startTimeOfConsultation.length === 0) {
      return []
   }

   const timeRanges = startTimeOfConsultation.map((timeRange) => {
      const [startTime, endTime] = timeRange.split(' - ')
      const trimmedStartTime = startTime.slice(0, -3)
      const trimmedEndTime = endTime
         .replace(/-f$/, '')
         .replace(/-t$/, '')
         .slice(0, -3)
      const isFreeTime = endTime.endsWith('-f')
      return { time: `${trimmedStartTime} - ${trimmedEndTime}`, isFreeTime }
   })

   return timeRanges.map(({ time, isFreeTime }) => (
      <Typography
         key={time}
         className={isFreeTime ? 'free-time' : 'not-free-time'}
      >
         {time}
      </Typography>
   ))
}

const handleKeyPress = (e) => {
   const input = e.target
   const currentValue = input.value
   const { key } = e
   const pattern = /[0-9]/

   if (!pattern.test(key)) {
      e.preventDefault()
      return
   }

   if (currentValue.length >= 2 && !input.selectionStart) {
      e.preventDefault()
      return
   }

   if (currentValue.length === 1 && input.selectionStart === 1) {
      e.preventDefault()
   }
}

const containsTheHTTPS = (url) => {
   const regex = /https/
   return regex.test(url)
}

const useToggleModal = (query) => {
   const [searchParams, setSearchParams] = useSearchParams()
   const isModalOpen = Boolean(searchParams.get(query))
   const openModalHandler = () => {
      searchParams.set(query, 'open')
      setSearchParams(searchParams, {
         replace: true,
      })
   }
   const closeModalHandler = () => {
      searchParams.delete(query)
      setSearchParams(searchParams)
   }
   return {
      onOpenModal: openModalHandler,
      isOpen: isModalOpen,
      onCloseModal: closeModalHandler,
   }
}

const formatDates = (dateString) => {
   const options = { weekday: 'long', day: 'numeric', month: 'long' }
   const date = new Date(dateString)
   const formattedDate = date.toLocaleDateString('ru-RU', options)
   const capitalizedWeekday =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
   return capitalizedWeekday
}

const containsOnlyText = (text) => {
   const textOnly = text.replace(/<[^>]+>/g, '')

   return /\S/.test(textOnly.trim())
}

const isEqualObjects = (firstObject, secondObject) => {
   const firstKeys = Object.keys(firstObject)
   const secondKeys = Object.keys(secondObject)

   if (firstKeys.length !== secondKeys.length) return false

   for (const key of firstKeys) {
      if (firstObject[key] !== secondObject[key]) return false
   }

   return true
}

export {
   isEqualObjects,
   containsOnlyText,
   containsTheHTTPS,
   getRussianMonthName,
   signInError,
   generateDateRange,
   signUpError,
   generateFreeTimes,
   passwordError,
   scheduleError,
   showResultError,
   formatPhoneNumberWithSpaces,
   handleKeyPress,
   showAppointmentFormError,
   resetPasswordError,
   useToggleModal,
   formatDates,
}
