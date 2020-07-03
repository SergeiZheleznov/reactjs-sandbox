export class ShoppingCartService {

  _items = [];

  constructor() {
    this._items = [];
  }

  async getItems(){
    return [1,2,3,4];
  }

  async addItem(product){
    this._items.push(product.id);
  }


}