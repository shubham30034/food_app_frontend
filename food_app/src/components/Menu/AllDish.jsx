import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { cart } from '../../utils/Slices/RestaurantSlice';
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

const AllDish = ({ name, price, description, imageUrl }) => {
  const dispatch = useDispatch();
  const themeSwitcher = useSelector((store) => store.theme.switch);
  const dish = useRef();
  const btn = useRef();
  const container = useRef();

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  const addCart = () => {
    dispatch(cart({ name, price, description, imageUrl }));
  };

  useGSAP((context, contextSafe) => {
    const onClickGood = contextSafe(() => {
      gsap.to(dish.current, {
        scale: 1.2,
        duration: 0.2,
        opacity : 0,
        yoyo : 1,
        onComplete: () => {
          gsap.to(dish.current, { scale: 1, duration: 0.2, opacity : 1 }); 
        }
      });
    });

    btn.current.addEventListener("click", onClickGood);

    return () => {
      btn.current.removeEventListener("click", onClickGood);
    };
  }, { scope: dish });

  // Use useGSAP hook for ScrollTrigger animation
  useGSAP((context, contextSafe) => {
    gsap.from(container.current, {
      scale : 0,
      opacity : 0,
      duration : 1,
      stagger : 0.5,
      scrollTrigger: {
        trigger: container.current
      }
    });
  }, { scope: container });

  return (
    <div 
     ref={container}
     className={`flex justify-between shadow-md p-4 rounded-lg m-3 ${themeSwitcher ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'}`}
     style={{ boxShadow: themeSwitcher ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.1)' }}
    >
      <div className='my-4'>
        <h1 className='text-xl font-semibold'>{name}</h1>
        <h2 className='text-lg font-semibold'>{price}</h2>
        <p className='text-gray-600'>{description}</p>
      </div>
      <div className='w-1/6 relative' ref={dish}>
        <img className='rounded-lg' src={imageUrl} alt={name} />
        <button
          ref={btn}
          onClick={addCart}
          className={`absolute w-32 bottom-0 left-10 ${themeSwitcher ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'} px-4 py-2 rounded-lg transform transition duration-300 hover:scale-105`}
          style={{ boxShadow: themeSwitcher ? '0 2px 4px rgba(0, 0, 0, 0.2)' : '0 1px 2px rgba(0, 0, 0, 0.1)' }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AllDish;
