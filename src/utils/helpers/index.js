const signInError = (errors) => {
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

export { signInError, signUpError, passwordError }
