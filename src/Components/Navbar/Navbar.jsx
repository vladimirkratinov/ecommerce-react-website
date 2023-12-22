import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

export default function Navbar() {
  const [menu, setMenu] = React.useState('')

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("men")}}>Men {menu === "men" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("women")}}>Woman {menu === "women" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids {menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
