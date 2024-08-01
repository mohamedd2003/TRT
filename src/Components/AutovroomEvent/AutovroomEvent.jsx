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
            <h1  data-aos='fade-down' data-aos-duration='1000'  className='  text-white text-decoration-line-through  oswald-titles main-font'><span className='text-main '>A</span>UTOVROOM EVENT</h1>
            </div>
    
        
        <Marquee lineStyle={lineStyle}/>
    
        
    
       </header>
       </>
  )
}
