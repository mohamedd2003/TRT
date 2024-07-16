import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../assets/Images/trans.png';

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top z-2 ${navBackground ? style.scrolled : ''}`}>
        <div className="container-fluid py-1">
          <img src={logo} alt="TRT-Log" className={style.logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${style.navbar_collapse} ${style.font}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font " aria-current="page" to="">Home</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="aboutPage">About</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="gallery">Gallery</NavLink>
              </li>

              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="events">Events</NavLink>
              </li>
              <li className="nav-item mt-3">
                <NavLink className="nav-link text-center main-font" to="contact">Contact</NavLink>
              </li>
              <li className="nav-item mt-4 text-center main-font">
                <Link className="rounded-pill btn btn-outline-danger mx-3" to="">Get Ticket</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
