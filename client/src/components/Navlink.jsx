import React from 'react'
import './Navlink.css';
import image from './images/shoplogo3.png'
import { BsFillPeopleFill } from "react-icons/bs";

function Navlink() {
  return (
    <div className='navlink'>
      <div>
        <img src={image}/>
      </div>
      <div className='nav mt-4'>
        <nav className="navba">
          <div className="container-fluid">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
          </div>
        </nav>  
      </div>
    </div>
  )
}

export default Navlink