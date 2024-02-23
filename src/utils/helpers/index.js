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

const signUpError = (errors) => {
   let errorMessage = null

   if (errors?.name) {
      errorMessage = errors.name
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

const appointmentsError = (errors) => {
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

export { signInError, signUpError, passwordError, appointmentsError }
