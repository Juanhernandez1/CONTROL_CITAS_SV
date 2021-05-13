// eslint-disable-next-line unicorn/filename-case
export const paths = {
  home: '/',
  businessResult: '/business',
  businessDetail: (id = '') => `/business-detail/${id}`,
  businessServices: (id = '') => `/businessServices/${id}`,
  appointmentBook: (id = '') => `/appointment-book/${id}`,
  notFound: '*'
};
