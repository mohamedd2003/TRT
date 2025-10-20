import React, { useContext, useState } from 'react'
import styles from "../Register/Register.module.css"
import Marquee from "../slider/slider"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../Context/Users/UsersContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {

  let {setUserLogin,setUserId} =useContext(UserContext)
let [loading,setLoading]=useState(false)
let [err,setErr]=useState('')
    let navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').min(3).max(30), // Ensure name is a string
        phone: Yup.string()
        .matches(/^(010|011|012|015)\d{8}$/, 'Phone Number Is Not Valid It Must Be 11 Digit ')
        .required('Phone is required'),
       
      });



   let submitForm = (values) => {
  setLoading(true)
  axios.post('https://voting-ca7i.vercel.app/api/v1/users/create-user', values)
    .then((res) => {
      setLoading(false)
      localStorage.setItem("IP", res?.data?.ip)
      localStorage.setItem("ID", res?.data.data._id)
      toast.success('Register Successfully')
      setUserLogin(res?.data?.ip)

      if (res.data.message === 'User created successfully') {
        navigate('/voting')
      }
    })
    .catch((err) => {
      setLoading(false)
toast.error(err?.response?.data?.message)
    })
}

    let formik = useFormik({
        initialValues: {
            "name": "", 
            "phone": "",
           
        }
        ,
         onSubmit: submitForm
        ,validationSchema
    })



    const lineStyle = {
        background: 'linear-gradient(to right, rgb(255, 63, 75), #AA0000)',
        width: '80px',
        height: '5px',
        margin: '0 20px',
        marginRight: '40px',
        padding: '0px',
        display: ' inline-block',
        transform: 'translateY(-20px)',
        borderRadius: '0',
    }
    return (
        <>
<Toaster position='right-top'></Toaster>
            <header className={`  ${styles.backGround} text-center `}>
                <div className={`d-flex justify-content-center align-items-center  ${styles.header}`}>
                    <h1 className='  text-white  oswald-titles main-font'><span className='text-main'>R</span>EGISTRATION <i className="ms-1 fa-solid fa-arrow-right-to-bracket"></i></h1>
                </div>
                <Marquee lineStyle={lineStyle} />

            </header>

            <section id='registration my-3'>
                <h2 className='text-center main-font text-white  my-3'> You Should Register First To Vote Cars</h2>
                <div className='w-75 m-auto'>

                    <form onSubmit={formik.handleSubmit}>
                        <label className='visually-hidden' htmlFor="name">User Name:</label>

                        <div className="input-group my-4">
                            <div className="input-group-text bg-transparent gradient text-white"><i className="fa-solid fa-fade fa-signature"></i></div>

                            <input className=' form-control text-white bg-transparent gradient'
                              id="name"
                              name="name"
                              onBlur={formik.handleBlur}
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.name}
                              placeholder="Enter your Name "
                                 />
                        </div>
                        {formik.errors.name && <h4 className='text-center main-font text-main  my-3'><i className="fa-solid fa-exclamation"></i> {formik.errors.name}</h4>}

                        <label className='visually-hidden' htmlFor="phone">Phone:</label>

                        <div className="input-group my-4">
                            <div className="input-group-text bg-transparent gradient text-white"><i className="fa-solid fa-fade fa-phone"></i></div>

                            <input

                                className=' form-control text-white bg-transparent gradient'
                                id="phone"
                                name="phone"
                              type="text"
                              onBlur={formik.handleBlur}

                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                placeholder="Enter your phone number"  />

                        </div>
                        {formik.errors.phone && 
                             <h3 className='  text-center main-font text-main  my-3'><i className="fa-solid fa-exclamation"></i> {formik.errors.phone}</h3>
                             }

                        {/* <div  className='d-none'>
                        <div>
        <label>Street</label>
        <input
          type="text"
          name="address.street"
          value={formik.values.address.street}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <label>City</label>
        <input
          type="text"
          name="address.city"
          value={formik.values.address.city}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <label>State</label>
        <input
          type="text"
          name="address.state"
          value={formik.values.address.state}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <label>Country</label>
        <input
          type="text"
          name="address.country"
          value={formik.values.address.country}
          onChange={formik.handleChange}
        />
      </div>

      <div>
        <label>Postal Code</label>
        <input
          type="text"
          name="address.postalCode"
          value={formik.values.address.postalCode}
          onChange={formik.handleChange}
        />
      </div>
                        </div> */}
              {err==''?'':
               <Toaster position='right-top'></Toaster>
              
              } 

            {loading? <button className=' btn gradient float-end rounded-pill main-font fs-5 my-2 text-white '>
             <span className='fa fa-spinner fa-spin mx-3'></span>
            </button> 
            :    
   <button className='btn gradient float-end rounded-pill main-font fs-5 my-2 text-white'   type="submit">  
         <span> Register<i className="fa-solid ms-2 fa-fade fa-right-to-bracket"></i></span> 
             </button> }
<Link to={'/login'}> 
<span 
className='  float-end me-2  main-font fs-5 my-3 mx-1 text-white text-decoration-underline'>Already Have An Account ? 
<span>Login Now</span>  </span></Link> 
                        <div className='clearfix'></div>
                    </form>

                   
                </div>
            </section>



        </>
    )
}
