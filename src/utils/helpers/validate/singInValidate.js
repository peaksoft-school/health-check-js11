import * as Yup from 'yup'

const validationSchemaSingIn = Yup.object().shape({
   name: Yup.string().required('Поле name обязятельное!'),
   password: Yup.string()
      .min(8, 'Password должен быть больше 8')
      .required('Поле password обязятельное!'),
})

export { validationSchemaSingIn }
