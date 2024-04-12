import React from 'react'
import Cards from '../components/Cards'
import { useSelector } from 'react-redux'
import Header from './Header'


const SearchCuisine = () => {

  const cuisineData = useSelector((store)=> store.restaurant.searchCuisine)
  
  const data = cuisineData?.data[0]?.resId

  if(!data){
    return
  }



  return (
    <div>
        <Header/>
        <h1 className=' text-3xl m-2 p-2 font-semibold'>Indian</h1>
        <div className=' my-6'>
        <Cards data={data}/>
        </div>
     
    </div>
  )
}

export default SearchCuisine