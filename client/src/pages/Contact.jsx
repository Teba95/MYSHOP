import React from 'react'
import Layouts from '../component/Layouts/Layouts'
import {BiSupport, BiPhoneCall, BiMailSend} from 'react-icons/bi'


const Contact = () => {
  return (
    <Layouts>
      <div className="row contact ">
        <div className="col-md-6 ">
          <img
            src="/images/support-img.png"
            alt="contact"
            style={{ width: "100%" }}
          />
        </div>
    <div className='col-md-4'>
    <h1 className='bg-dark p-2 text-white text-center'>Contact US</h1>
    <p className='text-justify mt-2'>Feel Free To Contact Us</p>
    <p className='mt-3'>
      <BiMailSend /> : www.support@tebacommerce.com
    </p>
    <p className='mt-3'>
      <BiPhoneCall /> : 0216 569871
    </p>
    <p className='mt-3'>
      <BiSupport /> :  1824-8744-6852
    </p>

    </div>
    </div>
    </Layouts>
    
  )
}

export default Contact