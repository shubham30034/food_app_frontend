import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../utils/Slices/RestaurantSlice';
import Header from './Header';

const Cart = () => {
  const cart = useSelector((state) => state.restaurant.cart);
  const dispatch = useDispatch();
  const themeSwitcher = useSelector((state) => state.theme.switch);

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
    <Header/>
    <div className={`flex my-9 justify-center items-center h-full ${themeSwitcher ? 'text-white' : 'text-gray-700'}`}>
      <div className={`p-6 rounded-lg shadow-md w-[60%] ${themeSwitcher ? 'bg-gray-900' : 'bg-white'}`}>
        <h2 className="text-lg font-semibold mb-4 text-center">Cart Items:</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty</p>
        ) : (
          <div className={`${themeSwitcher ? "bg-gray-800" : "bg-gray-100"} p-4 rounded-md`}>
            <ul className="divide-y divide-gray-200">
              {cart.map((item, index) => (
                <li key={index} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-lg mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Price: {item.price}</p>
                      <p className="text-gray-600">Description: {item.description}</p>
                      {/* Add any additional information you want to display */}
                    </div>
                  </div>
                  <button onClick={() => handleRemoveItem(index)} className={`px-3 py-1 rounded-md transition duration-300 ${themeSwitcher ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mt-4">
              <button onClick={handleClearCart} className={`px-4 py-2 rounded-md transition duration-300 ${themeSwitcher ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>Clear Cart</button>
              <button className={`px-4 py-2 rounded-md transition duration-300 ${themeSwitcher ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>Buy</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Cart;
