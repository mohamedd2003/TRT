import React, { useRef,useState,useEffect } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import{motion} from 'framer-motion'
import video from '../../assets/Video/bgVideo.mp4'

export default function Layout() {
  const videoRef= useRef();
  const [playbackRate] = useState(2);
  const [showSection, setShowSection] = useState(true);

  useEffect(() => {
     videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const timeoutId = setTimeout(() => {
    setShowSection(false);
  }, 3500);


  const text="Powered By Thunder Agency"
  const parentVarient={
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  }
  const spanVariants={
    hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
  }
  return (
   <>
      {showSection && (
        <section className="w-100 vh-100  position-absolute z-3">
          <video
            ref={videoRef}
            className={`${style.home_video}`}
            src={video}
            typeof="video/mp4"
            loop
            playsInline
            muted
            autoPlay
          ></video>
          <div className="position-absolute start-0 bottom-0 end-0 top-0 overlay ">
            <div className="caption d-flex justify-content-center align-items-center vh-100">
            <motion.h4 variants={parentVarient} initial="hidden" animate='show' className={`${style.thunder} text-white    `}>
                {text.split('').map((char, index) => (
                  <motion.span variants={spanVariants} key={index}>
                    {char}
                  </motion.span>
                ))}
                <i className="fa-solid fa-bolt fa-2xl text-info"></i>
              </motion.h4>

            </div>
          </div>
        </section>
      )}

      <Navbar />
      <Outlet />
   </>
  )
}
