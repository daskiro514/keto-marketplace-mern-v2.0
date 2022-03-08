import React from 'react'
import { Link } from 'react-router-dom'

const GetDiet5DifficultPart = () => {

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>WHAT IS DIFFICULT?</div>
        <div className='text-secondary font-18 my-1'>What did you find difficult part about the keto diet.  Choose all that apply:</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I found it restrictive
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I didn't like the food choices
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I gained weight
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I felt sick
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I was confused
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I just couldn’t stick to it
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default GetDiet5DifficultPart