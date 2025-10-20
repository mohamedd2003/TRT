


import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import images from '../Images/Images';
import { UserContext } from '../../Context/Users/UsersContext';
export default function Navbar() {
  const {userLogin,setUserLogin,setUserId}=useContext(UserContext)
  
  
  const [navBackground, setNavBackground] = useState(false);
  const navigate=useNavigate()
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };



  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
let handleLogout=()=>
{
  localStorage.removeItem('IP')
  setUserLogin(null)
  localStorage.removeItem('ID')
  setUserId(null)
  navigate('/register')
}
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top z-3 ${navBackground ? style.scrolled : ''}`}>
        <div className="container-fluid py-1 ">
          <img src={images.ministry} alt="Ministry Logo" width={100} height={100} />

          <Link to={'/'}>
           <img src={images.trt} alt="TRT-Log" className='m-auto' width={180} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

        
          
          </button>
         
          <div className={`collapse navbar-collapse ${style.navbar_collapse} ${style.font}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">

            
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" aria-current="page" to="" onClick={closeNavbar}>Home</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="aboutPage" onClick={closeNavbar}>About</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="gallery" onClick={closeNavbar}>Gallery</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-center main-font pt-4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </a>
                <ul className="dropdown-menu bg-black">
                <li className="nav-item mt-3">
                    <NavLink className="nav-link text-center main-font" to="/newAlalmein" onClick={closeNavbar}>New Alalamein Event</NavLink>
                  </li>
                  <li className="nav-item mt-3">
                    <NavLink className="nav-link text-center main-font" to="/autovroomEvent" onClick={closeNavbar}>Autovroom Event</NavLink>
                  </li>
                  <li className="nav-item mt-3">
                    <NavLink className="nav-link text-center main-font" to="/QatarEvent" onClick={closeNavbar}>Ford Qatar Event</NavLink>
                  </li>
                  <li className="nav-item mt-3">
                    <NavLink className="nav-link text-center main-font" to="/ElshroukEvent" onClick={closeNavbar}>ElShrouk Event</NavLink>
                  </li>
                  <li className="nav-item mt-3">
                    <NavLink className="nav-link text-center main-font" to="/CiuEvent" onClick={closeNavbar}>Ciu Event</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="contact" onClick={closeNavbar}>Contact</NavLink>
              </li>

              {userLogin ===null  ? <>
                <li className="nav-item mt-3 ">
                <Link className="nav-link text-center main-font fs-5 mt-lg-2  mb-2    text-white  " to="register" 
                onClick={closeNavbar}><span className='bg-main rounded-pill p-2'>Voting <i className="fa-solid fa-thumbs-up"></i></span> </Link>
              </li>

              </>:<>
              <li className="nav-item mt-3 ">
                <Link className="nav-link text-center main-font fs-5 mt-lg-2  mb-2    text-white  " to="voting" 
                onClick={closeNavbar}><span className='bg-main rounded-pill p-2'>Voting <i className="fa-solid fa-thumbs-up"></i></span> </Link>
              </li>
              <li className="nav-item mt-3 ">
                <button className="nav-link text-center main-font fs-5 mt-lg-2  mb-2    text-white  " 
                onClick={()=>handleLogout()}><span ><i className="ms-1 fa-solid fa-arrow-right-to-bracket fa-lg"></i></span> </button>
              </li>
              </>}
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
