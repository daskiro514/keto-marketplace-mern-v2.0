import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

const GetDiet7Goals = ({ gender }) => {
  const [goal1, setGoal1] = React.useState(false)
  const [goal2, setGoal2] = React.useState(false)
  const [goal3, setGoal3] = React.useState(false)
  const [goal4, setGoal4] = React.useState(false)
  const [goal5, setGoal5] = React.useState(false)
  const [goal6, setGoal6] = React.useState(false)
  const [goal7, setGoal7] = React.useState(false)

  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Your Goals</div>
        <div className='text-secondary font-18 my-1'>Out of these choices what are your primary goals or interests in optimising your eating habits?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center my-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal1(!goal1)}>
              Fat Loss
              {goal1 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal2(!goal2)}>
              Better energy
              {goal2 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal3(!goal3)}>
              Reduce Brain Fog
              {goal3 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal4(!goal4)}>
              Mental wellness
              {goal4 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal5(!goal5)}>
              Hormonal Balancing
              {goal5 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal6(!goal6)}>
              Better Sleep
              {goal6 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer'>
            <button className='font-24 p-2 btn-wrapper' onClick={() => setGoal7(!goal7)}>
              Gain Lean Muscle Mass
              {goal7 ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
            </button>
          </div>
          <div className='text-center mb-3 cursor-pointer py-4'>
            <div className="btn-wrapper">
              <Link to='/quiz-8'>
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

export default connect(mapStateToProps, {})(GetDiet7Goals)