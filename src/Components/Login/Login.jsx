import React, { useContext, useState } from 'react'
import styles from "../Login/Login.module.css"
import Marquee from "../slider/slider"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../Context/Users/UsersContext';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {

  let { setUserLogin, setUserId } = useContext(UserContext)
  let [loading, setLoading] = useState(false)
  let [err, setErr] = useState('')
  let navigate = useNavigate()
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^(010|011|012|015)\d{8}$/, 'Phone Number Is Not Valid It Must Be 11 Digit ')
      .required('Phone is required')
  });
  let submitForm = (values) => {
    setLoading(true)
    axios.post('https://voting-ca7i.vercel.app/api/v1/users/login', values)
      .then((res) => {
        setLoading(false)
        localStorage.setItem("IP", res?.data?.data?.ipAddress)
        localStorage.setItem("ID", res?.data?.data?._id)

        setUserLogin(res?.data?.ipAddress)
        setUserId(res?.data?._id)
          toast.success("Login Successfully")

        if (res.data.message === 'logged in success') {

          navigate('/voting')
        }
        toast.success(res?.data?.message);

      })
      .catch(
        (err) => {
          console.log(err);

          setLoading(false)
          const errorMessage = err.response?.data?.message ;
          setErr(errorMessage)
          toast.error(errorMessage);
        })
  }
  let formik = useFormik({
    initialValues: {
      "phone": "",
    }
    ,
    onSubmit: submitForm
    , validationSchema
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

      <header className={`  ${styles.backGround} text-center `}>
        <div className={`d-flex justify-content-center align-items-center  ${styles.header}`}>
          <h1 className='  text-white  oswald-titles main-font'><span className='text-main'>L</span>OGIN  <i className="ms-1 fa-solid fa-arrow-right-to-bracket"></i></h1>
        </div>
        <Marquee lineStyle={lineStyle} />

      </header>

      <section id='registration my-3'>
        <h2 className='text-center main-font text-white  my-3'> Login With Your Phone Number</h2>
        <div className='w-75 m-auto'>

          <form onSubmit={formik.handleSubmit}>

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
                placeholder="Enter your phone number" />

            </div>
            {formik.errors.phone &&
              <h3 className='  text-center main-font text-main  my-3'><i className="fa-solid fa-exclamation"></i> {formik.errors.phone}</h3>
            }

            {err == '' ? '' :
              <Toaster
  position="top-right"
  reverseOrder={false}
/>

            }

            {loading ? <button className=' btn gradient float-end rounded-pill main-font fs-5 my-2 text-white '>
              <span className='fa fa-spinner fa-spin mx-3'></span>
            </button>
              :
              <button className='btn gradient float-end rounded-pill main-font fs-5 my-2 text-white' type="submit">
                <span> Login<i className="fa-solid ms-2 fa-fade fa-right-to-bracket"></i></span>
              </button>}
            <Link to={'/register'}> <span className='  float-end me-2  main-font fs-5 my-3 mx-1 text-white text-decoration-underline'>Register Now ? </span></Link>

            <div className='clearfix'></div>
          </form>


        </div>
      </section>



    </>
  )
}
