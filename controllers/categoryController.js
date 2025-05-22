const Category = require("../models/Category");

exports.getAll = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.create = async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
};

exports.update = async (req, res) => {
  const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};