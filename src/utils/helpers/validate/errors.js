export const showErrors = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Пожалуйста заполните все поля!'
   } else if (errors?.name) {
      errorMessage = errors?.name
   } else if (errors?.password) {
      errorMessage = errors?.password
   }

   return errorMessage
}
