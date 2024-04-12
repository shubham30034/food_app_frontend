import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';

const TopPicsCard = () => {
  const themeSwitcher = useSelector((store) => store.theme.switch);

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg my-16 ${themeSwitcher ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}>
      <img 
        src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/f01666ac73626461d7455d9c24005cd4"
        alt="Food"
        className="w-full p-3 h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">McChicken Extra</h2>
        <p className="text-sm text-gray-700">3 Chicken with Coke Combo</p>
        <div className="mt-4 flex justify-between items-center">
          <Button color="red-500">Add</Button>
          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}

export default TopPicsCard;
