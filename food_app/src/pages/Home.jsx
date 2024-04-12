import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import About from './About'
import Login from './Login'
import Body from './Body'
import Search from './Search'
import Menu from '../components/Menu/Menu'
import SearchCuisine from './SearchCuisine'
import Cart from './Cart'
import Help from './Help'



const Home = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route  path='/about'   element= {<About/>}/>
        <Route path='/' element={<Login/>} />
        <Route path='/body' element={<Body/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/cuisine' element={<SearchCuisine/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/support' element={<Help/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Home