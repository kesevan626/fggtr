import React, {useContext, useReducer, useEffect} from "react";
import {Reducer, initialState} from "./Reducer.js";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	
	const [state, dispatch] = useReducer(Reducer, initialState);
	
	const addCart = (item) => {
	 dispatch({type: "ADD_TO_CART", payload: item});
	};
	
	const removeItem = (id) => {
		dispatch({type: "REMOVE_ITEM", payload: id})
	}
	
	const clearCart = () => {
		dispatch({type: "CLEAR_CART"})
	}
	const increase = (id) => {
		dispatch({type: "INCREASE", payload: id})
	}
  const decrease = (id) => {
		dispatch({type: "DECREASE", payload: id})
	}
	//storing items in localstorage
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
	}, [state]);
	
	useEffect(() => {
		dispatch({type: "GET_TOTAL"})
	}, [state.cartItems]);
	
	
	return <AppContext.Provider value={
		{...state, addCart, removeItem, clearCart, increase, decrease}
	}>{children}</AppContext.Provider>
};

export const useGlobalContext = () => {
	return useContext(AppContext)
};

export default AppProvider