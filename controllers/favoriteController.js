const User = require("../models/User");

exports.toggleFavorite = async (req, res) => {
  const user = await User.findById(req.user.id);
  const productId = req.params.id;
  const index = user.favorites.indexOf(productId);
  if (index > -1) {
    user.favorites.splice(index, 1);
  } else {
    user.favorites.push(productId);
  }
  await user.save();
  res.json(user.favorites);
};

exports.getFavorites = async (req, res) => {
  const user = await User.findById(req.user.id).populate('favorites');
  res.json(user.favorites);
};