import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './searchForm.scss';
import { takeInputText } from '../../flight.actions';

const SearchForm = () => {
  const [inputData, setInputData] = useState('');

  const handelChange = (event) => setInputData(event.target.value);
  const dispatch = useDispatch();

  const btnRef = React.createRef();
  const handleKeyPress = (event) => {
    if (event.keyCode == 13) {
      btnRef.current.click();
    }
  };
  const handler = (e) => {
    e.preventDefault();
    dispatch(takeInputText(inputData));
  };

  return (
    <div className='search-flights'>
      <h2 className='title'>SEARCH FLIGHT</h2>
      <div className='search-line-container'>
        <form
          className='search-form'
          name='searchFlightForm'
          onSubmit={handler}
        >
          <i className='fas fa-search'></i>
          <input
            className='search-form__input'
            type='text'
            placeholder='Flight #'
            onChange={handelChange}
            value={inputData}
            onKeyPress={handleKeyPress}
          ></input>

          <button className='search-form__btn' type='submit' ref={btnRef}>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchForm;
