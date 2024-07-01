import React from 'react'
import styles from "../Gallery/Gallery.module.css"
import images from '../Images/Images';
export default function Gallery() {
   
  return (
   <>
   
   <header className={`  ${styles.backGround} text-center `}>
   <div   className={`d-flex justify-content-center align-items-center  ${styles.header}`}>
        <h1  data-aos='fade-down' data-aos-duration='1000'  className='  text-white text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR GALLERY</h1>
        </div>

<section id='cars Logo' >
        <div className="marquee bg-black pt-5 ">
        <div className="marquee-content">
        
            <span >BMW</span>
            <i className={`${styles.line}`}></i>
            <span>AUDI</span>
            <i className={`${styles.line}`}></i>
            <span>ŠKODA</span>
            <i className={`${styles.line}`}></i>
            <span>VOLKSWAGEN</span>
            <i className={`${styles.line}`}></i>
            <span>OPEL</span>
            <i className={`${styles.line}`}></i>

            <span>SEAT</span>
            <i className={`${styles.line}`}></i>
            <span>MERCEDES</span>
            <i className={`${styles.line}`}></i>
            <span>RANGE ROVER</span>
            <i className={`${styles.line}`}></i>
            <span>TOYOTA</span>
            <i className={`${styles.line}`}></i>

            <span>RENAULT</span>
            <i className={`${styles.line}`}></i>
            <span>CITROËN</span>
            <i className={`${styles.line}`}></i>
            <span>HYUNDAI</span>
            <i className={`${styles.line}`}></i>
            <span>ALFA ROMEO</span>
            <i className={`${styles.line}`}></i>
            <span>BENTLEY</span>
            <i className={`${styles.line}`}></i>
            <span>DODGE</span>
            <i className={`${styles.line}`}></i>
            <span>FIAT</span>
            <i className={`${styles.line}`}></i>
            <span>INFINITI</span>
            <i className={`${styles.line}`}></i>
            <span>JEEP</span>
            <i className={`${styles.line}`}></i>
            <span>MITSUBISHI</span>
            <i className={`${styles.line}`}></i>
            <span>NISSAN</span>
            <i className={`${styles.line}`}></i>
            <span>KIA</span>
            <i className={`${styles.line}`}></i>
            <span>MAZDA</span>
            <i className={`${styles.line}`}></i>
            <span>VOLVO</span>
            <i className={`${styles.line}`}></i>
            <span>SUBARU </span>
            <i className={`${styles.line}`}></i>
            <span>CHEVROLET  </span>
            <i className={`${styles.line}`}></i>
            <span>LEXUS  </span>
            <i className={`${styles.line}`}></i>
            <span>PEUGEOT</span>
            <i className={`${styles.line} `}></i>


          </div>
        </div>

      </section>

    

   </header>

   <section className='bg-black'>
      <div className="d-flex justify-content-center pt-4">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <i class="fa-solid fa-fill-drip text-white fa-2x"></i>

          <li class="nav-item" role="presentation">
              <button class="nav-link rounded-circle  active " id="pills-purple-tab" data-bs-toggle="pill" data-bs-target="#pills-purple" type="button" role="tab" aria-controls="pills-purple" aria-selected="false"><i class=" fa-solid text-purple fa-droplet fa-2x"></i></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link  rounded-circle " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="text-main fa-solid fa-droplet fa-2x"></i></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link rounded-circle  mx-2 " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class=" fa-solid text-orange fa-droplet fa-2x"></i></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link rounded-circle  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i class=" fa-solid text-blue fa-droplet fa-2x"></i></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link rounded-circle  " id="pills-yellow-tab" data-bs-toggle="pill" data-bs-target="#pills-yellow" type="button" role="tab" aria-controls="pills-yellow" aria-selected="false"><i class=" fa-solid text-yellow fa-droplet fa-2x"></i></button>
            </li>

            <li class="nav-item" role="presentation">
              <button class="nav-link rounded-circle  " id="pills-white-tab" data-bs-toggle="pill" data-bs-target="#pills-white" type="button" role="tab" aria-controls="pills-white" aria-selected="false"><i class=" fa-solid text-white fa-droplet fa-2x"></i></button>
            </li>
            
           
            
          </ul>
        </div>
        <div class="tab-content " id="pills-tabContent">
        {/***************************** RED CARS ****************************/}
          <div class="tab-pane " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
            <div className="container" data-aos='fade-down'> 
              <div className="row gy-2 ">

                <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.BMW3} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.BMW4} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.BMW1} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.porscha} className='w-100 rounded-4 ' loading='lazy' alt="Porscha CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.seat} className='w-100 rounded-4 ' loading='lazy' alt="seat CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.skoda} className='w-100 rounded-4 ' loading='lazy' alt="skoda CAR" />
                  </div>


                </div>


              </div>
            </div>
          </div>
        {/***************************** ORANGE CARS ****************************/}

          <div class="tab-pane " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.hyndai} className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel3} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1">
                    <img src={images.vw} className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
                  </div>
                </div>

                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.opel4} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel2} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.opel1} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel5} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>


                </div>


              </div>
            </div>
          </div>
        {/***************************** BLUE CARS ****************************/}

          <div class="tab-pane " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
            <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.Seat} className='w-100 rounded-4 ' loading='lazy' alt="SEAT CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.honda} className='w-100 rounded-4 ' loading='lazy' alt="Honda CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 ">
                    <img src={images.blueBmw} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                </div>

                  <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">
                      <img src={images.Hyndai} className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                    </div>
                    <div className="car p-1">
                      <img src={images.KIA} className='w-100 rounded-4 ' loading='lazy' alt="KIA CAR" />
                    </div>


                  </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car pt-1  ">
                    <img src={images.vrs} className='w-100 rounded-4 ' loading='lazy' alt="SKODA VRS CAR" />
                  </div>
               
                </div>



              </div>
            </div>
          </div>
        {/***************************** yellow CARS ****************************/}

        <div class="tab-pane " id="pills-yellow" role="tabpanel" aria-labelledby="pills-yellow-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.MIT1} className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.MIT2} className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1">
                    <img src={images.MIT3} className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.vw4} className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.vw5} className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">
                    <img src={images.yellowBmw} className='w-100 rounded-4 ' loading='lazy' alt="yellowBmw CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.yellowBmw2} className='w-100 rounded-4 ' loading='lazy' alt="yellowBmw CAR" />
                  </div>


                </div>


              </div>
            </div>
          
          </div>
        {/***************************** Purple CARS ****************************/}
          <div class="tab-pane  active" id="pills-purple" role="tabpanel" aria-labelledby="pills-purple-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.ibiza1} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.ibiza2} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.ibiza3} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.ibiza4} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.opel01} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.opel02} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.opel03} className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.purpleVw} className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
                  </div>
                </div>

              

              </div>
            </div>
          
          </div>

            {/***************************** white CARS ****************************/}
            <div class="tab-pane " id="pills-white" role="tabpanel" aria-labelledby="pills-white-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.whiteVw01} className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.whiteVw02} className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.whiteSeat01} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.whiteSeat02} className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.whiteBmw} className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.HYNDAI} className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">
                    <img src={images.Dayoo} className='w-100 rounded-4 ' loading='lazy' alt="CAR" />
                  </div>
                  <div className="car p-1">
                    <img src={images.toyota} className='w-100 rounded-4 ' loading='lazy' alt="TOYOTA CAR" />
                  </div>
                </div>

              

              </div>
            </div>
          
          </div>
        </div>
      </section>
       


   
   </>
  )
}
