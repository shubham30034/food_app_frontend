import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cuisineApi } from '../hooks/searchRestaurant';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from 'react';
import {useSelector} from "react-redux"


const FilterSearch = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   const themeSwitcher =  useSelector((store)=> store.theme.switch)



    const filterData = useRef()




    const searchByCuisine = cuisine => {
        cuisineApi(cuisine, dispatch);
        navigate('/cuisine');
    };
    


  useGSAP((context,contextSafe)=>{
    gsap.from("li",{
     x:-500,
     duration : 0.5,
     opacity : 0,
     ease : "back",
    })

  },{scope:filterData})




    return (
        <div className={` p-4 ${themeSwitcher ? ' bg-gray-900 text-white' : 'bg-gray-100' } rounded-md my-5 w-[85%] mx-auto`}>
            <ul className="flex gap-4"
             ref={filterData}
            >
                <li>
                    <button
                        className=" hover:text-orange-600 focus:outline-none px-4 py-2 rounded-md shadow-md border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => searchByCuisine('indian')}
                    >
                        <div className=' w-14'>
                        <img src="https://img.freepik.com/premium-vector/indian-cuisine-spices-icon-with-culinary-seasoning_8071-9904.jpg" alt="" />
                       <h1>Indian</h1> 
                       </div>
                    </button>
                </li>
                <li>
                    <button
                        className=" hover:text-orange-600 focus:outline-none px-4 py-2 rounded-md shadow-md border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => searchByCuisine('italian')}
                    >
                        <div className=' w-14'>
                    <img src="https://img.freepik.com/premium-vector/italian-food-logo-icon-vector-template_10060-657.jpg" alt="" />
                    <h1>Italian</h1>
                    </div>
                    </button>
                </li>
                <li>
                    <button
                        className=" hover:text-orange-600 focus:outline-none px-4 py-2 rounded-md shadow-md border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => searchByCuisine('thai')}
                    >
                        <div className=' w-14'>
                        <img src="https://c8.alamy.com/comp/2JCK35Y/thailand-food-festival-logo-vector-illustration-design-2JCK35Y.jpg" alt="" />
                        <h1> Thai</h1>

                       </div>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default FilterSearch;
