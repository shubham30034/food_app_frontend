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
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpIcon from '@mui/icons-material/Help';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { themeSwitch } from "../utils/Slices/ThemeSlice";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';




const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const switchHeader = useSelector((store) => store.restaurant.toggle);
  const cart = useSelector((store) => store.restaurant.cart);
  const themeSwitcher = useSelector((store)=> store.theme.switch)

  const header = useRef()

  useGSAP((context,contextSafe)=>{
    gsap.from(header.current,{
      y : -800,
      duration : 0.5,
      stagger : 0.
    })
    gsap.from("button",{
      y:-500,
      duration : 0.2,
      stagger : 0.2,
      ease : "expo"
    })
  },{scope:header,revertOnUpdate:true})

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

  const themeToggle = ()=>{
    console.log("chintu");
     dispatch(themeSwitch())
  }
  const helpSection = ()=>{
    navigate("/support")
  }

  return (
    <div className={`w-full ${themeSwitcher ? 'bg-black text-white' : ''}`}>
      <div
        id='main'
        ref={header}
        className=' w-[85%]  mx-auto py-3 px-6 flex justify-between items-center  overflow-hidden'>
        <div className=' w-[8%] flex justify-center items-center'>
          <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png" alt="" />
        </div>
        <div
          className={`flex items-center transition-colors duration-300  gap-16 ${themeSwitcher ? 'text-white' : 'text-gray-800'}`}>

     {switchHeader ? (
            <button onClick={toggleSearch}>
              <div className=' flex gap-2 justify-center items-center'>
                <h1>search</h1>
                <HomeIcon className="hover:text-red-600 cursor-pointer"/>
              </div>
            </button>
          ) : (
            <button onClick={goHome}>
              <div className='flex gap-2 justify-center items-center'>
                <h1>home</h1>
                <ManageSearchIcon className="hover:text-red-600 cursor-pointer"/>
              </div>
            </button>
          )}




          <div className="flex items-center gap-2 cursor-pointer ">
            <button className="flex items-center gap-2 cursor-pointer" onClick={aboutPage}>
              <div className=' flex gap-2 items-center'>
                <InfoIcon  className="hover:text-red-600 cursor-pointer"/>
                <h1>About Us</h1>
              </div>
            </button>
          </div>
          <div >
            <button
            className='flex gap-2 items-center'
            onClick={helpSection}
            >
            <HelpIcon/>
            <h1>help</h1>
            </button>
          </div>
          <div className=' flex gap-2 items-center '>
            <LocalOfferIcon/>
            <h1>offer</h1>
          </div>

         

          <button className="relative" onClick={goCart}>
            <div className='flex items-center gap-2 justify-center'>
              <h1>cart</h1>
              <ShoppingCartIcon className="hover:text-red-600 cursor-pointer"/>
              {cartCount > 0 && (
                <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs absolute -top-1 -right-1">
                  {cartCount}
                </span>
              )}
            </div>
          </button>
          <div>
            <button
             onClick={()=> themeToggle()} 
            >
            {themeSwitcher? <>
            <DarkModeIcon/>
            <ToggleOnIcon/> </> :  
            <>
            <LightModeIcon/>
            <ToggleOffIcon/></> }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
