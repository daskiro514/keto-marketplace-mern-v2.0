import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { loadCartData } from '../../actions/cart'
import PrivateRoute from '../routing/PrivateRoute'
import ClientSidebar from './ClientSidebar'
import ClientHome from './ClientHome'
import ClientAcademy from './ClientAcademy'
import ClientStore from './ClientStore'
import ClientProduct from './ClientProduct'
import ClientSettings from './ClientSettings'
import ClientCart from './ClientCart'
import ClientCheckout from './ClientCheckout'
import ClientAcademyView from './ClientAcademyView'
import ClientOrders from './ClientOrders'
import ClientThanks from './ClientThanks'
import ClientOrderDetail from './ClientOrderDetail'
import ClientRecipes from './client-recipe/ClientRecipes'
import ClientRecipe from './client-recipe/ClientRecipe'
import ClientFaq from './ClientFaq'
import ClientPlan from './ClientPlan'

const Client = ({loadCartData}) => {

  React.useEffect(() => {
    loadCartData()
  }, [loadCartData])

  return (
    <div className='container-fluid bg-admin font-15'>
      <div className='row'>
        <ClientSidebar />
        <div className='client-right'>
          <Router basename="/dashboard">
            <PrivateRoute exact path="/" component={ClientHome} />
            <PrivateRoute exact path="/my-plan" component={ClientPlan} />
            <PrivateRoute exact path="/faq" component={ClientFaq} />
            <PrivateRoute exact path="/academy" component={ClientAcademy} />
            <PrivateRoute exact path="/academy/:id" component={ClientAcademyView} />
            <PrivateRoute exact path="/store" component={ClientStore} />
            <PrivateRoute exact path="/recipes" component={ClientRecipes} />
            <PrivateRoute exact path="/recipe/:id" component={ClientRecipe} />
            <PrivateRoute exact path="/cart" component={ClientCart} />
            <PrivateRoute exact path="/orders" component={ClientOrders} />
            <PrivateRoute exact path="/order/:id" component={ClientOrderDetail} />
            <PrivateRoute exact path="/checkout" component={ClientCheckout} />
            <PrivateRoute exact path="/thanks" component={ClientThanks} />
            <PrivateRoute exact path="/product/:id" component={ClientProduct} />
            <PrivateRoute exact path="/settings" component={ClientSettings} />
          </Router>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {loadCartData})(Client)