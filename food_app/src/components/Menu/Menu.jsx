import React from 'react';
import AllDish from './AllDish';
import TopPics from './TopPics';
import MenuThings from './MenuThings';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMenu } from '../../hooks/menu';
import Header from '../../pages/Header'



const Menu = () => {
  

  const {menu} = useSelector((store)=> store.menu)
  const menuSwitcher = useSelector((store)=> store.theme.switch)


const restaurant =menu?.data[0]?.restaurant

const dishes = menu?.data[0]?.dishes

const menuData = menu?.data[0]

console.log("dishes",dishes);
console.log("menu",menuData);



  return (
    <>
    <Header/>
    <div className='bg-slate-300 w-[80%] mx-auto shadow-inner p-6'>
     
    { restaurant && <MenuThings  restaurant={restaurant} menu={menuData}/>  }
      <h1 className='font-bold mr-14 inline-block'>Top pics</h1>
      <TopPics/>
      <div> 
        <h1 className='font-bold mr-14 inline-block'>Recomnended</h1>
     {dishes && dishes.map((elem)=>{
      return(
         <>
        <AllDish
         name={elem.name} price={elem.price}
          description={elem.description} key={elem._id}
          imageUrl={elem.imageUrl}
          />
        </>
      )
     })}   
       
      </div>
    </div>
    </>
  );
}

export default Menu;
