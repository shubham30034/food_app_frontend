import React, { useEffect, useState } from 'react';
import Header from './Header';
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import getAllRestaurant from '../hooks/restaurant';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FilterSearch from '../components/FilterSearch';

const Body = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllRestaurant(dispatch);
  }, []); 
  

  const menuSwitch = useSelector((store) => store.menu.menuSwitcher);
  const res = useSelector((store) => store.restaurant.restaurant);
  const data = res?.data;

  console.log("main data ara ha kay",data);
  


  if (!data) {
    return null; // Return null if data is not available yet
  }

  return (
    
        <>
     
          <Header />
          <FilterSearch/>
          <div className=' w-[85%] mx-auto my-16 '>
          <h1 className=' font-semibold m-3'>Top Restaurant</h1>
          <Cards data={data} />
          </div>
        </>
    
    
  );
};

export default Body;
