import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const currentDate = moment(new Date()).format('DD-MM-YYYY');

export const fetchFlightsList = async () => {
  const res = await fetch(`${baseUrl}/${currentDate}`);
  if (res.ok) {
    return res.json();
  }
  throw new Error('There is nothing to show');
};
