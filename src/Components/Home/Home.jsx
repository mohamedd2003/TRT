  import React, { useEffect } from 'react'
  import style from './Home.module.css'
  import './Home.module.css';
  import { Link } from 'react-router-dom';
  import styles from "../Home/Home.module.css"
//********************************************* */
  //Framer-Motion library Imports
  import { motion } from 'framer-motion'
  import Aos from 'aos';
  import 'aos/dist/aos.css';
//********************************************* */
  //Swiper library Imports
  import 'swiper/css/effect-creative';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/effect-cards';
  import 'swiper/css/pagination';
  import { Pagination, Autoplay,Navigation , EffectCreative,EffectCards  } from 'swiper/modules';
  import 'swiper/css/navigation';
//********************************************* */
  // image imports
  import slide1 from '../../assets/Images/slide1.jpg'
  import slide2 from '../../assets/Images/slide2.jpg'
  import slide3 from '../../assets/Images/slide3.jpg'
  import slide4 from '../../assets/Images/slide4.jpg'
  import slide5 from '../../assets/Images/slide5.jpg'
  import slide6 from '../../assets/Images/slide6.jpg'
  import slide7 from '../../assets/Images/slide7.jpg'
  import slide8 from '../../assets/Images/slide8.jpg'
  import golf from '../../assets/Images/golf.jpg'
  import vw from '../../assets/Images/vw.jpeg'
  import bmw from '../../assets/Images/bmw.jpeg'
  import dodge from '../../assets/Images/dodge.jpeg'
  import c from '../../assets/Images/c.jpeg'
  import fordEvent from '../../assets/Images/fordEvent.jpg'



  export default function Home() {
  useEffect(() => {
    Aos.init();
  }, [])
  
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    };
    return (
      <>
  <section id='hero'>
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
          animating={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={pagination}
          modules={[Pagination,Autoplay,Navigation,EffectCreative]} >

          <SwiperSlide  className=' position-relative mobile '>
            <img src={fordEvent} alt="Ford QatarEvent" className='w-100 ' />

            <div className={`overlay d-flex  align-items-center justify-content-center  `}>

              <div className="caption  ">
                <motion.h1
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 6 }}
                  className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>

                <motion.h1
                  initial={{ y: -1000 ,x:0}}
                  animate={{ y: 0 ,x:0}}
                  transition={{ duration: 6 }} >
                    <i className="fa-brands text-main fa-r-project fa-3x my-5"></i>
                    </motion.h1>
                <motion.h1
                  initial={{ x: 4000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 6 }}
                  className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>



              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide  className=' position-relative laptop  '>
            <img src={slide1} alt="opel Astra Car" className='w-100' />

            <div className={`overlay d-flex  align-items-center justify-content-center  `}>

              <div className="caption  ">
                <motion.h1
                  initial={{ x: -1000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 6 }}
                  className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>

                <motion.h1
                  initial={{ y: -1000 ,x:0}}
                  animate={{ y: 0 ,x:0}}
                  transition={{ duration: 6 }} >
                    <i className="fa-brands text-main fa-r-project fa-3x my-5"></i>
                    </motion.h1>
                <motion.h1
                  initial={{ x: 4000 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 6 }}
                  className=' text-white' ><i className="fa-solid fa-t fa-3x"></i></motion.h1>



              </div>
            </div>

          </SwiperSlide>

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
              modules={[Pagination,EffectCreative]}>
              <SwiperSlide className='position-relative '>
                <img src={slide2} alt="Dodge Car" className='w-100' />

                <div className={`overlay`}></div>

              </SwiperSlide>
              <SwiperSlide className=' position-relative '>
                <img src={slide3} alt="Dodge Car" className='w-100' />

                <div className={`overlay`}></div>

              </SwiperSlide>
              <SwiperSlide className=' position-relative '>
                <img src={slide4} alt="Dodge Car" className='w-100' />

                <div className={`overlay`}></div>

              </SwiperSlide>
              <SwiperSlide className=' position-relative '>
                <img src={slide5} alt="Dodge Car" className='w-100' />

                <div className={`overlay`}></div>

              </SwiperSlide>
              <SwiperSlide className=' position-relative '>
                <img src={slide6} alt="Dodge Car" className='w-100' />

                <div className={`overlay`}></div>

              </SwiperSlide>

            </Swiper>
          </SwiperSlide>
          <SwiperSlide className=' position-relative '>
            <img src={slide7} alt="VW Golf Car" className='w-100' />

            <div className={`overlay`}></div>

          </SwiperSlide>

          <SwiperSlide className=' position-relative '>
            <img src={slide8} alt="BMW Motocycle" className='w-100' />

            <div className={`overlay`}></div>

          </SwiperSlide>
          
        </Swiper>
        </section>

        <section id='cars Logo' >
          <div className="marquee bg-black pt-5 ">
          <div className="marquee-content"> 
           <span >BMW</span>
           <i className={`${style.line}`}></i>
           <span>AUDI</span>
           <i className={`${style.line}`}></i>
           <span>ŠKODA</span>
           <i className={`${style.line}`}></i>    
           <span>VOLKSWAGEN</span>
           <i className={`${style.line}`}></i>
           <span>OPEL</span>
           <i className={`${style.line}`}></i>

           <span>SEAT</span>
           <i className={`${style.line}`}></i>
           <span>MERCEDES</span>
           <i className={`${style.line}`}></i>
           <span>RANGE ROVER</span>
           <i className={`${style.line}`}></i>
           <span>TOYOTA</span>
           <i className={`${style.line}`}></i>
           
           <span>RENAULT</span>
           <i className={`${style.line}`}></i>
           <span>CITROËN</span>
           <i className={`${style.line}`}></i>
           <span>HYUNDAI</span>
           <i className={`${style.line}`}></i>
           <span>ALFA ROMEO</span>
           <i className={`${style.line}`}></i>
           <span>BENTLEY</span>
           <i className={`${style.line}`}></i>
           <span>DODGE</span>
           <i className={`${style.line}`}></i>
           <span>FIAT</span>
           <i className={`${style.line}`}></i>
           <span>INFINITI</span>
           <i className={`${style.line}`}></i>
           <span>JEEP</span>
           <i className={`${style.line}`}></i>
           <span>MITSUBISHI</span>
           <i className={`${style.line}`}></i>
           <span>NISSAN</span>
           <i className={`${style.line}`}></i>
           <span>KIA</span>
           <i className={`${style.line}`}></i>
           <span>MAZDA</span>
           <i className={`${style.line}`}></i>
           <span>VOLVO</span>
           <i className={`${style.line}`}></i>
           <span>SUBARU </span>
           <i className={`${style.line}`}></i>
           <span>CHEVROLET  </span>
           <i className={`${style.line}`}></i>
           <span>LEXUS  </span>
           <i className={`${style.line}`}></i>
           <span>PEUGEOT</span>
           <i className={`${style.line} `}></i>

        
          </div>
          </div>

          </section>

          <div className='bg-black'>
<h2   data-aos-duration='1000' data-aos="fade-down" className={`main-font bg-black text-center  mb-0 pb--lg-4 ${styles.trt}`}>TRT</h2>
<h2   data-aos-duration='1000' data-aos="fade-up" className={`main-font bg-black text-center   mb-0 ${styles.trt}`}>THE RIGHT TRACK</h2>

          </div>
        <section id='about' className='py-5 bg-black  '>
          <div  data-aos-duration='1000' data-aos="fade"className="container bg-black  shadowLg rounded-5 p-4">
            <div className="row align-items-center  gx-2">
              <div className="col-lg-6 ps-0 "   >
                <div className="cards">
                <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-card"
        data-aos-duration='1000' data-aos="fade-right"   >
        <SwiperSlide className='swiper-slide-card'><img src={dodge} alt="DODGE CAR" className='w-100 position-relative ' />
        <div className='overlay main-font text-white '> SWIPE <i class="fa-regular fa-hand-point-right fa-lg"></i></div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={slide2} alt="DODGE CAR" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={slide3} alt="DODGE CAR" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={slide4} alt="DODGE CAR" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={slide5} alt="DODGE CAR" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={vw} alt="VW CAR" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={golf} alt="GOLF VW" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={bmw} alt="BMW CAR" className='w-100 ' /></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={c} alt="CAR" className='w-100 ' /></SwiperSlide>
      </Swiper>
                </div>
              </div>
              <div className="col-lg-6  ">
                <div className="breif"  >
  <h2 data-aos="fade-down" data-aos-duration="1000" className={`main-font pt-3 ${styles.readMore} ${styles.title}   mb-4 text-white `}>ABOUT U<i className="fa-solid fa-bolt fa-md text-main"></i></h2>

  <p data-aos-duration='1000' data-aos-delay="500" data-aos="fade-left" className=' ms-lg-5  oxygen '><span className='text-main'>  TRT </span> exhibition organizing team was established in <span className='text-main'>2022</span> , where we organized our first event on <span className='text-main'>2022</span>, 
  and it was under a graduation project for media students of the Public Relations Department. Many influencers in the field of cars on social media attended, and many companies specializing in car modification attended.
  We participated in organizing an event for modified cars at one of the universities in the Administrative Capital, and this is an indication of our success in this work.
  <h5  className={`my-2 text-main ${styles.readMore} oxygen-700`}   type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
  <i class="fa-solid fa-angles-right text-main"></i> Read More
  </h5>
<div >
  <div className="collapse collapse-vertical " id="collapseWidthExample">
    <p className='text-white'>
    <span className='text-main'>Our Mission </span>: is to continue organizing outstanding events that cater to the interests of car enthusiasts and owners of modified cars, providing a platform for them to showcase their passion and connect with like-minded individuals.
    We are committed to upholding the highest standards of professionalism and creating a safe and enjoyable environment for all participants. With a focus on innovation and creativity, we aim to set new benchmarks in the industry and establish ourselves as a leader in event organizing for car enthusiasts in the Arab Republic of Egypt. <span className='text-main'>"Make your passion safe"</span>
    
    </p>
  </div>
</div>
  </p>


                </div>
              </div>
            </div>
          </div>
          </section>

<section id='gallery' className='bg-black py-5'>
<h6 className=' text-center text-decoration-line-through oswald-titles main-font'><span className=' text-main'>O</span>UR GALLERY</h6>

<div className="d-flex justify-content-center mt-5">
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">BMW</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">VW</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">OPEL</button>
  </li>
</ul>
</div>
<div class="tab-content text-danger" id="pills-tabContent">
  <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
</div>
</section>
   

      </>
    )
  }
