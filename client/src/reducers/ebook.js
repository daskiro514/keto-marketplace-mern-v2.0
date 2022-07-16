import {
  EBOOKS_LOADED,
  EBOOK_LOADED,
} from '../actions/types'

const initialState = {
  ebooks: [],
  ebook: {}
}

const productReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case EBOOKS_LOADED: {
      return {
        ...state,
        ebooks: payload
      }
    }
    case EBOOK_LOADED: {
      return {
        ...state,
        ebook: payload
      }
    }
    default:
      return state
  }
}

export default productReducer