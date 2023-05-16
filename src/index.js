import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './Component/Atom/Aboutus';
import Contact from './Component/Atom/Contact';
import Home from './Component/Atom/Home';
import Project from './Component/Atom/Project';
import Video from './Component/Atom/Video';
import Login from './Component/Atom/Login';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router1 =createBrowserRouter([
  {path:"/Login",
  element:<Login/>
  },
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"/AboutUs",
    element:<Aboutus/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path:"/Project",
    element:<Project/>
  },
  {
    path:"/Video",
    element:<Video/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router1}/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
