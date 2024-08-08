import React ,{useState} from 'react'
import styles from "../Gallery/Gallery.module.css"
import images from '../Images/Images';
import Marquee from '../slider/slider';
import { MoonLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

//*********************************************************** */
export default function Gallery() {
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

   const [loading, setLoading] = useState(true);

   const handleBeforeLoad = () => {
     setLoading(true);
   };
 
   const handleonLoad = () => {
     setLoading(false);
   };
  return (
   <>
   
   <header className={`  ${styles.backGround} text-center `}>
   <div   className={`d-flex justify-content-center align-items-center  ${styles.header}`}>
        <h1  data-aos='fade-down' data-aos-duration='1000'  className='  text-white text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR GALLERY</h1>
        </div>

    
    <Marquee lineStyle={lineStyle}/>

    

   </header>

   <section className='bg-black'>
      <div className="d-flex justify-content-center pt-4">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <i className="fa-solid fa-fill-drip text-white fa-2x"></i>

          <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  active " id="pills-purple-tab" data-bs-toggle="pill" data-bs-target="#pills-purple" type="button" role="tab" aria-controls="pills-purple" aria-selected="false"><i className=" fa-solid text-purple fa-droplet fa-2x"></i></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link  rounded-circle " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="text-main fa-solid fa-droplet fa-2x"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  mx-2 " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i className=" fa-solid text-orange fa-droplet fa-2x"></i></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  " id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><i className=" fa-solid text-blue fa-droplet fa-2x"></i></button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-circle  " id="pills-yellow-tab" data-bs-toggle="pill" data-bs-target="#pills-yellow" type="button" role="tab" aria-controls="pills-yellow" aria-selected="false"><i className=" fa-solid text-yellow fa-droplet fa-2x"></i></button>
            </li>

            <li className="nav-item" role="presentation">
              <button title='black and white' className="nav-link rounded-circle  " id="pills-white-tab" data-bs-toggle="pill" data-bs-target="#pills-white" type="button" role="tab" aria-controls="pills-white" aria-selected="false"><i className=" fa-solid text-white fa-droplet fa-2x"></i></button>
            </li>
            
            <li className="nav-item" role="presentation">
              <button  className="nav-link rounded-circle  " id="pills-green-tab" data-bs-toggle="pill" data-bs-target="#pills-green" type="button" role="tab" aria-controls="pills-green" aria-selected="false"><i className=" fa-solid text-success fa-droplet fa-2x"></i></button>
            </li>
            
            <li className="nav-item" role="presentation">
              <button  title='Silver'  className="nav-link rounded-circle  " id="pills-silver-tab" data-bs-toggle="pill" data-bs-target="#pills-silver" type="button" role="tab" aria-controls="pills-silver" aria-selected="false"><i className=" fa-solid textSilver fa-droplet fa-2x"></i></button>
            </li>
            
           
            
          </ul>
        </div>
        <div className="tab-content " id="pills-tabContent">
        {/***************************** RED CARS ****************************/}
          <div className="tab-pane " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
            <div className="container" data-aos='fade-down'> 
              <div className="row gy-2 ">

                <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965774/sdpbccv8x3hnqiyjkjgk.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                     src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142614/vbdiwadjq6xaalpp8bl2.webp' className='w-100 rounded-4 mt-2'  alt="BMW RACE" />
                  </div>
                
                 
                </div>

                <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                    effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp'className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>

                  
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  
                    beforeLoad={handleBeforeLoad}
                      afterLoad={handleonLoad}  
                       effect="blur"   
                       threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965885/as4sx6tsqqejhexqitpq.webp' className='w-100 rounded-4 '  alt="Porscha CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965885/zwtrmx6oywwxlcmmxp62.webp' className='w-100 rounded-4 '  alt="seat CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142648/mm3i28az8smpbd4lmooz.webp' className='w-100 rounded-4 '  alt="OLD VW CAR" />
                  </div>


                </div>


              </div>
              <div className="row gy-2 ">

                <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                    effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965790/zfi6loysjk9jkebtvobp.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965786/bjelm5w9k4zyfkmiglyi.webp'className='w-100 rounded-4  '  alt="BMW CAR" />
                  </div>
                
                 
                </div>

                <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                    effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965791/ueknwrcaf7468eivh5sn.webp'className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965778/j4wxc2sv5u5toknl6exv.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>

                  
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142627/utk8wisbsg8kbh4h2xav.webp' className='w-100 rounded-4 '  alt="HONDA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142625/b85luhdkv4szdv3tjtxr.webp' className='w-100 rounded-4 '  alt="HONDA CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142624/ezttcoinq123dnaaew5r.webp' className='w-100 rounded-4 '  alt="HONDA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142630/u6badte6actyzlxvhgor.webp' className='w-100 rounded-4 '  alt="LANCER  CAR" />
                  </div>


                </div>


              </div>
              <div className="row gy-2 ">

<div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
  <LazyLoadImage  beforeLoad={handleBeforeLoad} 
   afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965890/zk2mnqumovhzp3rr4pjg.webp' className='w-100 rounded-4 '  alt="SKODA CAR" />
  </div>
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
  <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
    threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142644/teahlmyq1xzmuxmaq5g2.webp' className='w-100 rounded-4 '  alt="SKODA CAR" />
  </div>
  

 
</div>

<div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
    effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142643/qowwd00mrzolbwqigqcv.webp' className='w-100 rounded-4 '  alt="skoda CAR" />
  </div>
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142641/onenrzptw4a8qgyuwgg0.webp' className='w-100 rounded-4 '  alt="skoda CAR" />
  </div>

  
</div>

<div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
     afterLoad={handleonLoad}   effect="blur" 
       threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142634/ttmzqvfklerptddrhzau.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
  </div>
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
     afterLoad={handleonLoad}   effect="blur"   
     threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142634/j1ovhjq5bvhuoxlwn5cq.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
  </div>
</div>

<div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad}  
    afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142634/asfvg01rty5tgjbsqtk5.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
  </div>
  <div className="car p-1">{loading && <MoonLoader size={100} color={"red"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723142638/akjnza7qqadthui4ppqk.webp ' className='w-100 rounded-4 '  alt="OPEL  CAR" />
  </div>


</div>


</div>

              
            </div>
          </div>
        {/***************************** ORANGE CARS ****************************/}

          <div className="tab-pane " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">
              <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel1} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel5} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>


                </div>

                <div data-aos='fade-right'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel4} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel2} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel6} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel7} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel8} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel9} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>
                <div data-aos='fade-left'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.orangeBmw01} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.orangeBmw02} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>
                <div data-aos='fade-right'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.orangeBmw03} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.orangeBmw04} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>



                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.hyndai} className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel3} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100 d-flex align-items-stretch">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.vw} className='w-100 rounded-4 h-100 '  alt="vw CAR" />
                  </div>
                </div>

                

               


              </div>
            </div>
          </div>
        {/***************************** BLUE CARS ****************************/}

          <div className="tab-pane " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
            <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.blueBmw5} className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.blueBmw2} className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.blueBmw1} className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.blueBmw4} className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Seat} className='w-100 rounded-4 '  alt="SEAT CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Seat2} className='w-100 rounded-4 '  alt="seat CAR" />
                  </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Seat3} className='w-100 rounded-4 '  alt="SEAT CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Seat4} className='w-100 rounded-4 '  alt="seat CAR" />
                  </div>
                </div>

            

                  <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Hyndai} className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                    </div>
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.honda} className='w-100 rounded-4 '  alt="HONDA CAR" />
                    </div>


                  </div>
                  <div data-aos='fade-right' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Hyndai1} className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                    </div>
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.honda01} className='w-100 rounded-4 '  alt="HONDA CAR" />
                    </div>


                  </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car pt-1 ">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.vrs} className='w-100 rounded-4 '  alt="SKODA VRS CAR" />
                  </div>
               
                </div>

                <div data-aos='fade-UP' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.vrs1} className='w-100 rounded-4 '  alt="VRS CAR" />
                    </div>
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.vrs2} className='w-100 rounded-4 '  alt="VRS CAR" />
                    </div>


                  </div>



              </div>
            </div>
          </div>
        {/***************************** yellow CARS ****************************/}

        <div className="tab-pane " id="pills-yellow" role="tabpanel" aria-labelledby="pills-yellow-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.MIT1} className='w-100 rounded-4 '  alt="MITSUBISHI CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.MIT2} className='w-100 rounded-4 '  alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100 d-flex align-items-stretch">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.MIT3} className='w-100 rounded-4 h-100 '  alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.vw4} className='w-100 rounded-4 '  alt="vw CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.vw5} className='w-100 rounded-4 '  alt="vw CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.yellowBmw} className='w-100 rounded-4 '  alt="yellowBmw CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.yellowBmw2} className='w-100 rounded-4 '  alt="yellowBmw CAR" />
                  </div>


                </div>


              </div>
            </div>
          
          </div>
        {/***************************** Purple CARS ****************************/}
          <div className="tab-pane  active" id="pills-purple" role="tabpanel" aria-labelledby="pills-purple-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-down' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"
                       threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976696/npqcz18bjmjk5mfuqxmu.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}
                      afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976705/g4o2ys2vpftsifzt4oju.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976699/espbhlclwapi7la4cwwy.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                     src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976696/qles0uyglbaqgmneve8f.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"  
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976704/mzfnvxydgs2vzlhrfn2g.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976695/zrr6eraqguaxnudqlnz5.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  
                    afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976696/ynai2kgipyhm45vdwjnb.webp'
                    className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976705/g4o2ys2vpftsifzt4oju.webp' className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                </div>

              

           

                <div data-aos='fade-up' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.opel01} className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976710/ppdqvwfvsuxoysydbxep.webp'
                       className='w-100 rounded-4 '  alt="Proton CAR" />
                  </div>
                </div>

                <div data-aos='fade-down' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   
                    threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976710/tbmfosxjia7a9m2lfegt.webp'
                     className='w-100 rounded-4 '  alt="Proton CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976710/kb5z4m03uvtjkk2730th.webp'className='w-100 rounded-4 '  alt="proton CAR" />
                  </div>
                </div>
                <div data-aos='fade-left' data-aos-duration='1000'  className="  col-6 ">
                
                <div className="car p-1">{loading && <MoonLoader size={100} color={"Purple"} loading={loading} />}
                  <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722976714/gzp7emiype2tl3zpfimr.webp' className='w-100 rounded-4 '  alt="vw CAR" />
                </div>
              </div>
              

              </div>
            </div>
          
          </div>

            {/***************************** white CARS ****************************/}
            <div className="tab-pane " id="pills-white" role="tabpanel" aria-labelledby="pills-white-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.whiteVw01} className='w-100 rounded-4 '  alt="VW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.whiteVw02} className='w-100 rounded-4 '  alt="VW CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.whiteSeat01} className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.whiteSeat02} className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.whiteBmw} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.HYNDAI} className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.Dayoo} className='w-100 rounded-4 '  alt="CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={images.toyota} className='w-100 rounded-4 '  alt="TOYOTA CAR" />
                  </div>
                </div>

              

              </div>
            </div>
          
          </div>

           {/***************************** Green CARS ****************************/}
           <div className="tab-pane " id="pills-green" role="tabpanel" aria-labelledby="pills-green-tab" tabIndex="0">
          <div className="container " data-aos='fade-down'>
              <div className="row gy-2 ">

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"green"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} 
                     src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048347/k7b08bwttbcjweczjyfk.jpg' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"green"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} 
                     src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048345/djjewavy4t3m5jz9c914.jpg' className='w-100 rounded-4 '  alt="VW CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1 h-100 d-flex align-items-stretch">{loading && <MoonLoader size={100} color={"green"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048342/brtmrvvhlmpkxi60rrqd.jpg' className='w-100 rounded-4  h-100'  alt="TOYOTA  CAR" />
                  </div>
                  
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"green"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048322/vawdtp43sk7ca0gx1afo.jpg' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"green"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}
                      afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                      src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723048349/r0hnjllouqary3twrn1y.jpg'
                      className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>

                
              

              </div>
            </div>
          
          </div>


           {/***************************** Silver CARS ****************************/}



          <div className="tab-pane " id="pills-silver" role="tabpanel" aria-labelledby="pills-silver-tab" tabIndex="0">
            <div className="container" data-aos='fade-down'> 
        
              <div className="row gy-2 ">

                <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723050229/tgvr21oss2tldfalbirr.jpg' className='w-100 rounded-4 '
                      alt="HONDA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723050238/vmnhgvz3zm3ys9arfqah.jpg' 
                      className='w-100 rounded-4  '  alt="HONDA CAR" />
                  </div>
                
                 
                </div>

                <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049637/yskp2kl6oid7bicnfna1.jpg'
                       className='w-100 rounded-4 '  alt="HONDA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} 
                     src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049619/byqablwpm6wzv4y9uw8n.jpg'
                      className='w-100 rounded-4 '  alt="HONDA CAR" />
                  </div>

                  
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage 
                     beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                      effect="blur" 
                        threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049586/ndgupcceft5caijsz3ns.jpg' className='w-100 rounded-4 ' 
                         alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage 
                     beforeLoad={handleBeforeLoad}  
                     afterLoad={handleonLoad}   effect="blur"
                        threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049572/xjvgiz8lqryd3rivmib7.jpg'
                         className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049581/xvnzbjloxr0pwtongpat.jpg'
                     className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049574/jt74rdo4ajzcedkdxqad.jpg' className='w-100 rounded-4 '  alt="BMW  CAR" />
                  </div>


                </div>


              </div>
              <div className="row gy-2 ">

<div  data-aos-duration='1000' data-aos='fade-right' className="  col-6 ">
  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
  <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049542/x8aqbff5pxhsoeckaiji.jpg'
   className='w-100 rounded-4 '  alt="HYNDAI CAR" />
  </div>
  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
  <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
    effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049542/oivu4tijhbwbpfbeguhu.jpg' className='w-100 rounded-4 '  alt="HYNDAI CAR" />
  </div>
  

 
</div>

<div  data-aos-duration='1000'   data-aos='fade-up' className="  col-6">
  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   
    threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049533/s4pbjmam3itmxhaevmeo.jpg' 
    className='w-100 rounded-4 '  alt="HYNDAI CAR" />
  </div>
  <div className="car p-1">{loading && <MoonLoader size={100} color={"silver"} loading={loading} />}
    <LazyLoadImage  beforeLoad={handleBeforeLoad}
      afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723049653/hfaj5atywrubahnlxc13.jpg' className='w-100 rounded-4 '  alt="HONDA CAR" />
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
