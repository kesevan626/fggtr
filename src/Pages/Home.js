import Navbar from "../Components/Navbar.js";
import Main from "../Components/Main.js";
import Service from "../Components/Service.js";
import Howitwork from "../Components/Howitwork.js";
import Gallery from "../Components/Gallery.js";
import Contact from "../Components/Contact.js";
import Products from "../Components/Products.js";
import React, {useEffect} from "react";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	return (
		  <>
		     <Navbar/>
		     <Main/>
		     <Howitwork/>
		     <Service/>
		     <Products/>
		     <Gallery/>
		     <Contact/>
		  </>
		)
};

export default Home