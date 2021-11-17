import React from 'react';
import './tableItem.scss';

const TableItem = props => {
  const { term, localTime, airportName, status, name, logoSmallName, flightNumber } = props;

  let termColor;

  switch (term) {
    case 'A':
      termColor = '#008000';
      break;
    case 'D':
      termColor = '#1eb7ee';
      break;
    default:
      termColor = '#800080';
      break;
  }
  return (
    <tr>
      <td>
        <span style={{ borderColor: termColor, color: termColor }}>{term}</span>
      </td>
      <td>
        <span>{localTime}</span>
      </td>
      <td>
        <span>{airportName}</span>
      </td>
      <td>
        <span>{status}</span>
      </td>
      <td>
        <div className="company-name">
          <img className="company-logo" src={logoSmallName} alt={name} />
          <span>{name}</span>
        </div>
      </td>
      <td>
        <span>{flightNumber}</span>
      </td>
    </tr>
  );
};

export default TableItem;
