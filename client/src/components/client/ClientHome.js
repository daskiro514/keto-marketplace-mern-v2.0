import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ClientHome = ({ user }) => {

  return (
    <div className='client-home'>
      <div className='d-flex align-items-center py-3 justify-content-between'>
        <div className='h5 font-weight-bold col'>Getting Started</div>
        <div className='col text-right'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='row bg-light-blue min-vh-100'>
        <div className='col-12 py-3'>
          <div className='row bg-white py-3'>
            <div className='col-md-6'>
              <div>
                <div className='text-black font-weight-bold'>Hi <span>{user.name}</span></div>
                <div className='py-1'>
                  Congratulations and welcome to your custom keto diet members area and the start of your weight loss journey :).
                </div>
                <div className='py-1'>
                  You've made a great decision to choose the keto diet, the health benefits and the speed at which I see my clients bodies change still astound me even now.
                </div>
                <div className='py-1'>
                  I'm going to be with you every step of the way as you complete your keto transformation and believe me if you stick to the plan you will see the results FAST!
                </div>
                <div className='py-1'>
                  First things first though please make sure to watch your welcome video on this page which explains everything you need to know about your custom keto plan and how to get started.
                </div>
                <div className='py-1'>
                  If you have any questions I'm always available and only an email away.
                </div>
              </div>
              <div className='py-4'>
                <Link to='/my-plan' className='btn btn-gradient px-4 py-2'>
                  TAKE ME TO MY CUSTOM KETO DIET <i className='fa fa-angle-right ml-2'></i>
                </Link>
              </div>
            </div>
            <div className='col-md-6'>
              <img alt='SETIMAGE' src='img/client-home-poster.jpg' className='img-fluid' />
              <div className='py-4 text-center'>
                <Link to='/' className='btn btn-gradient px-4 py-2'>
                  WATCH GROUP TRAINING CLASS 2 NOW <i className='fa fa-angle-right ml-2'></i>
                </Link>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='row bg-white py-3'>
            <div className='col-12 pt-3 pb-2'>
              <div className='h3 text-danger font-weight-bold'>FREE BONUS<span className='text-black'> - Intermittent Fasting For Keto Dieters 101</span></div>
            </div>
            <div className='col-lg-3 col-md-5 py-3'>
              <img alt='SETIMAGE' src='/img/101.png' className='img-fluid' style={{ maxWidth: '200px' }} />
            </div>
            <div className='col-lg-9 col-md-7 py-3'>
              <div className='text-danger h5 font-weight-bold'>
                Learn how intermittant fasting can:
              </div>
              <div className='text-black py-2 font-16'>
                <i className='fa fa-check-square-o font-20 mr-1'></i>Boost your metabolism, mobilize fatty acids, increase HGH and reduce hunger to make losing weight almost effortless.
              </div>
              <div className='text-black py-2 font-16'>
                <i className='fa fa-check-square-o font-20 mr-1'></i>Reduce inflammation, improve insulin sensitivity (helps with type 2 diabetes), improve heart health and provide anti ageing benefits.
              </div>
              <div className='text-black py-2 font-16'>
                <i className='fa fa-check-square-o font-20 mr-1'></i>Combine with your Custom Keto Diet plan to deepen ketosis and turn your body into a fat burning machine.
              </div>
              <br />
              <br />
              <br />
              <a className='btn btn-gradient px-4 py-2' href='/img/Intermittent_Fasting_for_Keto_Dieters_101.pdf' download>DOWNLOAD NOW <i className='fa fa-angle-right ml-2'></i></a>
            </div>
          </div>
          <br />
          <br />
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-6 py-2'>
              Copyright 2019 Custom Keto Diet. All rights reserved.
            </div>
            <div className='col-lg-6 text-right py-2'>
              <a href='https://www.customketodiet.com/privacy' target='_blink' rel='noreferrer' className='mr-4'>Privacy</a>
              <a href='https://www.customketodiet.com/site/terms' target='_blink' rel='noreferrer' className='mr-4'>Terms & Conditions</a>
              <a href='https://www.customketodiet.com/contact' target='_blink' rel='noreferrer'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(ClientHome)