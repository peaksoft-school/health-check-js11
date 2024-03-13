import * as Yup from 'yup'

const emailRegex = /^[^\s@]+@(?:gmail\.com|icloud\.com)$/

const phoneNumberRegex =
   /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/

const VALIDATION_SIGN_UP = Yup.object().shape({
   firstName: Yup.string().required('Имя обязятельное!'),
   lastName: Yup.string().required('Фамилия обязятельное!'),
   email: Yup.string()
      .email()
      .matches(emailRegex, 'email должен быть в формате ...@gmail.com!')
      .required('Почта обязятельное!'),

   number: Yup.string()
      .matches(phoneNumberRegex, 'Неверный формат номера телефона!')
      .required('Номер телефона обязательное!'),
   password: Yup.string()
      .required('Введите пароль!')
      .min(8, 'Минимальная длина пароля 8 символов!')
      .matches(passwordRegex, 'Пароль должен содержать уникальный символ!'),

   confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Пароли не совпадают!')
      .required('Подтвердите пароль!'),
})

const VALIDATION_SIGN_IN = Yup.object().shape({
   email: Yup.string()
      .email()
      .matches(emailRegex, 'email должен быть в формате ...@gmail.com!')
      .required('Почта обязятельное!'),
   password: Yup.string().required('Введите пароль!'),
})

const VALIDATION_FORGOT_PASSWORD = Yup.object().shape({
   newPassword: Yup.string()
      .required('Введите новый пароль!')
      .min(8, 'Минимальная длина пароля 8 символов!')
      .matches(passwordRegex, 'Пароль требует заглавную букву!'),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают!')
      .required('Подтвердите пароль!'),
})

const VALIDATION_RESULT = Yup.object().shape({
   date: Yup.date().required('Выберите дату начала!'),
   service: Yup.string().required('Выберите Услугу!'),

   file: Yup.mixed().test('file', 'Загрузите файл!', (value) => {
      return value instanceof File
   }),
})

const VALIDATION_SCHEDULE = Yup.object().shape({
   departmentName: Yup.string().required('Выберите Услугу!'),
   doctor: Yup.string().required('Выберите специалиста!'),
   createStartDate: Yup.date().required('Выберите дату начала!'),
   createEndDate: Yup.date().required('Выберите дату окончания!'),
   startTime: Yup.string().required('Выберите начало времени!'),
   endTime: Yup.string().required('Выберите время окончания!'),
   startBreak: Yup.string().required('Выберите время начало перевыва!'),
   endBreak: Yup.string().required('Выберите время окончания парерыва!'),
   interval: Yup.string().required('Выберите интервал часов!'),
   dayOfWeek: Yup.object().test(
      'is-empty',
      'Выберите время повторений !',
      (value) => {
         return Object.keys(value).length > 0
      }
   ),
})

export {
   VALIDATION_SIGN_IN,
   VALIDATION_FORGOT_PASSWORD,
   VALIDATION_SIGN_UP,
   VALIDATION_SCHEDULE,
   VALIDATION_RESULT,
}
