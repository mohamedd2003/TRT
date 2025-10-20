import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <div className='d-flex vh-100 justify-content-center align-items-center text-danger bg-dark'>

        <h1>404 Page Not Found</h1>
        <Link to='' className='btn btn-outline-danger rounded-pill ms-2'>GO HOME</Link>
    </div>
    </>
  )
}
