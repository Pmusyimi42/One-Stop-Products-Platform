import React from 'react'
import './Navlink.css';
import image from './images/shoplogo3.png'
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";




function Navlink({search, setSearch}) {
  return (
    <div className='navlink'>
      <div className='p-2 mt-2'>
        <img src={image}/>
      </div>
      <div className='nav mt-3'>
        <nav className="navba">
          <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="text" value ={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
          </div>
        </nav>
        <div className="create mx-auto">
        <Link to={"/signup"} style={{ color: "black" }}>
          <BsFillPeopleFill />
            Account
         </Link>
      </div>
      
      <div className="cart">
          <Link to={"/cart"} style={{ color: "black" }}><BsBagCheckFill />Cart</Link>
      </div>
  
      </div>
      
      
      
    </div>
  )
}

export default Navlink