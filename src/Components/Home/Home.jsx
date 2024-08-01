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
        <h2   className={`main-font  text-center  mb-0 pb-lg-4 ${styles.trt}`}>AUTOVROOM EVENT</h2>
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
<h2   className={`main-font  text-center  mb-0 pb-lg-4 ${styles.trt}`}>AUTOVROOM EVENT 02</h2>
<h2   className={`main-font  text-center  mt-2 mb-0 pb-lg-4 ${styles.trt}`}>SOON</h2>



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
        <h2 data-aos-duration='1000' data-aos="fade-down" className={`main-font bg-black text-center  mb-0 pb--lg-4 ${styles.trt}`}>TRT</h2>
        <h2 data-aos-duration='1000' data-aos="fade-up" className={`main-font bg-black text-center   mb-0 ${styles.trt}`}>THE RIGHT TRACK</h2>

      </div>
      </section>
      <About />

      <section id='gallery' className='bg-black py-5'>
        <div className='m-auto text-center'>
        <h2 data-aos='fade-down' data-aos-duration='1000' className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR GALLERY</h2>
          <h4 className='colourFont text-main' data-aos='fade-up'>
            PiCK COLOUR
          </h4>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <i className="fa-solid fa-fill-drip text-white fa-2x"></i>
            <li className="nav-item" role="presentation">
              <button className="nav-link active rounded-circle " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="text-main fa-solid fa-droplet fa-2x"></i></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  mx-2 " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className=" fa-solid text-orange fa-droplet fa-2x"></i></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i className=" fa-solid text-blue fa-droplet fa-2x"></i></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  " id="pills-yellow-tab" data-bs-toggle="pill" data-bs-target="#pills-yellow" type="button" role="tab" aria-controls="pills-yellow" aria-selected="false"><i className=" fa-solid text-yellow fa-droplet fa-2x"></i></button>
            </li>
         
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  " id="pills-white-tab" data-bs-toggle="pill" data-bs-target="#pills-white" type="button" role="tab" aria-controls="pills-white" aria-selected="false"><i className=" fa-solid text-white fa-droplet fa-2x"></i></button>
            </li>
          </ul>
        </div>
        <div className="tab-content " id="pills-tabContent">
        {/***************************** RED CARS ****************************/}
          <div className="tab-pane   active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
            <div className="container" data-aos='fade-down'> 
              <div className="row gy-2 ">

                <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img  src={images.BMW3} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                  <div className="car p-1">
                    <img  src={images.BMW4} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img  src={images.BMW1} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img  src={images.porscha} className='w-100 rounded-4 ' loading='lazy' alt="Porscha CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img  src={images.seat} className='w-100 rounded-4 ' loading='lazy' alt="seat CAR" />
                  </div>
                  <div className="car p-1">
                    <img  src={images.skoda} className='w-100 rounded-4 ' loading='lazy' alt="skoda CAR" />
                  </div>


                </div>


              </div>
            </div>
          </div>
        {/***************************** ORANGE CARS ****************************/}

          <div className="tab-pane " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.hyndai} className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel3} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100">
                    <img src={images.vw} className='w-100 rounded-4 h-100' loading='lazy' alt="vw CAR" />
                  </div>
                </div>

                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.opel4} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel2} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.opel1} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel5} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>


                </div>


              </div>
            </div>
          </div>
        {/***************************** BLUE CARS ****************************/}

          <div className="tab-pane " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
            <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.Seat} className='w-100 rounded-4 ' loading='lazy' alt="SEAT CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.honda} className='w-100 rounded-4 ' loading='lazy' alt="Honda CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100 ">
                    <img src={images.blueBmw} className='w-100 rounded-4 h-100' loading='lazy' alt="BMW CAR" />
                  </div>
                </div>

                  <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">
                      <img src={images.Hyndai} className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                    </div>
                    <div className="car p-1">
                      <img src={images.KIA} className='w-100 rounded-4 ' loading='lazy' alt="KIA CAR" />
                    </div>


                  </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car pt-1  ">
                    <img src={images.vrs} className='w-100 rounded-4 ' loading='lazy' alt="SKODA VRS CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.Seat4} className='w-100 rounded-4 ' loading='lazy' alt="seat CAR" />
                  </div>
               
                </div>



              </div>
            </div>
          </div>
        {/***************************** yellow CARS ****************************/}

        <div className="tab-pane " id="pills-yellow" role="tabpanel" aria-labelledby="pills-yellow-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.MIT1} className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.MIT2} className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100">
                    <img src={images.MIT3} className='w-100 rounded-4 h-100' loading='lazy' alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.vw4} className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.vw5} className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.yellowBmw} className='w-100 rounded-4 ' loading='lazy' alt="yellowBmw CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.yellowBmw2} className='w-100 rounded-4 ' loading='lazy' alt="yellowBmw CAR" />
                  </div>


                </div>


              </div>
            </div>
          
          </div>
      

            {/***************************** white CARS ****************************/}
            <div className="tab-pane " id="pills-white" role="tabpanel" aria-labelledby="pills-white-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.whiteVw01} className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.whiteVw02} className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.whiteSeat01} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.whiteSeat02} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.whiteBmw} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.HYNDAI} className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.Dayoo} className='w-100 rounded-4 ' loading='lazy' alt="CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.toyota} className='w-100 rounded-4 ' loading='lazy' alt="TOYOTA CAR" />
                  </div>
                </div>

              

              </div>
            </div>
          
          </div>
       
        </div>



    <div className="d-flex justify-content-center">

    <Link to='/gallery'  className={`my-2 fs-3 text-main readMore oxygen-700 m-auto text-decoration-none `} >
          <i className="fa-solid fa-angles-right text-main"></i> See More
        </Link>      
    </div>


      </section>

     {/* <section id='events' className='bg-black py-5'>
        <div className='m-auto text-center'>
        <h2 data-aos='fade-down' data-aos-duration='1000' className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR EVENTS</h2>
          
        </div>

        


<div className="container overflow-hidden ">
  <div className="row  ">
    <div  className="col-12 col-lg-5  vh-85 position-relative   rounded-4 mt-lg-3 mt-2">
      <div className="event ">
      <video
              src={images.video2}
              type="video/mp4"
              className='rounded-4  start-0 end-0'
               loop
              playsInline
              muted
              autoPlay
            ></video>

<div className="overlay">
              <div  className="caption d-flex justify-content-center align-items-center vh-100">
        <h2  data-aos='fade-down' data-aos-duration='1000'  className={`main-font  text-center  mb-0 pb-lg-4 ${styles.trt}`}>AUTOVROOM EVENT</h2>
              </div>
            </div>
      </div>
    </div>

    <div className={`col-lg-2  d-flex align-items-center   ${styles.hide} `}>
<div >

    <Marquee lineStyle={lineStyle} />
</div>
</div>
    <div  className="col-12  mt-5 mt-sm-0 col-lg-5 vh-85 position-relative   rounded-4 mt-lg-3 mt-2">
      <div className="event   ">

      <video
              src={images.video2}
              type="video/mp4"
              className='rounded-4  start-0 end-0'
               loop
              playsInline
              muted
              autoPlay
            ></video>

<div className="overlay">
              <div  className="caption d-flex justify-content-center align-items-center vh-100">
        <h2  data-aos='fade-down' data-aos-duration='1000'  className={`main-font  text-center  mb-0 pb-lg-4 ${styles.trt}`}>ELSHROUK EVENT</h2>
              </div>
            </div>
      </div>
    </div>

    <div  className="col-12 col-lg-5  vh-85 position-relative   rounded-4 mt-lg-3 mt-3">
      <div className="event ">

      <video
              src={images.video2}
              type="video/mp4"
              className='rounded-4  start-0 end-0'
               loop
              playsInline
              muted
              autoPlay
            ></video>

<div className="overlay">
              <div  className="caption d-flex justify-content-center align-items-center vh-100">
        <h2  data-aos='fade-down' data-aos-duration='1000'  className={`main-font  text-center  mb-0 pb-lg-4 ${styles.trt}`}>FORD QATAR EVENT</h2>
              </div>
            </div>
      </div>
    </div>
    <div className={`col-lg-2  d-flex align-items-center   ${styles.hide} `}>
<div  >

    <Marquee lineStyle={lineStyle}  />
</div>
</div>

    <div  className="col-12  mt-5 mt-sm-0 col-lg-5 vh-85 position-relative   rounded-4 mt-lg-3 mt-2">
      <div className="event   ">

      <video
              src={images.video2}
              type="video/mp4"
              className='rounded-4  start-0 end-0'
               loop
              playsInline
              muted
              autoPlay
            ></video>

<div className="overlay">
              <div  className="caption d-flex justify-content-center align-items-center vh-100">
        <h2  data-aos='fade-down' data-aos-duration='1000'  className={`main-font  text-center  mb-0 pb-lg-4 ${styles.trt}`}>CIC EVENT</h2>
              </div>
            </div>
      </div>
    </div>
  </div>



  
</div>


      </section>  */}
{/* /********************************* ************************************ */}
<section id='events' className='bg-black py-5'>
        <div className='m-auto text-center'>
        <h2 data-aos='fade-down' data-aos-duration='1000' className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR EVENTS</h2>
        </div>

        <div className="container">
          <div className="row g-0" >
           <div className="col-md-6  position-relative">
           <Link to={'/autovroomEvent'}>
          <div>
          <img src={images.Atv} alt="AutvRoom Event" className='w-100 rounded-start-pill  ' />
           <div className="overlay " >
        <h2  data-aos='fade-down' data-aos-duration='1000' className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 ${styles.trt}`}>AUTOVROOM EVENT </h2>
        <i  data-aos='fade-down' data-aos-duration='1000' class={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y end-0 fa-3x ${styles.trt}`}></i>
            </div>
          </div>
           </Link>
            </div>
            <div className="col-md-6   position-relative">
         <Link to={'/QatarEvent'}>
         <img src={images.qatar} className='w-100 rounded-end-pill h-100' />
            <div className="overlay " >
        <h2   data-aos='fade-down' data-aos-duration='1000'  className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 ${styles.trt}`}>FORD QATAR EVENT</h2>
        <i  data-aos='fade-down' data-aos-duration='1000' class={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y  start fa-3x ${styles.trt}`}></i>
            </div>
         </Link>
            </div>
            <div className="col-md-6  position-relative">
            <img src={images.elshrouk} className='w-100 rounded-start-pill h-100' />
            <div className="overlay " >
        <h2  data-aos='fade-down' data-aos-duration='1000'  className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 ${styles.trt}`}>ELSHROUK <br /> EVENT </h2>
        <i  data-aos='fade-down' data-aos-duration='1000' class={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y end-0 fa-3x ${styles.trt}`}></i>
            </div>
            </div>
            <div className="col-md-6  position-relative">
            <img src={images.BMW3} className='w-100 rounded-end-pill' />
            <div className="overlay " >
        <h2   data-aos='fade-down' data-aos-duration='1000'  className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 ${styles.trt}`}>CIC EVENT</h2>
        <i  data-aos='fade-down' data-aos-duration='1000' class={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y start-0 fa-3x ${styles.trt}`}></i>
            </div>
            </div>
          </div>
        </div>





      </section>
 
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
    <h2 className={`main-font  Text-white text-center  ${styles.trtSmall}`}>CAR OWNER</h2>

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
    <h2 className={`main-font  Text-white text-center  ${styles.trtSmall}`}>PHOTOGRAPHER</h2>
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
    <h2 className={`main-font  Text-white text-center  ${styles.trtSmall}`}>Fans</h2>
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
