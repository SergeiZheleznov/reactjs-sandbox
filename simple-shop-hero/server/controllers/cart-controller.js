const cart = require('./../data/cart.json');

exports.cartAddItem = async (req, res) => {
  const newCart = {...cart};
  const productIdToAdd = req.query.product;
  newCart.items.push(productIdToAdd);
  console.log(newCart);
  return newCart;
}