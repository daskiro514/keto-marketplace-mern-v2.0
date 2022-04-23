import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setActivityLevel } from '../../actions/diet'

const GetDiet8DailyActivity = ({ gender, setActivityLevel }) => {

  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>What Sounds Most Like You?</div>
        <div className='text-secondary font-18 my-1'>What is your daily activity level?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          <div className='text-center my-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-9' onClick={() => setActivityLevel(0.2)}>
                <div className='font-24 p-2 custom-gradient'>
                  I Rarely Excercise
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-9' onClick={() => setActivityLevel(0.4)}>
                <div className='font-24 p-2 custom-gradient'>
                  I workout a couple times a week
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-9' onClick={() => setActivityLevel(0.6)}>
                <div className='font-24 p-2 custom-gradient'>
                  Consistant gym 3-4 days a week
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-9' onClick={() => setActivityLevel(0.8)}>
                <div className='font-24 p-2 custom-gradient'>
                  I'm crushing it!! - 4 days plus
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-9' onClick={() => setActivityLevel(1)}>
                <div className='font-24 p-2 custom-gradient'>
                  I'm an athlete/superhero
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-lg-3'></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  gender: state.diet.gender
})

export default connect(mapStateToProps, { setActivityLevel })(GetDiet8DailyActivity)