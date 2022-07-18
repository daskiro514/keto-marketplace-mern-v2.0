import React from 'react'
import { connect } from 'react-redux'
import Vimeo from '@u-wave/react-vimeo'
import core from '../../utils/keto-diet-buddy-core'
import { getTempPlan } from '../../actions/plan'
import { Link } from 'react-router-dom'

const modalData = {
  currentWeight: {
    title: 'Current Weight',
    detail: 'This is your current weight and is partially what we base the amount of calories that you need to eat per day to lose weight. We suggest you weight yourself once per week and adjust this number as your weight falls, this means we can recalculate your calories and macronutrients to ensure you continue to lose weight in a steady and sustained manner.'
  },
  targetWeight: {
    title: 'Target Weight',
    detail: 'This is the weight you wish to achieve with your Keto Diet, our customised diet will make sure you reach this weight as safely and rapidly as is possible.'
  },
  height: {
    title: 'Height',
    detail: 'Your height, this is used to work out your BMI (body mass index) and helps to calculate the required calories and macronutrients required each day to lose weight.'
  },
  activityLevel: {
    title: 'Activity level',
    detail: 'We have based your activity level on the questions you answered whilst registering, if you find that you are not losing weight as fast as you would like we suggest moving this down slightly, conversely if you are losing weight too fast you can move the activity level up slightly so each day you will be allowed more calories. Optimal weight loss should be 1-2 pounds per week.'
  },
  dailyCalories: {
    title: 'Daily Calories',
    detail: 'This is the daily calorie intake we have calculated you need to eat to lose 1-2 pounds per week, we have based this on your age, height, weight, target weight and daily activity level.'
  },
  properties: {
    title: 'Protein/Fats/Carbs Breakdown',
    detail: 'This is the amount of protein, fats and carbohydrates you will be eating per day, we have based these numbers firstly on the amount of calories that you need to eat to lose weight and secondly breaking down the macronutrients based on an optimal ketogenic diet.'
  },
  waterIntake: {
    title: 'Water Intake',
    detail: 'This is the amount of water we suggest you drink daily, water is essential for weight loss and is very often overlooked. One study found that subjects who drank 500 ml of water temporarily boosted their metabolism by as much as 30%. Researchers from the study estimated that drinking two liters of water each day can help you increase your energy expenditure by 96 calories.'
  },
  expectedWeight: {
    title: 'Expected 30 day weight',
    detail: 'This is your estimated weight in 30 days IF YOU FOLLOW YOUR CUSTOM KETO DIET TO THE LETTER, this means no cheat meals and no straying from the diet plan. Please note that this is just an estimate, results may vary and are in no way absolute.'
  },
}

const ClientPlan = ({ getTempPlan, plan, baseURL, user, user: { gender, bodyfat, activityLevel, age, height, weight, desiredWeight, goals, describes } }) => {

  const [title, setTitle] = React.useState('')
  const [detail, setDetail] = React.useState('')

  const [result, setResult] = React.useState(null)
  const [dailyWaterIntake, setDailyWaterIntake] = React.useState(0)

  React.useEffect(() => {
    getTempPlan()
  }, [getTempPlan])

  React.useEffect(() => {
    const others = {
      calorieAdjustment: (desiredWeight - weight) / weight * 100
    }
    const params = {
      gender: core.Gender[gender],
      age,
      weight,
      bodyfat,
      height,
      activityLevel,
      netCarbs: Math.abs(others.calorieAdjustment) < 20 ? 25 : others.calorieAdjustment > 20 ? 20 : 30
    }

    var kdb = new core.KetoDietBuddy(params)
    var result = kdb.calculateCalorieIntake(others.calorieAdjustment)

    setDailyWaterIntake((weight * 30 / 28.3 / 33.81).toFixed(1))
    setResult(result.desirable)
  }, [activityLevel, age, bodyfat, desiredWeight, gender, height, weight])


  const modalChange = key => {
    setTitle(modalData[key].title)
    setDetail(modalData[key].detail)
  }

  return (
    <div className='client-plan'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 col-md-4'>Your Plan</div>
        <div className='col-md-4 text-right'>
          <span className='mr-4 cursor-pointer' data-toggle="modal" data-target="#myModal">
            <i className='fa fa-info-circle mr-2'></i>
            Learn more about your plan
          </span>
        </div>
        <div className='text-right col-sm-4'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='row bg-light-blue min-vh-100'>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg mt-5">
            <div className="modal-content">
              <button type="button" className="position-absolute close" data-dismiss="modal" style={{ top: '-25px', right: '10px' }}>&times;</button>
              <div className="modal-body p-0">
                <Vimeo
                  video={364615173}
                  responsive={true}
                />
              </div>
            </div>
          </div>
        </div>
        <InfoModal title={title} detail={detail} />
        <div className='col-lg-3 pt-3'>
          <div className='bg-white p-3 border-bottom'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/current-weight.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {user.weight}
                    <span className='font-15 text-black ml-2'>kg</span>
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('currentWeight')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>current weight</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
          <div className='bg-white p-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/target-weight.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {user.desiredWeight}
                    <span className='font-15 text-black ml-2'>kg</span>
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('targetWeight')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>target weight</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-3 pt-3'>
          <div className='bg-white p-3 border-bottom'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/height.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {user.height}
                    <span className='font-15 text-black ml-2'>cm</span>
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('height')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>height</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
          <div className='bg-white p-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/activity-level.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {user.activityLevel < 0.4 ? 'Low' : user.activityLevel <= 0.6 ? 'Normal' : 'High'}
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('activityLevel')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>activity Level</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-3 pt-3'>
          <div className='bg-white p-3 border-bottom'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/daily-calories.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {result ? Math.round(result.energy / 10) * 10 : null}
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('dailyCalories')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>daily calories</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
          <div className='bg-white p-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/properties.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {result ? `${Math.round(result.gramsProtein / 10) * 10} - ${Math.round(result.gramsFat / 10) * 10} - ${Math.round(result.gramsNetCarbs / 10) * 10}` : null}
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('properties')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>Protein / Fats / Carbs</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
        </div>
        <div className='col-lg-3 pt-3'>
          <div className='bg-white p-3 border-bottom'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/water-intake.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {dailyWaterIntake}
                    <span className='font-15 text-black ml-2'>L</span>
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('waterIntake')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>water intake</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
          <div className='bg-white p-3'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <img src='/img/expected-weight.svg' alt='SETIMAGE' className='mr-3 width-40' />
                <div>
                  <div className='h4 mb-0 font-weight-bold'>
                    {user.weight - 5}
                    <span className='font-15 text-black ml-2'>kg</span>
                    <i className='font-15 text-black fa fa-question-circle-o ml-2'
                      onClick={() => modalChange('expectedWeight')}
                      data-toggle="modal"
                      data-target="#myModal1"></i>
                  </div>
                  <div>expected 30 days weight</div>
                </div>
              </div>
              <i className='fa fa-pencil'></i>
            </div>
          </div>
        </div>

        <div className='col-12 p-0 pt-4 pb-3'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-4 h4 text-black'>
              <div className='py-2'>
                Your Custom Meal Plan
              </div>
            </div>
            <div className='col-lg-8 text-right'>
              <div className='d-inline-block mx-2 py-1'>
                <div className="d-flex align-items-center">
                  <button type="button" className="btn btn-info btn-sm rounded-0"><i className='fa fa-angle-left'></i></button>
                  <div className='mx-2'>WEEK 1</div>
                  <button type="button" className="btn btn-info btn-sm rounded-0"><i className='fa fa-angle-right'></i></button>
                </div>
              </div>
              <div className='d-inline-block mx-2 py-1'>
                <button className='btn btn-secondary btn-sm border-0'><i className='fa fa-refresh mr-2'></i>CHANGE INGREDIENTS</button>
              </div>
              <div className='d-inline-block mx-2 py-1'>
                <button className='btn btn-secondary btn-sm border-0'><i className='fa fa-filter mr-2'></i>FILTER</button>
              </div>
              <div className='d-inline-block mx-2 py-1'>
                <button className='btn btn-secondary btn-sm border-0'><i className='fa fa-print mr-2'></i>PRINT MY MEAL PLAN</button>
              </div>
              <div className='d-inline-block mx-2 py-1'>
                <button className='btn btn-gradient btn-sm border-0 rounded-0'><i className='fa fa-download mr-2'></i>DOWNLOAD SHOPPING LIST</button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12'>
          <div className='table-responsive bg-white'>
            <table className='table'>
              <thead className='font-15 text-black min-h-45'>
                <tr>
                  <th></th>
                  <th className='text-center'>Breakfast</th>
                  <th className='text-center'>Lunch</th>
                  <th className='text-center'>Dinner</th>
                  <th className='text-center'>Snacks</th>
                </tr>
              </thead>
              <tbody>
                {plan.days.map((item, index) =>
                  <tr key={index}>
                    <td className='width-60 p-0 pl-3 text-secondary'>Day {index + 1}</td>
                    <td>
                      <div className='font-15 text-black min-h-45'>{item.breakfast.name}</div>
                      <Link to={`/recipe/${item.breakfast._id}`}>
                        <img alt='SETIMAGE' src={baseURL + item.breakfast.image} style={{ minWidth: '240px', minHeight: '180px' }} className='img-fluid' />
                      </Link>
                      <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div><img alt='SETIMAGE' src='/img/fire.svg' className='mr-2' />{item.breakfast.calories}</div>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'><i className='fa fa-refresh mr-2'></i>SWAP THIS RECIPE</button>
                      </div>
                      <div className='pt-2'>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'>
                          <img alt='SETIMAGE' src='/img/burger-icon.png' width='30px' className='mr-2' />
                          Swap For Keto Fast Food
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className='font-15 text-black min-h-45'>{item.lunch.name}</div>
                      <Link to={`/recipe/${item.lunch._id}`}>
                        <img alt='SETIMAGE' src={baseURL + item.lunch.image} style={{ minWidth: '240px', minHeight: '180px' }} className='img-fluid' />
                      </Link>
                      <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div><img alt='SETIMAGE' src='/img/fire.svg' className='mr-2' />{item.lunch.calories}</div>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'><i className='fa fa-refresh mr-2'></i>SWAP THIS RECIPE</button>
                      </div>
                      <div className='pt-2'>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'>
                          <img alt='SETIMAGE' src='/img/burger-icon.png' width='30px' className='mr-2' />
                          Swap For Keto Fast Food
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className='font-15 text-black min-h-45'>{item.dinner.name}</div>
                      <Link to={`/recipe/${item.dinner._id}`}>
                        <img alt='SETIMAGE' src={baseURL + item.dinner.image} style={{ minWidth: '240px', minHeight: '180px' }} className='img-fluid' />
                      </Link>
                      <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div><img alt='SETIMAGE' src='/img/fire.svg' className='mr-2' />{item.dinner.calories}</div>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'><i className='fa fa-refresh mr-2'></i>SWAP THIS RECIPE</button>
                      </div>
                      <div className='pt-2'>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'>
                          <img alt='SETIMAGE' src='/img/burger-icon.png' width='30px' className='mr-2' />
                          Swap For Keto Fast Food
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className='font-15 text-black min-h-45'>{item.snack.name}</div>
                      <Link to={`/recipe/${item.snack._id}`}>
                        <img alt='SETIMAGE' src={baseURL + item.snack.image} style={{ minWidth: '240px', minHeight: '180px' }} className='img-fluid' />
                      </Link>
                      <div className='pt-3 d-flex align-items-center justify-content-between'>
                        <div><img alt='SETIMAGE' src='/img/fire.svg' className='mr-2' />{item.snack.calories}</div>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'><i className='fa fa-refresh mr-2'></i>SWAP THIS RECIPE</button>
                      </div>
                      <div className='pt-2'>
                        <button className='btn rounded-0 border-0 btn-sm btn-secondary'>
                          <img alt='SETIMAGE' src='/img/burger-icon.png' width='30px' className='mr-2' />
                          Swap For Keto Fast Food
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
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

const InfoModal = ({ title, detail }) => {

  return (
    <div className="modal" id="myModal1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            {detail}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn border" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  plan: state.plan.plan,
  baseURL: state.admin.baseURL
})

export default connect(mapStateToProps, { getTempPlan })(ClientPlan)