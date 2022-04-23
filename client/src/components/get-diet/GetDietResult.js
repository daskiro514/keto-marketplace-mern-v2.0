import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import core from '../../utils/keto-diet-buddy-core'

import fatImage from '../../img/customer/fat.png'
import energyImage from '../../img/customer/energy.png'
import brainImage from '../../img/customer/brain.png'
import mentalImage from '../../img/customer/mental.png'
import balanceImage from '../../img/customer/balance.png'
import sleepingImage from '../../img/customer/sleeping.png'
import muscleImage from '../../img/customer/muscle.png'

import coffeeImage from '../../img/customer/coffee.png'
import restfulImage from '../../img/customer/restful.png'
import cravingsImage from '../../img/customer/cravings.png'
import habitsImage from '../../img/customer/habits.png'
import softImage from '../../img/customer/soft.png'
import drinkImage from '../../img/customer/drink.png'

import KarleeImage from '../../img/customer/Karlee.jpeg'
import NatashaImage from '../../img/customer/Natasha.jpeg'
import LeoImage from '../../img/customer/Leo.jpeg'

import waterImage from '../../img/customer/water.png'
import bmiImage from '../../img/customer/bmi-graph.png'
import bodyImage from '../../img/customer/body-part.jpg'
import heartImage from '../../img/customer/heart.png'
import scaleImage from '../../img/customer/scales-blue-gradient.png'

import Radialbar from '../layout/Radialbar'

const describeList = [
  { text: "I don't get enough sleep", image: restfulImage },
  { text: "I don't sleep Well", image: restfulImage },
  { text: "I eat a lot of processed foods", image: cravingsImage },
  { text: "I cannot get off the sweets", image: habitsImage },
  { text: "I love soft drinks", image: softImage },
  { text: "I love energy drinks", image: drinkImage },
  { text: "I drink more than 3 coffees a day", image: coffeeImage },
]

const goalList = [
  { text: 'Fat Loss', image: fatImage },
  { text: 'Better energy', image: energyImage },
  { text: 'Reduce Brain Fog', image: brainImage },
  { text: 'Mental wellness', image: mentalImage },
  { text: 'Hormonal Balancing', image: balanceImage },
  { text: 'Better Sleep', image: sleepingImage },
  { text: 'Gain Lean Muscle Mass', image: muscleImage },
]

const comments = [
  {
    text: "These photos are from May to August. When I started the plan it was solely to assist me loosing weight - Ketones gave the boost to get up an extra hour to go for jog or a workout, suppressed my appetite while I adjusted to my healthy eating plan and I noticed I wasn't reaching for any sugary snacks. Now I've dropped the weight I continue for a number of reasons. The program helps me stay focused at work and tasks like housework don't seem as much as a drag because I'm motivated. I have a large busy family life and without realising it I manage to run my household and parent 100 times more effective and I've been told my partner I'm not half as moody as I used to be. When I heard other people stories/reviews I thought it was too good to be true but this has made me feel new again I'm so optimistic about my future and what I'll will achieve with my new lease of life.",
    image: KarleeImage,
    name: 'Karlee',
    country: 'UK'
  },
  {
    text: "Before I started this program, I was constantly tired and unmotivated to do anything. I had terrible up and down mood swings and genuinely felt like I was stuck in a rut not knowing were life was going to take me. This also contributed to me making unhealthy decisions and LBS creeping up on me.Now I can honestly say I'm becoming a better version of myself everyday! I wake up every morning ready to take on the day with more motivation, focus, reduced brain fog and a hell of a lot more energy. I have also seen a massive improvement in my self esteem, I don't feel as worried and I now enjoy life again! The added bonus' for me was watching my skin improve, sleeping like a baby and dropping some lbs (25 in total so far).",
    image: NatashaImage,
    name: 'Natasha',
    country: 'UK'
  },
  {
    text: "Well I was always big as a youngster and got as you can see from picture the weight got totally out of hand, but for some reason at the time was not that bothered because a martial artist I could still do the splits, kick to the head and lots of stuff so didn't bother me.Now when I look back at it I think to myself how can you let yourself get in that state. 🤦🏻‍♂️ Wow. I had lost about 11 stone before I started these protocols but had a stroke and gained a lot of weight back… Now this has changed everything. Not only have I lost 4 stone, but I have better sleep, more energy, less stress, better mood, better focus, & better digestion… In short I feel fantastic and its so much easier than the way I tried to do it before.",
    image: LeoImage,
    name: 'Leo',
    country: 'UK'
  }
]

const GetDietResult = ({ diet: { gender, bodyfat, activityLevel, age, height, weight, desiredWeight, goals, describes } }) => {

  const [result, setResult] = React.useState(null)
  const [showChart, setShowChart] = React.useState(false)
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

  var checkmarkIdPrefix = "loadingCheckSVG-"
  var checkmarkCircleIdPrefix = "loadingCheckCircleSVG-"
  var verticalSpacing = 50

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  function createSVG(tag, properties, opt_children) {
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", tag)
    var _keys = Object.keys(properties)
    _keys.forEach(key => {
      newElement.setAttribute(key, properties[key])
    })
    if (opt_children) {
      opt_children.forEach(function (child) {
        newElement.appendChild(child)
      })
    }
    return newElement
  }

  function createPhraseSvg(phrase, yOffset) {
    var text = createSVG("text", {
      fill: "white",
      x: 50,
      y: yOffset,
      "font-size": 18,
      "font-family": "Arial"
    })
    // text.appendChild(document.createTextNode(phrase + "..."))
    text.appendChild(document.createTextNode(phrase))
    return text
  }
  function createCheckSvg(yOffset, index) {
    var check = createSVG("polygon", {
      points:
        "21.661,7.643 13.396,19.328 9.429,15.361 7.075,17.714 13.745,24.384 24.345,9.708 ",
      fill: "rgba(255,255,255,1)",
      id: checkmarkIdPrefix + index
    })
    var circle_outline = createSVG("path", {
      d:
        "M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,30C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2 c7.72,0,14,6.28,14,14C30,23.72,23.72,30,16,30z",
      fill: "white"
    })
    var circle = createSVG("circle", {
      id: checkmarkCircleIdPrefix + index,
      fill: "rgba(255,255,255,0)",
      cx: 16,
      cy: 16,
      r: 15
    })
    var group = createSVG(
      "g",
      {
        transform: "translate(10 " + (yOffset - 20) + ") scale(.9)"
      },
      [circle, check, circle_outline]
    )
    return group
  }

  function addPhrasesToDocument(phrases) {
    phrases.forEach(function (phrase, index) {
      var yOffset = 30 + verticalSpacing * index
      document
        .getElementById("phrases")
        .appendChild(createPhraseSvg(phrase, yOffset))
      document
        .getElementById("phrases")
        .appendChild(createCheckSvg(yOffset, index))
    })
  }

  function easeInOut(t) {
    var period = 200
    return (Math.sin(t / period + 100) + 1) / 2
  }

  var counter = 0

  const screenChange = () => {
    var elem1 = document.getElementById('loadingPage')
    var elem2 = document.getElementById('mainPage')
    var id = setInterval(frame, 100)
    function frame() {
      if (counter >= 45) {
        clearInterval(id)
        elem1.style.display = 'none'
        elem2.style.display = 'block'
        setShowChart(true)
      } else {
        counter++
      }
    }
  }

  React.useEffect(() => {
    screenChange()
    var phrases = [
      "Aggregating the data and developing a hypothesis",
      "Implementing goals and creating a strategy",
      "Performing investigation of metabolic habits",
      "Compiling the best Meal Plan for you",
      "Calibrating your Meta-Analysis",
    ]
    addPhrasesToDocument(phrases)
    var start_time = new Date().getTime()
    var upward_moving_group = document.getElementById("phrases")
    upward_moving_group.currentY = 0
    var checks = phrases.map(function (_, i) {
      return {
        check: document.getElementById(checkmarkIdPrefix + i),
        circle: document.getElementById(checkmarkCircleIdPrefix + i)
      }
    })
    function animateLoading() {
      var now = new Date().getTime()
      upward_moving_group.setAttribute(
        "transform",
        "translate(0 " + upward_moving_group.currentY + ")"
      )
      upward_moving_group.currentY -= 1.35 * easeInOut(now)
      checks.forEach(function (check, i) {
        var color_change_boundary = -i * verticalSpacing + verticalSpacing + 15
        if (upward_moving_group.currentY < color_change_boundary) {
          var alpha = Math.max(
            Math.min(
              1 -
              (upward_moving_group.currentY - color_change_boundary + 15) / 30,
              1
            ),
            0
          )
          check.circle.setAttribute("fill", "rgba(255, 255, 255, " + alpha + ")")
          var check_color = [
            Math.round(255 * (1 - alpha) + 120 * alpha),
            Math.round(255 * (1 - alpha) + 154 * alpha)
          ]
          check.check.setAttribute(
            "fill",
            "rgba(255, " + check_color[0] + "," + check_color[1] + ", 1)"
          )
        }
      })
      if (now - start_time < 30000 && upward_moving_group.currentY > -710) {
        requestAnimationFrame(animateLoading)
      }
    }
  }, [])

  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-result'>
      <div id='loadingPage' className='row justify-content-center'>
        <div id="page" className='col-12'>
          <div id="phrase_box">
            <svg width="100%" height="100%">
              <defs>
                <mask id="mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
                  <linearGradient id="linearGradient" gradientUnits="objectBoundingBox" x2="0" y2="1">
                    <stop stop-color="white" stop-opacity="0" offset="0%" />
                    <stop stop-color="white" stop-opacity="1" offset="30%" />
                    <stop stop-color="white" stop-opacity="1" offset="70%" />
                    <stop stop-color="white" stop-opacity="0" offset="100%" />
                  </linearGradient>
                  <rect width="100%" height="100%" fill="url(#linearGradient)" />
                </mask>
              </defs>
              <g width="100%" height="100%" style={{ mask: 'url(#mask)' }}>
                <g id="phrases"></g>
              </g>
            </svg>
          </div>
          <div id="footer">
            <div id="logo"></div>Loading
          </div>
        </div>
      </div>
      <div id='mainPage' className='page-question text-center text-white my-4' style={{ display: 'none' }}>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='font-36 font-weight-800'>Your Keto Analysis is complete!</div>
            <div className='text-left text-white font-18'>
              <div className='my-1'>
                <span className='text-success'>Success Probability </span>: Expremely high compatibility with a ketogenic program high success expected
              </div>
              <div className='my-1'>
                <span className='text-success'>Similar Demographic Success Rate </span>: 95 - 98%
              </div>
              <div className='my-1'>
                *when following metabolic profile procedures.
              </div>
              <div className='my-1 font-15'>
                <span className='text-success'>Given your unique profile</span>, the ideal program for your body would be the meta-flex keto plan.
              </div>
              <div className='my-1 font-15'>
                With this program that is specifically tailored for your food preferences, activity level, and lifestyle, it expected to take less that 21 days to notice a profound shift towards your goal of:
              </div>
            </div>
            <div className='my-3 text-left'>
              {goals.map((item, index) =>
                item ?
                  <div key={index} className='d-inline-block p-2' style={{ width: '145px' }}>
                    <img alt='SETIMAGE' src={goalList[index].image} className='img-fluid rounded-lg' />
                  </div>
                  : null
              )}
            </div>
            <div className='my-3 font-24'>
              Plus this is the perfect program for individuals with your specific challenges
            </div>
            <div className='my-3 text-left'>
              {describes.map((item, index) =>
                (item && index > 0) ?
                  <div key={index} className='d-inline-block p-2' style={{ width: '145px' }}>
                    <img alt='SETIMAGE' src={describeList[index].image} className='img-fluid rounded-lg' />
                  </div>
                  : null
              )}
            </div>
            <div className='my-4 text-left'>
              <div className='font-24 text-success'>
                Our Unique Keto Analysis Program
              </div>
              <div className='font-15 text-white text-justify'>
                Our program has integrated data from thousands of studies to develop a comprehensive report showing you exactly how to achieve your health and fitness goals. By analysing your answers submitted in the quiz, we have calculated the exact macro-nutrient and calorie combinations most suitable for your metabolic makeup. By consuming the correct amount calories and appropriate blend of carbs, proteins, and fats (known as macro-nutrients), this detailed report will help you quickly achieve your goals without having to give up foods you love!
              </div>
            </div>
            <div className='my-3 mt-5 font-bold font-36'>
              Your tailored macro-nutrient profile and anticipated results:
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>

        <div className='my-3 row text-white'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            {result && showChart
              ?
              <div className='mb-5 row justify-content-center'>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ width: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Daily Calories</div>
                        <Radialbar
                          showLabel='Calories'
                          maxValue={5000}
                          showValue={Math.round(result.energy / 10) * 10}
                          showValue1={Math.round(result.energy / 10) * 10 - 50}
                          showValue2={Math.round(result.energy / 10) * 10 + 50}
                          startColor='#03e5d9'
                          endColor='#0095f8'
                        />
                      </div>
                      <div className='position-absolute' style={{ top: '220px', width: '290px' }}>
                        <div className='d-flex justify-content-between font-12 mb-4 text-secondary'>
                          <div>0 Calories</div>
                          <div>5000 Calories</div>
                        </div>
                        <div>Recommended Calories:</div>
                        <div className='text-success'>{Math.round(result.energy / 10) * 10 - 50} - {Math.round(result.energy / 10) * 10 + 50}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ width: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Daily Fats</div>
                        <Radialbar
                          showLabel='Fats'
                          maxValue={300}
                          showValue={Math.round(result.gramsFat / 10) * 10}
                          showValue1={Math.round(result.gramsFat / 10) * 10 - 5}
                          showValue2={Math.round(result.gramsFat / 10) * 10 + 5}
                          startColor='#f053c7'
                          endColor='#a315eb'
                        />
                      </div>
                      <div className='position-absolute' style={{ top: '220px', width: '290px' }}>
                        <div className='d-flex justify-content-between font-12 mb-4 text-secondary'>
                          <div>0g Fats</div>
                          <div>300g Fats</div>
                        </div>
                        <div>Recommended Fats:</div>
                        <div className='text-success'>{Math.round(result.gramsFat / 10) * 10 - 5} - {Math.round(result.gramsFat / 10) * 10 + 5}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ width: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Daily Protein</div>
                        <Radialbar
                          showLabel='Protein'
                          maxValue={400}
                          showValue={Math.round(result.gramsProtein / 10) * 10}
                          showValue1={Math.round(result.gramsProtein / 10) * 10 - 5}
                          showValue2={Math.round(result.gramsProtein / 10) * 10 + 5}
                          startColor='#94db11'
                          endColor='#76f88f'
                        />
                      </div>
                      <div className='position-absolute' style={{ top: '220px', width: '290px' }}>
                        <div className='d-flex justify-content-between font-12 mb-4 text-secondary'>
                          <div>0g Protein</div>
                          <div>400g Protein</div>
                        </div>
                        <div>Recommended Protein:</div>
                        <div className='text-success'>{Math.round(result.gramsProtein / 10) * 10 - 5} - {Math.round(result.gramsProtein / 10) * 10 + 5}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ width: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Daily Carbs</div>
                        <Radialbar
                          showLabel='Carbs'
                          maxValue={60}
                          showValue={Math.round(result.gramsNetCarbs / 10) * 10}
                          showValue1={Math.round(result.gramsNetCarbs / 10) * 10 - 5}
                          showValue2={Math.round(result.gramsNetCarbs / 10) * 10 + 5}
                          startColor='#f5a814'
                          endColor='#fdce77'
                        />
                      </div>
                      <div className='position-absolute' style={{ top: '220px', width: '290px' }}>
                        <div className='d-flex justify-content-between font-12 mb-4 text-secondary'>
                          <div>0g Carbs</div>
                          <div>60g Carbs</div>
                        </div>
                        <div>Recommended Carbs:</div>
                        <div className='text-success'>{Math.round(result.gramsNetCarbs / 10) * 10 - 5} - {Math.round(result.gramsNetCarbs / 10) * 10 + 5}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ minWidth: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Daily Water Intake</div>
                      </div>
                      <div className='mt-4'>
                        <img alt='SETIMAGE' className='img-fluid' src={waterImage} />
                      </div>
                      <div className='font-24 position-absolute' style={{ top: '125px', width: '290px' }}>
                        {dailyWaterIntake} L
                      </div>
                      <div className='position-absolute' style={{ top: '260px', width: '290px' }}>
                        <div>Recommended Water:</div>
                        <div className='text-success'>{dailyWaterIntake} L</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ minWidth: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Your BMI</div>
                      </div>
                      <div className='mt-4'>
                        <img alt='SETIMAGE' className='img-fluid' src={bmiImage} width='250' />
                      </div>
                      <div className='font-24 position-absolute' style={{ top: '100px', width: '290px' }}>
                        {BMI}
                      </div>
                      <div className='position-absolute' style={{ top: '260px', width: '290px' }}>
                        <div>Your BMI:</div>
                        <div className='text-success'>{BMI < 18.5 ? 'Underweight' : BMI > 24.9 ? 'Overweight' : 'Healthy'}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ minWidth: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Lose Weight Body Parts</div>
                      </div>
                      <div className=''>
                        <img alt='SETIMAGE' className='img-fluid' src={bodyImage} width='250' />
                      </div>
                      <div className='position-absolute' style={{ top: '260px', width: '290px' }}>
                        <div>You'll lose weight from these parts:</div>
                        <div className='text-warning'>Cheeks, belly, upper & lower limbs</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ minWidth: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Daily Activity Level</div>
                      </div>
                      <div className='mt-4'>
                        <img alt='SETIMAGE' className='img-fluid' src={heartImage} width='180' />
                      </div>
                      <div className='position-absolute' style={{ top: '260px', width: '290px' }}>
                        <div>Your Daily Activity Level:</div>
                        <div className='text-warning'>{activityLevel <= 0.4 ? 'Low' : activityLevel > 0.4 ? 'Normal' : activityLevel >= 0.8 ? 'High' : null}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='d-inline-block p-3'>
                  <div className='bg-black mx-auto rounded-xl p-3' style={{ minWidth: '320px', height: '360px' }}>
                    <div className="chart-wrap position-relative">
                      <div id="chart">
                        <div className='text-success text-left font-24 d-block'>Month 1 Target</div>
                      </div>
                      <div className='mt-4'>
                        <img alt='SETIMAGE' className='img-fluid' src={scaleImage} width='180' />
                      </div>
                      <div className='position-absolute' style={{ top: '260px', width: '290px' }}>
                        <div>Achievable Month 1 Weight:</div>
                        <div className='text-success'>{weight - 5}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              null
            }
            <div className='text-left text-justify my-5'>
              Thousands of members in our community have achieved amazing results by following unique plans generated by our KetoNalysis software. Over the past 5 years we have perfected our system, and are continually helping people around the world achieve the lifestyle and health they have always dreamed of!
            </div>
            <div className='row'>
              {comments.map((item, index) =>
                <div className='col-lg-4 col-md-6 mb-4 d-flex align-items-stretch' key={index}>
                  <div className='bg-dark'>
                    <div className='p-2'>BEFORE AFTER</div>
                    <div className='px-2'>
                      <img className='img-fluid' alt='SETIMAGE' height='100' src={item.image} />
                    </div>
                    <div className='font-12 text-justify p-2'>
                      {item.text}
                    </div>
                    <div className='text-left px-2'>{item.name}</div>
                    <div className='text-left p-2'>{item.country}</div>
                  </div>
                </div>
              )}
            </div>
            <div>See what the hype is all about! Click the link below to see exactly how thousands of others achieved success through the Keto Analysis program!</div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  diet: state.diet,
})

export default connect(mapStateToProps, {})(GetDietResult)