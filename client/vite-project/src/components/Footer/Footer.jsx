import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className='d-flex text-white justify-content-center gap-5 flex-md-row flex-column footer align-items-center'>
    <Link to='/general-disclaimer' className='footer-text'><p className='mb-0'>General DIsclaimer</p></Link>
        <Link to='/privacy-policy' className='footer-text'><p className='mb-0'>Privacy & Policy</p></Link>
        <Link to='/terms-conditions' className='footer-text'><p className='mb-0'>Terms & Conditions</p></Link>
        <Link to='/refund-cancellation' className='footer-text'><p className='mb-0'>Refund & Cancellation Policy</p></Link>
    </div>
    <p className='text-white text-center'>&#169; copyrights reserved by Binary Funded</p>
    </>
  )
}

export default Footer
