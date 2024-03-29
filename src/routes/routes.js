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
      SERVICE: 'service',
   },

   ID: {
      ID: 'id',
      DOCTOR_INNER: '/doctors/:doctorId',
   },

   ADMIN: {
      INDEX: '/admin',
      ONLINE_APPOINTMENTS: 'online-appointments',
      PATIENTS: 'patients',
      APPLICATIONS: 'applications',
      SPECIALISTS: 'specialists',
      ADD_SPECIALIST: 'add-specialist',
   },
}

export { ROUTES, ROLES }
