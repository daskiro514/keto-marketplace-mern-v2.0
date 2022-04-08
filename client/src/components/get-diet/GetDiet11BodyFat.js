import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { setBodyFat } from '../../actions/diet'
import bodyfat2 from '../../img/customer/bodyfat2.jpg'
import bodyfat3 from '../../img/customer/bodyfat3.jpg'

const GetDiet11BodyFat = ({ gender, setBodyFat }) => {

  if (!gender) {
    return <Redirect to='/' />
  }

  const maleBodyFat = [8, 15, 20, 25, 30, 35]
  const femaleBodyFat = [8, 15, 20, 25, 30, 35]

  return (
    <div className='get-diet-gender'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Body Fat</div>
        <div className='text-secondary font-18 my-1'>Whats your approximate body fat percentage now?</div>
      </div>
      <div className='my-3 row text-white'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='text-center mb-3 cursor-pointer'>
            {gender === 'MALE'
              ?
              maleBodyFat.map((item, index) =>
                <div key={index} className='text-center my-2 cursor-pointer'>
                  <div className="btn-wrapper">
                    <Link to='/quiz-12' onClick={() => setBodyFat(item)}>
                      <div className='font-20 p-1 custom-gradient'>
                        {item} %
                      </div>
                    </Link>
                  </div>
                </div>
              )
              :
              femaleBodyFat.map((item, index) =>
                <div key={index} className='text-center my-2 cursor-pointer'>
                  <div className="btn-wrapper">
                    <Link to='/quiz-12' onClick={() => setBodyFat(item)}>
                      <div className='font-20 p-1 custom-gradient'>
                        {item === 10 ? 'Under 15' : item === 50 ? 'Over 45' : item} %
                      </div>
                    </Link>
                  </div>
                </div>
              )
            }

            {/* <form className='form' onSubmit={onSubmit}>
              <div className="input-group mb-3 mx-auto" style={{ width: '80%', backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}>
                <div className="input-group-prepend">
                  <span className="input-group-text text-white" style={{ backgroundColor: 'transparent' }} >%</span>
                </div>
                <input
                  type="number"
                  className="form-control"
                  value={bodyfat}
                  onChange={e => setBodyfat(e.target.value)}
                  required
                  min={3}
                  max={100}
                  style={{ backgroundColor: 'transparent', color: '#7591b2', fontSize: '20px' }}
                />
              </div>
              <div className='text-center my-3 cursor-pointer'>
                <button type='submit' className='font-24 p-2 btn-wrapper'>
                  Submit
                </button>
              </div>
            </form> */}
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 py-4 text-white'>
            {/* <div className='text-center h3'>How to find your Body Fat Percentage</div>
            <div className='pt-3 text-justify'>
              <p>
                <strong>1. Using Skinfold Calipers (preferred method)</strong><br />
                To get a good estimate of your body fat percentage, use our <u><a href="https://ketodietapp.com/Blog/page/body-fat-calculator" target="_blank" rel="noreferrer"><strong>Body Fat Calculator</strong></a></u> (Jackson / Pollock method). For the most accurate results, use a formula best suited for your needs <u>(<a href="http://www.linear-software.com/online.html" target="_blank" rel="noreferrer">read more</a></u> about other caliper methods).
              </p>
            </div>
            <div className='pt-3 text-justify'>
              <p>
                <strong>2. Body measurement method</strong><br />
                Not the most accurate but can give you a rough idea - it uses your body measurements (waist, hips and neck). Here is a good <u><a href="http://lowcarbdiets.about.com/library/blbodyfatcalculator.htm" target="_blank" rel="noreferrer">on-line calculator you can use</a></u>.
              </p>
            </div>
            <div className='pt-3 text-justify'>
              <p>
                <strong>3. Visual estimates</strong> using comparison illustrations - <button type="button" className="p-0 m-0 btn text-white" data-toggle="modal" data-target="#myModal"><u><strong>Click here</strong></u></button> for comparison images.
              </p>
            </div> */}
            {gender === 'MALE'
              ?
              <img alt='SETIMAGE' src={bodyfat3} className='img-fluid pb-3' />
              :
              <img alt='SETIMAGE' src={bodyfat2} className='img-fluid pb-3' />
            }
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
      <div className="modal fade text-white" id="myModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{ background: 'rgba(30,30,30,0.8)' }}>
            <div className="modal-header">
              <h4 className="modal-title">Body Fat Percentage Of Men & Women</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              {gender === 'MALE'
                ?
                <img alt='SETIMAGE' src={bodyfat3} className='img-fluid pb-3' />
                :
                <img alt='SETIMAGE' src={bodyfat2} className='img-fluid pb-3' />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  gender: state.diet.gender
})

export default connect(mapStateToProps, { setBodyFat })(GetDiet11BodyFat)