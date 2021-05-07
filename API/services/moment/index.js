import moment from 'moment';
import 'moment-timezone';
import DateConfig from '../config/DateConfig';
const MomentSv = moment();
const {
  locale,
  timeZone
} = DateConfig;
MomentSv.tz(timeZone);
MomentSv.locale(locale);
export default MomentSv;