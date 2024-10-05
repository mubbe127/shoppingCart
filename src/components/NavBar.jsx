import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import cartIcon from "../assets/cart.svg"
import "./NavBar.css";

function NavBar({items}) {


  let totalQuantity = Math.floor(
    items.reduce((prev, item) => prev + item.quantity, 0)
  );

  return (
    <>
      <nav>
        <ul>
          <div className="homeShop">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          </div>
          <li>
            <Link className="shoppingCart nav" to="cart">
              <div className="iconCart"><img src={cartIcon} alt=""/><p>{totalQuantity}</p></div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export { NavBar };
