import React from 'react'
import { connect } from 'react-redux'

const GetDietPayment = () => {

  const years = ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033']
  const months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  const [number, setNumber] = React.useState('')
  const [expMonth, setExpMonth] = React.useState('')
  const [expYear, setExpYear] = React.useState('')
  const [cvc, setCvc] = React.useState('')
  const [postalCode, setPostalCode] = React.useState('')

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='text-white font-22 text-justify my-3'>
            Wow! The first step towards a healthier life is already complete! To thank you for registering interest, we are offering you our exclusive “Action Taker” special. This offer is available for a limited time only, and will provide you access to:
          </div>
          <div className='text-white font-22 text-justify mb-4 ml-4'>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>The full KetoNalysis system</div>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>A personalised macro-metabolic 21 day food guide</div>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>A full support system of health and fitness professionals</div>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>VIP access to the customer Facebook group</div>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>Premium coaching group membership</div>
          </div>
          <div className='text-keto-success font-36 font-bold'>In addition, you have also unlocked:</div>
          <div className='text-white font-22 text-justify mb-5 ml-4'>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>Our full carb appropriate knowledge library</div>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>The “Keto 101” video series</div>
            <div className='my-1'><i className='fa fa-check mr-2 text-keto-success'></i>21 days of extra meal plans at no additional charge</div>
          </div>
          <div className='text-white font-22 text-justify my-3'>PLUS - you will benefit from our 100% industry leading satisfaction guarantee… If for any reason you don't feel like this is worth ten times the discounted price, we will happily issue you a full refund!</div>
          <div className='text-white font-22 text-justify my-3'>Usually, this program is marketed at $299, but because of your early interest and subsidies provided by TheKetoLife, we are able to offer this bundle at 90% off its original cost! This collection is fully accessible online, giving you the freedom to access it from anywhere in the world at your own pace. Join thousands more in their successes, and experience long term results and true health &amp; vitality with KetoNalysis.</div>
          <div className='text-center mt-5 mb-4'>
            <div className='text-white font-22 my-3'>Receive all of these fantastic benefits for the small onetime payment of</div>
            <div className='text-keto-success font-36 font-bold my-3'>$29.95</div>
          </div>
          <div className='bg-light rounded-lg py-5 my-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-md-2'></div>
                <div className='col-lg-6 col-md-8'>
                  <div className='shadow p-2 px-3 font-22 rounded-lg'>
                    <div className='row'>
                      <div className='col-md-8'>
                        <div>Customized Meal Plan</div>
                      </div>
                      <div className='col-md-4 text-right'>
                        <div>$ 29.95</div>
                      </div>
                    </div>
                    <div className='font-19'>Please click below on "buy now" to avail Lifetime access</div>
                  </div>

                  <div className='text-center my-4 font-36'>Pay with Stripe</div>
                  <div className='my-2'>Enter your credit card details</div>
                  <form className='form' onSubmit={onSubmit}>
                    <input
                      className='form-control my-2'
                      placeholder='Card Number'
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                      required
                      minLength={15}
                    />
                    <div className='row'>
                      <div className='col-sm-6'>
                        <select
                          className='form-control my-1'
                          value={expYear}
                          onChange={e => setExpYear(e.target.value)}
                          required
                        >
                          <option value=''>Exp Full Year</option>
                          {years.map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                          )}
                        </select>
                      </div>
                      <div className='col-sm-6'>
                        <select
                          className='form-control my-1'
                          value={expMonth}
                          onChange={e => setExpMonth(e.target.value)}
                          required
                        >
                          <option value=''>Exp Month</option>
                          {months.map((item, index) =>
                            <option key={index} value={item}>{item}</option>
                          )}
                        </select>
                      </div>
                    </div>
                    <input
                      className='form-control my-2'
                      placeholder='CVC'
                      value={cvc}
                      onChange={e => setCvc(e.target.value)}
                      required
                      minLength={3}
                    />
                    <input
                      className='form-control my-2'
                      placeholder='ZIP'
                      value={postalCode}
                      onChange={e => setPostalCode(e.target.value)}
                    />
                    <button className='form-control bg-keto-success text-white font-weight-bold'>
                      Pay
                    </button>
                  </form>
                </div>
                <div className='col-lg-3 col-md-2'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

const mapStateToProps = state => ({
  client: state.auth.clientRegistered
})

export default connect(mapStateToProps, {})(GetDietPayment)