import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet6ExpThoughts = ({ gender }) => {
  if (!gender) {
    return <Redirect to='/' />
  }
  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>LOVE IT?</div>
        <div className='text-secondary font-18 my-1'>Did you love the Keto Diet or Did you find it challenging?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-5 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-7'>
                <div className='font-24 p-2 custom-gradient'>
                  Loved it!
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-5 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-5'>
                <div className='font-24 p-2 custom-gradient'>
                  Found it difficult
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

const mapStateToProps = state => ({
  gender: state.diet.gender
})

export default connect(mapStateToProps, {})(GetDiet6ExpThoughts)