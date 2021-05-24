import moment from 'moment';
import 'moment-timezone';
import DateConfig from '../config/DateConfig';

function MomentSv() {
  const Moment = moment();

  const { locale, timeZone } = DateConfig;
  Moment.tz(timeZone);

  Moment.locale(locale);

  return Moment;
}

export default MomentSv;
