import burger from "../Assets/Images/Gallery_burger3.jpg";
import salad from "../Assets/Images/Gallery_salad2.jpg";
import bread from "../Assets/Images/Gallery_bread3.jpg";
import pizza from "../Assets/Images/Gallery_pizza3.jpg";
import Navbar from "../Components/Navbar.js";
import Contact from "../Components/Contact.js";
import React, {useEffect} from "react";

const About = () => {
	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
	return (
		<>
		  <Navbar/>
		  <section id="About" className="about">
		  <div>
		  <span>About</span>
		    <div className="about_head">
		      <h2>Discover more about us</h2>
		      <p>Lorem ipsum dolor sit amet. Vel dolor unde in dignissimos dolor et repellendus saepe qui laboriosam quia et doloribus repudiandae qui perspiciatis odit. Aut excepturi doloremque Eum provident eveniet in animi corporis aut porro voluptatem hic quia quisquam qui maiores deserunt. </p>
		    </div>
		    </div>
		    <div className="about_img">
		      <img src={salad} alt={salad}/>
		      <img src={burger} alt={burger}/>
		      <img src={pizza} alt={pizza}/>
		      <img src={bread} alt={bread}/>
		    </div>
		  </section>
		    <Contact/>
		 </>   
		)
}

export default About