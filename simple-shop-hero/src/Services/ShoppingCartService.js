export class ShoppingCartService {

  _items = [];

  constructor() {
    this._items = [];
  }

  async getItems(){
    return this._items;
  }

  async removeAllItems(){
    this._items = [];
    return true;
  }

  async addItem(product){
    this._items.push(product.id);
  }


}