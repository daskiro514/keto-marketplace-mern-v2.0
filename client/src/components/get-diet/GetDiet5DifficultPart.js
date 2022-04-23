import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet5DifficultPart = ({ gender }) => {
  const [difficulty1, setDifficulty1] = React.useState(false)
  const [difficulty2, setDifficulty2] = React.useState(false)
  const [difficulty3, setDifficulty3] = React.useState(false)
  const [difficulty4, setDifficulty4] = React.useState(false)
  const [difficulty5, setDifficulty5] = React.useState(false)
  const [difficulty6, setDifficulty6] = React.useState(false)

  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>WHAT IS DIFFICULT?</div>
        <div className='text-secondary font-18 my-1'>What did you find difficult part about the keto diet.  Choose all that apply:</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDifficulty1(!difficulty1)}>
              I found it restrictive
              {difficulty1 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDifficulty2(!difficulty2)}>
              I didn't like the food choices
              {difficulty2 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDifficulty3(!difficulty3)}>
              I gained weight
              {difficulty3 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDifficulty4(!difficulty4)}>
              I felt sick
              {difficulty4 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDifficulty5(!difficulty5)}>
              I was confused
              {difficulty5 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setDifficulty6(!difficulty6)}>
              I just couldn't stick to it
              {difficulty6 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer py-4'>
            <div className="btn-wrapper">
              <Link to='/quiz-7'>
                <div className='font-24 p-2 custom-gradient'>
                  Next
                </div>
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

export default connect(mapStateToProps, {})(GetDiet5DifficultPart)