const users = require('./../data/products.json');
exports.productsGetAll = async (req, res) => {
  await res.json(users);
}