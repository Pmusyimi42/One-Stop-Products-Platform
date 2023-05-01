import React from 'react'
import './Navlink.css';
// import { NavLink } from 'react-router-dom';
import image from './images/shoplogo3.png'
import { Link, useNavigate } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";




function Navlink({search, setSearch,n,setToCart}) {
const user = localStorage.getItem("user")
const navigate = useNavigate();
const logout = () =>{
  setToCart()
  localStorage.clear();
  navigate("/login")
}

  return (
    <div className='navlink flex-row flex-wrap'>
      <div>
        <img src={image}/>
      </div>
      <div className='nav mt-5'>
        <nav className="navba ">
          <div className="container-fluid">
          <div className="d-flex" role="search">
            <input className="form-control me-2" type="text" value ={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </div>
          </div>
        </nav>  
      </div>
      <div className='mb-12'>   
      <div className="create">
      <Link to={"/signup"} style={{ color: "black", textDecoration: "none" }}>
        <BsFillPeopleFill />
        Sign Up
      </Link>
      </div>
 
 {user? (<>
      <div className="create">
        <Link to={"/login"}  onClick = {logout} style={{ color: "black", textDecoration: "none"  }}>
          <BsPersonCheckFill />
            Logout
        </Link>
      </div> </>) : 
      (<>
       <div className="create">
      <Link to={"/login"}  style={{ color: "black", textDecoration: "none"  }}>
          <BsPersonCheckFill />
            Login
        </Link>
        </div> </>)
}
                
      
      <div className="cart">
        <div>{n}</div>
          <Link to={"/cart"} style={{ color: "black",textDecoration: "none" }}><BsBagCheckFill />Cart</Link>
      </div>

     </div>
      
    </div>
  )
}

export default Navlink