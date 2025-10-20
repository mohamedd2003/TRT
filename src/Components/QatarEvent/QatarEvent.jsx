import React from 'react'
import styles from'../QatarEvent/QatarEvent.module.css'
import Marquee from '../slider/slider'
export default function QatarEvent() {
    const lineStyle={
        background :' linear-gradient(to right,rgb(129, 134, 137), #2365ba)',

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
                <h1  data-aos='fade-down' data-aos-duration='1000'  className='  text-white text-decoration-line-through  oswald-titles main-font'><span className='text-main '>F</span>ORD QATAR EVENT</h1>
                </div>
        
            
            <Marquee lineStyle={lineStyle}/>
        
            
        
           </header>

           <section id='memories'  className='bg-black py-5'>
       <h1  className='  text-white text-decoration-line-through text-center  oswald-titles main-font'><span className='text-main '>M</span>EMORIES</h1>
       <div className="container p-4 shadowLg rounded-4 my-4">
        <div className="row g-1">
          <div className="col-md-4 col-6   ">
            <div  className='position-relative h-100'>
            <video src='https://res.cloudinary.com/dnmwmrxmr/video/upload/v1722976924/jlwkdguadfc7s9vsgk3e.mp4' type="video/mp4" muted loop autoPlay className='rounded-4   start-0 end-0' />


            </div>
          </div>
          <div className="col-md-4 col-6">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976870/mxxrtpg0nbemptdjvu7t.webp'  alt='Ford Qatar Event' className='w-100  rounded-4 ' />
            

            </div>
          </div>
          <div className="col-md-4 col-12">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976872/we6w8w4ockbeox52dlco.webp' alt='Ford Qatar Event'  className='w-100 rounded-4  ' />
        
            </div>
          </div>
          <div className="col-6">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976872/uyigiccg6d25zkejdooe.webp'  alt='Ford Qatar Event' className='w-100  rounded-4 ' />
            

            </div>
          </div>
          <div className=" col-6">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723573041/sxroiugawmnmczt0d5rj.webp '  alt='Ford Qatar Event' className='w-100  rounded-4 ' />
            
            </div>
          </div>
          <div className=" col-12">
            <div >
              <img src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976870/snmy2rrxo8o4efho3eys.webp'  alt='Ford Qatar Event' className='w-100  rounded-4 ' />
            
            </div>
          </div>
     
        </div>
       </div>
       </section>
           </>
      )
    }