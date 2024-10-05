import React, {  useEffect, useState } from 'react'
import styles from"./Voting.module.css"
import Marquee from "../slider/slider"
import axios from 'axios'
import { MoonLoader } from 'react-spinners'
import toast, { Toaster } from 'react-hot-toast';

export default function Voting() {
const baseUrl='https://voting-ca7i.vercel.app/api/v1'
const userId=localStorage.getItem("ID")
const EventId="67019ba8ded0e3b2ccd1502a"

  const[cars,setCars]=useState([])
 
  
  
  
  const[eventDetails,SetEventDetails]=useState([])
  const[topPosts,setTopPosts]=useState([])
  const[carLikes,setCarLikes]=useState('')
  const[postUserLiked,setPostUserliked]=useState('')
  


    const lineStyle={
        background : 'linear-gradient(to right, rgb(50, 63, 75), #0022ff)',
        width: '80px',
        height: '5px',
        margin: '0 20px',
        marginRight: '40px',
        padding: '0px',
        display:' inline-block',
        transform: 'translateY(-20px)',
        borderRadius: '0',
           }
//**************************************************************************** */
           const getEventDetails=()=>{
            const value={"userId":userId}
              axios.post(`${baseUrl}/events/event-details/${EventId}`,value)
              .then((res)=>{
               SetEventDetails(res?.data?.data)
                setTopPosts(eventDetails?.topPosts)
           
                 
              })
          }

//**************************************************************** */
           const geUserLikesNumber=()=>{
              const values={
                  "userId" :userId
              }
            axios.post(`${baseUrl}/users/userInfo`,values)
            .then((res)=>
            {

              const arr=res?.data?.data?.likes
              setCarLikes(arr.length)
              setPostUserliked(arr[0])
            })
            .catch((err)=> console.log(err) )
           }

//************************************************************* */

           const getCarPhotos = () => {
            axios.post(`${baseUrl}/events/${EventId}/posts`,
               { userId: userId})
            .then((res) => {
              setCars(res?.data?.data);
              
            })
            .catch((err) => toast.error(err.response.data));
          };
//**************************************************************************** */
          //Make Use Effect And Call it Inside 
          useEffect(()=>{
            getEventDetails()
            getCarPhotos();
            geUserLikesNumber();
          },[])
//*********************************************************************** */
   
const handleLikes = (postId) => {
  const obj = {
    "postId": postId,
    "userId": userId
  };

  axios.patch(`${baseUrl}/events/${EventId}/likes/handle-like`, obj)
    .then((res) => {
      if (res.data.message === 'Liked successfully') {
        getCarPhotos()
        geUserLikesNumber()
        getEventDetails()
        // document.getElementById("heart").classList.replace("fa-regular", "fa-solid");
        // document.getElementById("heart").classList.add("text-main");
        // document.getElementById("heart").classList.add("fa-beat-fade");
        // document.getElementById("heart").classList.add("fa-3x");
        toast.success('Photo Liked Successfully');
      }
       else if (res.data.message === 'Unliked successfully') {
        getCarPhotos()
        geUserLikesNumber()
        getEventDetails()
        document.getElementById("heart").classList.replace("fa-solid","fa-regular");
        document.getElementById("heart").classList.add("text-white");
        document.getElementById("heart").classList.remove("text-main");
        document.getElementById("heart").classList.remove("fa-beat-fade");
        document.getElementById("heart").classList.remove("fa-3x");
        document.getElementById("heart").classList.add("fa-2x");
        toast.success('Photo UnLiked Successfully');
      }
    })
    .catch((err) => toast.error(err.response?.data?.message));
};
/******************************************************************************************* */
        

          
  return (
    <>
    
    <header className={`  ${styles.backGround} text-center `}>
    <div   className={`d-flex justify-content-center align-items-center  ${styles.header}`}>
         <h1    className='  text-white text-decoration-line-through  oswald-titles main-font'><span className='text-main '>L</span>A CASA DE PAPEL VOTING</h1>
         </div>
 
     
     <Marquee lineStyle={lineStyle}/>
 
     
 
    </header>

    <section className='my-5'>
<h2 className='my-4 text-center main-font text-white fs-1'>TOP  <i className="fa-solid me-2  fa-lg fa-arrow-up-1-9"></i></h2>
      <div className="container shadowLg my-2 p-3 rounded-5">
        <div className="row g-4">
      {topPosts?.length===0?<MoonLoader  className='m-auto my-3' size={150} color={"red"}  />
      :
      <>
     
          {topPosts?.map((post)=>
          
          <div key={post._id} className="col-lg-4 col-6">

            <div className="car text-white">
              <img className='w-100 rounded-4 ' src={post.photo} alt="car image"  />

                <h4 className='main-font  mt-2'>Car Owner : {post.owner}</h4>
              <div className="d-flex text-white justify-content-between my-2">

              {carLikes === 1 && postUserLiked===post._id? 
              ( <i id={`heart-${post._id}`} onClick={() =>handleLikes(post._id)} 
              className="fa-solid fa-heart text-main fa-3x fa-beat-fade"></i>)
               : 
               ( <i  id={`heart-${post._id}`}   onClick={() =>handleLikes(post._id)}   className="fa-regular fa-heart fa-2x"></i>)
            }
              <h2 className='main-font'>{post.numberOfLikes}</h2>
              </div>
            </div>
          </div>
          )}
      </>}
        </div>
      </div>
    </section>


    <section className='my-5'>
<h2 className='fa-fade my-4 text-center main-font text-white'>VOTING </h2>
<h2 className='fa-fade my-4 text-center main-font text-main'><i className=" me-2 fa-regular fa-bell"></i>You Can Only Vote For One Car <i className=" me-2 fa-regular fa-bell"></i></h2>

      
      <div className="container shadowLg my-2 p-3 rounded-5">
        <div className="row g-4">
        <div>
      <Toaster position="top-right" reverseOrder={false} />
     
    </div>    
 
    {cars.map((car) =>
  <div key={car._id} className="col-lg-4 col-6">
    <div className="car text-white">
      <img className='w-100 rounded-4 ' src={car.photo} alt="car image"   />
      <h4 className='main-font mt-2'>Car Owner : {car.owner}</h4>
      <div className="d-flex text-white justify-content-between my-2">

   {/************************************************************************/}
        {postUserLiked===car._id ? 
        (
    <i  id='heart'  onClick={() => handleLikes(car._id)}  className="fa-solid fa-heart text-main fa-3x fa-beat-fade"></i>)
     :
     ( <i  id='heart'  onClick={() => handleLikes(car._id)}  className="fa-regular fa-heart fa-2x"></i>)
}

        <h2 className='main-font'>{car.numberOfLikes}</h2>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </section>
    </>
  )
}
