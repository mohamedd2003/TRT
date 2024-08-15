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
            <li className="nav-item bg-light p-0 rounded-circle" role="presentation">
              <button  title='black'  className="nav-link rounded-circle  " id="pills-black-tab" data-bs-toggle="pill" data-bs-target="#pills-black" type="button" role="tab" aria-controls="pills-black" aria-selected="false"><i className=" fa-solid text-black fa-droplet fa-2x"></i></button>
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
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717847/mgq3kluxqf7mgxvilhla.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   
                    threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966851/eaaddurxrz75ek5dtgg8.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>


                </div>

                <div data-aos='fade-right'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717861/jmsrfnmim34splrpn95j.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966847/wgy9jdt8lgjihnc8i7xh.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}
                      afterLoad={handleonLoad}   effect="blur"
                         threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966852/fo5yvbo9wdp30pnyclpn.webp'
                          className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966846/ryegp2l0qgwmteefwhno.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717878/iu7s0ljnacv8lolrco96.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717876/d1iynwsdj3lzhmnxofyz.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>
                <div data-aos='fade-left'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717957/f7oqxshdwhynhqnd8xxn.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717956/nodofqruurka8wybokog.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>
                <div data-aos='fade-right'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717956/fo37c6amcoqo7rch97rm.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723717955/palhb7hk1attlahuli91.webp' className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>



                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966812/nlyo0rvbvg5ibuxihjlx.webp' className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966851/etbekaakydnmmm3cryof.webp' className='w-100 rounded-4 '  alt="OPEL CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100 d-flex align-items-stretch">{loading && <MoonLoader size={100} color={"orange"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                    effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966809/lpspfcdq8mmx9yapqnf0.webp' className='w-100 rounded-4 h-100 '  alt="vw CAR" />
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
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967583/v3pzuetqovc8d7faepkm.webp' className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967580/hggzct1sbtjlbw2bg769.webp' className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur" 
                       threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967581/towzwao0bid48vqgdwg0.webp'
                        className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967583/a84cib0zqoxocooyh7pk.webp' className='w-100 rounded-4 '  alt="blue BMW CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967554/cdonmpaae1g9ofsvtuds.webp' className='w-100 rounded-4 '  alt="SEAT CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967554/rm6pomhm4twddhz8wddz.webp' className='w-100 rounded-4 '  alt="seat CAR" />
                  </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967553/cvbovesk9eitpxl16ua6.webp' className='w-100 rounded-4 '  alt="SEAT CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967553/afnogtinuzjouvfjm4lh.webp'} className='w-100 rounded-4 '  alt="seat CAR" />
                  </div>
                </div>

            

                  <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                        effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967587/qxpdzejodnoz33ckik1e.webp'} className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                    </div>
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                        effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967567/fhen8wvzncds87xu6hc3.webp'} className='w-100 rounded-4 '  alt="HONDA CAR" />
                    </div>


                  </div>
                  <div data-aos='fade-right' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967587/u2cy8crg0y5blbwa4rme.webp'} className='w-100 rounded-4 '  alt="HYNDAI CAR" />
                    </div>
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  
                      afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967573/epm58zvvri0trvtd8flm.webp'} className='w-100 rounded-4 '  alt="HONDA CAR" />
                    </div>


                  </div>
                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6 ">
                  <div className="car pt-1 ">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967556/sxmhm4gf4us3b3lldyex.jpg'} className='w-100 rounded-4 '  alt="SKODA VRS CAR" />
                  </div>
               
                </div>

                <div data-aos='fade-UP' data-aos-duration='1000'   className=" col-lg-3 col-6">
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                       afterLoad={handleonLoad}   effect="blur"   
                       threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723719969/pli1cqgcdgptsn0zpt3y.jpg'} className='w-100 rounded-4 '  alt="VRS CAR" />
                    </div>
                    <div className="car p-1">{loading && <MoonLoader size={100} color={"blue"} loading={loading} />}
                      <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723719969/nngkci9sa3gs754b2rxl.jpg'} className='w-100 rounded-4 '  alt="VRS CAR" />
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
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974787/wwrrggaldbgrnm6ke5es.webp'} className='w-100 rounded-4 '  alt="MITSUBISHI CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"  
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974787/jv4n2rbkanxbv0xl55f5.webp'} className='w-100 rounded-4 '  alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
                  <div className="car pt-1 h-100 d-flex align-items-stretch">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974786/knohjz5mhwzozlbviie9.webp' className='w-100 rounded-4 h-100 '  alt="MITSUBISHI CAR" />
                  </div>
                </div>

                <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  
                    afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974791/e5ypl6cnmh1y91ldzubd.webp'} className='w-100 rounded-4 '  alt="vw CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                    effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974791/eposj8cqphd3msfs5vmm.webp'} className='w-100 rounded-4 '  alt="vw CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974796/iunerwkoh6dlysqn8htn.webp'} className='w-100 rounded-4 '  alt="yellowBmw CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"yellow"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  
                    afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974796/gkbvgginvv01gvxezypn.webp'} className='w-100 rounded-4 '  alt="yellowBmw CAR" />
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
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  
                    afterLoad={handleonLoad}   effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975128/anvdccgtm1o3jgvzxfl4.webp'} className='w-100 rounded-4 '  alt="VW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   
                    effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975124/zmjm3u19j1xgbimcpxka.webp'} className='w-100 rounded-4 '  alt="VW CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975141/e1aiwhsiw6ohh6koxf55.webp'} className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}
                      afterLoad={handleonLoad}   effect="blur"   
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975140/y8oddss0nldkvt6rlvsg.webp'} className='w-100 rounded-4 '  alt="SEAT IBIZA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975144/t5tt3awsevsanqogclp9.webp'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720666/bhlt7xasui298gpvazdp.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720665/zcrrlzdhhoquompairpl.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"  
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720662/ti8nenur1onawkyaun0n.jpg'} className='w-100 rounded-4 '  alt="TOYOTA CAR" />
                  </div>
                </div>

                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720933/mg7kqjz6okdxqthrml5s.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720948/ti8q8jye5bkowicjnaj9.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720951/kqulizhvz1vkr7pxzu09.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"  
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720926/qh85qxt91erraho5v1ow.jpg'} className='w-100 rounded-4 '  alt="TOYOTA CAR" />
                  </div>
                </div>
                <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720896/ya0yqxs1efmypdadvs4p.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720905/uqsnukwwcfz9lxmthshc.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                </div>

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720907/ug2kdabmbyhqmayjj5tc.jpg'} className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad} 
                     afterLoad={handleonLoad}   effect="blur"  
                      threshold={1500} src={'https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723720883/nmolfdgagqluwfotfnng.jpg'} className='w-100 rounded-4 '  alt="TOYOTA CAR" />
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

                <div data-aos='fade-left' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
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



           {/***************************** Black CARS ****************************/}



           <div className="tab-pane " id="pills-black" role="tabpanel" aria-labelledby="pills-black-tab" tabIndex="0">
            <div className="container" data-aos='fade-down'> 
        
              <div className="row gy-2 ">

                <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723777/ng8su1ktmpiolvkriawj.jpg' className='w-100 rounded-4 '
                      alt="MERCEDES CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad} 
                      effect="blur"   threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723779/bmfv9ukooz9lihwpfucs.jpg' 
                      className='w-100 rounded-4  '   alt="MERCEDES CAR" />
                  </div>
                
                 
                </div>

                <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur" 
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723897/urtqhwuz2pq45ospqyxc.jpg'
                       className='w-100 rounded-4 '  alt="BMW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                     threshold={1500} 
                     src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723821/rzupeoyosxgc1cjddb4f.jpg'
                      className='w-100 rounded-4 '  alt="LOGAN CAR" />
                  </div>

                  
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage 
                     beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                      effect="blur" 
                        threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723877/eqff9pa3rbxn3nkkchlq.jpg' className='w-100 rounded-4 ' 
                         alt="JETTA VW CAR" />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage 
                     beforeLoad={handleBeforeLoad}  
                     afterLoad={handleonLoad}   effect="blur"
                        threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723878/xireveuo5ogrw0olt7dt.jpg'
                         className='w-100 rounded-4 '   alt="JETTA VW CAR" />
                  </div>
                </div>

                <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6">
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500} 
                    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723884/wfnhwxumacaedufdgqup.jpg'
                     className='w-100 rounded-4 '    alt="JETTA VW CAR"  />
                  </div>
                  <div className="car p-1">{loading && <MoonLoader size={100} color={"white"} loading={loading} />}
                    <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}  
                     effect="blur"  
                      threshold={1500} src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1723723881/wurowj4b5clynixsfdkb.jpg' 
                      className='w-100 rounded-4 '   alt="JETTA VW CAR"  />
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
