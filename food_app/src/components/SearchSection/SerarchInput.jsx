import React, { useState } from 'react';
import searchRestaurant from '../../hooks/searchRestaurant';
import { useDispatch } from 'react-redux';

const SearchInput = () => {
  const [val, setVal] = useState("");

  const dispatch = useDispatch();

  const search = () => {
    searchRestaurant(val, dispatch);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center my-8">Search Restaurants</h1>
      <div className="flex flex-col items-center space-y-2 gap-5">
        <input
          className="bg-white border border-blue-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter text..."
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />

        <button
          onClick={search}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Search Restaurant
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
