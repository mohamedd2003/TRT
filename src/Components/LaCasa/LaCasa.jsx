import React from 'react'
import styles from "../LaCasa/LaCasa.module.css"
import Marquee from "../slider/slider"
export default function LaCasa() {
    const lineStyle={
        background : 'linear-gradient(to right, rgb(50, 63, 75), #f61616ff)',
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
         <h1    className='  text-white text-decoration-line-through  oswald-titles main-font'><span className='text-main '>L</span>CASA DE PAPEL EVENT</h1>
         </div>
 
     
     <Marquee lineStyle={lineStyle}/>
 
     
 
    </header>

    <section id='memories'  className='bg-black py-5'>
    <h1  className='  text-white text-decoration-line-through text-center  oswald-titles main-font'><span className='text-main '>M</span>EMORIES</h1>
    <div className="container p-4 shadowLg rounded-4  my-4">
     <div className="row g-3 ">
      
       <div className="col-md-6 ">
         <div >
           <img data-aos='fade-right' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984430/mk.workss_50_sizkv2.jpg'  alt='Memories' className='w-100 rounded-4 my-1  ' />
           <img data-aos='fade-left' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984436/Img_24-11-05_22-43-18-765_kzsfco.jpg'  alt='BLue BMW Car' className='w-100 rounded-4 my-1  ' />

         </div>
       </div>
       <div className="col-md-6 ">
         <div >
         <img data-aos='fade-right' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984409/mk.workss_4_c7g4yz.jpg'  alt='Memories' className='w-100 rounded-4 my-1  ' />
         <img data-aos='fade-left' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984358/mk.workss_72_xz5acr.jpg'  alt='BLue BMW Car' className='w-100 rounded-4 my-1  ' />
         </div>
         
       </div>
       <div className="col-md-6 ">
         <div >
           <img data-aos='fade-right' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984348/mk.workss_17_zqt5i3.jpg'  alt='Memories' className='w-100 rounded-4 my-1  ' />
           <img data-aos='fade-left' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984425/mk.workss_49_zapvka.jpg'  alt='BLue BMW Car' className='w-100 rounded-4 my-1  ' />

         </div>
       </div>
       <div className="col-md-6 ">
         <div >
         <img data-aos='fade-right' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984351/Img_24-11-06_16-52-40-832_tgwty6.jpg'  alt='Memories' className='w-100 rounded-4 my-1  ' />
         <img data-aos='fade-left' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984344/Img_24-11-06_18-32-00-494_kntosb.jpg'  alt='BLue BMW Car' className='w-100 rounded-4 my-1  ' />
         </div>
         <div >
         <img data-aos='fade-right' data-aos-duration='1000' src='https://res.cloudinary.com/dd5zgwygh/image/upload/v1760984351/mk.workss_71_ppfckv.jpg'  alt='Memories' className='w-100 rounded-4 my-1  ' />
         </div>
         
       </div>
    
    
    
      
      
    
      
     </div>
    </div>
    </section>
    </>
  )
}
