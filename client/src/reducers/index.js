import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import admin from './admin'
import product from './product'
import cart from './cart'
import course from './course'
import stripe from './stripe'
import order from './order'
import recipe from './recipe'
import plan from './plan'
import ebook from './ebook'
import diet from './diet'

export default combineReducers({
  alert,
  auth,
  admin,
  product,
  cart,
  course,
  stripe,
  order,
  recipe,
  plan,
  ebook,
  diet,
})
