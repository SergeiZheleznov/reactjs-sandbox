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

      const preloadedImages = [];
      products.forEach(p => {
        const imageToPreload = new Image();
        imageToPreload.src = p.hero;
        preloadedImages.push(imageToPreload);
      });

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
    if (document.documentElement.clientWidth < 600) {
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
    alert('added');

    const cart = {...shoppingCart};
    cart.items.push();
    setShoppingCart(cart);
  }

  return (
    <div className={styles.App}>
      <Header>
        <Logo />
        <CartButton shoppingCart={shoppingCart} onClick={()=>{ alert('open cart'); }} />
      </Header>
      { collapsed ?
        <HeroAccordion
          activeProduct={activeProduct}
          products={products}
          setActiveProduct={setActiveProduct}
          addToCartHandler={()=>{alert('addToCartHandler')}}
        /> :
        <HeroTabs
          activeProduct={activeProduct}
          products={products}
          setActiveProduct={setActiveProduct}
          addToCartHandler={()=>{alert('addToCartHandler')}}
        />
      }
    </div>
  );
}
