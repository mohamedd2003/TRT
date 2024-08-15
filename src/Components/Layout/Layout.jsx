import React, { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { motion } from 'framer-motion';
import style from "./Layout.module.css";
import Lazy from "../LazyLoading/LazyLoading";
import Footer from '../Footer/Footer';

const Navbar = lazy(() => import('../Navbar/Navbar'));

const Layout = () => {
  const videoRef = useRef();
  const [playbackRate] = useState(2);
  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    const firstTimeoutId = setTimeout(() => {
      setShowSection(false); // Hide the section after typing effect ends
    }, 3000); // Adjust the duration based on the length of the typing effect

    return () => clearTimeout(firstTimeoutId);
  }, []);

  const text = "Powered By Thunder Agency";
  const parentVarient = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const spanVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
{/* {document.addEventListener('contextmenu', (event) => event.preventDefault())}
{document.addEventListener('keydown', (event) => {
  if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
    event.preventDefault();
  }
})} */}
<div className='position-fixed top-75 start-0 bg-main  px-2 py-5 rounded-end-pill d-flex flex-column z-3'>

            
<a href="https://www.instagram.com/trt.eg/"  target='_blank'  >  <i className="fa-brands fa-instagram fa-xl  text-white  "></i></a>
<a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u'target='_blank'   className='text-dark'>
<i className="fa-brands fa-tiktok fa-xl  text-white    mt-4 "></i>
</a>


  
          </div>
 
      <Analytics />
     
        {showSection && (
          <motion.section
            key="section"
            className="w-100 vh-100 position-absolute z-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video
              ref={videoRef}
              className={`${style.home_video}`}
              src='https://res.cloudinary.com/dnmwmrxmr/video/upload/f_auto:video,q_auto/gjsh9na7vqmbzodahcyz'
              type="video/mp4"
              loop
              playsInline
              muted
              autoPlay
            ></video>
            <div className="position-absolute start-0 bottom-0 end-0 top-0 overlay">
              <div className="caption d-flex justify-content-center align-items-center vh-100">
                <motion.h4
                  variants={parentVarient}
                  initial="hidden"
                  animate="show"
                  className={`${style.thunder} thunderFont text-white`}
                >
                  {text.split('').map((char, index) => (
                    <motion.span variants={spanVariants} key={index}>
                      {char}
                    </motion.span>))}
                  <i className="fa-solid fa-bolt fa-2xl text-info"></i>
                </motion.h4>
              </div>
            </div>
          </motion.section>
        )}
        <Navbar />
        <Outlet />
        <Footer/>
     
    </>
  );
};

export default Layout;
