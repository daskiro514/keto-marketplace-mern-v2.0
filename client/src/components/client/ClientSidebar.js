import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { useHistory } from 'react-router-dom'
import { setCurrentPage } from '../../actions/admin'
import academyImage from '../../img/icons/academy.PNG'
import storeImage from '../../img/icons/store.PNG'
import settingsImage from '../../img/icons/settings.PNG'
import recipeImage from '../../img/icons/recipe.PNG'
import logoutImage from '../../img/icons/logout.PNG'

const ClientSidebar = ({ user, logout, setCurrentPage, currentPage }) => {
  let history = useHistory()

  const goPage = async location => {
    setCurrentPage(location)
    await history.push(`/`)
    await history.push(`/dashboard`)

    if (location === 'dashboard') {
      await history.push(`/dashboard/`)
      return
    }
    await history.push(`/dashboard/${location}`)
  }

  return (
    <div className='client-left'>
      <div className='container-fluid p-0'>
        <div className='py-3'>
          <div className='text-center cursor-pointer' onClick={() => goPage('dashboard')}>
            <img src='/img/logo.svg' alt='PROFILE' />
          </div>
        </div>
        <div className=''>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'dashboard' ? 'selected' : '')} onClick={() => goPage('dashboard')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/home.svg' alt='SETIMG' /></div>
              <div>Home</div>
            </div>
          </div>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'faq' ? 'selected' : '')} onClick={() => goPage('faq')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/faq.svg' alt='SETIMG' /></div>
              <div>FAQ</div>
            </div>
          </div>
          {/* <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'academy' ? 'selected' : '')} onClick={() => goPage('academy')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/page.svg' alt='SETIMG' /></div>
              <div>Academy</div>
            </div>
          </div>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'store' ? 'selected' : '')} onClick={() => goPage('store')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/page.svg' alt='SETIMG' /></div>
              <div>Store</div>
            </div>
          </div>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'recipes' ? 'selected' : '')} onClick={() => goPage('recipes')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/book.svg' alt='SETIMG' /></div>
              <div>Recipes</div>
            </div>
          </div>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'cart' ? 'selected' : '')} onClick={() => goPage('cart')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/page.svg' alt='SETIMG' /></div>
              <div>Cart</div>
            </div>
          </div>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'orders' ? 'selected' : '')} onClick={() => goPage('orders')}>
            <div className='text-center'>
              <div className='pb-2'><img src='/img/page.svg' alt='SETIMG' /></div>
              <div>Orders</div>
            </div>
          </div> */}
        </div>

        {/* <div className='signoutLink p-2 pt-3'>
          <div className={'menuItem rounded py-3 p-1 ' + (currentPage === 'settings' ? 'selected' : '')} onClick={() => goPage('settings')}>
            <div className='text-center'>
              <div className='pb-2'><img src={settingsImage} alt='SETIMG' /></div>
              <div>Settings</div>
            </div>
          </div>
          <div className='menuItem rounded py-3 p-1 ' onClick={() => {
            setCurrentPage('dashboard')
            logout()
          }}>
            <div className='text-center'>
              <div className='pb-2'><img src={logoutImage} alt='SETIMG' /></div>
              <div>Sign Out</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  currentPage: state.admin.currentPage
})

export default connect(mapStateToProps, { logout, setCurrentPage })(ClientSidebar)