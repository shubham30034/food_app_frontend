import React from 'react';
import SerarchInput from '../components/SearchSection/SerarchInput';
import Cards from '../components/Cards';
import { useSelector } from 'react-redux';
import Header from "./Header"

const Search = () => {
  const res = useSelector((store) => store.restaurant.searchRestaurant);
  const data = res?.data

  
  return (
    <>
    <Header/>
    <SerarchInput/>
   <div className=' my-5'>
    {data &&  <Cards data={data}/>}
    </div>
    
    </>
  );
};

export default Search;
