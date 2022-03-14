import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet9DayLook = ({ gender }) => {
  if (!gender) {
    return <Redirect to='/' />
  }
  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Your Day</div>
        <div className='text-secondary font-18 my-1'>What does a day look like for you?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-10'>
                <div className='font-24 p-2 custom-gradient'>
                  In the office all day
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-10'>
                <div className='font-24 p-2 custom-gradient'>
                  I am on my feet all day
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-10'>
                <div className='font-24 p-2 custom-gradient'>
                  I do manual labour
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-10'>
                <div className='font-24 p-2 custom-gradient'>
                  I work from home
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-10'>
                <div className='font-24 p-2 custom-gradient'>
                  I take care of the kids
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

export default connect(mapStateToProps, {})(GetDiet9DayLook)