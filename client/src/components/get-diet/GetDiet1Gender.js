import React from 'react'
import { connect } from 'react-redux'
import maleImage from '../../img/customer/male.png'
import femaleImage from '../../img/customer/female.png'
import { Link } from 'react-router-dom'
import { setGender } from '../../actions/diet'

const GetDietGender = ({ gender, setGender }) => {

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>GET YOUR CUSTOMIZED KETO DIET PLAN NOW</div>
        <div className='text-secondary font-18 my-1'>To get started with your custom plan, choose your gender.</div>
      </div>
      <div className='row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6 row align-items-center'>
          <div className='col-md-5 text-center gender-circle my-5'>
            <Link to='/quiz-2' onClick={() => setGender('MALE')}>
              <img alt='SETIMAGE' src={maleImage} className='img-fluid gender-image' />
            </Link>
          </div>
          <div className='col-md-2 text-center'>
            OR
          </div>
          <div className='col-md-5 text-center gender-circle my-5'>
            <Link to='/quiz-2' onClick={() => setGender('FEMALE')}>
              <img alt='SETIMAGE' src={femaleImage} className='img-fluid gender-image' />
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

export default connect(mapStateToProps, { setGender })(GetDietGender)