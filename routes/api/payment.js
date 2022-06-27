const express = require('express')
const router = express.Router()
const config = require('config')

// Stripe Info
const secret_key = config.get('stripe.secret_key')
const stripe = require('stripe')(secret_key)

// Model
const User = require('../../models/User')

router.post('/makeDietPayment', async (req, res) => {
  // console.log(req.body)
  const customer = await User.findById(req.body.clientID)

  try {
    // CREATE PAYMENT METHOD WITH CUSTOMER GIVEN INFO
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: req.body.number,
        exp_month: Number(req.body.expMonth),
        exp_year: Number(req.body.expYear),
        cvc: req.body.cvc
      },
    })

    // CREATE STRIPE CUSTOMER WITH CUSTOMER GIVEN INFO
    const stripeCustomer = await stripe.customers.create({
      payment_method: paymentMethod.id,
      name: customer.name,
      email: customer.email,
      invoice_settings: {
        default_payment_method: paymentMethod.id
      }
    })

    // UPDATE CUSTOMER INFO IN MONGO DB
    await User.findByIdAndUpdate(req.body.clientID, {
      stripeCustomerID: stripeCustomer.id,
      customerStatus: 'Pending',
      number: req.body.number,
      expYear: req.body.expYear,
      expMonth: req.body.expMonth,
      cvc: req.body.cvc
    }, {new: true})

    // MEAL PLAN INVOICE CREATE
    await stripe.invoiceItems.create({
      customer: stripeCustomer.id,
      amount: 2995,
      currency: 'usd'
    })

    const invoice = await stripe.invoices.create({
      customer: stripeCustomer.id,
    })

    await stripe.invoices.finalizeInvoice(invoice.id)
  } catch (err) {
    res.json({
      success: false,
      message: err.message
    })
  }

  res.json({
    success: true
  })
})

module.exports = router