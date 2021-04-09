import { MomentSv } from '../../services';

const ListFiveDays = [];

for (let index = 0; index < 5; index++) {
  ListFiveDays.push({
    dayName: MomentSv().add(index, 'days').format('dddd'),
    day: MomentSv().add(index, 'days').format('D'),
    monthName: MomentSv().add(index, 'days').format('MMMM'),
    month: MomentSv().add(index, 'days').format('M'),
    year: MomentSv().add(index, 'days').format('YYYY'),
    hour: MomentSv().add(index, 'days').format('h'),
    minutes: MomentSv().add(index, 'days').format('m'),
    timestamp: MomentSv().add(index, 'days').format('LLLL')
  });
}

export default ListFiveDays;
