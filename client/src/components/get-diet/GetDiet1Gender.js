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
      var rocket = document.getElementById('rocket')
      var width = 1
      var id = setInterval(frame, 20)
      function frame() {
        if (width >= 100) {
          clearInterval(id)
          elem1.style.display = 'none'
          rocket.style.display = 'none'
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
      <div id='rocket' className='row justify-content-center'>
        <div className="loader-container">
          <div className="rocket-container">
            <div className="structure">
              <svg height="352" id="rocket-svg" version="1.1" viewBox="0 0 59.266662 93.133333" width="224" xmlns="http://www.w3.org/2000/svg">
                <g id="layer2" transform="translate(-33.866666,-33.866666)">
                  <path d="m 296,336 a 8.0000078,8.0000078 0 0 0 -8,8 v 80 a 8.0000078,7.9999501 0 0 0 1.16406,4.14062 l -0.22461,0.11329 49.32227,49.32031 0.0781,0.0801 0.004,-0.004 A 7.9999934,8.0000655 0 0 0 344,480 a 7.9999934,8.0000655 0 0 0 8,-8 v -80 a 7.9999934,7.9998924 0 0 0 -2.34961,-5.65625 l 0.004,-0.004 -48.00391,-48.00195 -0.004,0.002 A 8.0000078,8.0000078 0 0 0 296,336 Z" id="right-wing" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.99999994, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} transform="scale(0.26458333)"></path>
                  <path d="m 184,336 a 8.0000006,8.0000078 0 0 0 -5.65234,2.3457 l -0.004,-0.002 -47.91797,47.91797 -0.082,0.082 0.004,0.002 A 8.0000078,7.9998924 0 0 0 128,392 v 80 a 8.0000078,8.0000655 0 0 0 8,8 8.0000078,8.0000655 0 0 0 5.65625,-2.34961 l 0.004,0.004 49.40039,-49.40039 -0.22657,-0.11329 A 8.0000006,7.9999501 0 0 0 192,424 v -80 a 8.0000006,8.0000078 0 0 0 -8,-8 z" id="left-wing" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.99999994, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} transform="scale(0.26458333)"></path>
                  <path d="M 239.96875,128 A 111.99996,124.13082 0 0 0 176,240 l 16,200 a 8.0000006,8.0000655 0 0 0 8,8 h 80 a 8.0000078,8.0000655 0 0 0 8,-8 L 304,240 A 111.99996,124.13082 0 0 0 239.96875,128 Z" id="rocket-main-part" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.99999994, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} transform="scale(0.26458333)"></path>
                  <path d="m 239.96875,128 a 111.99996,124.13082 0 0 0 -47.77344,48 h 95.51953 a 111.99996,124.13082 0 0 0 -47.74609,-48 z" id="nose" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.99999994, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} transform="scale(0.26458333)"></path>
                  <ellipse cx="63.5" cy="59.266663" id="window-stroke" rx="7.4083333" ry="7.4083328" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.26458332, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}></ellipse>
                  <ellipse cx="63.499996" cy="59.266666" id="window-inner" rx="6.3499975" ry="6.3500061" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.26458332, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}></ellipse>
                  <path d="m 240,336 a 7.9999898,8.0000078 0 0 0 -8,8 v 128 a 7.9999898,8.0000078 0 0 0 8,8 7.9999898,8.0000078 0 0 0 8,-8 V 344 a 7.9999898,8.0000078 0 0 0 -8,-8 z" id="middle-wing" style={{ opacity: 1, fillOpacity: 1, stroke: 'none', strokeWidth: 0.99999994, strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} transform="scale(0.26458333)"></path>
                  <path d="M 239.96875,128 A 111.99996,124.13082 0 0 0 176,240 l 7.68164,96.01562 a 8.0000006,8.0000078 0 0 0 -5.33398,2.33008 l -0.004,-0.002 -47.91797,47.91797 -0.082,0.082 0.004,0.002 A 8.0000078,7.9998924 0 0 0 128,392 v 80 a 8.0000078,8.0000655 0 0 0 8,8 8.0000078,8.0000655 0 0 0 5.65625,-2.34961 l 0.004,0.004 49.40039,-49.40039 -0.22657,-0.11329 a 8.0000006,7.9999501 0 0 0 0.18946,-0.3496 l 0.0371,0.46289 L 192,440 a 8.0000006,8.0000655 0 0 0 8,8 h 32 v 24 a 7.9999898,8.0000078 0 0 0 8,8 V 336 252 196 128.01758 A 111.99996,124.13082 0 0 0 239.96875,128 Z" id="shadow-layer" style={{ opacity: 0.2, fill: '#000000', fillOpacity: 1, stroke: 'none', strokeWidth: '0.99999994', strokeLinecap: 'round', strokeLinejoin: 'bevel', strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }} transform="scale(0.26458333)"></path>
                </g>
              </svg>
            </div>
            <div className="text-container">
              <h2>Loading</h2>
            </div>
            <div className="smoke">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="meteors-container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className='row justify-content-center'>
        <div id='myProgressBar' style={{ width: '60%', textAlign: 'center', marginTop: '30vh', display: 'none' }}>
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