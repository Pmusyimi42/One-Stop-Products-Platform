import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import SingleProduct from './components/SingleProduct';
import AddProducts from './components/AddProduct';
import Preview from './components/Preview';
// import AddProductForm from './components/AddProductForm';
// import UserDetails from './components/UserDetails';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import AddNewUser from './components/AddNewUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* authenticated users */}
          <Route path='/add_products' element={<AddProducts />} />
          <Route path='/products_list' element={<ProductList />} />
          <Route path='/single_product' element={<SingleProduct />} />
          <Route path='/dashboard' element={<Dashboard />} />


          <Route path='/user_details' element={<UserDetails />} />
        </Route>
        <Route path='/login' element={<div>This is login page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
