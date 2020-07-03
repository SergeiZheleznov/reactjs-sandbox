// server/controllers/home-controller.js
// Import json with list of users
const users = require('./../data/products.json')
exports.productsGetAll = async (req, res) => {
  await res.json(users);
}