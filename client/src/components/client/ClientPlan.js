import React from 'react'
import { connect } from 'react-redux'
import Vimeo from '@u-wave/react-vimeo'
import core from '../../utils/keto-diet-buddy-core'

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

const ClientPlan = ({ user, user: { gender, bodyfat, activityLevel, age, height, weight, desiredWeight, goals, describes } }) => {

  const [title, setTitle] = React.useState('')
  const [detail, setDetail] = React.useState('')

  const [result, setResult] = React.useState(null)
  const [BMI, setBMI] = React.useState(0)
  const [dailyWaterIntake, setDailyWaterIntake] = React.useState(0)

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
    setBMI((weight / (height / 100) ** 2).toFixed(1))

    setResult(result.desirable)
  }, [activityLevel, age, bodyfat, desiredWeight, gender, height, weight])


  const modalChange = key => {
    setTitle(modalData[key].title)
    setDetail(modalData[key].detail)
  }

  return (
    <div className='client-home'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 font-weight-bold col-md-4'>Your Plan</div>
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
                <img src='/img/current-weight.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {user.weight}
                    <span className='font-16 ml-2'>kg</span>
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/target-weight.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {user.desiredWeight}
                    <span className='font-16 ml-2'>kg</span>
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/height.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {user.height}
                    <span className='font-16 ml-2'>cm</span>
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/activity-level.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {user.activityLevel < 0.4 ? 'Low' : user.activityLevel <= 0.6 ? 'Normal' : 'High'}
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/daily-calories.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {result ? Math.round(result.energy / 10) * 10 : null}
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/properties.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {result ? `${Math.round(result.gramsProtein / 10) * 10} - ${Math.round(result.gramsFat / 10) * 10} - ${Math.round(result.gramsNetCarbs / 10) * 10}` : null}
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/water-intake.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {dailyWaterIntake}
                    <span className='font-16 ml-2'>L</span>
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
                <img src='/img/expected-weight.svg' alt='SETIMAGE' className='mr-3' />
                <div>
                  <div className='h4 font-weight-bold mb-0'>
                    {user.desiredWeight - 5}
                    <span className='font-16 ml-2'>kg</span>
                    <i className='font-16 fa fa-question-circle-o ml-2'
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
  user: state.auth.user
})

export default connect(mapStateToProps, {})(ClientPlan)