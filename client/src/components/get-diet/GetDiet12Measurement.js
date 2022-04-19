import React from 'react'
import { connect } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { setMeasurement } from '../../actions/diet'

const GetDiet12Measurement = ({ gender, setMeasurement }) => {
  const history = useHistory()

  const [age, setAge] = React.useState()
  const [height, setHeight] = React.useState()
  const [weight, setWeight] = React.useState()
  const [desiredWeight, setDesiredWeight] = React.useState()
  const [measureType, setMeasureType] = React.useState('metric')

  const changeMeasureType = type => {
    if (measureType === 'metric' && type === 'imperial') {
      if (height) setHeight(height / 30.48)
      if (weight) setWeight(weight * 2.20462)
      if (desiredWeight) setDesiredWeight(desiredWeight * 2.20462)
    }
    if (measureType === 'imperial' && type === 'metric') {
      if (height) setHeight(height * 30.48)
      if (weight) setWeight(weight / 2.20462)
      if (desiredWeight) setDesiredWeight(desiredWeight / 2.20462)
    }
    setMeasureType(type)
  }

  const onSubmit = e => {
    e.preventDefault()
    let _height = height
    let _weight = weight
    let _desiredWeight = desiredWeight

    if (measureType === 'imperial') {
      _height = height * 30.48
      _weight = weight / 2.20462
      _desiredWeight = desiredWeight / 2.20462
    }

    setMeasurement({
      age,
      height: _height,
      weight: _weight,
      desiredWeight: _desiredWeight
    })

    history.push('/result')
  }

  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Your Measurement</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='mx-auto pb-3' style={{ width: '80%' }}>
            <button
              className={`custom-gradient-measurement px-3 py-1 mr-2 text-white ${measureType === 'metric' ? 'custom-gradient-measurement-selected' : ''}`}
              onClick={() => changeMeasureType('metric')}
            >Metric</button>
            <button
              className={`custom-gradient-measurement px-3 py-1 text-white ${measureType === 'imperial' ? 'custom-gradient-measurement-selected' : ''}`}
              onClick={() => changeMeasureType('imperial')}
            >Imperial</button>
          </div>
          {measureType === 'metric'
            ?
            <form className='form' onSubmit={onSubmit}>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} ></span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Age'
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  required
                  min={14}
                  max={99}
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} >CM</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Height'
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  required
                  min={130}
                  max={242}
                  step="any"
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} >KG</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Weight'
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  required
                  min={40}
                  max={180}
                  step="any"
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} >KG</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Desired Weight'
                  value={desiredWeight}
                  onChange={e => setDesiredWeight(e.target.value)}
                  required
                  min={40}
                  max={180}
                  step="any"
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className='text-center my-3 cursor-pointer'>
                <button type='submit' className='font-24 p-2 btn-wrapper'>
                  Submit
                </button>
              </div>
            </form>
            :
            <form className='form' onSubmit={onSubmit}>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} ></span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Age'
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  required
                  min={14}
                  max={99}
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} >FT</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Height'
                  value={height}
                  onChange={e => setHeight(e.target.value)}
                  required
                  min={4.0}
                  max={8.0}
                  step="any"
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} >LB</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Weight'
                  value={weight}
                  onChange={e => setWeight(e.target.value)}
                  required
                  min={88}
                  max={395}
                  step="any"
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent', width: '50px' }} >LB</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  placeholder='Desired Weight'
                  value={desiredWeight}
                  onChange={e => setDesiredWeight(e.target.value)}
                  required
                  min={88}
                  max={395}
                  step="any"
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className='text-center my-3 cursor-pointer'>
                <button type='submit' className='font-24 p-2 btn-wrapper'>
                  Submit
                </button>
              </div>
            </form>
          }
        </div>
        <div className='col-md-3'>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  gender: state.diet.gender,
})

export default connect(mapStateToProps, { setMeasurement })(GetDiet12Measurement)