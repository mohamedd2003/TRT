import React from 'react'
import styles from '../AboutPage/AboutPage.module.css'
import Marquee from '../slider/slider'
import About from '../About/About'
export default function AboutPage() {
  const lineStyle={
    background: 'linear-gradient(to right, rgb(153, 97, 45), #ff6b28)',

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
            <h1   className='  text-white text-decoration-line-through  oswald-titles main-font'><span>A</span>BOUT U<i class="fa-solid fa-bolt text-main"></i></h1>
            </div>
    
        
        <Marquee lineStyle={lineStyle}/>
    
        
    
       </header>

       <About/>

       <section className='my-3 bg-black'>

       <div className='m-auto text-center'>
        <h2 data-aos='fade-down' 
        data-aos-duration='1000' 
        className='  text-decoration-line-through  oswald-titles main-font '><span className=' text-main'>O</span>WNERS</h2>
        </div>


        <div className="container">
          <div className="row gy-3">
          <div className="col-md-3 col-6 ">
              <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
                
                <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="Owner" />
              <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
        <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
        <div className="icons  text-center  w-100   ">
  <a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
  <a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
  <i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
  </a>


    
        </div>

        <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
              </div>
            

            
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
                
                <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="owner" />
              <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
        <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
        <div className="icons  text-center  w-100   ">
  <a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
  <a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
  <i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
  </a>


    
        </div>

        <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
              </div>
            

            
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
                
                <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="owner" />
              <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
        <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
        <div className="icons  text-center  w-100   ">
  <a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
  <a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
  <i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
  </a>


    
        </div>

        <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
              </div>
            

            
              </div>
            </div>
            <div className="col-md-3 col-6 ">
              <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
                
                <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="owner" />
              <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
        <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
        <div className="icons  text-center  w-100   ">
  <a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
  <a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
  <i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
  </a>


    
        </div>

        <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
              </div>
            

            
              </div>
            </div>
          </div>
        </div>
       </section>

       <section className='my-5 bg-black'>

<div className='m-auto text-center'>
 <h2 data-aos='fade-down' 
 data-aos-duration='1000' 
 className='  text-decoration-line-through  oswald-titles main-font '><span className=' text-main'>O</span>UR TEAM</h2>
 </div>


 <div className="container">
   <div className="row gy-3">
   <div className="col-md-3 col-6 ">
       <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
         
         <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="Team Member" />
       <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
 <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
 <div className="icons  text-center  w-100   ">
<a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
<a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
<i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
</a>



 </div>

 <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
       </div>
     

     
       </div>
     </div>
     <div className="col-md-3 col-6 ">
       <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
         
         <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="Team Member" />
       <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
 <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
 <div className="icons  text-center  w-100   ">
<a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
<a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
<i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
</a>



 </div>

 <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
       </div>
     

     
       </div>
     </div>
     <div className="col-md-3 col-6 ">
       <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
         
         <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="Team Member" />
       <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
 <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
 <div className="icons  text-center  w-100   ">
<a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
<a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
<i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
</a>



 </div>

 <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
       </div>
     

     
       </div>
     </div>
     <div className="col-md-3 col-6 ">
       <div data-aos='fade-down' data-aos-duration='1000' className={` ${styles.owner}  rounded-4  position-relative`}  >
         
         <img src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'} className='w-100 rounded-4' alt="Team Member" />
       <div className={` ${styles.overlay}  rounded-4  d-flex flex-wrap  justify-content-center align-items-center `}>
 <h2 className='main-font text-white  w-100 text-center '>Mohamed Hossam</h2> <br />
 <div className="icons  text-center  w-100   ">
<a href="https://www.instagram.com/trt.eg/">  <i class="fa-brands fa-instagram fa-2x  text-danger mx-2"></i></a>
<a href='https://www.tiktok.com/@trt.eg?_t=8omy8NDN72u  ' >
<i class="fa-brands fa-whatsapp fa-2x   mx-2 text-danger  my-1 "></i>
</a>



 </div>

 <h2 className=' w-100 text-center text-white main-font'>Owner</h2>
       </div>
     

     
       </div>
     </div>
   </div>
 </div>
</section>
 </>
  )
}
