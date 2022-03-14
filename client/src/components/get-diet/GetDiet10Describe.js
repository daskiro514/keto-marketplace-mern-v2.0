import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet10Describe = ({ gender }) => {
  const [describe1, setDescribe1] = React.useState(false)
  const [describe2, setDescribe2] = React.useState(false)
  const [describe3, setDescribe3] = React.useState(false)
  const [describe4, setDescribe4] = React.useState(false)
  const [describe5, setDescribe5] = React.useState(false)
  const [describe6, setDescribe6] = React.useState(false)
  const [describe7, setDescribe7] = React.useState(false)
  const [describe8, setDescribe8] = React.useState(false)
  if (!gender) {
    return <Redirect to='/' />
  }
  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Describe You</div>
        <div className='text-secondary font-18 my-1'>Which of the following describes you? (answer as many as you like)</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe1(!describe1)}>
              I don't get enough sleep
              {describe1 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe2(!describe2)}>
              I don't sleep Well
              {describe2 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe3(!describe3)}>
              I eat a lot of proceeded foods
              {describe3 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe4(!describe4)}>
              I cannot get off the sweets
              {describe4 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe5(!describe5)}>
              I love soft drinks
              {describe5 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe6(!describe6)}>
              I love energy drink
              {describe6 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe7(!describe7)}>
              I love coffee
              {describe7 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribe8(!describe8)}>
              I drink more than 3 coffees a day
              {describe8 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer py-4'>
            <div className="btn-wrapper">
              <Link to='/quiz-11'>
                <div className='font-24 p-2 custom-gradient'>
                  Next
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

export default connect(mapStateToProps, {})(GetDiet10Describe)