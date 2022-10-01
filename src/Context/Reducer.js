const storage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

export const initialState = {
	cartItems: storage,
	total: 0,
	quantity: 0
};

export const Reducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		return {...state, cartItems: [...state.cartItems, {...action.payload, quantity: 1}]}
	};
	if(action.type === "REMOVE_ITEM") {
		const newItem = state.cartItems.filter(cart => cart.id !== action.payload);
		return {...state, cartItems: newItem}
	};
	if(action.type === "CLEAR_CART") {
		return {...state, cartItems: []}
	};
	if(action.type === "INCREASE") {
		const newCart = state.cartItems.map(cart => {
			if (cart.id === action.payload) {
				return {...cart, quantity: cart.quantity +1}
			}
			return cart;
		});
		return {...state, cartItems: newCart}
	};
  if(action.type === "DECREASE") {
		const newCart = state.cartItems.map(cart => {
			if (cart.id === action.payload) {
				return {...cart, quantity: cart.quantity - 1}
			}
			return cart;
		}).filter(cart => cart.quantity !== 0)
		return {...state, cartItems: newCart}
	};
	if(action.type === "GET_TOTAL") {
		const {total, quantity} = state.cartItems.reduce((cartTotal, cart) => {
			const {price, quantity} = cart
			cartTotal.total += quantity * price;
			cartTotal.quantity += quantity;
			return cartTotal;
		}, {
			total:0, quantity:0
		})
		return {...state,total,quantity}
	}
	return state;
};
