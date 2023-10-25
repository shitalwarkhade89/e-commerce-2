import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import AddProduct from './views/AddProduct/AddProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter ([
   {
    path:'/',
    element:<Home/>
   },
  {
    path: '/add',
    element:<AddProduct/>
  }

])





root.render(
<>
<RouterProvider router={router}/> 
</>
);


