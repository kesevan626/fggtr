import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Login from "./Pages/Login.js";
import ProductDetails from "./Pages/ProductDetails.js";
import './App.css';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer theme="dark"/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Product/:id" element={<ProductDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
