import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './../../Styles/main.scss';
import styles from './App.module.scss';
import {
  CartButton,
  Header,
  HeroAccordion,
  HeroTabs,
  Logo
} from '../';
import {ProductService, ShoppingCartService} from "../../Services";

export const App = () => {
  const productService = new ProductService();
  const shoppingCartService = new ShoppingCartService();

  const [products, setProducts] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [shoppingCart, setShoppingCart] = useState({
    items: []
  });

  const fetchProducts = async () => {
    try {
      const products = await productService.getAllProducts();
      setProducts(products);
      setActiveProduct(products[0]);
    } catch (e) {
      console.error(e)
    }
  }

  const fetchShoppingCart = async () => {
    const productsInCart = await shoppingCartService.getItems();
    const cart = {...shoppingCart};
    cart.items = productsInCart;
    setShoppingCart(cart);
  }

  useEffect(() => {
    fetchProducts().then();
  }, []);

  useEffect(() => {
    fetchShoppingCart().then();
  }, []);

  window.addEventListener("resize", ()=>{
    if (document.documentElement.clientWidth < 700) {
      if (collapsed) {
        return;
      }
      setCollapsed(true);
    } else {
      if (collapsed) {
        return;
      } 
      setCollapsed(false);
    }
  });

  if (products.length < 1 || !activeProduct){
    return (<div>...Loading</div>);
  }

  const addToCartHandler = (event) => {
    event.preventDefault();

    const cart = {...shoppingCart};
    const el = event.currentTarget;
    const productId = el.dataset.product;
    if (productId) {
      const productToAdd = products.find(p => p.id.toString() === productId)
      cart.items.push(productToAdd);
      setShoppingCart(cart);
    }
  }

  const onCartButtonClickHandler = (event) => {
    event.preventDefault();

    (async () => {
      const response = await shoppingCartService.removeAllItems();
      if (response) {
        const cart = {...shoppingCart};
        cart.items = [];
        setShoppingCart(cart);
      }
    })();
  }

  return (
    <div className={styles.App}>
      <Header>
        <Logo />
        <CartButton shoppingCart={shoppingCart} onCartButtonClickHandler={onCartButtonClickHandler} />
      </Header>
      { collapsed ?
        <HeroAccordion
          activeProduct={activeProduct}
          products={products}
          setActiveProduct={setActiveProduct}
          addToCartHandler={addToCartHandler}
        /> :
        <HeroTabs
          activeProduct={activeProduct}
          products={products}
          setActiveProduct={setActiveProduct}
          addToCartHandler={addToCartHandler}
        />
      }
    </div>
  );
}
