// const ADMIN_ROUTES = [
//    {
//       path: 'admin/online-appointments',
//       element: <OnlineAppointments />,
//    },
//    {
//       path: 'specialists',
//       element: <Specialists />,
//    },

//    {
//       path: 'specialists/:id',
//       element: <SpecialistInnerPage />,
//    },
//    {
//       path: '/admin/specialists/add-note',
//       element: <AddNote />,
//    },

//    {
//       path: '/admin/applications',
//       element: <Applications />,
//    },

//    {
//       path: '/admin/patients',
//       element: <div>patients</div>,
//    },
// ]

// const USER_ROUTES = [
//    {
//       path: '/',
//       element: <Home />,
//    },

//    {
//       path: '/about-clinic',
//       element: <AboutClinic />,
//    },

//    {
//       path: '/services',
//       element: <Services />,
//    },

//    {
//       path: '/doctors',
//       element: <Doctors />,
//    },

//    {
//       path: '/contacts',
//       element: <Contacts />,
//    },

//    {
//       path: '/prices',
//       element: <Prices />,
//    },

//    {
//       path: '/change-password',
//       element: <ChangePassword />,
//    },

//    {
//       path: '/profile',
//       element: <MyProfile />,
//    },

//    {
//       path: '/records',
//       element: <Records />,
//    },
// ]

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
      DOCTOR_INNER: '/doctors/:doctorId',
   },

   ADMIN: {
      INDEX: '/admin',
      PATIENTS: 'patients',
      ID: 'id',
      APPLICATIONS: 'applications',
      SPECIALISTS: 'specialists',
      ADD_NOTE: 'add-note',
   },
}

export { ROUTES, ROLES }
