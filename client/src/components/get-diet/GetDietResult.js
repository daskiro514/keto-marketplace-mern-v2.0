import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import core from '../../utils/keto-diet-buddy-core';
import ReactApexChart from 'react-apexcharts'

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
  const [series, setSeries] = React.useState([44, 55, 13])
  const [BMI, setBMI] = React.useState(0)
  const [dailyWaterIntake, setDailyWaterIntake] = React.useState(0)

  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Net Carbs', 'Protein', 'Fat'],
  }

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
    setSeries([result.desirable.percEnergyNetCarbs, result.desirable.percEnergyProtein, result.desirable.percEnergyFat])
  }, [activityLevel, age, bodyfat, desiredWeight, gender, height, weight])


  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-result'>
      <div className='page-question text-center text-white my-4'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='font-36 font-weight-800'>Your Keto Analysis is complete!</div>
            <div className='text-left text-white font-18'>
              <div className='my-1'>
                <span className='text-success'>Success Probability </span>: Expremely high compatibility with a ketogenic program; high success expected
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
            {result
              ?
              <div className='table-responsive'>
                <table className='table text-white table-bordered'>
                  <thead>
                    <tr className='text-success align-middle'>
                      <th className='align-middle'>Daily Calories</th>
                      <th className='align-middle'>Daily Fat</th>
                      <th className='align-middle'>Daily Protein</th>
                      <th className='align-middle'>Daily Carbs</th>
                      <th className='align-middle'>Daily Water Intake</th>
                      <th className='align-middle'>BMI (Body Mass Index)</th>
                      <th className='align-middle'>Daily Activity Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{Math.round(result.energy / 10) * 10 - 50} - {Math.round(result.energy / 10) * 10 + 50} calories</td>
                      <td>{Math.round(result.gramsFat - 5)} - {Math.round(result.gramsFat + 5)} grams</td>
                      <td>{Math.round(result.gramsProtein - 5)} - {Math.round(result.gramsProtein + 5)} grams</td>
                      <td>{Math.round(result.gramsNetCarbs - 5)} - {Math.round(result.gramsNetCarbs + 5)} grams</td>
                      <td>{dailyWaterIntake} liters</td>
                      <td>{BMI} ({BMI < 18.5 ? 'Underweight' : BMI > 24.9 ? 'Overweight' : 'Normal'})</td>
                      <td>{activityLevel <= 0.4 ? 'Low' : activityLevel > 0.4 ? 'Normal' : activityLevel >= 0.8 ? 'High' : null}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="chart-wrap">
                  <div id="chart" className='d-flex justify-content-center py-3'>
                    <ReactApexChart options={options} series={series} type="pie" />
                  </div>
                </div>
                <div className='mt-3'>
                  <div className='my-1 text-left'>
                    <div className='text-success font-24'>Lose Weight Body Parts:</div>
                    <div className='font-18 ml-3'>You'll lose weight from these parts: <span className='text-warning'>Cheeks, belly, upper & lower limbs</span></div>
                  </div>
                  <div className='my-1 text-left'>
                    <div className='text-success font-24'>Month 1 Target:</div>
                    <div className='font-18 ml-3'>Achevable Month 1 Weight: <span className='text-warning'>{weight - 5} Kg</span></div>
                  </div>
                </div>
              </div>
              :
              null
            }
            <div className='row'>
              {comments.map((item, index) =>
                <div className='col-md-4 mb-4 d-flex align-items-stretch' key={index}>
                  <div className='bg-dark'>
                    <div className='p-2'>BEFORE AFTER</div>
                    <div className='px-2'>
                      <img className='img-fluid' alt='SETIMAGe' src={item.image} />
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