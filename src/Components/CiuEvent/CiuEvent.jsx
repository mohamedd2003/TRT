import React from 'react'
import styles from './CiuEvent.module.css'
import Marquee from '../slider/slider'
export default function CiuEvent() {
    const lineStyle={
        background : 'linear-gradient(to right, rgb(39, 1, 1), #733095)',
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
            <h1    className='  text-white text-decoration-line-through  oswald-titles main-font'><span className='text-main '>C</span>IU EVENT</h1>
            </div>
    
        
        <Marquee lineStyle={lineStyle}/>
    
        
    
       </header>

       <section id='memories'  className='bg-black py-5'>
       <h1  className='  text-white text-decoration-line-through text-center  oswald-titles main-font'><span className='text-main '>M</span>EMORIES</h1>
       <div className="container p-4 shadowLg rounded-4 my-4">
        <div className="row gy-3 ">
         
        
          <div className="col-6 ">
            <div >
            <img data-aos='fade-right' data-aos-duration='1000' src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722980347/vzfcgbuoa7newtc20tcq.webp'  alt='Memories' className='w-100 rounded-4 py-2 ' />
            </div>
          </div>
          <div className="col-6 ">
            <div >
            <img data-aos='fade-left' data-aos-duration='1000' src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722980347/oqaywobv5ia6ie4v9q6t.webp'  alt='BLue BMW Car' className='w-100 rounded-4  ' />
            </div>
          </div>
          <div className="col-12 ">
            <div >
            <img data-aos='fade-left' data-aos-duration='1000' src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722980347/mwl8aoodglwtcc742y7k.webp'  alt='BLue BMW Car' className='w-100 rounded-4  ' />
            </div>
          </div>
        </div>
       </div>
       </section>
    </>
  )
}
