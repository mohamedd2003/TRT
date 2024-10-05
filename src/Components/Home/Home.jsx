import React, { lazy ,useState,useEffect, useMemo} from 'react'
import './Home.module.css';
//Framer-Motion library Imports
import { motion } from 'framer-motion'


//********************************************* */
// image imports

import About from '../About/About';
import Marquee from '../slider/slider'
import SwiperComp from '../Swiper/Swiper';
import GallerySection from '../GallerySection/GallerySection'
import EventsSection from '../EventsSection/EventsSection';

export default function Home() {
  const[showarrow,setShowArrow]=useState(false)
 


  const lineStyle = useMemo(() => ({
    background: 'linear-gradient(to right, rgb(39, 1, 1), #ff0014)',
    width: '80px',
    height: '5px',
    margin: '0 20px',
    marginRight: '40px',
    padding: '0px',
    display: 'inline-block',
    transform: 'translateY(-20px)',
    borderRadius: '0',
  }), []);

  return (
    <>
{/* /*********************************Swipe Word + Arrows Icon From Font Awesome************************************ */}

<div className='position-absolute top-25 start-0 w-100  z-2 text-center'>

<h4 className='text-white main-font '>SWIPE <i className="fa-solid fa-arrows-up-down-left-right"></i> </h4>
</div>
{/* /*********************************Arrow in bottom Right Of Screen ************************************ */}

{showarrow?<div className='position-fixed fa-beat-fade top-90 end-0 rounded-start-pill bg-main p-2 z-3'>

<a href="/#hero" >
<i className="fa-solid fa-angles-up fa-xl text-white fa-beat-fade"></i>
</a>
    </div>:''}

    {/* /*********************************Swiper Sliders ************************************ */}

      <section id='hero'  >
     <SwiperComp/>
      </section>

{/* /*********************************CAR NAMES Marquee ************************************ */}

      <div id='marquee'>
<Marquee  lineStyle={lineStyle}/>
      </div>
{/* /*********************************Title ************************************ */}

      <section id='title'>
      <div className='bg-black'>
        <motion.h2
        drag
        dragConstraints={{top:0,left:0,right:0,bottom:0}}
        dragElastic={5} 
        data-aos-duration='1000' data-aos="fade-UP" className={`main-font bg-black text-center  mb-0 pb--lg-4 trt`}>TRT</motion.h2>
        <h2 data-aos-duration='1000' data-aos="fade-up" className={`main-font bg-black text-center   mb-0 trt`}>THE RIGHT TRACK</h2>

      </div>
      </section>
{/* /*********************************About ************************************ */}

      <About />
{/* /*********************************Gallery ************************************ */}

    <GallerySection/>

{/* /*********************************EVENTS ************************************ */}
<EventsSection/>

{/* /*********************************Sponsers ************************************ */}

      <section id='sponsers' className='bg-black py-5'>
        <div className='m-auto text-center'>
        <h2 data-aos='fade-UP' 
        data-aos-duration='1000' 
        className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR SPONSERS</h2>
        </div>

        <div className="marquee bg-black  mt-5">
          <div className="marquee-content-logos">


<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723039/etluwbytfllngxk7sk8z.png'} alt='phantom Center' className='mx-3 mx-sm-5'  width={250}  height={80} />
<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723042/cisghuhkiyvaco6pzyf6.png'} alt='Eagle Car Center' className='mx-3 mx-sm-5' width={250}  height={150} />
<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723041/qqojgj6lc2iahzdpxxqj.png'} className='mx-3 mx-sm-5' alt='AUTOVROOM' width={250}  height={150} />
<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723041/teelhdkovij2dxuhopsn.png'} alt='Drops Garage ' className='mx-3 mx-sm-5' width={250}  height={180} />


          </div>
        </div>


              




      </section>


{/* /*********************************Tickets Section Commented ************************************ */}

      {/* <section id='tickets' className='bg-black py-5'>
       
      <div className='m-auto text-center'>
        <h2 data-aos='fade-UP' 
        data-aos-duration='1000' 
        className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>G</span>ET TICKETS</h2>
        </div>
<div className="container">
  <div className="row mt-3 g-3 text-white">
      <div className="col-md-4 " data-aos='fade-UP' data-aos-duration='1000'>
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
    <div className="col-md-4" data-aos='fade-UP' data-aos-duration='1000'>
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
    <div className="col-md-4" data-aos='fade-UP' data-aos-duration='1000'>
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
      </section> */}
    </>
  )
}

