import { Typography } from '@mui/material'
import first from '../../assets/images/therapist.png'
import second from '../../assets/images/pediatrician.png'
import third from '../../assets/images/urologist.png'
import fourth from '../../assets/images/neurologist.png'
import fifth from '../../assets/images/endocrinologist.png'
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
   HeaderInstagramIcon,
   HeaderTelegramIcon,
   HeaderWhatsAppIcon,
   FooterInstagramIcon,
   FooterTelegramIcon,
   FooterWhatsAppIcon,
} from '../../assets/icons'

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

const ABOUT_US = (
   <Typography variant="p">
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

const SERVISES = [
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

const INFO_DOCTORS = [
   {
      image: first,
      name: 'Войнич Дарья',
      doctor: 'Врач-терапевт',
      id: 1,
   },
   {
      image: second,
      name: 'Мисько Екатерина',
      doctor: 'Врач-Педиатр',
      id: 2,
   },
   {
      image: third,
      name: 'Дмитроченко Дмитрий',
      doctor: 'Врач-уролог-андролог',
      id: 3,
   },
   {
      image: fourth,
      name: 'Антух Евгений',
      doctor: 'Врач-невролог',
      id: 4,
   },
   {
      image: fifth,
      name: 'Мисник Елена',
      doctor: 'Врач эндокринолог',
      id: 5,
   },
]

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
      text: 'Bce аппараты и медицинские препараты сертифицированы и лицензированы.',
   },
   {
      id: 3,
      number: '3',
      title: 'Комфортные условия',
      text: 'Уютная обстановка и отзывчивый персонал сделают поход в клинику максимально приятным.',
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
export {
   HEADER_SOCIALS,
   INFO_DOCTORS,
   HEADER_NAV,
   BEST_QUALITIES,
   LOCATION,
   ABOUT_US,
   SERVISES,
   FOOTER_SOCIALS,
}
