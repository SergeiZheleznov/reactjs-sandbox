import Logger from "js-logger";
const LOG_SOURCE = 'ProductService';
export class ProductService {
  async getAllProducts() {
    Logger.info(`${LOG_SOURCE}: getAllProducts`);
    try {
      const res = await fetch('/products/all');
      const json = res.json();
      Logger.info(`${LOG_SOURCE}: response received`, json);
      return json;
    } catch (e) {
      Logger.error(`${LOG_SOURCE}`, e);
    }
    return [];
  }
}