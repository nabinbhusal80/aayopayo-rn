import { format } from 'date-fns';

const parseDateAndTime = (date, time) => {
  const dateArr = date.split('-').map(e => parseInt(e, 10)).map((d, idx) => (idx === 1 ? d - 1 : d));
  const timeArr = time.split(':').map(e => parseInt(e, 10));
  return [...dateArr, ...timeArr];
};

export default (date, time, showFormat) => format(new Date(...parseDateAndTime(date, time)), showFormat);
