import React, { lazy ,useState,useEffect} from 'react'
import './Home.module.css';

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

import About from '../About/About';
import Marquee from '../slider/slider'
const images =lazy(()=>import('../Images/Images'))
const GallerySection =lazy(()=>import('../GallerySection/GallerySection'))
const EventsSection =lazy(()=>import('../EventsSection/EventsSection'))

export default function Home() {

  const[width,setWidth]=useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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

<div className='position-absolute top-15 start-0 w-100  z-3 text-center'>

<h4 className='text-white main-font '>SWIPE DOWN </h4>
</div>
<div className='position-fixed fa-beat-fade top-90 end-0 rounded-start-pill bg-main p-2 z-3'>

<a href="/#hero">
<i className="fa-solid fa-angles-up fa-xl text-white fa-beat-fade"></i>
</a>
    </div>
      <section id='hero'  >
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={pagination}
        modules={[Pagination,EffectCreative]}

        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-125%', 0, -800],
            rotate: [0, 0, -90],
          },
          next: {
            shadow: true,
            translate: ['125%', 0, -800],
            rotate: [0, 0, 90],
          },
        }}
      >
          <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-v"
            direction={'vertical'}
            spaceBetween={50}
            pagination={pagination}
            modules={[Pagination,EffectCreative]}
            grabCursor={true}
            effect={'creative'}
            
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, '-20%', -1], // Move the previous slide up
              },
              next: {
                translate: [0, '100%', 0], // Move the next slide down
              },
            }}
            
          >
                  <SwiperSlide>
            <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: -10 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >AUTOVROOM</motion.h1>
                </div>
              </div>

            <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>
              </div> 
              <img src={width>576?'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965774/sdpbccv8x3hnqiyjkjgk.webp':"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp"}  alt="Bmw Car" /></SwiperSlide>
             <SwiperSlide >
          <img src="https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975863/nnrpld3aooqq91yyq1eu.webp"    alt=" BMW car" />
          <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: -10 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >AUTOVROOM</motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
        </SwiperSlide>
             <SwiperSlide >
          <img src="https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048347/k7b08bwttbcjweczjyfk.jpg"    alt=" BMW car" />
                <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: -10 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >AUTOVROOM</motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
        </SwiperSlide>



            <SwiperSlide><img src="https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048342/brtmrvvhlmpkxi60rrqd.jpg" alt="Toyota"  />
            <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: -10 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >AUTOVROOM</motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
            </SwiperSlide>



            <SwiperSlide>
            <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: -10 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >AUTOVROOM</motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
              <img src={width>576?'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974787/jv4n2rbkanxbv0xl55f5.webp': "https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974786/knohjz5mhwzozlbviie9.webp"}    alt="Mitsubishi"  />
              </SwiperSlide>



            <SwiperSlide>
            <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: -10 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >AUTOVROOM</motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div>  
            <img src= {width>576 ?'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967583/a84cib0zqoxocooyh7pk.webp':"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967563/b7uevgn8zpz4qc9sp8jb.webp" }   alt="BMW Car" />
            </SwiperSlide>

          </Swiper>


        </SwiperSlide>

        <SwiperSlide>
        <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >ELSHROUK <br /></motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
          <img src="https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722980346/e1spxxzeys4ck0m9x8q3.webp" alt="VW Golf car" /></SwiperSlide>
        <SwiperSlide>
        <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >FORD <br  /><span className='mt-md-5 d-block'>QATAR</span></motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
          <img src={width>576?"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724076862/iwoleopl6428lirft80i.jpg":"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723576872/noeee2kbn1bqmpgw6yaj.jpg"} alt="Ford Qatar Event" />
        </SwiperSlide>
      
        <SwiperSlide>
        <div className="overlay">
              <div className="row ">
                <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
                <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 6 }}
        className=' text-white main-font my-fs' >CIU <span className='mt-md-5 d-block'>EVENT</span></motion.h1>
                </div>
              </div>

             <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
           
            <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
            
           
            <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
            </a>  
              </div> 
        <img src={width>576?'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724077031/lldyf77udh4cal18g972.jpg':"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722980347/mwl8aoodglwtcc742y7k.webp"}  alt="BMW Car"  />

        
        </SwiperSlide>
       
      </Swiper>
      </section>


      <div id='marquee'>

<Marquee  lineStyle={lineStyle}/>
      </div>
      

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


<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723039/etluwbytfllngxk7sk8z.png'} alt='phantom Center' className='mx-3 mx-sm-5'  width={250}  height={80} />
<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723042/cisghuhkiyvaco6pzyf6.png'} alt='Eagle Car Center' className='mx-3 mx-sm-5' width={250}  height={150} />
<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723041/qqojgj6lc2iahzdpxxqj.png'} className='mx-3 mx-sm-5' alt='AUTOVROOM' width={250}  height={150} />
<img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723041/teelhdkovij2dxuhopsn.png'} alt='Drops Garage ' className='mx-3 mx-sm-5' width={250}  height={180} />


          </div>
        </div>


              




      </section>

      {/* <section id='tickets' className='bg-black py-5'>
       
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
      </section> */}
    </>
  )
}

