const express = require('express')
const router = express.Router()

// MODEL
const Plan = require('../../models/Plan')

router.post('/createPlan', async (req, res) => {
  
  res.json({
    success: true
  })
})

router.get('/getPlans', async (req, res) => {
  const plans = await Plan.find()

  res.json({
    success: true,
    plans,
  })
})

router.get('/getPlan/:id', async (req, res) => {
  const planID = req.params.id
  const plan = await Plan.findById(planID)

  res.json({
    success: true,
    plan
  })
})

router.post('/updatePlan/:id', async (req, res) => {
  
  res.json({
    success: true
  })
})

router.delete('/deletePlan/:id', async (req, res) => {
  const planID = req.params.id
  await Plan.findByIdAndDelete(planID)

  res.json({
    success: true
  })
})

module.exports = router