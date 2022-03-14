import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import core from '../../utils/keto-diet-buddy-core';
import ReactApexChart from 'react-apexcharts'

const GetDietResult = ({ diet: { gender, bodyfat, activityLevel, age, height, weight, desiredWeight } }) => {

  const [result, setResult] = React.useState(null)
  const [series, setSeries] = React.useState([44, 55, 13])
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

    setResult(result.desirable)
    setSeries([result.desirable.percEnergyNetCarbs, result.desirable.percEnergyProtein, result.desirable.percEnergyFat])
  }, [activityLevel, age, bodyfat, desiredWeight, gender, height, weight])


  if (!gender) {
    return <Redirect to='/' />
  }

  return (
    <div className='get-diet-result'>
      <div className='page-question text-center text-white font-bold my-4'>
        <div className='font-36 font-weight-800'>Congratulations!</div>
        <div className='text-secondary font-18 my-1'>
          Tha Keto Analysis is Complete and your results are Below….
        </div>
        <div className='text-secondary font-18 my-1'>
          Here's the good news you can achieve your goals while still eating delicious food, feeling satisfied and having incredible energy.
        </div>
        <div className='my-3 row text-white'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            {result
              ?
              <div className='table-responsive'>
                <table className='table text-white table-bordered'>
                  <thead>
                    <tr>
                      <th>Net Carbs</th>
                      <th>Protein</th>
                      <th>Fat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{result.gramsNetCarbs} grams</td>
                      <td>{result.gramsProtein} grams</td>
                      <td>{result.gramsFat} grams</td>
                    </tr>
                    <tr>
                      <td>{result.energyNetCarbs} kcal</td>
                      <td>{result.energyProtein} kcal</td>
                      <td>{result.energyFat} kcal</td>
                    </tr>
                    <tr>
                      <td>{result.percEnergyNetCarbs} %</td>
                      <td>{result.percEnergyProtein} %</td>
                      <td>{result.percEnergyFat} %</td>
                    </tr>
                  </tbody>
                </table>
                <div className="chart-wrap">
                  <div id="chart" className='d-flex justify-content-center py-3'>
                    <ReactApexChart options={options} series={series} type="pie" />
                  </div>
                </div>
              </div>
              :
              null
            }
          </div>
          <div className='col-md-6'></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  diet: state.diet,
})

export default connect(mapStateToProps, {})(GetDietResult)