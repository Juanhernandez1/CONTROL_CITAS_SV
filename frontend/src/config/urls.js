/* eslint-disable unicorn/filename-case */
export const business = {
  getBusinessByName: name => `/API/v1/Business/SearchByNameNoPage/${name}`,
  getAllBusiness: '/API/v1/Business/GetAllNoPage/Active',
  lastFiveDays: '/API/v1/Appointment/LastFiveDay',
  availability: (id, date) => `/API/v1/Business/Appointment/ResolveSetting/${id}/${date}`,
  getAllBusinessServicess: id => `/API/v1/Business/Services/GetAll/${id}/Client`,
  getBusinessPk: id => `/API/v1/Business/GetPk/${id}`,
  AuthGoogle: '/connect/google',
  AuthFacebook: '/connect/facebook'
};
