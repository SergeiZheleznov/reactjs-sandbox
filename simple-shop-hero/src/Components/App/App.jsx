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
import {detectResourceListOverflow, debounce} from "../../utils";
import Logger from "js-logger";
const LOG_SOURCE = 'App.jsx';
Logger.useDefaults();

export const App = () => {
  const productService = new ProductService();
  const shoppingCartService = new ShoppingCartService();

  const [products, setProducts] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [shoppingCart, setShoppingCart] = useState({items: []});

  const fetchProducts = async () => {
    try {
      Logger.info(`${LOG_SOURCE}: fetchProducts`);
      const products = await productService.getAllProducts();
      setProducts(products);
      setActiveProduct(products[0]);
    } catch (e) {
      Logger.error(LOG_SOURCE, e);
    }
  }

  const defineHeroActiveComponent = () => {
    const shouldCollapse = document.documentElement.clientWidth < 1024;
    if (shouldCollapse && !collapsed) {
      Logger.info(`${LOG_SOURCE}: Accordion view activated`);
      setCollapsed(true);
    } else if (!shouldCollapse && collapsed) {
      Logger.info(`${LOG_SOURCE}: Tab view activated`);
      setCollapsed(false);
    }
  }

  useEffect(() => {
    Logger.info(`${LOG_SOURCE}: component did mount`);
    fetchProducts().then();
    defineHeroActiveComponent();

    const socket = socketIOClient('/');
    socket.on('ProductsInCart', data => {
      setShoppingCart(JSON.parse(data));
    });
    // eslint-disable-next-line
  }, []);

  const onWindowResize = debounce(function() {
    defineHeroActiveComponent();
    detectResourceListOverflow()
  }, 250);

  window.addEventListener('resize', onWindowResize);

  if (products.length < 1 || !activeProduct){
    return (<div>...Loading</div>);
  }

  const addToCartHandler = async (event) => {
    event.preventDefault();
    const el = event.currentTarget;
    const productId = el.dataset.product;
    if (productId) {
      const productToAdd = products.find(p => p.id.toString() === productId);
      const addedProduct = await shoppingCartService.addItem(productToAdd);
      Logger.info(`${LOG_SOURCE}: product was added to the basket`, addedProduct);
    }
  }

  const onCartButtonClickHandler = async (event) => {
    event.preventDefault();
    await shoppingCartService.removeAllItems();
    Logger.info(`${LOG_SOURCE}: shopping cart was emptied`);
  }

  return (
    <div className={styles.App}>
      <Header>
        <Logo title="Shop Hero Section" />
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
