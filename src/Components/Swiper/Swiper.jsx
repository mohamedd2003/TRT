import React ,{useState,useEffect} from 'react'
import { motion } from 'framer-motion'

//Swiper library Imports
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, EffectCreative } from 'swiper/modules';
import 'swiper/css/navigation';
export default function SwiperComp() {

  const[width,setWidth]=useState(window.innerWidth)
 

  useEffect(() => {
    const handleResize = () =>
      {
        setWidth(window.innerWidth)
    
        
      } 
      window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    
    return () => {

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    }
      
  }, []);


  const handleScroll = () => {
    if (window.scrollY > 638) {
      setShowArrow(true);
    } 
    else {
      setShowArrow(false);
    }
  };


  
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <Swiper
    className="mySwiper swiper-h"
    spaceBetween={50}
    pagination={pagination}
    modules={[Pagination,EffectCreative]}
    mousewheel={true}
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
      
        mousewheel={true}
        pagination={pagination}
        modules={[Pagination,Mousewheel,EffectCreative]}
        grabCursor={true}
        effect={'creative'}
        
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, '-20%', -1], // Move the previous slide up
          },
          next: {
            translate: [0, '100%', 0], // Move the next slide UP
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
    className=' text-white main-font my-fs' >NEW<span className='mt-md-5 d-block'>ALALMEIN</span></motion.h1>
            </div>
          </div>

        <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
       
        <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
        
       
        <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
        </a>
          </div> 
          <img  src={width>576?'https://res.cloudinary.com/dnmwmrxmr/image/upload/f_auto,q_auto/flfniakcr06mk5zymoqv':"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724609516/omrsm1luqsnlu9u45qf8.jpg"}  alt="NEW ALALMEIN EVENT" />
          </SwiperSlide>
              <SwiperSlide>
        <div className="overlay">
          <div className="row ">
            <div className="col-12  vh-100 d-flex justify-content-center align-items-center">
            <motion.h1
    initial={{ x: -1000 }}
    animate={{ x: -10 }}
    transition={{ duration: 6 }}
    className=' text-white main-font my-fs' >NEW<span className='mt-md-5 d-block'>ALALMEIN</span></motion.h1>
            </div>
          </div>

        <a href='/#marquee'  className=' text-decoration-none  main-font text-white w-100  position-absolute start-0 top-75'>
       
        <i className="  fa-solid fa-hand-pointer  fa-3x text-white fa-beat-fade"></i>
        
       
        <h3 className='mt-1'>Click For <i className="fa-brands fa-draft2digital "></i>nd Section</h3>
        </a>
          </div> 
          <img  src={width>576?'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724609507/y5bowfdpclc8mzzj1vtw.jpg':"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724609509/gewjug5dvip6qmywgjbz.jpg"}  alt="NEW ALALMEIN EVENT" />
          </SwiperSlide>


      
   









      </Swiper>


    </SwiperSlide>

{/* //***************2******************** */ }

      <SwiperSlide>
      <Swiper
        className="mySwiper2 swiper-v"
        direction={'vertical'}
        spaceBetween={50}
      
        mousewheel={true}
        pagination={pagination}
        modules={[Pagination,Mousewheel,EffectCreative]}
        grabCursor={true}
        effect={'creative'}
        
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, '-20%', -1], // Move the previous slide up
          },
          next: {
            translate: [0, '100%', 0], // Move the next slide UP
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
          <img  src={width>576?'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965774/sdpbccv8x3hnqiyjkjgk.webp':"https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp"}  alt="Bmw Car" />
          </SwiperSlide>
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
  )
}
