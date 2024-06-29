import React, { useRef,useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import logo from '../../assets/Images/trans.jpg'



export default function Navbar() {
  
  
 return (
   <>
   
   <nav  className="navbar navbar-expand-lg   navbar-dark fixed-top  z-2">
  <div className="container-fluid  py-1">
  <img src={logo} alt="TRT-Log" className={`  ${style.logo}`} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse  ${style.navbar_collapse} ${style.font} `}id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  ">
        <li className="nav-item mt-3 ">
          <a className=' nav-link text-center  main-font text-main active ' aria-current="page" href='#hero'>Home</a>
        </li>
 
        <li className="nav-item mt-3 ">
          <a className={` nav-link text-center  main-font  `} href='#about'>About</a>
        </li>
      
    
        <li className="nav-item mt-3 ">
          <Link className={` nav-link text-center  main-font  `} to='/events'>Events</Link>
        </li>
        <li className="nav-item mt-3 ">
          <Link className={` nav-link text-center  main-font  `} to='/contact'>Contact</Link>
        </li>
    

        <li className="nav-item mt-4  text-center main-font " >
          <Link className={` rounded-pill   btn btn-outline-danger mx-3 `} to=''>Get Ticket</Link>
        </li>
    
    
      </ul>
      
    </div>
  </div>
</nav>

   </>
  )
}
