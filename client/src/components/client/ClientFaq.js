import React from 'react'
import { connect } from 'react-redux'

const ClientFaq = ({ user }) => {

  return (
    <div className='client-faq'>
      <div className='d-flex align-items-center py-3 justify-content-between'>
        <div className='h5 font-weight-bold col'>FAQ</div>
        <div className='col text-right'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='bg-light-blue min-vh-100'>
        <div className='row' id="accordion">
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-1">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>Do I have to eat my meals at certain times?</div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-1" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    No you can eat you meals as and when fits your schedule.
                  </div>
                  <div className='py-1'>
                    The overall daily calories and macronutrients are the important not the timing of the particular meals.
                  </div>
                  <div className='py-1'>
                    Many of our clients incorporate intermittent fasting to their plan and don’t eat their first meal until midday or later.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-2">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      I'm not losing weight as fast as I want?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-2" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    Losing weight can take time but you should be losing 2-4 pounds per week, if you are not then you may need to reduce your daily calories by 200.
                  </div>
                  <div className='py-1'>
                    To do this simply edit the amount of calories in plan and reduce it by 200, this will re-calculate your meals and put you back on track with your weight loss goals.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-3">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      Do my meal plans disappear after 8 weeks?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-3" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    No, you have lifetime access to your meal plan and can access it at any time.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-4">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      Will I get keto Flu?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-4" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    Not everyone will experience the 'keto flu' but you can help combat it by staying hydrated, replacing electrolytes, getting plenty of sleep and avoiding strenuous activities.
                  </div>
                  <div className='py-1'>
                    Check out our supplements page for a great electrolyte product that will replace your sodium, potassium and magnesium and help ward off any flu like symptoms.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-5">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      How often should I weigh myself?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-5" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    We suggest weighing yourself 1 time per week, after you have weighted yourself you need to update your 'Current Weight' into your plan so we can re-calculate your meals based on your new weight.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-6">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      What are the recipe books for?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-6" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    The recipe books are 'optional extras' you do not have to use these at all but if you want to swap some of your plan meals for ones in the recipe books you can do that no problem.
                  </div>
                  <div className='py-1'>
                    We have included a short guide on how to do that on the 'Recipe Books' page
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-7">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      How much weight can I expect to lose when I follow my plan?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-7" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    One study found that men and women between 30-69 years who weighed between 90-100 kg lost a total of 14 kg (30.8 pounds) with the keto diet.
                  </div>
                  <div className='py-1'>
                    Most of that weight was lost in the early stages of keto. They:
                  </div>
                  <div className='py-1'>
                    Lost 7 kg (15 pounds) after 4 weeks
                  </div>
                  <div className='py-1'>
                    Lost another 5 kg (11 pounds) between weeks 4 and 12
                  </div>
                  <div className='py-1'>
                    from 12 weeks to 12 months continued to lose 2-4 pounds per month
                  </div>
                  <div className='py-1'>
                    This means the keto diet is effective for fast and sustained fat loss.
                  </div>
                  <div className='py-1'>
                    You’ll see the biggest changes if you stick with it for a few months, and you won’t gain the weight back if you stick with it for the long-term.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-8">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      Do I need to watch/read keto 101?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-8" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    That's entirely up to you, keto 101 is for informational purposes only and you DO NOT have to read/watch it for your plan to work.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-9">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      Other keto calculators have my calories higher or lower than your plan?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-9" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    Calculating calories is not an exact science as there are so many variables and everyone is different.
                  </div>
                  <div className='py-1'>
                    We do our best but also appreciate some people may need more or less so that's why we allow you to alter everything in the members area.
                  </div>
                  <div className='py-1'>
                    If you need more or less calories you can change the input and your meals will be recalculated using the new calorie values.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-10">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      Which supplements to you recommend for the keto diet?
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-10" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    Check out our supplements page from the menu where we list our recommended and most effective keto supplements
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 pt-3'>
            <div className="card">
              <div className="card-header bg-white">
                <a className="collapsed card-link text-black font-weight-bold" data-toggle="collapse" href="#collapse-11">
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      I want more or less variety in my meal plan
                    </div>
                    <i className='fa fa-plus text-info'></i>
                    <i className='fa fa-minus text-info'></i>
                  </div>
                </a>
              </div>
              <div id="collapse-11" className="collapse" data-parent="#accordion">
                <div className="card-body py-2">
                  <div className='py-1'>
                    We realize everyone is different, some people want to eat the same thing every day for simplicity while others want to have a lot of variety.
                  </div>
                  <div className='py-1'>
                    You can alter your plan to suit your individual preferences by using the 'Swap Meal' button by each meal and/or using the filter to set certain parameters for your plan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {})(ClientFaq)