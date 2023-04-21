import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          {/* authenticated users */}
          <Route path='/user_details' element={<UserDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import SingleProduct from './components/SingleProduct';
import AddNewUser from './components/AddNewUser';

function App() {
  return (
    <div className="App">

      <SingleProduct/>
      <AddNewUser/>

    </div>
>>>>>>> 52a18f8169151b77cad4fb854ea2dde3028c480c
  );
}

export default App;
