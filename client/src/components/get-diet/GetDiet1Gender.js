import React from 'react'
import { connect } from 'react-redux'
import maleImage from '../../img/customer/male.png'
import femaleImage from '../../img/customer/female.png'
import { Link } from 'react-router-dom'
import { setGender } from '../../actions/diet'

const GetDietGender = ({ gender, setGender }) => {

  var i = 0

  const move = () => {
    if (i === 0) {
      i = 1
      var elem = document.getElementById("myBar")
      var elem1 = document.getElementById('myProgressBar')
      var elem2 = document.getElementById('myPage')
      var elem3 = document.getElementById('seconds')
      var width = 1
      var id = setInterval(frame, 30)
      function frame() {
        if (width >= 100) {
          clearInterval(id)
          elem1.style.display = 'none'
          elem2.style.display = 'block'
          i = 0
        } else {
          width++
          elem.style.width = width + "%"
          elem3.innerText = Math.ceil(3 - width / 33)
        }
      }
    }
  }

  React.useEffect(() => {
    move()
  }, [move])

  return (
    <div className='get-diet-gender'>
      <div className='row justify-content-center'>
        <div id='myProgressBar' style={{ width: '60%', textAlign: 'center', marginTop: '30vh' }}>
          <div className='text-success h3 my-2'>Keto Analysis Starting in</div>
          <div id='seconds' className='text-success h2 my-3'></div>
          <div id="myProgress">
            <div id="myBar"></div>
          </div>
          <div className='text-success h3 my-4'>Get Ready For Human Optimisation</div>
        </div>
      </div>
      <div id='myPage' style={{ display: 'none' }}>
        <div className='page-question text-center text-white font-bold my-4'>
          <div className='font-36 font-weight-800'>GET YOUR CUSTOMIZED KETO DIET PLAN NOW</div>
          <div className='text-secondary font-18 my-1'>To get started with your custom plan, choose your gender.</div>
        </div>
        <div className='row text-white'>
          <div className='col-md-3'></div>
          <div className='col-md-6 row align-items-center'>
            <div className='col-md-5 text-center gender-circle my-5'>
              <Link to='/quiz-2' onClick={() => setGender('MALE')}>
                <img alt='SETIMAGE' src={maleImage} className='img-fluid gender-image' />
              </Link>
            </div>
            <div className='col-md-2 text-center'>
              OR
            </div>
            <div className='col-md-5 text-center gender-circle my-5'>
              <Link to='/quiz-2' onClick={() => setGender('FEMALE')}>
                <img alt='SETIMAGE' src={femaleImage} className='img-fluid gender-image' />
              </Link>
            </div>
          </div>
          <div className='col-md-3'></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  gender: state.diet.gender
})

export default connect(mapStateToProps, { setGender })(GetDietGender)