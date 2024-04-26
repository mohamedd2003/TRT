import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../../assets/Images/trans.jpg'



export default function Navbar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg  navbar-dark fixed-top  z-2">
  <div className="container-fluid px-5 py-1">
  <img src={logo} alt="TRT-Log" className={`  ${style.logo}`} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse  ${style.navbar_collapse} ${style.varelaRegular} `}id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item mt-3 ">
          <Link className=' nav-link text-center text-main active ' aria-current="page" to='/home'>Home</Link>
        </li>
 
        <li className="nav-item mt-3 ">
          <Link className={` nav-link text-center   `} to='/about'>About</Link>
        </li>
      
    
        <li className="nav-item mt-3 ">
          <Link className={` nav-link text-center   `} to='/events'>Events</Link>
        </li>
        <li className="nav-item mt-3 ">
          <Link className={` nav-link text-center   `} to='/contact'>Contact</Link>
        </li>
    
    
    
      </ul>
      
    </div>
  </div>
</nav>
   </>
  )
}
