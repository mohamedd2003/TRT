import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function GallerySection() {
  const [loading, setLoading] = useState(true);

  const handleBeforeLoad = () => {
    setLoading(true);
  };

  const handleonLoad = () => {
    setLoading(false);
  };

  return (
    <section id='gallery' className='bg-black py-5'>
    <div className='m-auto text-center'>
    <h2 data-aos='fade-down' data-aos-duration='1000' className='  text-decoration-line-through  oswald-titles main-font'><span className=' text-main'>O</span>UR GALLERY</h2>
      <h4 className='colourFont text-main' data-aos='fade-up'>
        PiCK COLOUR
      </h4>
    </div>

    <div className="d-flex justify-content-center mt-4">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <i className="fa-solid fa-fill-drip text-white fa-2x"></i>
        <li className="nav-item" role="presentation">
          <button className="nav-link active rounded-circle " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i className="text-main fa-solid fa-droplet fa-2x"></i></button>
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
          <button className="nav-link rounded-circle  " id="pills-white-tab" data-bs-toggle="pill" data-bs-target="#pills-white" type="button" role="tab" aria-controls="pills-white" aria-selected="false"><i className=" fa-solid text-white fa-droplet fa-2x"></i></button>
        </li>
      </ul>
    </div>
    <div className="tab-content " id="pills-tabContent">
    {/***************************** RED CARS ****************************/}
      <div className="tab-pane   active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
        <div className="container" data-aos='fade-down'> 
          <div className="row gx-3  ">

            <div  data-aos-duration='1000' data-aos='fade-right' className=" col-lg-3 col-6 ">
            <div className="car">
      
      <LazyLoadImage
        beforeLoad={handleBeforeLoad}
        afterLoad={handleonLoad}
        src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965774/sdpbccv8x3hnqiyjkjgk.webp'
        className='w-100 rounded-4'
        alt="BMW CAR"
      />
    </div>
              <div className="car p-1 ">
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}  
                  src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965778/j4wxc2sv5u5toknl6exv.webp' className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
              </div>
            </div>

            <div  data-aos-duration='1000'   data-aos='fade-up' className=" col-lg-3 col-6">
              <div className="car ">   {loading && <ClipLoader size={100} color={"red"} loading={loading} />} 
                  
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965568/pkigrno2jyl4prvknefh.webp' className='w-100 rounded-4  ' loading='lazy' alt="BMW CAR" />
              </div>
            </div>

            <div  data-aos-duration='1000'  data-aos='fade-down' className=" col-lg-3 col-6">
              <div className="car ">   {loading && <ClipLoader size={100} color={"red"} loading={loading} />} 
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965885/as4sx6tsqqejhexqitpq.webp' className='w-100 rounded-4 ' loading='lazy' alt="Porscha CAR" />
              </div>
            </div>

            <div  data-aos-duration='1000'  data-aos='fade-left' className=" col-lg-3 col-6 ">
              <div className="car ">   {loading && <ClipLoader size={100} color={"red"} loading={loading} />} 
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965885/zwtrmx6oywwxlcmmxp62.webp' className='w-100 rounded-4 ' loading='lazy' alt="seat CAR" />
              </div>
              <div className="car p-1 ">

              {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}    src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722965890/zk2mnqumovhzp3rr4pjg.webp' className='w-100 rounded-4 ' loading='lazy' alt="skoda CAR" />
              </div>


            </div>


          </div>
        </div>
      </div>
    {/***************************** ORANGE CARS ****************************/}
      <div className="tab-pane " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
      <div className="container " data-aos='fade-down'>
          <div className="row gy-2 ">

            <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966812/nlyo0rvbvg5ibuxihjlx.webp' className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966851/etbekaakydnmmm3cryof.webp' className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
              </div>
            </div>

            <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6  ">
              <div className="car pt-1  h-100 rounded-4 d-flex align-items-stretch"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"  
                 threshold={1500}  
                 src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966809/lpspfcdq8mmx9yapqnf0.webp'
                  className=' w-100 rounded-4  h-100 '   loading='lazy' alt="vw CAR" />
              </div>
            </div>

            <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966846/ryegp2l0qgwmteefwhno.webp' className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966852/fo5yvbo9wdp30pnyclpn.webp' className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
              </div>
            </div>

            <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966847/wgy9jdt8lgjihnc8i7xh.webp' className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722966851/eaaddurxrz75ek5dtgg8.webp' className='w-100 rounded-4 ' loading='lazy' alt="OPEL CAR" />
              </div>


            </div>


          </div>
        </div>
      </div>
    {/***************************** BLUE CARS ****************************/}

      <div className="tab-pane " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
        <div className="container " data-aos='fade-down'>
          <div className="row gy-2 ">

            <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967554/cdonmpaae1g9ofsvtuds.webp' className='w-100 rounded-4 ' loading='lazy' alt="SEAT CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967567/fhen8wvzncds87xu6hc3.webp' className='w-100 rounded-4 ' loading='lazy' alt="Honda CAR" />
              </div>
            </div>

            <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
              <div className="car pt-1 h-100  d-flex align-items-stretch "> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967563/b7uevgn8zpz4qc9sp8jb.webp' className='w-100 rounded-4 h-100' loading='lazy' alt="BMW CAR" />
              </div>
            </div>

              <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
                <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                  <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967587/u2cy8crg0y5blbwa4rme.webp'className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
                </div>
                <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                  <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967593/wthi7eayx4ekop9grwgf.webp' className='w-100 rounded-4 ' loading='lazy' alt="KIA CAR" />
                </div>


              </div>
            <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
              <div className="car pt-1  "> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967556/sxmhm4gf4us3b3lldyex.jpg' className='w-100 rounded-4 ' loading='lazy' alt="SKODA VRS CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722967553/afnogtinuzjouvfjm4lh.webp' className='w-100 rounded-4 ' loading='lazy' alt="seat CAR" />
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
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974787/wwrrggaldbgrnm6ke5es.webp' className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974787/jv4n2rbkanxbv0xl55f5.webp' className='w-100 rounded-4 ' loading='lazy' alt="MITSUBISHI CAR" />
              </div>
            </div>

            <div data-aos='fade-up' data-aos-duration='1000'    className=" col-lg-3 col-6">
              <div className="car pt-1 h-100  d-flex align-items-stretch"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974786/knohjz5mhwzozlbviie9.webp' className='w-100 rounded-4 h-100' loading='lazy' alt="MITSUBISHI CAR" />
              </div>
            </div>

            <div data-aos='fade-down'  data-aos-duration='1000'   className=" col-lg-3 col-6">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974791/eposj8cqphd3msfs5vmm.webp' className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974791/e5ypl6cnmh1y91ldzubd.webp' className='w-100 rounded-4 ' loading='lazy' alt="vw CAR" />
              </div>
            </div>

            <div data-aos='fade-left' data-aos-duration='1000'   className=" col-lg-3 col-6">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974796/iunerwkoh6dlysqn8htn.webp' className='w-100 rounded-4 ' loading='lazy' alt="yellowBmw CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722974796/gkbvgginvv01gvxezypn.webp' className='w-100 rounded-4 ' loading='lazy' alt="yellowBmw CAR" />
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
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975128/anvdccgtm1o3jgvzxfl4.webp' className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975124/zmjm3u19j1xgbimcpxka.webp' className='w-100 rounded-4 ' loading='lazy' alt="VW CAR" />
              </div>
            </div>

            <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975140/y8oddss0nldkvt6rlvsg.webp' className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975141/e1aiwhsiw6ohh6koxf55.webp' className='w-100 rounded-4 ' loading='lazy' alt="SEAT IBIZA CAR" />
              </div>
            </div>

            <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975144/t5tt3awsevsanqogclp9.webp' className='w-100 rounded-4 ' loading='lazy' alt="BMW CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975135/nuazzfjirk57coaij0pr.webp' className='w-100 rounded-4 ' loading='lazy' alt="HYNDAI CAR" />
              </div>
            </div>

            <div data-aos='fade-right' data-aos-duration='1000'  className=" col-lg-3 col-6 ">
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975131/qhrxxw3o7la9drmj4lqb.webp' className='w-100 rounded-4 ' loading='lazy' alt="CAR" />
              </div>
              <div className="car p-1"> {loading && <ClipLoader size={100} color={"red"} loading={loading} />}
                <LazyLoadImage  beforeLoad={handleBeforeLoad}  afterLoad={handleonLoad}   effect="blur"   threshold={1500}   src='https://res.cloudinary.com/dnmwmrxmr/image/upload/v1722975147/hmav6npsgxf8corn67yt.webp' className='w-100 rounded-4 ' loading='lazy' alt="TOYOTA CAR" />
              </div>
            </div>

          

          </div>
        </div>
      
      </div>
   
    </div>



<div className="d-flex justify-content-center">

<Link to='/gallery'  className={`my-2 fs-3 text-main readMore oxygen-700 m-auto text-decoration-none `} >
      <i className="fa-solid fa-angles-right text-main"></i> See More
    </Link>      
</div>


  </section>
  )
}
