import { useState } from 'react'
import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import './NavBar.css'

function NavBar() {



  return (
    <>
    <nav>
    <ul>
        <li><Link to="home">Home</Link></li>
        <li><Link to="shop">Shop</Link></li>
        <li><Link className='shoppingCart nav' to="cart">Shopping Cart</Link></li>
    </ul>
    </nav>
   
    </>
  )
}

export {NavBar}


