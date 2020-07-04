import Logger from "js-logger";
const LOG_SOURCE = 'ShoppingCartService';

export class ShoppingCartService {

  async removeAllItems(){
    Logger.info(`${LOG_SOURCE}: removeAllItems`);
    try {
      await fetch('/cart/clear');
    } catch (e) {
      Logger.error(`${LOG_SOURCE}`, e);
    }
  }

  async addItem(product){
    Logger.info(`${LOG_SOURCE}: removeAllItems`);
    try {
      await fetch(`/cart/add/${product.id}`);
      return product;
    } catch (e) {
      Logger.error(`${LOG_SOURCE}`, e);
    }
    return false;
  }
}
