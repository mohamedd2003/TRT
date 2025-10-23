
import React from 'react'
import style from './Footer.module.css';

export default function Footer() {
  return (
    <>

    <div className="bg-black">

    <div className="gradient  w-95 my-2 rounded-pill m-auto p-2 " >
        <div className="row">

          <div className="col-md-4 col-0"></div>
            <div className="col-12 " >
           <h4  className={`main-font text-white text-center ${style.footer_text}`}> All Rights Reserved to <a className='text-main text-decoration-none main-font' target='_blank' href='https://thunderagency.vercel.app/'>Thunder Agency<i className="fa-solid fa-bolt"></i></a> @2025</h4>
  
            </div>


          
        </div>
    </div>
    </div>
    </>
  )
}
