import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GetDietGender from './GetDiet1Gender'
import GetDiet2CurrentFollowing from './GetDiet2CurrentFollowing'
import GetDiet3Difficulty from './GetDiet3Difficulty'
import ketologo from '../../img/customer/ketologo.png'
import GetDiet3Experience from './GetDiet4Experience'
import GetDiet5DifficultPart from './GetDiet5DifficultPart'
import GetDiet6ExpThoughts from './GetDiet6ExpThoughts'
import GetDiet7Goals from './GetDiet7Goal'
import GetDiet8DailyActivity from './GetDiet8DailyActivity'
import GetDiet9DayLook from './GetDiet9DayLook'
import GetDiet10Describe from './GetDiet10Describe'
import GetDiet11BodyFat from './GetDiet11BodyFat'
import GetDiet12Measurement from './GetDiet12Measurement'
import GetDietResult from './GetDietResult'
import logo from '../../img/logo.PNG'

const GetDiet = () => {

  return (
    <div className='get-diet container-fluid'>
      <div className='get-diet-logo text-center mt-2'>
        <Link to='/'>
          <img alt="SETIMG" src={logo} className='img-fluid' width='200' />
        </Link>
      </div>
      <Router basename="/get-diet">
        <Route exact path="/" component={GetDietGender} />
        <Route exact path="/quiz-1" component={GetDietGender} />
        <Route exact path="/quiz-2" component={GetDiet2CurrentFollowing} />
        <Route exact path="/quiz-3" component={GetDiet3Difficulty} />
        <Route exact path="/quiz-4" component={GetDiet3Experience} />
        <Route exact path="/quiz-5" component={GetDiet5DifficultPart} />
        <Route exact path="/quiz-6" component={GetDiet6ExpThoughts} />
        <Route exact path="/quiz-7" component={GetDiet7Goals} />
        <Route exact path="/quiz-8" component={GetDiet8DailyActivity} />
        <Route exact path="/quiz-9" component={GetDiet9DayLook} />
        <Route exact path="/quiz-10" component={GetDiet10Describe} />
        <Route exact path="/quiz-11" component={GetDiet11BodyFat} />
        <Route exact path="/quiz-12" component={GetDiet12Measurement} />
        <Route exact path="/result" component={GetDietResult} />
      </Router>
    </div>
  )
}

const mapStateToProps = state => ({
  gender: state.diet.gender
})

export default connect(mapStateToProps, {})(GetDiet)