import React from 'react';
import CardImage from './CardImage';
import CardContent from './CardContent';
import { useSelector } from 'react-redux';

const Cards = (data) => {

 const mainData = data
 

  if (!mainData) {
    return null; // If data is not available, return null
  }

  return (
    <div className='flex gap-8 justify-around flex-wrap w-[%] mx-auto'>
      {mainData?.data.map((elem) => (
        <div key={elem._id} className='w-[20%] rounded-lg overflow-hidden shadow-md bg-white'>
          <CardImage imageUrl={elem.imageUrl} /> {/* Pass imageUrl as a prop */}
          <CardContent name={elem.name} price={elem.price} cuisine={elem.cuisine} id={elem._id} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
