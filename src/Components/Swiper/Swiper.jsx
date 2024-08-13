

import React, { useState, useEffect } from 'react';
import styles from '../Swiper/Swiper.module.css';
import { motion } from 'framer-motion';

export default function Swiper() {
  const targetDate = new Date('2024-08-16T00:00:00'); // Set target date to 16 Aug 2024

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const text = "New Alamein Festival";
  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delay: 3,
      },
    },
  };

  const spanVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1 },
      transition: {
        staggerChildren: 0.05,
        delay: 3,
      },
    }
    return (
      <>
        <header className={`${styles.backGround} text-center`}>
          <video
            src="https://res.cloudinary.com/dnmwmrxmr/video/upload/v1723403780/efchy20cmirckyfljnqu.mp4"
            muted
            loop
            autoPlay
            className="start-0 end-0 top-0 bottom-0 position-absolute"
          ></video>
  
          <div className={`${styles.overlay} d-flex flex-column align-items-center justify-content-center`}>
            <motion.h1 variants={parentVariant} initial="hidden" animate="show" className={`${styles.lol}`}>
              {text.split('').map((char, index) => (
                <motion.span variants={spanVariants} key={index}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
  
            {/* Countdown Timer */}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-4">
              <div className="flex flex-col p-2 bg-gradient  rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": time.days }}></span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-gradient rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": time.hours }}></span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-gradient rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": time.minutes }}></span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-gradient rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                  <span style={{ "--value": time.seconds }}></span>
                </span>
                sec
              </div>
            </div>

            <a href='https://pace-r.com/' className='btn btn-outline-light  rounded-end-pill main-font mt-2 d-flex align-items-center justify-content-center'> Learn More</a>
          </div>
        </header>
      </>
    );
  };


//*************************************************************************************** */


<Swiper
grabCursor={true}
effect={'creative'}
creativeEffect={{
  prev: {
    shadow: true,
    translate: [0, 0, -400],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}}
className="mySwiper vh-100"
navigation={true}
pagination={pagination}
modules={[Pagination, Navigation, EffectCreative]}  >

<SwiperSlide className=' position-relative mobile hide '>
  <img src={images.fordEvent} alt="Ford QatarEvent" className='w-100 ' />

  <div className={`overlay d-flex  align-items-center justify-content-center  `}>

    <div className="caption  ">
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 ,delay:4}}
        
        className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>

      <motion.h1
        initial={{ y: -1000, x: 0 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 6 ,delay:4}} >
        <i className="fa-brands text-main fa-r-project fa-3x my-5"></i>
      </motion.h1>
      <motion.h1
        initial={{ x: 4000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 ,delay:4}}
        className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>



    </div>
  </div>

</SwiperSlide>
  {/************** /* 1 */}
<SwiperSlide className=' position-relative laptop  '>
  <img src={images.slide1} alt="opel Astra Car" className='w-100' />

  <div className={`overlay d-flex  align-items-center justify-content-center  `}>

    <div className="caption  ">
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 ,delay:4}}
        className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>

      <motion.h1
        initial={{ y: -1000, x: 0 }}
        animate={{ y: 0, x: 0 }}
        transition={{ duration: 6 ,delay:4}} >
        <i className="fa-brands text-main fa-r-project fa-3x my-5"></i>
      </motion.h1>
      <motion.h1
        initial={{ x: 4000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 ,delay:4}}
        className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>

<div className="container ">
<div className="row justify-content-center ">
<div className="col-12">
<div className="card ">
 
  <div className="card-body p-0 ">
    <div className="row text-center m-0">
      <div className="col-3  ">
        <h3 id="days" className="display-4">{timeLeft.days}</h3>
        <p>Days</p>
      </div>
      <div className="col-3 ">
        <h3 id="hours" className="display-4">{timeLeft.hours}</h3>
        <p>Hours</p>
      </div>
      <div className="col-3 ">
        <h3 id="minutes" className="display-4">{timeLeft.minutes}</h3>
        <p>Minutes</p>
      </div>
      <div className="col-3 ">
        <h3 id="seconds" className="display-4">{timeLeft.seconds}</h3>
        <p>Seconds</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

    </div>
  </div>

</SwiperSlide> 
  {/************** /* 2 */}

<SwiperSlide>
  <Swiper
    grabCursor={true}
    effect={'creative'}
    creativeEffect={{
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    }}
    className="mySwiper2 swiper-v"
    direction={'vertical'}
    spaceBetween={50}
    pagination={pagination}
    modules={[Pagination, EffectCreative]}>
    <SwiperSlide className='position-relative '>
      <img src={images.slide2} alt="Dodge Car" className='w-100' />

      <div className={`overlay`}></div>

    </SwiperSlide>
    <SwiperSlide className=' position-relative '>
      <img src={images.slide3} alt="Dodge Car" className='w-100' />

      <div className={`overlay`}></div>

    </SwiperSlide>
    <SwiperSlide className=' position-relative '>
      <img src={images.slide4} alt="Dodge Car" className='w-100' />

      <div className={`overlay`}></div>

    </SwiperSlide>
    <SwiperSlide className=' position-relative '>
      <img loading='lazy' src={images.slide5} alt="Dodge Car" className='w-100' />

      <div className={`overlay`}></div>

    </SwiperSlide>
    <SwiperSlide className=' position-relative '>
      <img loading='lazy' src={images.slide6} alt="Dodge Car" className='w-100' />

      <div className={`overlay`}></div>

    </SwiperSlide>

  </Swiper>
</SwiperSlide> 
  {/************** /* 3 */}

<SwiperSlide className=' position-relative '>

  <video   src={images.video} type="video/mp4" className='w-100' loop muted playsInline   autoPlay >
 
  </video>

  <div className="overlay">
    <div  className="caption d-flex justify-content-center align-items-center vh-100">
<h2   className={`main-font  text-center  mb-0 pb-lg-4 trt`}>AUTOVROOM EVENT</h2>
    </div>
  </div>

</SwiperSlide> 
  {/************** /* 4 */}

<SwiperSlide className=' position-relative '>

<video   src={images.video} type="video/mp4" className='w-100' loop muted playsInline   autoPlay >

</video>

<div className="overlay">
<div  className="caption d-flex justify-content-center align-items-center vh-100">
<div>
<h2   className={`main-font  text-center  mb-0 pb-lg-4 trt`}>AUTOVROOM EVENT 02</h2>
<h2   className={`main-font  text-center  mt-2 mb-0 pb-lg-4 trt`}>SOON</h2>



</div>
</div>
</div>

  </SwiperSlide> 
  {/************** /* 5 */}

<SwiperSlide className=' position-relative '>
  <img loading='lazy' src={images.slide8} alt="BMW Motocycle" className='w-100' />

  <div className={`overlay`}></div>

</SwiperSlide> 

</Swiper>

 

