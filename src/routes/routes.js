const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

const ROUTES = {
   USER: {
      INDEX: '/',
      ABOUT_CLINICK: 'about-clinic',
      PROFILE: 'profile',
      SERVICES: 'services',
      DOCTORS: 'doctors',
      CONTACTS: 'contacts',
      PRICES: 'prices',
      CHANGE_PASSWORD: 'change-password',
      RECORDS: 'records',
   },

   ADMIN: {
      INDEX: '/admin',
      ONLINE_APPOINTMENTS: 'online-appointments',
      PATIENTS: 'patients',
      ID: 'id',
      APPLICATIONS: 'applications',
      SPECIALISTS: 'specialists',
      ADD_NOTE: 'add-note',
   },
}

export { ROUTES, ROLES }
