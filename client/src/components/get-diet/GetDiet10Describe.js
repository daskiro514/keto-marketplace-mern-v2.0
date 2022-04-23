import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setDescribeList } from '../../actions/diet'

const describeList = [
  "I don't get enough sleep",
  "I don't sleep Well",
  "I eat a lot of processed foods",
  "I cannot get off the sweets",
  "I love soft drinks",
  "I love energy drinks",
  "I drink more than 3 coffees a day",
]

const GetDiet10Describe = ({ gender, setDescribeList }) => {
  const [describes, setDescribes] = React.useState([false, false, false, false, false, false, false])

  const setDescribeArray = index => {
    let _describes = [...describes]
    _describes[index] = !_describes[index]
    setDescribes(_describes)
  }

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
        <div className='col-lg-3'></div>
        <div className='col-lg-6'>
          {describes.map((item, index) =>
            <div key={index} className='text-center my-3 cursor-pointer'>
              <button className='font-24 p-2 btn-wrapper' onClick={() => setDescribeArray(index)}>
                {describeList[index]}
                {item ? <i className='fa fa-check-square-o ml-3 text-white'></i> : null}
              </button>
            </div>
          )}
          <div className='text-center mb-3 cursor-pointer py-4'>
            <div className="btn-wrapper">
              <Link to='/quiz-11' onClick={() => setDescribeList(describes)}>
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

export default connect(mapStateToProps, { setDescribeList })(GetDiet10Describe)