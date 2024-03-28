import { Typography } from '@mui/material'
import { ROUTES } from '../../routes/routes'
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
   OrthopedicsReviewImage,
   PsychologistReviewImage,
   SecondBestDoctorImage,
   ThirdBestDoctorImage,
} from '../../assets/images'

const NAVIGATIONS = [
   {
      id: 1,
      to: `${ROUTES.USER.INDEX}${ROUTES.USER.ABOUT_CLINICK}`,
      label: 'О клинике',
   },
   {
      id: 2,
      to: `${ROUTES.USER.INDEX}${ROUTES.USER.SERVICES}`,
      label: 'Услуги',
   },
   { id: 3, to: `${ROUTES.USER.INDEX}${ROUTES.USER.DOCTORS}`, label: 'Врачи' },
   { id: 4, to: `${ROUTES.USER.INDEX}${ROUTES.USER.PRICES}`, label: 'Цены' },
   {
      id: 5,
      to: `${ROUTES.USER.INDEX}${ROUTES.USER.CONTACTS}`,
      label: 'Контакты',
   },
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
      img: OrthopedicsReviewImage,
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

const ADMIN_NAVIGATIONS = [
   {
      id: 1,
      to: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ONLINE_APPOINTMENTS}`,
      label: 'Онлайн-запись',
   },

   {
      id: 2,
      to: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.APPLICATIONS}`,
      label: 'Заявки',
   },

   {
      id: 3,
      to: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`,
      label: 'Специалисты',
   },

   {
      id: 4,
      to: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.PATIENTS}`,
      label: 'Пациенты',
   },
]

const DAYS = [
   {
      id: 0,
      label: 'MONDAY',
   },
   {
      id: 1,
      label: 'TUESDAY',
   },
   {
      id: 2,
      label: 'WEDNESDAY',
   },
   {
      id: 3,
      label: 'THURSDAY',
   },
   {
      id: 4,
      label: 'FRIDAY',
   },
   {
      id: 5,
      label: 'SATURDAY',
   },
   {
      id: 6,
      label: 'SUNDAY',
   },
]

const DEPARTMENTS = [
   {
      id: 1,
      label: 'Анестезиология',
      value: 'анестезиология',
   },

   {
      id: 2,
      label: 'Онкология',
      value: 'онкология',
   },

   {
      id: 3,
      label: 'Терапия',
      value: 'терапия',
   },

   {
      id: 4,
      label: 'Ортопедия',
      value: 'ортопедия',
   },

   {
      id: 5,
      label: 'Урология',
      value: 'урология',
   },

   {
      id: 6,
      label: 'Вакцинация',
      value: 'вакцинация',
   },

   {
      id: 7,
      label: 'Оториноларингология',
      value: 'оториноларинология',
   },

   {
      id: 8,
      label: 'Флебология',
      value: 'флебология',
   },

   {
      id: 9,
      label: 'Гинекология',
      value: 'Гинекология',
   },

   {
      id: 10,
      label: 'Офтальмология',
      value: 'Офтальмология',
   },

   {
      id: 11,
      label: 'Эндокринология',
      value: 'эндокринология',
   },

   {
      id: 12,
      label: 'Дерматология',
      value: 'дерматология',
   },

   {
      id: 13,
      label: 'Проктология',
      value: 'проктология',
   },

   {
      id: 14,
      label: 'Физиотерапия',
      value: 'физиотерапия',
   },

   {
      id: 15,
      label: 'Кардиология',
      value: 'кардиология',
   },

   {
      id: 16,
      label: 'Психотерапия',
      value: 'психотерапия',
   },

   {
      id: 17,
      label: 'Невропатия',
      value: 'невропатия',
   },

   {
      id: 18,
      label: 'Пульмонология',
      value: 'пульмонология',
   },

   {
      id: 19,
      label: 'Ревматология',
      value: 'ревмотопатия',
   },

   {
      id: 20,
      label: 'Нейрохирургия',
      value: 'нейрохирургия',
   },
]

const INTERVAL_TIME = [
   {
      id: 1,
      label: '30 минут',
      time: 'THIRTY',
   },

   {
      id: 2,
      label: '45 минут',
      time: 'FOURTYFIVE',
   },

   {
      id: 3,
      label: ' 1 час',
      time: 'SIXTY',
   },

   {
      id: 4,
      label: '1,5 часа',
      time: 'NINETY',
   },
]

const RUSSIAN_DAYS = [
   { id: 0, label: 'Пн' },
   { id: 1, label: 'Вт' },
   { id: 2, label: 'Ср' },
   { id: 3, label: 'Чт' },
   { id: 4, label: 'Пт' },
   { id: 5, label: 'Сб' },
   { id: 6, label: 'Вс' },
]

const DAYS_OF_WEEK = {
   Mo: 'Пн',
   Tu: 'Вт',
   We: 'Ср',
   Th: 'Чт',
   Fr: 'Пт',
   Sa: 'Сб',
   Su: 'Вс',
}

const RUSSIAN_MONTHS_NAMES = [
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

const PART_TITLES = {
   main: 'Онлайн Запись',
   specialist: 'Выбрать специалиста',
   date: 'Выбрать дату и время',
   form: 'Запись',
   result: 'Онлайн Запись',
}

const CHECKED =
   "\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\""

const MAP =
   'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365.48247976201736!2d74.62719552257737!3d42.875802431657775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb78fc81678db%3A0x8f6025b536a29455!2sPeaksoft%20house!5e0!3m2!1sru!2skg!4v1710599618852!5m2!1sru!2skg'

const ABOUT_CLINICK_TEXT = (
   <Typography className="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor
      <br />
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      <br />
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu
      <br />
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in
      <br />
      culpa qui officia deserunt mollit anim id est laborum
   </Typography>
)

export {
   HEADER_SOCIALS,
   RUSSIAN_MONTHS_NAMES,
   REVIEWS,
   NAVIGATIONS,
   FOOTER_SOCIALS,
   BEST_QUALITIES,
   LOCATION,
   ABOUT_US,
   BEST_DOCTORS,
   FAKE_DATA,
   ADMIN_NAVIGATIONS,
   DAYS,
   DEPARTMENTS,
   INTERVAL_TIME,
   RUSSIAN_DAYS,
   DAYS_OF_WEEK,
   PART_TITLES,
   MAP,
   CHECKED,
   ABOUT_CLINICK_TEXT,
}
