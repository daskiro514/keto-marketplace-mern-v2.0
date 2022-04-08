import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setGoalList } from '../../actions/diet'

const goalList = [
  'Fat Loss',
  'Better energy',
  'Reduce Brain Fog',
  'Mental wellness',
  'Hormonal Balancing',
  'Better Sleep',
  'Gain Lean Muscle Mass',
]

const GetDiet7Goals = ({ gender, setGoalList }) => {
  const [goals, setGoals] = React.useState([false, false, false, false, false, false, false])

  const setGoalArray = index => {
    let _goals = [...goals]
    _goals[index] = !_goals[index]
    setGoals(_goals)
  }

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
          {goals.map((item, index) =>
            <div key={index} className='text-center my-3 cursor-pointer'>
              <button className='font-24 p-2 btn-wrapper' onClick={() => setGoalArray(index)}>
                {goalList[index]}
                {item ? <i className='fa fa-check-square-o ml-3 text-success'></i> : null}
              </button>
            </div>
          )}
          <div className='text-center mb-3 cursor-pointer py-4'>
            <div className="btn-wrapper">
              <Link to='/quiz-8' onClick={() => setGoalList(goals)}>
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

export default connect(mapStateToProps, { setGoalList })(GetDiet7Goals)