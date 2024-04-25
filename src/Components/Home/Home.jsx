import React from 'react'
import style from './Home.module.css'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.module.css';
import { Pagination, Autoplay } from 'swiper/modules';
import slide1 from '../../assets/Images/slide1.jpg'
import slide2 from '../../assets/Images/slide2.jpg'
import slide3 from '../../assets/Images/slide3.jpg'
import slide4 from '../../assets/Images/slide4.jpg'
import slide5 from '../../assets/Images/slide5.jpg'
import slide6 from '../../assets/Images/slide6.jpg'
import slide7 from '../../assets/Images/slide7.jpg'

export default function Home() {

  return (
    <>


      <Swiper
        className="mySwiper vh-100 "
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
      >
        <SwiperSlide className=' position-relative '>
          <img src={slide1} alt="Opel Astra " className='w-100' />

          <div className={`${style.overlay} d-flex  align-items-center `}>

            {/* <div className="caption  ">
              <motion.h1
                initial={{ x: -1000 }}
                animate={{ x: 1000 }}
                transition={{ duration: 3 }}
                className='  title fw-bolder text-white h1' >T</motion.h1>

              <motion.h1
                initial={{ y: -1000 ,x:0}}
                animate={{ y: 1000 ,x:1000}}
                transition={{ duration: 3 }}
                className='  title fw-bolder text-danger h1' >R</motion.h1>
              <motion.h1
                initial={{ x: 5000 }}
                animate={{ x: 1010 }}
                transition={{ duration: 3 }}
                className='  title fw-bolder text-white h1' >T</motion.h1>



            </div> */}
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide className='position-relative '>
              <img src={slide2} alt="Dodge Car" className='w-100' />

              <div className={`${style.overlay}`}></div>

            </SwiperSlide>
            <SwiperSlide className=' position-relative '>
              <img src={slide3} alt="Dodge Car" className='w-100' />

              <div className={`${style.overlay}`}></div>

            </SwiperSlide>
            <SwiperSlide className=' position-relative '>
              <img src={slide4} alt="Dodge Car" className='w-100' />

              <div className={`${style.overlay}`}></div>

            </SwiperSlide>
            <SwiperSlide className=' position-relative '>
              <img src={slide5} alt="Dodge Car" className='w-100' />

              <div className={`${style.overlay}`}></div>

            </SwiperSlide>
            <SwiperSlide className=' position-relative '>
              <img src={slide6} alt="Dodge Car" className='w-100' />

              <div className={`${style.overlay}`}></div>

            </SwiperSlide>

          </Swiper>
        </SwiperSlide>
        <SwiperSlide className=' position-relative '>
          <img src={slide7} alt="VW Golf Car" className='w-100' />

          <div className={`${style.overlay}`}></div>

        </SwiperSlide>
      </Swiper>
    </>
  )
}
