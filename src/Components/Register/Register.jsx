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
        address: Yup.object({
          street: Yup.string().required('Street is required'),
          city: Yup.string().required('City is required'),
          state: Yup.string().required('State is required'),
          country: Yup.string().required('Country is required'),
          postalCode: Yup.string().required('Postal Code is required')
        }).required('Address is required')
      });
    let submitForm = (values) => {
      console.log(values);
        setLoading(true)
      axios.post('https://voting-ca7i.vercel.app/api/v1/users/create-user',values)
      .then((res)=>{
          setLoading(false)
          
          localStorage.setItem("IP",res?.data?.ip)
          localStorage.setItem("ID",res?.data.data._id)
      
          setUserLogin(res?.data?.ip)
        
          
          if(res.data.message==='User created successfully'){

            navigate('/voting')
          }
         
          

    })
        .catch(
            (err)=>{
        setLoading(false)
        toast.error(err.response.data.message)})
    }

    let formik = useFormik({
        initialValues: {
            "name": "", 
            "phone": "",
            "address": {
                "street": "",
                "city": "",
                "state": "",
                "country": "",
                "postalCode": ""
            }
        }
        ,
         onSubmit: submitForm
        ,validationSchema
    })

    const handleRegisterClick = async (event) => {
      event.preventDefault();
      try {
          // Wait for geolocation to finish and then submit the form
          await fillAddressWithGeolocation(formik.setFieldValue);
          formik.submitForm(); // Submit form after geolocation is filled
      } catch (error) {
         toast.error("Error filling address:", error);
          // Handle error if needed (optional)
      }
  };
  
//   async function fillAddressWithGeolocation(setFieldValue) {
//     return new Promise((resolve, reject) => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;
//                     const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

//                     try {
//                         const response = await fetch(url);
//                         const data = await response.json();

//                         if (data.address) {
//                             const address = {
//                                 street: data.address.road || '',
//                                 city: data.address.city || data.address.town || data.address.village || '',
//                                 state: data.address.state || '',
//                                 country: data.address.country || '',
//                                 postalCode: data.address.postcode || ''
//                             };

//                             setFieldValue('address.street', address.street);
//                             setFieldValue('address.city', address.city);
//                             setFieldValue('address.state', address.state);
//                             setFieldValue('address.country', address.country);
//                             setFieldValue('address.postalCode', address.postalCode);

//                             resolve();  // Address filled successfully
//                         } else {
//                             reject(new Error('Address not found'));
//                         }
//                     } catch (error) {
//                         reject(error);  // Handle network errors
//                     }
//                 },
//                 (error) => {
//                     // Handle geolocation errors
//                     switch (error.code) {
//                         case error.PERMISSION_DENIED:
//                             toast.error('Permission to access location was denied.');
//                             break;
//                         case error.POSITION_UNAVAILABLE:
//                             toast.error('Location information is unavailable. Please check your network or GPS settings.');
//                             break;
//                         case error.TIMEOUT:
//                             toast.error('The request to get your location timed out.');
//                             break;
//                         default:
//                             toast.error('An unknown error occurred while retrieving location.');
//                             break;
//                     }
//                     reject(error);
//                 },
//                 { timeout: 10000 }  // Set a timeout for the geolocation request
//             );
//         } else {
//             toast.error('Geolocation is not supported by this browser.');
//             reject(new Error('Geolocation not supported'));
//         }
//     });
// }

  
async function fillAddressWithGeolocation(setFieldValue) {
  return new Promise((resolve, reject) => {
    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      toast.error('Geolocation is not supported by this browser.');
      reject(new Error('Geolocation not supported'));
      return;  // Exit the function early if geolocation is not supported
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.address) {
            const address = {
              street: data.address.road || '',
              city: data.address.city || data.address.town || data.address.village || '',
              state: data.address.state || '',
              country: data.address.country || '',
              postalCode: data.address.postcode || ''
            };

            // Set form values for address fields
            setFieldValue('address.street', address.street);
            setFieldValue('address.city', address.city);
            setFieldValue('address.state', address.state);
            setFieldValue('address.country', address.country);
            setFieldValue('address.postalCode', address.postalCode);

            resolve();  // Resolve the promise if everything works fine
          } else {
            reject(new Error('Address not found'));
          }
        } catch (error) {
          reject(error);  // Handle network errors
        }
      },
      (error) => {
        // Handle geolocation errors
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error('Permission to access location was denied.');
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error('Location information is unavailable.');
            break;
          case error.TIMEOUT:
            toast.error('The request to get your location timed out.');
            break;
          default:
            toast.error('An unknown error occurred while retrieving location.');
            break;
        }
        reject(error);  // Reject the promise if an error occurs
      },
      { timeout: 10000 }  // Set a timeout for the geolocation request
    );
  });
}



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

                        <div  className='d-none'>
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
                        </div>
              {err==''?'':
               <Toaster position='right-top'></Toaster>
              
              } 

            {loading? <button className=' btn gradient float-end rounded-pill main-font fs-5 my-2 text-white '>
             <span className='fa fa-spinner fa-spin mx-3'></span>
            </button> 
            :    
   <button className='btn gradient float-end rounded-pill main-font fs-5 my-2 text-white' type="button" onClick={handleRegisterClick}>  
         <span> Register<i className="fa-solid ms-2 fa-fade fa-right-to-bracket"></i></span> 
             </button> }
<Link to={'/login'}> 
<span className='  float-end me-2  main-font fs-5 my-3 mx-1 text-white text-decoration-underline'>Already Have An Account ? <span>Login Now</span>  </span></Link> 

         
                        <div className='clearfix'></div>
                    </form>

                   
                </div>
            </section>



        </>
    )
}
