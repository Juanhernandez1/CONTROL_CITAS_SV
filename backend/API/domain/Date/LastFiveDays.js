import services from '../../services';

const { MomentSv } = services;

function LastFiveDays() {
  const ListFiveDays = [];

  for (let index = 0; index < 5; index++) {
    ListFiveDays.push({
      dayName: MomentSv.add(index, 'days').format('dddd'),
      day: MomentSv.add(index, 'days').format('D'),
      monthName: MomentSv.add(index, 'days').format('MMMM'),
      month: MomentSv.add(index, 'days').format('M'),
      year: MomentSv.add(index, 'days').format('YYYY'),
      hour: MomentSv.add(index, 'days').format('h'),
      minute: MomentSv.add(index, 'days').format('m'),
      time: MomentSv.add(index, 'days').format('A'),
      minutes: MomentSv.add(index, 'days').format('m'),
      fulldate: MomentSv.add(index, 'days').format('l')
    });
  }

  return ListFiveDays;
}

export default LastFiveDays;
