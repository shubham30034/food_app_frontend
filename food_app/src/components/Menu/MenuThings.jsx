import React from 'react';
import Crousel from './Crousel';
import { useSelector } from 'react-redux';

const MenuThings = ({ restaurant, menu }) => {
  const { name, address } = restaurant || {};
  const themeSwitcher = useSelector((store) => store.theme.switch);

  console.log(menu);
  const imagee = menu?.imageUrl;
  console.log(imagee, "sjciahvioashkj");

  return (
    <div className={`my-4 flex p-3 justify-between transition-colors duration-300 ${themeSwitcher ? 'text-white bg-black' : 'text-black bg-white'} rounded-lg shadow-md`}>
      <div className='w-3/4'>
        <h1 className='text-2xl font-semibold'>{name && name}</h1>
        <p className='my-4 address'>{address}</p>
        <p className='my-4 weather'>
          Distance: 1.5 km | Weather: It's raining. To compensate your delivery partner,
          additional delivery fee will apply
        </p>
      </div>
      <div className='w-1/4 p-4'>
        {imagee &&
          imagee.map((elem, key) => {
            console.log("elem.imageUrl", elem); // Log elem.imageUrl
            return <Crousel key={key} image={elem} />;
          })}
      </div>
    </div>
  );
};

export default MenuThings;
