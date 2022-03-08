import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='bg-landing container-fluid'>
      <div className='mt-5 landing-logo text-center text-white h1'>
        <div>
          Customer Keto Diet
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='header text-center mt-5'>
            <div className='mb-3'>
              <Link to='/get-diet' className='btn rounded-pill'>
                Get Diet
              </Link>
            </div>
            <div className='mb-3'>
              <Link to='/login' className='btn rounded-pill'>
                Login
              </Link>
            </div>
            <div className='mb-3'>
              <Link to='/register' className='btn rounded-pill'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
