import React from 'react'
import { connect } from 'react-redux'
import yesImage from '../../img/customer/yes.png'
import noImage from '../../img/customer/no.png'
import { Link, Redirect } from 'react-router-dom'

const GetDiet2CurrentFollowing = ({ gender }) => {

  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>YOUR CURRENT DIET</div>
        <div className='text-secondary font-18 my-1'>Are you currently following a keto diet?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          <div className='row align-items-center'>
            <div className='col-5 text-center gender-circle my-2'>
              <Link to='/quiz-3'>
                <img alt='SETIMAGE' src={yesImage} className='img-fluid gender-image' />
              </Link>
            </div>
            <div className='col-2 text-center'>
              OR
            </div>
            <div className='col-5 text-center gender-circle my-2'>
              <Link to='/quiz-4'>
                <img alt='SETIMAGE' src={noImage} className='img-fluid gender-image' />
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

export default connect(mapStateToProps, {})(GetDiet2CurrentFollowing)