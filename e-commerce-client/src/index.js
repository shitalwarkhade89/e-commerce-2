import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import AddProduct from './views/AddProduct/AddProduct';
import ProductDetail from './views/ProductDetail/ProductDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter ([
   {
    path:'/',
    element:<Home/>
   },
  {
    path: '/add',
    element:<AddProduct/>
  },
  {
    path:'/product-detail/:_id',
    element:<ProductDetail/>
  }

])





root.render(
<>
<RouterProvider router={router}/> 
</>
);


