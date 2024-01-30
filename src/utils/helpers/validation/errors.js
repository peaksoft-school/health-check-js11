const showErrors = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Пожалуйста заполните все поля!'
   } else if (errors?.name) {
      errorMessage = errors?.name
   } else if (errors?.age) {
      errorMessage = errors?.age
   } else if (errors?.email) {
      errorMessage = errors?.email
   } else if (errors?.password) {
      errorMessage = errors?.password
   }

   return errorMessage
}

const passwordErrorrs = (errors) => {
   let errorMessage = null

   if (errors.newPassword) {
      errorMessage = errors.newPassword
   } else if (errors.confirmPassword) {
      errorMessage = errors.confirmPassword
   }

   return errorMessage
}

const showErrorsSingUp = (errors) => {
   let errorMessage = null

   console.log(errors)

   if (errors?.name) {
      errorMessage = errors.name
   } else if (errors?.sureName) {
      errorMessage = errors.sureName
   } else if (errors?.email) {
      errorMessage = errors.email
   } else if (errors?.phoneNumber) {
      errorMessage = errors.phoneNumber
   } else if (errors.password) {
      errorMessage = errors.password
   } else if (errors.confirmPassword) {
      errorMessage = errors.confirmPassword
   }

   return errorMessage
}

export { showErrors, showErrorsSingUp, passwordErrorrs }
