const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

const ROUTES = {
   USER: {
      index: '/',
      aboutClinic: 'about-clinic',
      profile: 'profile',
      services: 'services',
      doctors: 'doctors',
      contacts: 'contacts',
      prices: 'prices',
      changePassword: 'change-password',
      records: 'records',
   },

   ADMIN: {
      index: '/admin',
      patients: 'patients',
      id: 'id',
      applications: 'applications',
      specialists: 'specialists',
   },
}

export { ROUTES, ROLES }
