import sandwich from "../Assets/Images/Sandwich.png"
import {FaFacebook, FaWhatsapp} from "react-icons/fa";
import {AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";

const Contact = () => {
	return (
		  <section id="Contact" className="contact">
		       <div className="logo">
		         <img className="fast_food" src={sandwich} alt="logo"/>
		         <h3>Foodoo</h3>
		       </div>
		       <span className="location">Yaba, Lagos State, Nigeria 🇳🇬</span><br/><br/>
		       <span className="timing">Open : 09:00am - 3:00pm</span><br/><br/>
		       <a href="tel:09128281191">(+234) 9128281191</a><br/><br/>
		       <a href="mail to: jhakejhosh@gmail.com">jhakejhosh@gmail.com</a>
		       <div className="social_links">
		         <FaFacebook/>
		         <AiFillTwitterCircle/>
		         <AiFillLinkedin/>
		         <FaWhatsapp/>
		       </div>
		       <footer>
		         <h5>© Designed and developed by Jacob Joshua 👩‍💻. All rights reserved</h5>
		       </footer>
		  </section>
		)
}

export default Contact;