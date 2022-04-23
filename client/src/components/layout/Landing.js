import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from '../../img/logo.PNG'

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='bg-landing container-fluid'>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <br />
          <br />
          <div className='w-75 mx-auto'>
            <img alt="SETIMG" src={logo} className='img-fluid' />
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='header text-center' style={{ marginTop: '10vh' }}>
            <div className='mb-3 btn-wrapper'>
              <Link to='/get-diet' className='btn rounded-pill'>
                Get Diet
              </Link>
            </div>
            <div className='mb-3 btn-wrapper'>
              <Link to='/login' className='btn rounded-pill'>
                Login
              </Link>
            </div>
            <div className='mb-3 btn-wrapper'>
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
