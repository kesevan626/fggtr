import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {TbCurrencyNaira} from "react-icons/tb"
import Data from "../Assets/Data.js";
import Navbar from "../Components/Navbar.js";
import Contact from "../Components/Contact.js";
import {Link} from "react-router-dom";

const ProductDetails = () => {
	
  const {id} = useParams();
	const idProduct = Data.find(product => product.id === id
	);
	const {img, price, category_icon,  title, desc, category} = idProduct;
	const sameCategoryProducts = Data.filter(product => product.category === idProduct.category);
	const similarProducts = sameCategoryProducts.filter(product => product.id !== idProduct.id);
	
	useEffect(() => {
		window.scrollTo(0,0);
	}, [idProduct])
	
	return (
		  <>
		    <Navbar/>
		    <section className="product_details">
		    <div>
		      <Link to="/"><h3>Home /</h3></Link>
		      <div className="detail_img">
		        <img src={img} alt={title}/>
		      </div>
		      </div>
		      <div className="details">
		        <h2>{title}</h2>
		        <span>{category_icon}</span>
		        <h5>Description</h5>
		        <p>{desc}</p>
		        <div className="category">
		          <h4>Category :</h4>
		          <small>{category}</small>
		        </div>
		        <div className="category">
		          <h4>Price :</h4>
		          <small><TbCurrencyNaira/>{price.toLocaleString()}</small>
		        </div>
		      </div>
		    </section>
		    <section className="similar_products">
		      <h2>Similar Products</h2>
		      <div className="similar_list">
		        {similarProducts.map((product) => {
		         	const {id, img, title, price, category_icon, time_icon, time} = product;
		         	return (
		      		<Link to={`/Product/${id}`}>
		      	  <div className="product_card" key={id}>
		      	    <div className="product_img">
		      	      <img src={img} alt={title}/>
		      	    </div>
		      	    <div className="product_info">
		      	      <h4>{title}</h4>
		      	      <div className="cooking_time"><p>{time_icon}</p><p>{time}</p></div>
		      	      <div className="price">
		      	        <span><TbCurrencyNaira/>{price.toLocaleString()}</span>
		      	        <h1>+</h1>
		      	      </div>
		      	      <div className="tag">{category_icon}</div>
		      	    </div>
		      	  </div>
		      	  </Link>
		         		)
		        })}
		      </div>
		    </section>
		    <Contact/>
		  </>
		)
};

export default ProductDetails;