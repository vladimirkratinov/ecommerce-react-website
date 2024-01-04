import React from "react";
import { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [menu, setMenu] = React.useState('')
  const { getTotalCartItems } = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Toy Factory</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to="men">Men</Link> {menu === "men" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("plushies")}}><Link to="plushies">Plushies</Link> {menu === "plushies" ? <hr/> : <></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to="kids">Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
