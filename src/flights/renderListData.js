import moment from 'moment';

const getListToRender = ({ flightsList, direction, searchText }) => {
  const currentDay = moment(new Date()).format('MM-DD');
  const ListByDirect = flightsList.flights[direction] || [];

  const filtredList =
    direction === 'arrival'
      ? ListByDirect.filter(
          flights => moment(new Date(flights.timeArrShedule)).format('MM-DD') === currentDay,
        )
      : ListByDirect.filter(
          flights => moment(new Date(flights.timeDepShedule)).format('MM-DD') === currentDay,
        );

  const renderList = filtredList.map(flight => {
    let localTime;
    switch (direction) {
      case 'arrival':
        localTime = moment(flight.timeArrShedule).format('HH:mm');
        break;
      case 'departure':
        localTime = moment(flight.timeDepShedule).format('HH:mm');
        break;
      default:
        localTime = null;
    }

    const timeStatus = moment(flight.timeTakeofFact).format('HH:mm');

    let statusFull;
    switch (flight.status) {
      case 'DP':
        statusFull = `Departed at ${timeStatus}`;
        break;
      case 'LN':
        statusFull = `Landed at ${timeStatus}`;
        break;
      case 'FR':
        statusFull = 'In flight';
        break;
      case 'ON':
        statusFull = 'On time';
        break;
      case 'GC':
        statusFull = 'Gate closed';
        break;
      case 'DL':
        statusFull = 'Delayed';
        break;
      case 'CK':
        statusFull = 'Check-in';
        break;
      case 'BD':
        statusFull = 'Boarding';
        break;
      default:
        statusFull = flight.status;
    }

    const { name, logoSmallName } = flight.airline.en;

    return {
      ID: flight.ID,
      airportName: flight['airportToID.city_en'] || flight['airportFromID.city_en'],
      name,
      term: flight.term,
      logoSmallName,
      flightNumber: flight.codeShareData[0].codeShare,
      localTime,
      timeStatus,
      status: statusFull,
    };
  });

  return searchText
    ? renderList.filter(flights =>
        flights.flightNumber.toUpperCase().includes(searchText.toUpperCase()),
      )
    : renderList;
};
export default getListToRender;
