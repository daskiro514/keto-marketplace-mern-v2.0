import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet3Difficulty = ({ gender }) => {
  if (!gender) {
    return <Redirect to='/' />
  }
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
              <Link to='/quiz-7'>
                <div className='font-24 p-2 custom-gradient'>
                  I love it... I am rocking this!
                </div>
              </Link>
            </div>
          </div>
          <div className='text-center mb-5 cursor-pointer'>
            <div className="btn-wrapper">
              <Link to='/quiz-5'>
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

const mapStateToProps = state => ({
  gender: state.diet.gender
})

export default connect(mapStateToProps, {})(GetDiet3Difficulty)