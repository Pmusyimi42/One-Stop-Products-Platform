import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
// import UserDetails from './components/UserDetails';
import SingleProduct from './components/SingleProduct';
import Navbar from "./components/Navbar";
import Products from "./pages/products";

import AddProducts from './components/AddProduct';
import Preview from './components/Preview';
// import AddProductForm from './components/AddProductForm';
// import UserDetails from './components/UserDetails';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import AddNewUser from './components/AddNewUser';
import EditProduct from "./components/EditProduct";
import UserDetials from "./components/UserDetials";



export default function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/singleproduct" component={SingleProduct} />
          <Route path="/userdetails" component={UserDetials} />
           <Route path='/add_products' component={AddProducts} />
           <Route path='/editproduct' component={EditProduct} />
          <Route path='/products_list' component={ProductList} />
          <Route path='/dashboard' element={<Dashboard />} />


          {/* <Route path='/user_details' element={<UserDetails />} /> */}
        </Switch>
      </Router>
    </div>

  );
}
