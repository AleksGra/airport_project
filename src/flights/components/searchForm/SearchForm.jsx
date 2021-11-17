import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './searchForm.scss';
import { takeInputText } from '../../flight.actions';

const SearchForm = () => {
  const [inputData, setInputData] = useState('');

  const handelChange = event => setInputData(event.target.value);
  const dispatch = useDispatch();

  const handler = e => {
    e.preventDefault();
    dispatch(takeInputText(inputData));
  };

  return (
    <div className="search-flights">
      <h2 className="title">SEARCH FLIGHT</h2>
      <div className="search-line-container">
        <form className="search-form" name="searchFlightForm">
          <i className="fas fa-search"></i>
          <input
            className="search-form__input"
            type="text"
            placeholder="Flight #"
            onChange={handelChange}
            value={inputData}
          ></input>

          <button className="search-form__btn" type="submit" onClick={handler}>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchForm;
