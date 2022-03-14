import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet7Goals = ({ gender }) => {
  if (!gender) {
    return <Redirect to='/' />
  }
  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Your Goal</div>
        <div className='text-secondary font-18 my-1'>Out of these choices what are your primary goals or interests in optimising your eating habits?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Fat Loss
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Better energy
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Reduce Brain Fog
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Mental wellness
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Hormonal Balancing
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Better Sleep
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
                <div className='font-24 p-2 custom-gradient'>
                  Gain Lean Muscle Mass
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

export default connect(mapStateToProps, {})(GetDiet7Goals)