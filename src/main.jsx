import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import { NavBar } from './components/NavBar.jsx';
import { Home } from './components/Home.jsx';
import { Shop } from './components/Shop.jsx';
import { ShopCart } from './components/ShopCart.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      { index: true, element: <Shop /> }, 
      { path: "home", element: <Shop /> },
      { path: "shop", element: <Shop /> },
      {path:"cart", element: <ShopCart />}
    ],
  }

]);

createRoot(document.getElementById('root')).render(
  /* <StrictMode> */
     <RouterProvider router={router} />
  /*</StrictMode>, */
)
