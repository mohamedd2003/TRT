import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { MoonLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function EventsSection() {
  const [loading, setLoading] = useState(true);

  const handleBeforeLoad = () => {
    setLoading(true);
  };

  const handleonLoad = () => {
    setLoading(false);
  };
  {/* <i   className='fa-solid fa-spinner fa-spin   fa-1x trt'></i> */}
  return (
    <section id='events' className='bg-black pt-2 pb-5'>
    <div className='m-auto text-center'>
    <h2 data-aos='fade-down' data-aos-duration='1000' className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR EVENTS</h2>
    </div>

    <div className="container">
      <div className="row g-0" >
      <div className="col-md-6   position-relative" data-aos='fade-right' data-aos-duration='1000'>
     
        <Link to={'/laCasa'}>
       {loading && <MoonLoader size={100} color={"red"} loading={loading} />}
      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}     
       threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724614009/ws2muojbczzli0tfxbid.jpg'alt="AutvRoom Event" className='w-100 h-100 rounded-start-pill   ' />
       <div className="overlay " >
    <h2   className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>LA CASA DE PAPEL EVENT</h2>
   <div className='position-absolute top-75 translate-middle-y end-0'>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-75 translate-middle-y end-0 fa-3x trt`}></i>


   </div>
    
        </div>
     </Link>
      
        </div>
        <div className="col-md-6   position-relative" data-aos='fade-left' data-aos-duration='1000'>
     <Link  to={'/newAlalmein'}>
     {loading && <MoonLoader size={100} color={"red"} loading={loading} />}
     <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}  src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1724614014/rb7j7ooikck4q02hl2xv.jpg' className='w-100 h-100  rounded-end-pill ' />
        <div className="overlay " >
    <h2     className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>NEW AlALMEIN EVENT</h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-75 translate-middle-y  start fa-3x trt`}></i>
        </div>
     </Link>
        </div>

       <div className="col-md-6   position-relative" data-aos='fade-right' data-aos-duration='1000'>
       <Link  to={'/autovroomEvent'}>
       {loading && <MoonLoader size={100} color={"red"} loading={loading} />}
      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
       threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978989/hoaq6jic3hfwcuinjlsq.jpg'alt="AutvRoom Event" className='w-100 h-100 rounded-start-pill  ' />
       <div className="overlay " >
    <h2   className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>AUTOVROOM EVENT </h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-75 translate-middle-y end-0 fa-3x trt`}></i>
        </div>
       </Link>
        </div>
        <div className="col-md-6   position-relative" data-aos='fade-left' data-aos-duration='1000'>
     <Link  to={'/QatarEvent'}>
     {loading && <MoonLoader size={100} color={"red"} loading={loading} />}
     <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}  src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978589/hnninbweyi4csorg6vwb.jpg' className='w-100 h-100  rounded-end-pill ' />
        <div className="overlay " >
    <h2     className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>FORD QATAR EVENT</h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-75 translate-middle-y  start fa-3x trt`}></i>
        </div>
     </Link>
        </div>
      <div className="col-md-6  position-relative" data-aos='fade-right' data-aos-duration='1000' >
      <Link to={'./ElshroukEvent'}>
      {loading && <MoonLoader size={100} color={"red"} loading={loading} />}
        <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722978590/uiyyeysjdbnywzgbknsc.jpg' className='w-100 rounded-start-pill ' />
        <div className="overlay " >
    <h2    className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>ELSHROUK <br /> EVENT </h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-75 translate-middle-y end-0 fa-3x trt`}></i>
        </div>
      </Link>
        </div>
      
      <div   className="col-md-6  position-relative" data-aos='fade-left' data-aos-duration='1000'>
      <Link to={'/CiuEvent'} >
      
      {loading && <MoonLoader size={100} color={"red"} loading={loading} />}
        <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}
         src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1727171147/tu6bavfxzecjeutpi5pk.jpg' className='w-100 rounded-end-pill' />
        <div className="overlay " >
    <h2     className={`main-font text-center  position-relative top-50 translate-middle-y  mb-0 pb-lg-4 trt`}>CIU <br/>EVENT</h2>
    <i   className={`fa-solid fa-hand-pointer  position-absolute top-75 translate-middle-y start-0 fa-3x trt`}></i>
        </div>
        </Link>
        </div>
      </div>
    </div>





  </section>
  )
}
