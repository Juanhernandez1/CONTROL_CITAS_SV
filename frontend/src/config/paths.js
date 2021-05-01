// eslint-disable-next-line unicorn/filename-case
export const paths = {
  home: '/',
  businessResult: '/business',
  businessDetail: (id = '') => `/business-detail/${id}`,
  notFound: '*'
};
