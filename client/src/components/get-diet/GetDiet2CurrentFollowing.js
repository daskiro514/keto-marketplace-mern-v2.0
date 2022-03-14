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
        <div className='font-36 font-weight-800'>KETO DIET FOLLOWING</div>
        <div className='text-secondary font-18 my-1'>Are you currently following a keto diet?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-5 text-center gender-circle my-5'>
            <Link to='/quiz-3'>
              <img alt='SETIMAGE' src={yesImage} className='img-fluid gender-image' />
            </Link>
          </div>
          <div className='col-md-2 text-center'>
            OR
          </div>
          <div className='col-md-5 text-center gender-circle my-5'>
            <Link to='/quiz-4'>
              <img alt='SETIMAGE' src={noImage} className='img-fluid gender-image' />
            </Link>
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

export default connect(mapStateToProps, {})(GetDiet2CurrentFollowing)