import {HiOutlineArrowLeft} from "react-icons/hi";
import {MdOutlineRemoveShoppingCart} from "react-icons/md";
import {TbCurrencyNaira} from "react-icons/tb";
import {FaMoneyCheck, FaChevronUp, FaChevronDown} from "react-icons/fa";
import {useGlobalContext} from "../Context/Context.js";
import {Link} from "react-router-dom"

const CartItems = ({setOpenCart, cartItems}) => {
	
	const {removeItem, clearCart, increase, decrease, total, quantity} = useGlobalContext();
	
	return (
		  <>
		    <header>
		      <span onClick={() => setOpenCart(false)}><HiOutlineArrowLeft/></span>
		      <h3>Cart ({quantity})</h3>
		      <button className="clear_cart" onClick={clearCart}>
		        <span>clear cart</span>
		        <span className="times">&times;</span>
		      </button>
		    </header>
		    <main>
		     {cartItems.length < 1 ? (
		         <div className="no_cart">
               <MdOutlineRemoveShoppingCart/><br/><br/>
               <span>No items</span>
		         </div>
		      ) : (
		         <div className="list_container">{cartItems.map(cartItem => {
		         const {img, quantity, id, title, price} = cartItem
		         	return (
		         	  <div className="cart_list" key={id}>
		         	    <div className="cart_infos">
		         	      <div className="cart_img">
		         	        <img src={img} alt={title}/>
		         	      </div>
		         	      <div className="cart_text">
		         	        <h4>{title}</h4>
		         	        <p><TbCurrencyNaira/>{price.toLocaleString()}   x{quantity}</p>
		         	        <span onClick={() => removeItem(id)}>Remove</span>
		         	      </div>
		         	    </div>
		         	    <div className="qty">
		         	      <span onClick={() => increase(id)}><FaChevronUp/></span>
		         	      {quantity}
		         	      <span onClick={() => decrease(id)}><FaChevronDown/></span>
		         	    </div>
		         	  </div>
		         	)
		         })}
		         <div className="cart_footer">
		         <div className="total_price">
		           <h3>Total</h3>
		           <h3 className="price"><TbCurrencyNaira/>{total.toLocaleString()}</h3>
		         </div>
		         <Link to="/login"><button>Checkout <FaMoneyCheck/></button></Link>
		         </div>
		         </div>
		      )}
		    </main>
		  </>
		)
}

export default CartItems