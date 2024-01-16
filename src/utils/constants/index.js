import first from '../../assets/images/therapist.png'
import second from '../../assets/images/pediatrician.png'
import third from '../../assets/images/urologist.png'
import fourth from '../../assets/images/neurologist.png'
import fifth from '../../assets/images/endocrinologist.png'
import {
   HeaderInstagramIcon,
   HeaderTelegramIcon,
   HeaderWhatsAppIcon,
} from '../../assets/icons'

const INFO_DOCTORS = [
   {
      image: fourth,
      name: 'Войнич Дарья',
      doctor: 'Врач-терапевт',
      id: 1,
   },
   {
      image: third,
      name: 'Мисько Екатерина',
      doctor: 'Врач-Педиатр',
      id: 2,
   },
   {
      image: fifth,
      name: 'Дмитроченко Дмитрий',
      doctor: 'Врач-уролог-андролог',
      id: 3,
   },
   {
      image: second,
      name: 'Антух Евгений',
      doctor: 'Врач-невролог',
      id: 4,
   },
   {
      image: first,
      name: 'Мисник Елена',
      doctor: 'Врач эндокринолог',
      id: 4,
   },
]

const NAV = [
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

export { HEADER_SOCIALS, NAV, INFO_DOCTORS }
