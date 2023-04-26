import React, { useState,useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';

import SingleProduct from './components/SingleProduct';
import Navbar from "./components/Navbar";
import Products from "./pages/products";
import About from "./pages/About";
import Cart from "./components/Cart";


import SignUpForm from "./components/SignUpForm";

import AddProducts from './components/AddProduct';

import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import AddNewUser from './components/AddNewUser';
import EditProduct from "./components/EditProduct";
import UserDetials from "./components/UserDetails";
import AdminSection from "./components/AdminSection";
import Footer from "./components/layout/Footer";




export default function App() {

  const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch("/users/2")
         .then((response) => response.json())
         .then((data) => {
            setCart(data.cart)
         })
        //  console.log(refresher)
    },[]);

function removeFromCart(id){
    setCart(cart.filter((crt)=>{
        return crt.id !== id 
    }))
}

function addToCart(cart_item){
  if (cart.find((item)=> item.id === cart_item.id)){
    setCart(cart.map((cartItem)=>{ 
      if (cartItem.id === cart_item.id){
        return cart_item
      }else{
        return cartItem
      }
    }))
  }else{
    setCart([...cart, cart_item])
  }
}
 
function changeQuantity(qty, item_id){
    fetch(`/cart_items/${item_id}`,{
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: qty,
        }),
       })
       .then((res) => res.json())
       .then((data) => {
          setCart(cart.map((crt) =>{
             if (crt.id === item_id) {
                return {...crt, quantity: data.quantity}
             }else{
                return crt
             }
          }))
       })
}



  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home n={cart.length} addToCart={addToCart}/>} />
          <Route path="/userdetails" element={<UserDetials/>} />
          <Route path='/add_products' element={<AddProducts/>} />
          <Route path='/editproduct' element={<EditProduct/>} />
          <Route path='/products_list' element={<ProductList/>} />
          <Route path='/adminsection' element={<AdminSection/>} />
          <Route path='/signup' element={<SignUpForm/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} changeQuantity={changeQuantity} removeFromCart={removeFromCart}/>} />
          <Route path="/products" element={<Products n={cart.length} addToCart={addToCart}/>} />
          <Route path="/about" element={<About/>} /> 
          <Route path="/product_categories/:id" element={<SingleProduct addToCart={addToCart}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>

  );
}
  
