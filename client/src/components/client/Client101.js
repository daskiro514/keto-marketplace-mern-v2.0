import React from 'react'
import { connect } from 'react-redux'
import Vimeo from '@u-wave/react-vimeo'

const Client101 = ({ user }) => {

  return (
    <div className='client-101'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 col-md-4 font-weight-bold'>Keto 101</div>
        <div className='col-md-4 text-right'>
          <span className='mr-4 cursor-pointer' data-toggle="modal" data-target="#myModal">
            <i className='fa fa-info-circle mr-2'></i>
            What is keto 101
          </span>
        </div>
        <div className='text-right col-sm-4'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='row bg-light-blue min-vh-100'>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg mt-5">
            <div className="modal-content">
              <button type="button" className="position-absolute close" data-dismiss="modal" style={{ top: '-25px', right: '10px' }}>&times;</button>
              <div className="modal-body p-0">
                <div className='row'>
                  <div className='col-4 p-0'>
                    <img alt='SETIMAGE' src='/img/keto101.jpg' height='100%' width='100%' />
                  </div>
                  <div className='col-8 p-3'>
                    <div className='py-3 font-weight-bold h5 text-black'>What is Keto 101</div>
                    <div className='py-1 text-justify'>Everything you need to know about the Ketogenic diet! What to expect when you're in ketosis and how to maximise your results.</div>
                    <div className='py-1 text-justify'>Bust through fat loss plateaus, boost your brain power and have unlimited amounts of energy when you manipulate your metabolism with the keto diet. Everything you need to know about the Ketogenic diet!</div>
                    <div className='py-1 text-justify'>What to expect when you're in ketosis and how to maximise your results. Bust through fat loss plateaus, boost your brain power and have unlimited amounts of energy when you manipulate your metabolism with the keto diet.</div>
                    <div className='py-1 text-justify'>Everything you need to know about the Ketogenic diet! What to expect when you're in ketosis and how to maximise your results.</div>
                    <div className='py-1 text-justify'>Bust through fat loss plateaus, boost your brain power and have unlimited amounts of energy when you manipulate your metabolism with the keto diet.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 py-3'>
          <div className='row bg-white'>
            <div className='col-md-6 pt-4'>
              <div>
                <div className='h2 text-black font-weight-bold'>Keto Diet 101 eBook</div>
                <div className='py-1'>
                  Everything you need to know about the Ketogenic diet! What to expect when you're in ketosis and how to maximise your results.
                </div>
                <div className='py-1'>
                  Bust through fat loss plateaus, boost your brain power and have unlimited amounts of energy when you manipulate your metabolism with the keto diet.
                </div>
              </div>
              <div className='py-4'>
                <a className='btn btn-gradient rounded-0 px-4 py-2' href='/img/Intermittent_Fasting_for_Keto_Dieters_101.pdf' download>DOWNLOAD KETO 101 EBOOK NOW</a>
              </div>
            </div>
            <div className='col-md-6 p-0'>
              <img alt='SETIMAGE' src='/img/keto101-poster.jpg' width='100%' />
            </div>
          </div>
          <br />
          <br />
        </div>
        <div className='col-12'>
          <div className='pt-4 h5 text-black'>
            Keto 101 Video Series
          </div>
        </div>
        <div className='col-lg-3 col-md-6 py-3'>
          <div className='bg-white shadow'>
            <img alt='SETIAMGE' src='https://i.vimeocdn.com/video/791162060.jpg' width='100%' height='100%' />
            <div className='text-black text-center py-3'>Keto Introduction</div>
            <div className='text-center py-3'>
              <button className='btn btn-info'>
                <i className='fa fa-play mr-2'></i>WATCH NOW
              </button>
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

export default connect(mapStateToProps, {})(Client101)