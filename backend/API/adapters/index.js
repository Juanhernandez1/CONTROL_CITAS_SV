import LastFiveDays from '../domain/Date/LastFiveDays';
import AppointmentGen from './Date_Adapter';
import RootCrudAdapter from './Db_Adapter';

const adapters = {
  RootCrudAdapter,
  AppointmentGen: new AppointmentGen(LastFiveDays)
};

export default adapters;
