import {
   HeaderInstagramIcon,
   HeaderTelegramIcon,
   HeaderWhatsAppIcon,
} from '../../assets/icons'

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

export { HEADER_SOCIALS, NAV }
