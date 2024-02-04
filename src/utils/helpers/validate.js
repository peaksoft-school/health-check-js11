import * as Yup from 'yup'

const emailRegex = /^[^\s@]+@(?:gmail\.com|icloud\.com)$/
const phoneNumberRegex =
   /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

const passwordRegex = /^(?=.*[A-Z]).*$/

const VALIDATION_SIGN_UP = Yup.object().shape({
   name: Yup.string().required('Поле name обязятельное!'),
   surename: Yup.string().required('Поле surename обязятельное!'),
   email: Yup.string()
      .email()
      .matches(
         emailRegex,
         'Адрес электронной почты должен быть в формате ...@gmail.com'
      )
      .required('Поле email обязятельное!'),

   phoneNumber: Yup.string()
      .matches(phoneNumberRegex, 'Неверный формат номера телефона')
      .required('Поле номера телефона обязательное!'),
   password: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .matches(passwordRegex, 'Пароль требует заглавную букву.'),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Пароли не совпада')
      .required('Подтвердите пароль'),
})

const VALIDATION_SIGN_IN = Yup.object().shape({
   name: Yup.string().required('Поле name обязятельное!'),
   password: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .matches(passwordRegex, 'Пароль требует заглавную букву.'),
})

const VALIDATION_FORGOT_PASSWORD = Yup.object().shape({
   newPassword: Yup.string()
      .required('Введите новый пароль')
      .min(8, 'Минимальная длина пароля 8 символов')
      .matches(passwordRegex, 'Пароль требует заглавную букву.'),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпада')
      .required('Подтвердите пароль'),
})

export { VALIDATION_SIGN_IN, VALIDATION_FORGOT_PASSWORD, VALIDATION_SIGN_UP }
