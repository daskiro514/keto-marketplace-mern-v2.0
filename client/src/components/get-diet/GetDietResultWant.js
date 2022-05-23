import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import ketoImage1 from '../../img/customer/2-1.png'
import ketoImage2 from '../../img/customer/2-2.png'
import ketoImage3 from '../../img/customer/2-3.png'
import ketoImage4 from '../../img/customer/2-4.png'

const GetDietResultWant = ({ client }) => {

  if (!client) return <Redirect to='/' />

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='text-center text-keto-success font-36 font-bold mb-4'>WHY CAN WE PREDICT &amp; DELIVER SUCH HIGH SUCCESS RATES</div>
          <div className='text-white font-22 text-justify'>
            <div className='my-3'>By analysing your unique routine and body type, we have generated a distinctive macro-metabolic profile tailored specifically for your needs. A 21-day meal program is included in this profile, and exclusively customizes a nutrition plan to help you quickly reach your goals without restricting the foods you love!</div>
            <div className='my-3'>Each day you will receive simple, delicious recipe plans that fit into your nutrient profile. Time consuming activities like measuring, prepping, and tracking are already done for you, removing possible barriers that may keep you from succeeding. In addition, our large online database makes it easy to switch meals if you seek more variety in your diet, and is designed to fit your skill level in the kitchen, time, and budget. The KetoNalysis plan will help you to quickly achieve your goals by taking the stress and hassle out of customizing a nutrition plan!</div>
          </div>
        </div>
        <div className='col-md-6 my-5'>
          <div className='text-center'>
            <img className='img-fluid' alt='SETIMAGE' src={ketoImage1} />
          </div>
        </div>
        <div className='col-md-6 my-5'>
          <div className='d-flex align-items-center'>
            <div className='col-3'>
              <img className='img-fluid' width='100px' alt='SETIMAGE' src={ketoImage2} />
            </div>
            <div className='col-9 text-white font-22'>Ultimate Guide to Keto and Video Series</div>
          </div>
          <hr style={{ borderTopColor: '#555' }} />
          <div className='d-flex align-items-center'>
            <div className='col-3'>
              <img className='img-fluid' width='100px' alt='SETIMAGE' src={ketoImage3} />
            </div>
            <div className='col-9 text-white font-22'>The How To Win at Keto and Still East Takeaway Food Guide</div>
          </div>
          <hr style={{ borderTopColor: '#555' }} />
          <div className='d-flex align-items-center'>
            <div className='col-3'>
              <img className='img-fluid' width='100px' alt='SETIMAGE' src={ketoImage4} />
            </div>
            <div className='col-9 text-white font-22'>The Ultimate guide to Intermittent Fasting</div>
          </div>
          <hr style={{ borderTopColor: '#555' }} />
        </div>
        <div className='col-12'>
          <div className='text-center text-white font-36 font-bold mb-4'>
            But wait! This is only the beginning! You will also receive access to the KetoNalysis 360 Total Support Package:
          </div>
          <div className='text-white font-22 text-justify mb-4'>
            <div className='my-3'><i className='fa fa-check mr-2 text-keto-success'></i>VIP access to our customer support Facebook community - here over 60 thousand customers can share their experiences and successes. This is the ultimate support network, and where you can meet thousands of others across the world on similar journeys.</div>
            <div className='my-3'><i className='fa fa-check mr-2 text-keto-success'></i>24/7 support from anywhere in the world - our coaching group provides professional guidance from a diverse team of advocates, practitioners, and fitness specialists. Our video tutorials and live online classes make it easy to go at your own pace, enabling you to access as much or as little information as you need relating to carb smart eating, cooking, and living!</div>
            <div className='my-3'><i className='fa fa-check mr-2 text-keto-success'></i>One on one coaching as needed - Each week we check in with our customers to ensure they are maximising the program and overcoming challenges along the way. Through online meetings or messenger apps, you will be able to tailor you program and get advanced nutrition advice from one of our KetoNalysis experts. We will accommodate whichever form of communication works best for you!</div>
            <div className='my-3'>This is the solution that thousands around the world have been seeking, and together we will end diet fads while supporting people around the world in their transitions to healthy, balanced lifestyles!</div>
          </div>
          <div className='text-center text-keto-success font-36 font-bold mb-4'>#nomoredietsever</div>
          <div className='text-white font-22 text-justify mb-4'>
            <div className='my-3'>Although we seek to help as many as possible, demand for our KetoNalysis programs is high. We care about the quality and availability of our resources, and in order to do so, can only provide a limited amount of new openings into our community each month.</div>
            <div className='my-3'>Luckily, you are just in time! To register your interest in our program and reserve your spot, please click the link below:</div>
          </div>
          <div className='text-center mb-5'>
            <Link to={`/payment/${client._id}`} className='bg-keto-success text-white font-weight-bold font-36 rounded-xl p-2 px-4'>
              I WANT THIS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  client: state.auth.clientRegistered
})

export default connect(mapStateToProps, {})(GetDietResultWant)