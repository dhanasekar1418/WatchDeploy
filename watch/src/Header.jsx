import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Toolbar from './Toolbar';
import Navbar from './Navbar';

const Header = (props) => {
  const cart = useSelector((state) => state.cart.cartarray);
  console.log("props=> ",props);
  return (
    <header className="header">
      <div className="header-logo">
        <Link to= "/" className = "headin" ><h1>Tick Tock Times</h1></Link>
      </div>
      <Toolbar/>
      <nav className="header-nav">
        <ul>
          <li><Link to="/Login"><img src='account.png'style={{height:"35px", padding:"2px", width:"35px"}} /></Link></li>
          <li><Link to="/fav"><img src='favorite.png'style={{height:"35px", padding:"2px", width:"35px"}} /></Link></li>
          <li><Link to="/cart"><img src='shopping_cart.png' style={{height:"35px", padding:"2px", width:"35px"}}/></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



// Cart : {cart.length}