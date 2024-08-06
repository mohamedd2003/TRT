import React from 'react'
import { Link } from 'react-router-dom'
export default function EventsSection() {
  return (
    <section id='events' className='bg-black py-5'>
    <div className='m-auto text-center'>
    <h2 data-aos='fade-down' data-aos-duration='1000' className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR EVENTS</h2>
    </div>

    <div className="container">
      <div className="row g-0" >
       <div className="col-md-6   position-relative" data-aos='fade-right' data-aos-duration='1000'>
       <Link  to={'/autovroomEvent'}>
      <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978989/hoaq6jic3hfwcuinjlsq.jpg'alt="AutvRoom Event" className='w-100 h-100 rounded-start-pill  ' />
       <div className="overlay " >
    <h2   className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>AUTOVROOM EVENT </h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y end-0 fa-3x trt`}></i>
        </div>
       </Link>
        </div>
        <div className="col-md-6   position-relative" data-aos='fade-left' data-aos-duration='1000'>
     <Link  to={'/QatarEvent'}>
     <img  src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978589/hnninbweyi4csorg6vwb.jpg' className='w-100 h-100  rounded-end-pill ' />
        <div className="overlay " >
    <h2     className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>FORD QATAR EVENT</h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y  start fa-3x trt`}></i>
        </div>
     </Link>
        </div>
      <div className="col-md-6  position-relative" data-aos='fade-right' data-aos-duration='1000' >
      <Link to={'./ElshroukEvent'}>
        <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978590/uiyyeysjdbnywzgbknsc.jpg' className='w-100 rounded-start-pill ' />
        <div className="overlay " >
    <h2    className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>ELSHROUK <br /> EVENT </h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y end-0 fa-3x trt`}></i>
        </div>
      </Link>
        </div>
      
      <div   className="col-md-6  position-relative" data-aos='fade-left' data-aos-duration='1000'>
      <Link >
      
      
        <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978589/enlyvoxrrpy9bgawzaye.jpg' className='w-100 rounded-end-pill' />
        <div className="overlay " >
    <h2     className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>CIU <br/>RIDE</h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-50 translate-middle-y start-0 fa-3x trt`}></i>
        </div>
        </Link>
        </div>
      </div>
    </div>





  </section>
  )
}
