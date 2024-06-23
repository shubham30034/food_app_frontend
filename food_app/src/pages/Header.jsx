import React, { useRef, useState } from 'react';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../utils/Slices/RestaurantSlice';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import HelpIcon from '@mui/icons-material/Help';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { themeSwitch } from "../utils/Slices/ThemeSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { login, logout } from '../utils/Slices/loginSlice';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const switchHeader = useSelector((store) => store.restaurant.toggle);
  const cart = useSelector((store) => store.restaurant.cart);
  const themeSwitcher = useSelector((store) => store.theme.switch);

  const header = useRef();

  useGSAP((context, contextSafe) => {
    gsap.from(header.current, {
      y: -800,
      duration: 0.5,
      stagger: 0.1
    });
    gsap.from("button", {
      y: -500,
      duration: 0.2,
      stagger: 0.2,
      ease: "expo"
    });
  }, { scope: header, revertOnUpdate: true });

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSearch = () => {
    dispatch(toggle(false));
    navigate("/search");
  };

  const goHome = () => {
    dispatch(toggle(true));
    navigate("/body");
  };

  const goCart = () => {
    navigate("/cart");
  };

  const aboutPage = () => {
    navigate("/about");
  };

  const themeToggle = () => {
    dispatch(themeSwitch());
  };

  const helpSection = () => {
    navigate("/support");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());

  };

  return (
    <div className={`w-full ${themeSwitcher ? 'bg-black text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <div
        id='main'
        ref={header}
        className='w-[85%] mx-auto py-3 px-6 flex justify-between items-center overflow-hidden'>
        <div className='w-[8%] flex justify-center items-center'>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" alt="Swiggy logo" className='h-10' />
        </div>
        <div className={`flex items-center gap-8 ${themeSwitcher ? 'text-white' : 'text-gray-800'}`}>
          {switchHeader ? (
            <button onClick={toggleSearch} className='flex items-center gap-2 hover:text-red-600'>
              <HomeIcon className="cursor-pointer"/>
              <h1>Search</h1>
            </button>
          ) : (
            <button onClick={goHome} className='flex items-center gap-2 hover:text-red-600'>
              <ManageSearchIcon className="cursor-pointer"/>
              <h1>Home</h1>
            </button>
          )}
          <button onClick={aboutPage} className='flex items-center gap-2 hover:text-red-600'>
            <InfoIcon className="cursor-pointer"/>
            <h1>About Us</h1>
          </button>
          <button onClick={helpSection} className='flex items-center gap-2 hover:text-red-600'>
            <HelpIcon className="cursor-pointer"/>
            <h1>Help</h1>
          </button>
          <button className="relative flex items-center gap-2 hover:text-red-600" onClick={goCart}>
            <ShoppingCartIcon className="cursor-pointer"/>
            <h1>Cart</h1>
            {cartCount > 0 && (
              <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={themeToggle} className='flex items-center gap-2 hover:text-red-600'>
            {themeSwitcher ? (
              <>
                <DarkModeIcon />
                <ToggleOnIcon />
              </>
            ) : (
              <>
                <LightModeIcon />
                <ToggleOffIcon />
              </>
            )}
          </button>
          <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
           >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
