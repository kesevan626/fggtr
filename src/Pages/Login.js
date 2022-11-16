import Navbar from "../Components/Navbar.js";
import Contact from "../Components/Contact.js";
import React, {useEffect, useState} from "react";
import {FcGoogle} from "react-icons/fc";
import {toast} from "react-toastify";


const Login = () => {
	
	const [form, setForm] = useState({
		email: "",
		password: ""
	});
	const [error, setError] = useState("");
	
	const updateField = e => {
		const inputValue = {
			[e.target.name]: e.target.value,
		};
		setForm(inputValue);
	}
	
	const onSubmitForm = e => {
		e.preventDefault();
		const {email, password} = form;
		if(!email) {
			setError("Please enter input")
		}else {
			setError("")
		}
		!password ? setError("Please enter input") : setError("");
		if(email !== "" && password !=="") {
			toast.warn("Login succesful but no authentication for now!", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000,
			})
		}
	}
	
	useEffect(() => {
		window.scrollTo(0,0)
	}, []);
	return (
		  <>
		    <Navbar/>
		    <section className="login">
		      <div className="login_infos">
		        <h2>Your Account For Ordering</h2>
		        <form onSubmit={onSubmitForm}>
		          <input type="email" placeholder="example@gmail.com" name="email" value={form.email} onChange={updateField}/>
		          {error && <small>{error}</small>}
		          <input type="password" placeholder="Enter password" name="password" value={form.password} onChange={updateField}/>
		          {error && <small>{error}</small>}<br/><br/>
		          <span><a href="#">Forgot password ?</a></span>
		          <button type="submit">
		            Login
		          </button>
		          <button className="signin">
		            <FcGoogle className="google"/> Signin with Google
		          </button>
		          <span>Not a member ? <a href="#">Sign up</a></span>
		        </form>
		      </div>
		    </section>
		    <Contact/>
		  </>
		)
}

export default Login