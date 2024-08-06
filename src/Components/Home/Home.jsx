import React, { useEffect } from 'react'
import './Home.module.css';

import { Link } from 'react-router-dom';
import styles from "../Home/Home.module.css"
//********************************************* */
//Framer-Motion library Imports
import { motion } from 'framer-motion'

//********************************************* */
//Swiper library Imports
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Pagination, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css/navigation';
//********************************************* */
// image imports
import images from '../Images/Images';
import About from '../About/About';

import Marquee from '../slider/slider'
import GallerySection from '../GallerySection/GallerySection';
import EventsSection from '../EventsSection/EventsSection';



export default function Home() {
  

  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
 
  const lineStyle={
    background: 'linear-gradient(to right, rgb(39, 1, 1), #ff0014)',
    width: '80px',
    height: '5px',
    margin: '0 20px',
    marginRight: '40px',
    padding: '0px',
    display:' inline-block',
    transform: 'translateY(-20px)',
    borderRadius: '0',
       }

  return (
    <>

      
      <section id='hero'  >
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

          <SwiperSlide className=' position-relative mobile '>
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
      </section>
<Marquee lineStyle={lineStyle}/>
      

      <section id='title'>
      <div className='bg-black'>
        <h2 data-aos-duration='1000' data-aos="fade-down" className={`main-font bg-black text-center  mb-0 pb--lg-4 trt`}>TRT</h2>
        <h2 data-aos-duration='1000' data-aos="fade-up" className={`main-font bg-black text-center   mb-0 trt`}>THE RIGHT TRACK</h2>

      </div>
      </section>
      <About />

    <GallerySection/>

{/* /*********************************EVENTS ************************************ */}
<EventsSection/>


      <section id='sponsers' className='bg-black py-5'>
        <div className='m-auto text-center'>
        <h2 data-aos='fade-down' 
        data-aos-duration='1000' 
        className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR SPONSERS</h2>
        </div>

        <div className="marquee bg-black  mt-5">
          <div className="marquee-content-logos">
            
            <img src={images.logo1} className='mx-3 mx-sm-5'  width={250}  height={150} />
            <img src={images.logo2} className='mx-3 mx-sm-5' width={250}  height={150} />
            <img src={images.logo3} className='mx-3 mx-sm-5' width={250}  height={100} />
            <img src={images.logo4} className='mx-3 mx-sm-5' width={250}  height={80} />
            <img src={images.logo1} className='mx-3 mx-sm-5'  width={250}  height={150} />
            <img src={images.logo2} className='mx-3 mx-sm-5' width={250}  height={150} />
            <img src={images.logo3} className='mx-3 mx-sm-5' width={250}  height={100} />
            <img src={images.logo4} className='mx-3 mx-sm-5' width={250}  height={80} />
          </div>
        </div>

              




      </section>

      <section id='tickets' className='bg-black py-5'>
       
      <div className='m-auto text-center'>
        <h2 data-aos='fade-down' 
        data-aos-duration='1000' 
        className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>G</span>ET TICKETS</h2>
        </div>
<div className="container">
  <div className="row mt-3 g-3 text-white">
      <div className="col-md-4 " data-aos='fade-down' data-aos-duration='1000'>
    <div className="ticket gradient rounded-bottom-circle p-3">
    <div className="text-center">
    <h2 className={`main-font  Text-white text-center trtSmall`}>CAR OWNER</h2>

        <h5  className='main-font text-main'>TICKET</h5>
         <div className="d-flex justify-content-center main-font ">

        <h2 className='text-decoration-line-through me-5'>350 LE</h2>
        <h2>300 LE</h2>
        </div>

      <a href='' className='btn btn-outline-danger text-white main-font rounded-pill'> Get Ticket</a>
    </div>
      </div>
    </div>
    <div className="col-md-4" data-aos='fade-down' data-aos-duration='1000'>
    <div className="ticket gradient rounded-bottom-circle p-3">
    <div className="text-center">
    <h2 className={`main-font  Text-white text-center  trtSmall`}>PHOTOGRAPHER</h2>
        <h5  className='main-font text-main'>TICKET</h5>
         <div className="d-flex justify-content-center main-font ">

        <h2 className='text-decoration-line-through me-5'>350 LE</h2>
        <h2>300 LE</h2>
        </div>

      <a href='' className='btn btn-outline-danger text-white main-font rounded-pill'> Get Ticket</a>
    </div>
      </div>
    </div>
    <div className="col-md-4" data-aos='fade-down' data-aos-duration='1000'>
    <div className="ticket gradient rounded-bottom-circle p-3">
    <div className="text-center">
    <h2 className={`main-font  Text-white text-center  trtSmall`}>Fans</h2>
        <h5  className='main-font text-main'>TICKET</h5>
        <div className="d-flex justify-content-center main-font ">

        <h2 className='text-decoration-line-through me-5'>350 LE</h2>
        <h2>300 LE</h2>
        </div>

      <a href='' className='btn btn-outline-danger text-white main-font rounded-pill'> Get Ticket</a>
    </div>
      </div>
    </div>
  </div>
</div>
      </section>
    </>
  )
}
