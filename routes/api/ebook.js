const express = require('express')
const router = express.Router()
const config = require('config')

// MODEL
const Ebook = require('../../models/Ebook')

// FILE UPLOAD
const fileUpload = require('../../utils/fileUpload')

router.post('/createEbook', fileUpload.fields([{ name: 'image', maxCount: 1 }, { name: 'book', maxCount: 1 }]), async (req, res) => {
  let image = req.files["image"][0].filename
  let book = req.files["book"][0].filename

  let newEbook = new Ebook({
    ...req.body
  })
  newEbook.image = image
  newEbook.book = book

  await newEbook.save()

  res.json({
    success: true
  })
})

router.get('/getEbooks', async (req, res) => {
  const ebooks = await Ebook.find()

  res.json({
    success: true,
    ebooks
  })
})

router.get('/getEbook/:id', async (req, res) => {
  const ebook = await Ebook.findById(req.params.id)

  res.json({
    success: true,
    ebook
  })
})

router.post('/updateEbook/:id', fileUpload.fields([{ name: 'image', maxCount: 1 }, { name: 'book', maxCount: 1 }]), async (req, res) => {
  const ebookID = req.params.id

  let image = req.files["image"] ? req.files["image"][0].filename : undefined
  let book = req.files["book"] ? req.files["book"][0].filename : undefined

  let update = {
    ...req.body
  }

  if (image) update.image = image
  if (book) update.image = book

  await Ebook.findByIdAndUpdate(ebookID, update, { new: true })

  res.json({
    success: true
  })
})

router.delete('/deleteEbook/:id', async (req, res) => {
  const ebookID = req.params.id
  await Ebook.findByIdAndDelete(ebookID)

  res.json({
    success: true
  })
})

module.exports = router