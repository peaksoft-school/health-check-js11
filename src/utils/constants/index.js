import { Typography } from '@mui/material'
import {
   VaccinationIcon,
   KardiologiyaIcon,
   NevrologiyaIcon,
   DermatologiyaIcon,
   OftalmologiyaIcon,
   TerapiyaIcon,
   FizioterapiyaIcon,
   OnkologiyaIcon,
   UrologiyaIcon,
} from '../../assets/icons/servicesIcons'

import {
   FooterInstagramIcon,
   FooterTelegramIcon,
   FooterWhatsAppIcon,
   HeaderInstagramIcon,
   HeaderTelegramIcon,
   HeaderWhatsAppIcon,
} from '../../assets/icons'

import {
   CosmetologyReviewImage,
   DemoReviewImage,
   FifthBestDoctorImage,
   FirstBestDoctorImage,
   FourthBestDoctorImage,
   OrthopedicsReview,
   PsychologistReviewImage,
   SecondBestDoctorImage,
   ThirdBestDoctorImage,
} from '../../assets/images'

const HEADER_NAV = [
   { id: 1, text: 'О клинике' },
   { id: 2, text: 'Услуги' },
   { id: 3, text: 'Врачи' },
   { id: 4, text: 'Прайс' },
   { id: 5, text: 'Контакты' },
]

const HEADER_SOCIALS = [
   {
      id: 1,
      ariaLabel: 'Instagram',
      href: 'https://www.instagram.com/peaksoft.house/',
      icon: <HeaderInstagramIcon />,
   },
   {
      id: 2,
      ariaLabel: 'WhatsApp',
      href: 'https://www.whatsapp.com',
      icon: <HeaderWhatsAppIcon />,
   },
   {
      id: 3,
      ariaLabel: 'Telegram',
      href: 'https://web.telegram.org/k/#-4032240673',
      icon: <HeaderTelegramIcon />,
   },
]

const LOCATION =
   'https://2gis.kg/bishkek/search/%D0%B3%D1%80%D0%B0%D0%B6%D0%B4%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20119/firm/70000001038316599?m=74.628453%2C42.875862%2F17.42'

const BEST_QUALITIES = [
   {
      id: 1,
      number: '1',
      title: 'Высокий профессионализм сотрудников',
      text: 'Медицинская лицензия, большой опыт врачей и постоянное повышение квалификации.',
   },
   {
      id: 2,
      number: '2',
      title: 'Наши пациенты - наши лучшие друзья',
      text: 'Все аппараты и медицинские препараты сертифицированы и лицензированы.',
   },
   {
      id: 3,
      number: '3',
      title: 'Комфортные условия',
      text: 'Уютная обстановка и отзывчивый персонал сделают поход в клинику максимально приятным.',
   },
]

const SERVICES = [
   { id: 1, name: 'Вакцинация', icon: <VaccinationIcon /> },
   { id: 2, name: 'Кардиология', icon: <KardiologiyaIcon /> },
   { id: 3, name: 'Неврология', icon: <NevrologiyaIcon /> },
   { id: 4, name: 'Дерматология', icon: <DermatologiyaIcon /> },
   { id: 5, name: 'Офтальмология', icon: <OftalmologiyaIcon /> },
   { id: 6, name: 'Терапия', icon: <TerapiyaIcon /> },
   { id: 7, name: 'Физиотерапия', icon: <FizioterapiyaIcon /> },
   { id: 8, name: 'Онкология', icon: <OnkologiyaIcon /> },
   { id: 9, name: 'Урология', icon: <UrologiyaIcon /> },
]

const ABOUT_US = (
   <Typography>
      Вся наша команда готова обеспечить вам медицинский уход и заботу на самом
      высоком уровне. Наша главная задача — оказать Вам теплый прием и
      обеспечить самый лучший медицинский уход. У нас Вы в хороших руках! B
      нашей клинике используются только качественные материалы и проверенные
      технологии. Для каждого клиента специалисты нашей клиники разработают
      индивидуальный план лечения, подробно рассказывая о каждом этапе.
      <br />
      <br />
      Доброжелательность и уважительное отношение к пациентам, не только
      материальная, но и моральная ответственность за результаты лечения — все
      это взято за основу политики Medical Clinic. Профессионализм и высокое
      качество оказываемых услуг помогают нам привлечь пациентов которые
      рекомендуют нас своим родным и близким.
      <br />
      <br />
      Уже 20 лет мы работаем на уровне лучших мировых стандартов, внедряя и
      развивая передовые методы лечения для сохранения здоровья наших пациентов.
   </Typography>
)

const REVIEWS = [
   {
      id: 1,
      name: 'Александр',
      img: DemoReviewImage,
      rating: 5,
      review:
         'Хочу выразить признательность и благодарность отличному врачу - Попову Алексею Дмитриевичу за профессиональное удаление зуба мудрости! Отмечу, что зуб был очень сложным: расположен за челюстной костью, росший вниз (под семерку), с кривыми корнями. Не ожидал, что удаление такого зуба сможет пройти столь спокойно и безболезненно (пишу, кстати, по факту заживления - лунка затянулась прекрасно). В общем, огромное спасибо Алексею Дмитриевичу , персоналу и самой клинике!',
   },
   {
      id: 2,
      name: 'Кайли',
      img: PsychologistReviewImage,
      rating: 5,
      review:
         'Я хотел бы поделиться своим восторгом от услуг, предоставляемых отделением психологии и психотерапии в данной клинике. Я получил профессиональную помощь и поддержку от высококвалифицированных специалистов в области психологии. Врачи внимательно выслушали мои проблемы и предоставили индивидуальный подход к моему лечению. Благодаря терапевтическим сессиям, я смог разобраться в своих эмоциях и научился эффективным стратегиям управления стрессом. Я чувствую себя более уверенным и спокойным благодаря помощи этой клиники. От всего сердца рекомендую их услуги всем, кто ищет профессиональную поддержку в области психологии и психотерапии.',
   },
   {
      id: 3,
      name: 'Тимур',
      img: OrthopedicsReview,
      rating: 5,
      review:
         'Моя поездка в отделение ортопедии этой клиники была очень успешной. Врачи были внимательны и профессиональны, они провели все необходимые исследования и дали мне точный диагноз. Я получил отличное лечение и подробные инструкции по реабилитации. Весь персонал был дружелюбным и готовым помочь. Я благодарен этой клинике за их высокий уровень заботы о пациентах.',
   },
   {
      id: 4,
      name: 'Ариана',
      img: CosmetologyReviewImage,
      rating: 5,
      review:
         'Я хотела бы поблагодарить всю команду косметологического отделения этой клиники за их профессионализм и заботу. Консультация была очень информативной, врач подробно объяснила процедуры и рекомендации. Процедура, которую я прошла, была комфортной и результат был замечательным. Мои ожидания были полностью оправданы, и я рада, что выбрала эту клинику. Благодарю вас за ваше внимание и отличное обслуживание!',
   },
]

const BEST_DOCTORS = [
   {
      id: 1,
      image: FirstBestDoctorImage,
      name: 'Войнич Дарья',
      specialisation: 'Врач - терапевт',
   },
   {
      id: 2,
      image: SecondBestDoctorImage,
      name: 'Мисько Екатерина',
      specialisation: 'Врач - Педиатр',
   },
   {
      id: 3,
      image: ThirdBestDoctorImage,
      name: 'Дмитроченко Дмитрий',
      specialisation: 'Врач - уролог - андролог',
   },
   {
      id: 4,
      image: FourthBestDoctorImage,
      name: 'Антух Евгений',
      specialisation: 'Врач - невролог',
   },
   {
      id: 5,
      image: FifthBestDoctorImage,
      name: 'Мисник Елена',
      specialisation: 'Врач - эндокринолог',
   },
]

const FOOTER_SOCIALS = [
   {
      id: 1,
      ariaLabel: 'Instagram',
      href: 'https://www.instagram.com/peaksoft.house/',
      icon: <FooterInstagramIcon />,
   },
   {
      id: 2,
      ariaLabel: 'Telegram',
      href: 'https://web.telegram.org/k/#-4032240673',
      icon: <FooterTelegramIcon />,
   },
   {
      id: 3,
      ariaLabel: 'WhatsApp',
      href: 'https://www.whatsapp.com',
      icon: <FooterWhatsAppIcon />,
   },
]

const FAKE_DATA = [
   {
      id: 1,
      first_name: 'Alice',
      last_name: 'Johnson',
      email: 'dgeibel0@twitter.com',
      gender: 'Male',
      date_of_birth: '1990-05-12',
      age: 25,
      country: 'Америка',
      phone: '1111111',
   },
   {
      id: 2,
      first_name: 'Boris',
      last_name: 'Ivanov',
      email: 'tmullineux1@sina.com.cn',
      gender: 'Male',
      date_of_birth: '1982-11-07',
      age: 47,
      country: 'Россия',
      phone: '2222222',
   },
   {
      id: 3,
      first_name: 'Chen',
      last_name: 'Wei',
      email: 'ksexten2@a8.net',
      gender: 'Male',
      date_of_birth: '1979-12-01',
      age: 60,
      country: 'Китай',
      phone: '3333333',
   },
   {
      id: 4,
      first_name: 'David',
      last_name: 'Smith',
      email: 'sconwell3@intel.com',
      gender: 'Female',
      date_of_birth: '1995-04-20 ',
      age: 12,
      country: 'Китай',
      phone: '44444444',
   },
   {
      id: 5,
      first_name: 'Emily',
      last_name: 'Brown',
      email: 'magett4@bloglovin.com',
      gender: 'Female',
      date_of_birth: '2001-09-15',
      age: 22,
      country: 'Германия',
      phone: '5555555',
   },
]

const COLUMNS = [
   {
      Header: 'Id',
      accessor: 'id',
   },
   {
      Header: 'Имя',
      accessor: 'first_name',
   },
   {
      Header: 'Фамилия',
      accessor: 'last_name',
   },
   {
      Header: 'День рождения',
      accessor: 'date_of_birth',
   },
   {
      Header: 'Страна',
      accessor: 'country',
   },
   {
      Header: 'Телефон',
      accessor: 'phone',
   },
   {
      Header: 'Действия',
      accessor: 'totalDiscount',
   },
]

export const LOGIN_USER_KEY = 'LOGIN_LMS_USER_KEY'

export const BASE_URL = 'http://18.208.146.212'

export const routes = {
   LOGIN: '/login',
   ADMIN: {
      index: '/admin',
   },
   USER: {
      index: '/user',
   },
}

export {
   HEADER_SOCIALS,
   REVIEWS,
   HEADER_NAV,
   FOOTER_SOCIALS,
   BEST_QUALITIES,
   LOCATION,
   ABOUT_US,
   SERVICES,
   BEST_DOCTORS,
   COLUMNS,
   FAKE_DATA,
}
