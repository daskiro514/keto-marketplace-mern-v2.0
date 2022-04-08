const initialState = {
  gender: null,
  bodyfat: null,
  activityLevel: null,
  age: null,
  height: null,
  weight: null,
  desiredWeight: null,
  goals: [],
  describes: [],
}

const dietReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_GENDER':
      return {
        ...state,
        gender: payload
      }
    case 'SET_BODYFAT':
      return {
        ...state,
        bodyfat: payload
      }
    case 'SET_ACTIVITY_LEVEL':
      return {
        ...state,
        activityLevel: payload
      }
    case 'SET_MEASUREMENT':
      return {
        ...state,
        age: payload.age,
        height: payload.height,
        weight: payload.weight,
        desiredWeight: payload.desiredWeight
      }
    case 'SET_GOALS':
      return {
        ...state,
        goals: payload
      }
    case 'SET_DESCRIBES':
      return {
        ...state,
        describes: payload
      }
    default:
      return state
  }
}

export default dietReducer