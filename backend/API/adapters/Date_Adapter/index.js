import SettingResolve from '../../interface/SettingResolve';

export default class AppointmentGen extends SettingResolve {
  static #instance;

  constructor(LastFiveDays) {
    super();
    if (AppointmentGen.#instance) {
      return AppointmentGen.#instance;
    }
    AppointmentGen.#instance = this;
    this.LastFiveDays = LastFiveDays;
  }

  ParseStringHours(params) {
    const hour = parseInt(params.split(':')[0]);
    const minute = parseInt(params.split(':')[1].split(' ')[0]);
    const time = params.split(':')[1].split(' ')[1];

    console.log({
      hour,
      minute,
      time
    });

    return {
      hour,
      minute,
      time
    };
  }

  GetLastFiveDays = () => this.LastFiveDays();

  GetHoursAppointment = async (Setting, dateList) => {
    const ListHours = [];
    const { timeends, starttime, nsa, ta, tba, ad } = Setting;

    const StartTime = this.ParseStringHours(starttime);
    const EndTime = this.ParseStringHours(timeends);

    const taIsMinute = ta.indexOf('.') !== -1;
    let hour = StartTime.hour;
    let minute = StartTime.minute;

    for (let index = 1; index <= ad; index++) {
      hour = index === 1 && !taIsMinute ? hour : hour + parseInt(ta);
      minute = taIsMinute
        ? minute + parseInt(ta.split('.')[1]) + parseInt(tba)
        : minute + parseInt(tba);
      if (minute >= 60) {
        minute = minute - 60;
        hour = hour + 1;
      }
      const time = hour >= 12 ? 'PM' : 'AM';

      let valid = '0';
      let state;

      if (index <= dateList.length) {
        valid = dateList[index - 1].uuidappointment.split('-')[0];
        state = dateList[index - 1].state;
      }

      if (hour <= EndTime.hour + 12) {
        ListHours.push({
          hour: hour > 12 ? hour - 12 : hour,
          minute: minute,
          time,
          limitService: nsa,
          state: 'O'
        });
      }
    }

    dateList.forEach(element => {
      if (ListHours[parseInt(element.uuidappointment.split('-')[0]) - 1]) {
        ListHours[parseInt(element.uuidappointment.split('-')[0]) - 1].state = element.state;
      }
    });

    console.log(ListHours);
    return ListHours;
  };
}
