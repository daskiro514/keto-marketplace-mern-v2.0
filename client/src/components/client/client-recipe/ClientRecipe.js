import React from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../../../actions/recipe'
import Vimeo from '@u-wave/react-vimeo'
import { Link } from 'react-router-dom'

const ClientRecipe = ({ recipe, getRecipe, match, baseURL, user }) => {
  const recipeID = match.params.id

  React.useEffect(() => {
    getRecipe(recipeID)
  }, [getRecipe, recipeID])

  return (
    <div className='client-recipe'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 col-md-4'>
          <Link to='/my-plan'><i className='fa fa-arrow-circle-o-left mr-2'></i>My Plan</Link>
        </div>
        <div className='text-right col-sm-4'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='row bg-light-blue min-vh-100'>
        <div className='col-12'>
          <div className='pt-4 pb-3'>
            <Link to='/my-plan' className='text-black font-weight-bold'>Your plan</Link>
            <i className='fa fa-angle-right mx-2'></i>
            <span>{recipe.name}</span>
          </div>
          <div className='row mx-1 px-2 my-3 bg-white'>
            <div className='col-lg-6 p-3 border-right border-bottom text-center'>
              {/* <img alt='SETIMAGE' src={baseURL + recipe.image} className='img-fluid rounded-lg' /> */}
              <Vimeo
                video={recipe.video}
                responsive={true}
              />
            </div>
            <div className='col-lg-6 py-3 border-bottom'>
              <div className='h3 font-weight-bold my-4 mb-3'>{recipe.name}</div>
              <div>
                <div className='d-inline-block mr-4'>
                  <img alt='SETIMAGE' src='/img/fire2.svg' className='mr-2' />
                  <span>{recipe.calories}</span>
                </div>
                <div className='d-inline-block mr-4'>
                  <img alt='SETIMAGE' src='/img/time.svg' className='mr-2' />
                  <span>5 MIN</span>
                </div>
                <div className='d-inline-block mr-4'>
                  <img alt='SETIMAGE' src='/img/fork2.svg' className='mr-2' />
                  <span>1</span>
                </div>
              </div>
              <div className='py-3'>The nutritional information for 1 portion of this meal is:</div>
              <div>
                <div className='d-inline-block mr-3'>
                  <div className='p-1 text-white font-12' style={{ backgroundColor: '#6E5B83', width: '80px' }}>PROTEIN</div>
                  <div className='border px-1'>{recipe.protein}</div>
                </div>
                <div className='d-inline-block mr-3'>
                  <div className='p-1 text-white font-12' style={{ backgroundColor: '#6E5B83', width: '80px' }}>FATS</div>
                  <div className='border px-1'>{recipe.fats}</div>
                </div>
                <div className='d-inline-block mr-3'>
                  <div className='p-1 text-white font-12' style={{ backgroundColor: '#6E5B83', width: '80px' }}>CARBS</div>
                  <div className='border px-1'>{recipe.netCarbs}</div>
                </div>
                <div className='d-inline-block mr-3'>
                  <div className='p-1 text-white font-12' style={{ backgroundColor: '#6E5B83', width: '80px' }}>KCAL</div>
                  <div className='border px-1'>{recipe.calories}</div>
                </div>
              </div>
              <div className='py-4'>
                <button className='btn btn-lg btn-gradient px-3 py-2 rounded-0'><i className='fa fa-print mr-2'></i>PRINT RECIPE</button>
              </div>
            </div>
            <div className='col-lg-4 py-5 p-3 table-responsive border-bottom'>
              <div className='h4 text-black'>Ingredients</div>
              <table className='table table-borderless table-striped'>
                <tbody>
                  {recipe.ingredients ? recipe.ingredients.map((item, index) =>
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.type}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
            <div className='col-lg-8 py-5 p-3 table-responsive border-bottom'>
              <div className='h4 text-black'>Preparation</div>
              <hr />
              <table className='table table-borderless'>
                <tbody>
                  {recipe.instructions ? recipe.instructions.map((item, index) =>
                    <tr key={index}>
                      <td className='width-60 font-16'><span className='badge badge-info rounded-0'>Step {index + 1}: </span></td>
                      <td>{item.content}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='col-12 pt-4'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-6 py-2'>
              Copyright 2019 Custom Keto Diet. All rights reserved.
            </div>
            <div className='col-lg-6 text-right py-2'>
              <a href='https://www.customketodiet.com/privacy' target='_blink' rel='noreferrer' className='mr-4'>Privacy</a>
              <a href='https://www.customketodiet.com/site/terms' target='_blink' rel='noreferrer' className='mr-4'>Terms & Conditions</a>
              <a href='https://www.customketodiet.com/contact' target='_blink' rel='noreferrer'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  recipe: state.recipe.recipe,
  baseURL: state.admin.baseURL,
  user: state.auth.user
})

export default connect(mapStateToProps, { getRecipe })(ClientRecipe)