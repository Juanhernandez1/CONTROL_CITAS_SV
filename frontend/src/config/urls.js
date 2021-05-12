/* eslint-disable unicorn/filename-case */
export const business = {
  getBusinessByName: name => `/Business/SearchByNameNoPage/${name}`,
  getAllBusiness: '/Business/GetAllNoPage/Active',
  lastFiveDays: '/Appointment/LastFiveDay',
  availability: (id, date) => `/Business/Appointment/ResolveSetting/${id}/${date}`
};
