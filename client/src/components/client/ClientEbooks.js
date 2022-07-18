import React from 'react'
import { connect } from 'react-redux'
import { getEbooks } from '../../actions/ebook'

const ClientEbooks = ({ user, ebooks, getEbooks, baseURL }) => {

  React.useEffect(() => {
    getEbooks()
  }, [getEbooks])

  return (
    <div className='client-ebooks'>
      <div className='row align-items-center py-3 justify-content-between'>
        <div className='h5 col-md-4 font-weight-bold'>Keto Recipe Ebooks</div>
        <div className='col-md-6 text-right'>
          <span className='mr-4 cursor-pointer' data-toggle="modal" data-target="#myModal">
            <i className='fa fa-info-circle mr-2'></i>
            Learn how to implement these recipes into your keto meal plan
          </span>
        </div>
        <div className='text-right col-md-2'>
          <img alt='SETIMAGE' className='rounded-circle mr-2' width='40px' src={user.avatar} />
          <span>Hello, {user.name}</span>
        </div>
      </div>
      <div className='row bg-light-blue min-vh-100'>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg mt-5">
            <div className="modal-content">
              <button type="button" className="position-absolute close" data-dismiss="modal" style={{ top: '-25px', right: '10px' }}>&times;</button>
              <div className="modal-body">
                <div className='py-2 h5 font-weight-bold text-black'>How to use our recipe books</div>
                <div className='py-1'>Hi, and welcome to our keto recipe book collection...</div>
                <div className='py-1'>The biggest challenge most people come to me with on the keto diet is that they miss the chocolate, desserts, pastries, snacks and sweets they were used to eating.</div>
                <div className='py-1'>Just one sugary cheat meal can kick you out of ketosis and ruin all your hard work leaving you feeling like a failure and ultimately giving up on your diet.</div>
                <div className='py-1'>That’s why I decided to take your favorite desserts, pastries, snacks and treats and convert them into keto friendly recipes.</div>
                <div className='py-1'>In total 11 fat burning recipe books containing over 300 of the most popular meals that people crave on a diet such as pizza, french fries, chocolate cake, pastries, burgers, cookies and doughnuts.</div>
                <div className='py-1'>So if your ever feeling like something sweet you can easily swap out the meal in your custom meal plan for one of these delicious recipes while still keeping your body in ketosis and forcing it to burn fat as fuel.</div>
                <div className='py-1'>It's very simple to implement these recipes into your meal plan...</div>
                <div className='py-1'>All you need to do is check the amount of calories in 1 serving and swap it for a meal in your custom meal plan with the same or similar amount of calories.</div>
                <div className='py-1'>For instance if you wanted to eat 4 chocolate fudge keto cookies which contain 132 calories per cookie then thats a total of 528 calories.</div>
                <div className='py-1'>Now simply find a meal in your plan with a similar calorific value to replace it with.</div>
                <div className='py-1'>This means you will stay in ketosis, continue to lose weight and satisfy your cravings all in one go :)</div>
              </div>
            </div>
          </div>
        </div>
        {ebooks.map((ebook, index) =>
          <div className='col-md-6 py-3 d-flex align-items-stretch' key={index}>
            <div className='row bg-white'>
              <div className='col-md-4 py-3'>
                <a href={baseURL + ebook.book} download target='_blink' rel='noreferrer'>
                  <img alt='SETIMAGE' src={baseURL + ebook.image} className='img-fluid' />
                </a>
              </div>
              <div className='col-md-8'>
                <div className='d-flex flex-column justify-content-between h-100'>
                  <div>
                    <div className='h5 text-black font-weight-bold pt-3 pb-1'>{ebook.name}</div>
                    <div className='py-1' style={{ WebkitUserModify: 'read-write-plaintext-only' }}>{ebook.description}</div>
                  </div>
                  <div className='py-4'>
                    <a href={baseURL + ebook.book} download target='_blink' rel='noreferrer' className='btn btn-lg btn-info rounded-0'>ACCESS NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='col-12 pt-4'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-lg-6 py-2'>
              Copyright 2019 Custom Keto Diet. All rights reserved.
            </div>
            <div className='col-lg-6 text-right py-2'>
              <a href='https://www.customketodiet.com/privacy' target='_blink' rel='noreferrer' className='mr-4'>Privacy</a>
              <a href='https://www.customketodiet.com/site/terms' target='_blink' rel='noreferrer' className='mr-4'>Terms & Conditions</a>
              <a href='https://www.customketodiet.com/contact' target='_blink' rel='noreferrer'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  baseURL: state.admin.baseURL,
  ebooks: state.ebook.ebooks
})

export default connect(mapStateToProps, { getEbooks })(ClientEbooks)