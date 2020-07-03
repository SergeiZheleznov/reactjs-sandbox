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
import {
  ProductService,
  ShoppingCartService
} from "../../Services";

import socketIOClient from "socket.io-client";


export const App = () => {
  const productService = new ProductService();
  const shoppingCartService = new ShoppingCartService();

  const [products, setProducts] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [shoppingCart, setShoppingCart] = useState({items: []});

  const fetchProducts = async () => {
    try {
      const products = await productService.getAllProducts();
      setProducts(products);
      setActiveProduct(products[0]);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchProducts().then();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const socket = socketIOClient('/');
    socket.on("ProductsInCart", data => {
      setShoppingCart(JSON.parse(data));
    });
    // eslint-disable-next-line
  }, []);


  window.addEventListener("resize", ()=>{
    const shouldCollapse = document.documentElement.clientWidth < 700;
    if (shouldCollapse && !collapsed) {
      setCollapsed(true);
    } else if (!shouldCollapse && collapsed) {
      setCollapsed(false);
    }
  });

  if (products.length < 1 || !activeProduct){
    return (<div>...Loading</div>);
  }

  const addToCartHandler = async (event) => {
    event.preventDefault();
    const el = event.currentTarget;
    const productId = el.dataset.product;
    if (productId) {
      const productToAdd = products.find(p => p.id.toString() === productId);
      await shoppingCartService.addItem(productToAdd);
    }
  }

  const onCartButtonClickHandler = async (event) => {
    event.preventDefault();
    const response = await shoppingCartService.removeAllItems();
    if (response) {
      const cart = {...shoppingCart};
      cart.items = [];
      setShoppingCart(cart);
    }
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
