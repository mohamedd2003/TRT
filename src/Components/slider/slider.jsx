import React from 'react'
import style from './slider.module.css'
export default function slider({lineStyle}) {
  
  return (
    <>
    
    <section id='Cars Brands' >
        <div className="marquee bg-black pt-5 ">
          <div className="marquee-content">
            <span >BMW</span>
            <i style={lineStyle} ></i>
            <span>AUDI</span>
            <i style={lineStyle} ></i>
            <span>ŠKODA</span>
            <i style={lineStyle} ></i>
            <span>VOLKSWAGEN</span>
            <i style={lineStyle} ></i>
            <span>OPEL</span>
            <i style={lineStyle} ></i>

            <span>SEAT</span>
            <i style={lineStyle} ></i>
            <span>MERCEDES</span>
            <i style={lineStyle} ></i>
            <span>RANGE ROVER</span>
            <i style={lineStyle} ></i>
            <span>TOYOTA</span>
            <i style={lineStyle} ></i>

            <span>RENAULT</span>
            <i style={lineStyle} ></i>
            <span>CITROËN</span>
            <i style={lineStyle} ></i>
            <span>HYUNDAI</span>
            <i style={lineStyle} ></i>
            <span>ALFA ROMEO</span>
            <i style={lineStyle} ></i>
            <span>BENTLEY</span>
            <i style={lineStyle} ></i>
            <span>DODGE</span>
            <i style={lineStyle} ></i>
            <span>FIAT</span>
            <i style={lineStyle} ></i>
            <span>INFINITI</span>
            <i style={lineStyle} ></i>
            <span>JEEP</span>
            <i style={lineStyle} ></i>
            <span>MITSUBISHI</span>
            <i style={lineStyle} ></i>
            <span>NISSAN</span>
            <i style={lineStyle} ></i>
            <span>KIA</span>
            <i style={lineStyle} ></i>
            <span>MAZDA</span>
            <i style={lineStyle} ></i>
            <span>VOLVO</span>
            <i style={lineStyle} ></i>
            <span>SUBARU </span>
            <i style={lineStyle} ></i>
            <span>CHEVROLET  </span>
            <i style={lineStyle} ></i>
            <span>LEXUS  </span>
            <i style={lineStyle} ></i>
            <span>PEUGEOT</span>
            <i style={lineStyle} className={`${style.line}  `}></i>


          </div>
        </div>

      </section>
    </>
  )
}
