import React from 'react';
import { useSelector } from 'react-redux';

const CardImage = ({ imageUrl }) => {
  const themeSwitcher = useSelector((store) => store.theme.switch);

  return (
    <div className={`w-full h-40  overflow-hidden ${themeSwitcher ? "bg-gray-900" : "bg-white"}`}>
      <img className='w-full h-full object-cover rounded p-2' src={imageUrl} alt="" />
    </div>
  );
};

export default CardImage;
