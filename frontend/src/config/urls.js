/* eslint-disable unicorn/filename-case */
import { config } from 'dotenv';
config();

export const business = {
  getBusinessByName: name => `/API/v1/Business/SearchByNameNoPage/${name}`,
  getAllBusiness: '/API/v1/Business/GetAllNoPage/Active',
  lastFiveDays: '/API/v1/Appointment/LastFiveDay',
  availability: (id, date) => `/API/v1/Business/Appointment/ResolveSetting/${id}/${date}`,
  getAllBusinessServicess: id => `/API/v1/Business/Services/GetAll/${id}/Client`,
  getBusinessPk: id => `/API/v1/Business/GetPk/${id}`,
  getUserPk: id => `/API/v1/Users/GetPk/${id}`
};

export const auth = {
  AuthFacebook: 'https://citasparatunegocio.herokuapp.com/connect/facebook',
  AuthGoogle: 'https://citasparatunegocio.herokuapp.com/connect/google',
  Login: '/API/Auth/Login'
};
