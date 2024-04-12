import React from 'react';

const Slider = () => {
  return (
    <div className='flex my-3 p-10 overflow-x-auto space-x-4' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
      <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/826b0e44-fcf0-401c-8852-745fe0c68d85.jpg" alt="" className='w-auto h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 ' />
      <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/08db1919-2ac2-4d57-9927-5c46a7513c72.jpg" alt="" className='w-auto h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110' />
      <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/969dbab9-c89f-4650-a508-ccd9e21edc21.jpg" alt="" className='w-auto h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110' />
      <img src="https://s3-ap-southeast-1.amazonaws.com/foodvista.1/8e72a524-770f-4622-a696-41edd60796a3.jpg" alt="" className='w-auto h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110' />
    </div>
  );
};

export default Slider;
