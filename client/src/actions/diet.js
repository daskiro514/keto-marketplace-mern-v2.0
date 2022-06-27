import api from '../utils/api'
import { setAlert } from './alert'

export const setGender = gender => async dispatch => {
  dispatch({
    type: 'SET_GENDER',
    payload: gender
  })
}

export const setBodyFat = bodyfat => async dispatch => {
  dispatch({
    type: 'SET_BODYFAT',
    payload: bodyfat
  })
}

export const setActivityLevel = activityLevel => async dispatch => {
  dispatch({
    type: 'SET_ACTIVITY_LEVEL',
    payload: activityLevel
  })
}

export const setMeasurement = mesurement => async dispatch => {
  dispatch({
    type: 'SET_MEASUREMENT',
    payload: mesurement
  })
}

export const setGoalList = goals => async dispatch => {
  dispatch({
    type: 'SET_GOALS',
    payload: goals
  })
}

export const setDescribeList = describes => async dispatch => {
  dispatch({
    type: 'SET_DESCRIBES',
    payload: describes
  })
}

export const makeDietPayment = formData => async dispatch => {
  const res = await api.post('/payment/makeDietPayment', formData)

  if (res.data.success) {
    console.log('success')
  } else {
    dispatch(setAlert(res.data.message, 'danger'))
  }
}