import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  Home  from './containers/home/home';
import Cart from './containers/cart/cart';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carts' element={<Cart />} />
      </Routes>
    </HashRouter>
    </Provider>
  </React.StrictMode>
);
