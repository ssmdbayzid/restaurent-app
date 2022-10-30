import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Cart from '../Pages/Cart';
import Checkout from '../Pages/Checkout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import ProductDetails from '../Pages/ProductDetails';
import Shop from '../Pages/Shop';
import Signup from '../Pages/Signup';

const Router = () => {
    return (
        <Routes>
            <Route path='home' element={<Home />}/>
            <Route path='shop' element={<Shop />}/>
            <Route path='shop:id' element={<ProductDetails />}/>
            <Route path='cart' element={<Cart />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='log-in' element={<Login />}/>
            <Route path='sign-up' element={<Signup />}/>
        </Routes>
    );
};

export default Router;