import {TbCurrencyNaira} from "react-icons/tb"
import React, {useState, useEffect} from "react";
import Data from "../Assets/Data.js";
import {Link} from "react-router-dom";
import {useGlobalContext} from "../Context/Context.js";
import {useInView} from "react-intersection-observer";
import {toast} from "react-toastify";


const Products = () => {
	const {ref: topicRef, inView: topicInView} = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	const {ref:subRef, inView: subInView} = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});
	
	const {addCart, cartItems, removeItem} = useGlobalContext()
	
	const allCategory = ["All", ...new Set(Data.map(product => product.category))];
	const [products, setProducts] = useState(Data)
	const [categories] = useState(allCategory);
	
	const filterProducts = (category) => {
		 if(category === "All") {
		 	return setProducts(Data);
		 }
		 const newProducts = Data.filter(product => product.category === category);
		 return setProducts(newProducts);
	};
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	
	return (
		  <section id="Products" className="product">
		    <div className="product_head" ref={topicRef}>
		      <h2 className={topicInView ? "h2 dishes_up" : "h2"}>Popular Dishes</h2>
		      <span ref={subRef}><p className={subInView ? "p p_show" : "p"}>Qui error adipisci rem rerum officia ut fuga molestias vel deleniti consectetur</p></span>
		    </div>
		    <div className="select_btn">
		      {categories.map((category, index) => {
		      	return (
		      	  <button key={index} onClick={() => filterProducts(category)}>{category}</button>
		      	)
		      })}
		    </div>
		    <div className="product_list">
		      {products.map(product => {
		      	const {id, img, title, price, category_icon, time_icon, time} = product;
		      	const addToCart = () => {
		      		toast.success(`${title} added to cart😋`, {
		      			position: toast.POSITION.TOP_RIGHT,
		      			autoClose: 3000,
		      		});
		      		return addCart(product)
		      	};
		      	const removeFromCart = () => {
		      		toast.info(`${title} removed from cart☹️`, {
		      			position: toast.POSITION.TOP_LEFT,
		      			autoClose: 3000,
		      		});
		      		return removeItem(id)
		      	}
		      	
		      	return (
		      	  <div className="product_card" key={id}>
		      		<Link to={`/Product/${id}`}>
		      	    <div className="product_img">
		      	      <img src={img} alt={title}/>
		      	    </div>
		      	    </Link>
		      	    <div className="product_info">
		      	      <h4>{title}</h4>
		      	      <div className="cooking_time"><p>{time_icon}</p><p>{time}</p></div>
		      	      <div className="price">
		      	        <span><TbCurrencyNaira/>{price.toLocaleString()}</span>
		      	        {cartItems.some(cart => cart.id=== product.id) ? (
		      	        <h1 onClick={removeFromCart}>-</h1>) : (
		      	        <h1 onClick={() =>addToCart(product)}>+</h1>)}
		      	      </div>
		      	      <div className="tag">{category_icon}</div>
		      	    </div>
		      	  </div>
		      	)
		      })}
		    </div>
		  </section>
		)
}

export default Products