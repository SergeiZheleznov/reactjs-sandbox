export class ShoppingCartService {

  async removeAllItems(){
    await fetch('/cart/clear');
  }

  async addItem(product){
    await fetch(`/cart/add/${product.id}`);

    return product;
  }
}
