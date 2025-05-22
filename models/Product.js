const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  likes: { type: Number, default: 0 }
});
module.exports = mongoose.model('Product', productSchema);