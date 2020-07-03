export class ProductService {
  async getAllProducts() {
    const res = await fetch('/products/all');
    return res.json();
  }
}