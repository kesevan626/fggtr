import React, {useState} from "react";
import {IoMdCart} from "react-icons/io";
import sandwich from "../Assets/Images/Sandwich.png";
import CartItems from "./CartItems.js";
import {useGlobalContext} from "../Context/Context.js";
import {Link} from "react-router-dom";
import {FaFacebook, FaWhatsapp} from "react-icons/fa";
import {AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";

const Navbar = () => {

const {cartItems, quantity} = useGlobalContext();	
const [openNav, setOpenNav]	= useState(false);
const [openCart, setOpenCart] = useState(false);
const [navBarBg, setNavBarBg] = useState(false);

const changeNavBarBg = () => {
	window.scrollY >= 60 ? setNavBarBg(true) : setNavBarBg(false)
};

window.addEventListener("scroll", changeNavBarBg);
	
	return (
		  <>
		     <nav className={navBarBg ? "nav nav_bg" : "nav"}>
		       <div className="logo">
		         <img className="fast_food" src={sandwich} alt="logo"/>
		         <h3>Foodoo</h3>
		       </div>
		       {/****menu list**/}
		       <div className={openNav ? "menu_list show_menu" : "menu_list"}>
		         <span onClick={() => setOpenNav(false)}>&times;</span>
		         <ul>
		           <li><Link to="/">Home</Link></li>
		           <li><Link to="/about">About</Link></li>
		           <li><Link to="/login">Login/Signup</Link></li>
		           <li><a href="#Contact">Contact</a></li>
		         </ul>
		         {/***social icons***/}
		         <div className="social_icons">
		          <div className="logo">
		            <img className="fast_food" src={sandwich} alt="logo"/>
		           <h3>Foodoo</h3>
		         </div>
		       <div className="social_links">
		         <FaFacebook/>
		         <AiFillTwitterCircle/>
		         <AiFillLinkedin/>
		         <FaWhatsapp/>
		       </div>
		         </div>
		       </div>
		       
		         <div className="cart_icon" onClick={() => setOpenCart(true)}>
		            <IoMdCart className="cart"/>
		            <span>{quantity}</span>
		         </div>
		         {openCart && (
		      <section className={openCart ? "cart_items show_cart" : "cart_items"}>
		         <CartItems cartItems={cartItems} setOpenCart={setOpenCart}/>
		         </section>
		         )}
		         <button className="humburger" onClick={() => setOpenNav(true)}>
		           <div className="ham_01"></div>
		           <div className="ham_02"></div>
		           <div className="ham_03"></div>
		         </button>
		     </nav>
		  </>
		)
}


export default Navbar