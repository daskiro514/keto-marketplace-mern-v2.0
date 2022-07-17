import React from 'react'
import { connect } from 'react-redux'
import Vimeo from '@u-wave/react-vimeo'

const ClientPlan = ({ user }) => {

  return (
    <div className='client-home'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 font-weight-bold col-md-4'>Your Plan</div>
        <div className='col-md-4 text-right'>
          <span className='mr-4 cursor-pointer' data-toggle="modal" data-target="#myModal">
            <i className='fa fa-info-circle mr-2'></i>
            Learn more about your plan
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
              <button type="button" className="position-absolute close" data-dismiss="modal" style={{top: '-25px', right: '10px'}}>&times;</button>
              <div className="modal-body p-0">
                <Vimeo
                  video={364615173}
                  responsive={true}
                />
              </div>
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

export default connect(mapStateToProps, {})(ClientPlan)