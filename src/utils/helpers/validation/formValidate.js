import * as Yup from 'yup'

const emailRegex = /^[^\s@]+@(?:gmail\.com|icloud\.com)$/

const validationSchemaSingUp = Yup.object().shape({
   name: Yup.string().required('Поле name обязятельное!'),
   sureName: Yup.string().required('Поле name обязятельное!'),
   email: Yup.string()
      .email()
      .matches(
         emailRegex,
         'Адрес электронной почты должен быть в формате ...@gmail.com'
      )
      .required('Поле email обязятельное!'),

   phoneNumber: Yup.string()
      .matches(
         /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
         'Неверный формат номера телефона'
      )
      .required('Поле phoneNumber обязательное!'),
   password: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .matches(
         /^(?=.*[A-Z]).*$/,
         'Пароль должен содержать хотя бы одну заглавную букву'
      ),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Пароли не совпада')
      .required('Подтвердите пароль'),
})

const validationSchemaSingIn = Yup.object().shape({
   name: Yup.string().required('Поле name обязятельное!'),
   password: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .matches(
         /^(?=.*[A-Z]).*$/,
         'Пароль должен содержать хотя бы одну заглавную букву'
      ),
})

const validateEmail = (email) => {
   if (!emailRegex.test(email)) {
      return 'Неверный адрес электронной почты'
   }
   return ''
}

const validationSchemForgotPassword = Yup.object().shape({
   newPassword: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .matches(
         /^(?=.*[A-Z]).*$/,
         'Пароль должен содержать хотя бы одну заглавную букву'
      ),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпада')
      .required('Подтвердите пароль'),
})

export {
   validationSchemaSingIn,
   validateEmail,
   validationSchemForgotPassword,
   validationSchemaSingUp,
}
