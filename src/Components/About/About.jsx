import React from 'react'
//******************imports Swiper Library*************************
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards } from 'swiper/modules';

//******************import Images******************
import golf from '../../assets/Images/golf.jpg'
import vw from '../../assets/Images/vw.jpeg'
import dodge from '../../assets/Images/dodge.jpeg'
import slide2 from '../../assets/Images/slide2.jpg'
import slide3 from '../../assets/Images/slide3.jpg'
import slide4 from '../../assets/Images/slide4.jpg'
import slide5 from '../../assets/Images/slide5.jpg'
import ford from '../../assets/Images/red/FORD/ford.jpg'
import opel from '../../assets/Images/red/OPEL/opel.jpg'


export default function About() {
  let images = [
    {
      id: "1",
      src: dodge,
      alt: "Dodge Car"
    },
    {
      id: "2",
      src: vw,
      alt: "VW Car"
    },
    {
      id: "3",
      src: ford,
      alt: "ford Car"
    },
    {
      id: "4",
      src: golf,
      alt: "GOLF Car"

    },
    {
      id: "5",
      src: opel,
      alt: "Opel Car"
    },
    {
      id: "6",
      src: slide2,
      alt: "Dodge Car"
    },
    {
      id: "7",
      src: slide3,
      alt: "Dodge Car"

    },
    {
      id: "8",
      src: slide4,
      alt: "Dodge Car"

    },
    {
      id: "8",
      src: slide5,
      alt: "Dodge Car"
    },

  ]
  return (

    <>
      <section id='about' className='py-5 bg-black w-100  '>
        <div data-aos-duration='1000' data-aos="fade" className="container bg-black  shadowLg rounded-5 p-4">
          <div className="row align-items-center  gx-2">
            <div className="col-lg-6  "   >
              <div className="cards">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  modules={[EffectCards, Autoplay]}
                  className="swiper-card"
                  data-aos-duration='1000' data-aos="fade-right"   >


                  {images.map((image) => <SwiperSlide key={image.id}  className='swiper-slide-card'><img src={image.src}  alt={image.alt} className='w-100 position-relative ' />
                    <div className='overlay main-font text-white '> SWIPE <i class="fa-regular fa-hand-point-right fa-lg"></i></div>
                  </SwiperSlide>)}
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6  ">
              <div className="breif"  >
                <h2 data-aos="fade-down" data-aos-duration="1000" className={`main-font pt-3 readMore title  mb-4 text-white `}>ABOUT U<i className="fa-solid fa-bolt fa-md text-main"></i></h2>

                <div data-aos-duration='1000' data-aos-delay="500" data-aos="fade-left" className=' ms-lg-5  oxygen '>
                  <ul>
                    <li>
                      <span className='text-main'>  TRT </span> exhibition organizing team was established in <span className='text-main'>2022</span> , where we organized our first event on <span className='text-main'>2022</span>and it was under a graduation project for media students of the Public Relations Department
                    </li>
                    <li className='my-2'>
                      Many influencers in the field of cars on social media attended, and many companies specializing in car modification attended.

                    </li>
                    <li>
                      We participated in organizing an event for modified cars at one of the universities in the Administrative Capital, and this is an indication of our success in this work.
                    </li>
                  </ul>

                  <h5 className={`my-2 text-main readMore oxygen-700`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    <i class="fa-solid fa-angles-right text-main"></i> Read More
                  </h5>
                  <div >
                    <div className="collapse collapse-vertical " id="collapseWidthExample">
                      <div className='text-white'>
                        <ul>
                          <span className='text-main'>Our Mission :</span>
                          <li >
                            Continue organizing outstanding events that cater to the interests of car enthusiasts and owners of modified cars, providing a platform for them to showcase their passion and connect with like-minded individuals.
                          </li>
                          <li>
                            Committed to upholding the highest standards of professionalism and creating a safe and enjoyable environment for all participants. With a focus on innovation and creativity, we aim to set new benchmarks in the industry and establish ourselves as a leader in event organizing for car enthusiasts in the Arab Republic of Egypt. <span className='text-main'>"Make your passion safe"</span>

                          </li>
                        </ul>


                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
