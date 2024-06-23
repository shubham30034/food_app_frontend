import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../utils/Slices/loginSlice';
import About from './About';
import Login from './Login';
import Body from './Body';
import Search from './Search';
import Menu from '../components/Menu/Menu';
import SearchCuisine from './SearchCuisine';
import Cart from './Cart';
import Help from './Help';
import Protected from '../protectedRoute/Protected';

const Home = () => {
  const token = localStorage.getItem('token');
  const { isAuthenticated } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(login());
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected isAuthenticated={isAuthenticated}/>}>
          <Route path='/about' element={<About />} />
          <Route path='/body' element={<Body />} />
          <Route path='/search' element={<Search />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cuisine' element={<SearchCuisine />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/support' element={<Help />} />
        </Route>
        <Route path='/' element={isAuthenticated ? <Navigate to="/body" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
