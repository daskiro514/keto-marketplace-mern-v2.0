import React from 'react'
import { Link } from 'react-router-dom'

const GetDiet3Difficulty = () => {

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>DIFFICULTY</div>
        <div className='text-secondary font-18 my-1'>Do you love everything about the keto diet or do you find it difficult?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-5 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/'>
                <div className='font-24 p-2 custom-gradient'>
                  I love it... I am rocking this!
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-5 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/difficult-part'>
                <div className='font-24 p-2 custom-gradient'>
                  I'm not gonna lie… It's tough at times.
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

export default GetDiet3Difficulty