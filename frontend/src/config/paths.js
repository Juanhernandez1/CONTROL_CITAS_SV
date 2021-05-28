// eslint-disable-next-line unicorn/filename-case
export const paths = {
  home: '/',
  login: '/login',
  register: '/register',
  businessResult: '/business',
  businessDetail: (id = '') => `/business-detail/${id}`,
  businessServices: (id = '') => `/business-Services/${id}`,
  appointmentBook: (id = '') => `/appointment-book/${id}`,
  appointmentDetail: (id = '') => `/appointment-detail/${id}`,
  notFound: '*'
};
