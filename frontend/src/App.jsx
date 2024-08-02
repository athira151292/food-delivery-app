import React from 'react';
import Navbar from './components/NavBar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

const App = () => {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' element={<Cart />}></Route>
        <Route path='' element={<PlaceOrder />}></Route>
      </Routes>
    </div>
  );
};

export default App;
