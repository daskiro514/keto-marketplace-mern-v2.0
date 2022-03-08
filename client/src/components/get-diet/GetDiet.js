import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import GetDietGender from './GetDiet1Gender'
import GetDiet2CurrentFollowing from './GetDiet2CurrentFollowing'
import GetDiet3Difficulty from './GetDiet3Difficulty'
import ketologo from '../../img/customer/ketologo.png'
import { Link } from 'react-router-dom'
import GetDiet3Experience from './GetDiet4Experience'
import GetDiet5DifficultPart from './GetDiet5DifficultPart'
import GetDiet6ExpThoughts from './GetDiet6ExpThoughts'

const GetDiet = () => {

  return (
    <div className='get-diet container-fluid'>
      <div className='get-diet-logo text-center'>
        <Link to='/'>
          <img alt='SETIMAGE' src={ketologo} className='img-fluid my-4' />
        </Link>
      </div>
      <Router basename="/get-diet">
        <Route exact path="/" component={GetDietGender} />
        <Route exact path="/current-following" component={GetDiet2CurrentFollowing} />
        <Route exact path="/difficulty" component={GetDiet3Difficulty} />
        <Route exact path="/experience" component={GetDiet3Experience} />
        <Route exact path="/difficult-part" component={GetDiet5DifficultPart} />
        <Route exact path="/exp-thoughts" component={GetDiet6ExpThoughts} />
      </Router>
      <div className='text-center my-3'>
        <div className='navigation text-white h3'>
          Navigation
        </div>
      </div>
    </div>
  )
}

export default GetDiet