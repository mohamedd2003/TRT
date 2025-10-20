import React from 'react'
import styles from'../AutovroomEvent/AutovroomEvent.module.css'
import Marquee from '../slider/slider'

export default function AutovroomEvent() {
  const lineStyle={
    background : 'linear-gradient(to right,rgb(118, 133, 107), #377024)',
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
       
       <header className={`  ${styles.backGround} text-center `}>
       <div   className={`d-flex justify-content-center align-items-center  ${styles.header}`}>
            <h1    className='  text-white text-decoration-line-through  oswald-titles main-font'><span className='text-main '>A</span>UTOVROOM EVENT</h1>
            </div>
    
        
        <Marquee lineStyle={lineStyle}/>
    
        
    
       </header>

       <section id='Guests' className='bg-black py-5'>
       <h1  className='  text-white text-decoration-line-through text-center  oswald-titles main-font'><span className='text-main '>V</span>IP GUESTS</h1>
       <div className="container p-4 shadowLg rounded-4 my-4">
        <div className="row  ">
          <div className="col-md-4 col-6">
            <div className="guest">
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975865/un9o3laoiuwf61o9b7nj.webp' alt="VIP Guest" className='w-100 rounded-4 ' />
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="guest">
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975865/wmkgvbz8bshtevmbe3oz.webp' alt="VIP Guest" className='w-100 rounded-4 ' />
            </div>
          </div>
          <div className="col-md-4 col-6 ">
            <div className="guest">
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975866/uvnswczgji6hy0pfzifj.webp' alt="VIP Guest" className='w-100 rounded-4 ' />
            </div>
          </div>
        </div>
       </div>
       </section>


       <section id='memories'  className='bg-black py-5'>
       <h1  className='  text-white text-decoration-line-through text-center  oswald-titles main-font'><span className='text-main '>M</span>EMORIES</h1>
       <div className="container p-4 shadowLg rounded-4 my-4">
        <div className="row gy-3 ">
          <div className="col-md-4 col-6   ">
            <div  className='position-relative h-100'>
            <video src='https://res.cloudinary.com/dnmwmrxmr/video/upload/v1722976232/hd7f2vq20brg8spv0ua7.mp4' type="video/mp4" muted loop autoPlay className='rounded-4  start-0 end-0' />


            </div>
          </div>
          <div className="col-md-4 col-6">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975863/nnrpld3aooqq91yyq1eu.webp'  alt='Autovroom Event' className='w-100 rounded-4 ' />
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967583/v3pzuetqovc8d7faepkm.webp'  alt='BLue BMW Car' className='w-100 rounded-4  ' />
            <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967592/glcqd8sxz7myb6zmfdyg.webp'  alt='BLue BMW Car' className='w-100 rounded-4 py-1  ' />

            </div>
          </div>
          <div className="col-md-4 col-6">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966812/nlyo0rvbvg5ibuxihjlx.webp' alt='Elantra Car'  className='w-100 rounded-4 ' />
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966851/etbekaakydnmmm3cryof.webp' alt='Insignia Car'  className='w-100 py-1 rounded-4 ' />
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967553/cvbovesk9eitpxl16ua6.webp' alt='seat ibiza'  className='w-100  rounded-4 ' />
            </div>
          </div>
          <div className="col-md-12 col-6">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967553/afnogtinuzjouvfjm4lh.webp' alt='SEAT LEON Car'  className='w-100 rounded-4  ' />
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974791/e5ypl6cnmh1y91ldzubd.webp' alt='VW JETTA Car'  className='w-100 rounded-4 py-1 ' />
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976696/npqcz18bjmjk5mfuqxmu.webp' alt='seat ibiza'  className='w-100 rounded-4 ' />
            </div>
          </div>
        </div>
       </div>
       </section>
       </>
  )
}
