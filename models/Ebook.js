const mongoose = require('mongoose');

const EbookSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String
  },
  book: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model('ebook', EbookSchema);
