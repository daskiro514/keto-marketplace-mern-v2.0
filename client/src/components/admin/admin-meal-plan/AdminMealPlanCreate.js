import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../layout/Spinner'

const AdminMealPlanCreate = () => {

  const [isLoading, setIsLoading] = React.useState(false)

  const [name, setName] = React.useState('')

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='admin-meal-plan-create'>
      <div className='font-36 pt-3'>Create Meal Plan</div>
      <div className='row my-3'>
        <div className='col-md-12'>
          <div className='p-3 bg-white keto-rounded-lg mt-3 keto-shadow'>
            {isLoading
              ?
              <Spinner />
              :
              <form className='form row' onSubmit={onSubmit}>
                <div className='col-md-12 form-group'>
                  <label>Name</label>
                  <input
                    type='text'
                    className='form-control'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {})(AdminMealPlanCreate)