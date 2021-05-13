import LastFiveDays from '../domain/Date/LastFiveDays';
import AppointmentGen from './Date_Adapter';
import RootCrudAdapter from './Db_Adapter';
import TokenAuth from './Token';
import services from '../services';
const { JWT } = services;

const adapters = {
  RootCrudAdapter,
  AppointmentGen: new AppointmentGen(LastFiveDays),
  TokenAuth: new TokenAuth(JWT)
};

export default adapters;
