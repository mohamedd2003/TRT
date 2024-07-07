import React, { useRef, useState, useEffect } from 'react';
import style from './Layout.module.css';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import video from '../../assets/Video/bgVideo.mp4';

const Layout = () => {
  const videoRef = useRef();
  const [playbackRate] = useState(2);
  const [showSection, setShowSection] = useState(false);
  const [lazyLoading, setLazyLoading] = useState(true);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);


 
  useEffect(() => {
    const firstTimeoutId = setTimeout(() => {
      setLazyLoading(false);
      setShowSection(true);
      const secondTimeoutId = setTimeout(() => {
        setShowSection(false);
      }, 4500);

      return () => clearTimeout(secondTimeoutId);
    }, 2000);

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
   


{lazyLoading&&
<div className='w-100 bg-black vh-100 position-absolute z-3 d-flex align-items-center justify-content-center'>
            <i className="fa-solid fa-circle-notch text-info fa-spin fa-10x"></i>
          </div>}

          {showSection && (
          <motion.section
            key="section"
            className="w-100 vh-100 position-absolute z-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <video
              ref={videoRef}
              className={`${style.home_video}`}
              src={video}
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
                    </motion.span>
                  ))}
                  <i className="fa-solid fa-bolt fa-2xl text-info"></i>
                </motion.h4>
              </div>
            </div>
          </motion.section>
        )}
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
