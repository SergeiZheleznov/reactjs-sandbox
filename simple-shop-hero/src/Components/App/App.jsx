import React, { useState, useEffect } from 'react';
import 'normalize.css';
import './../../Styles/main.scss';
import styles from './App.module.scss';
import {
  Header,
  HeroAccordion,
  HeroTabs
} from '../';
import {ProductService} from "../../Services";

export const App = () => {

  const productService = new ProductService();

  const [products, setProducts] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const result = await productService.getAllProducts();
      setProducts(result);
      setActiveProduct(result[0]);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchProducts();
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

  return (
    <div className={styles.App}>
      <Header />
      { collapsed ? 
        <HeroAccordion activeProduct={activeProduct} products={products} setActiveProduct={setActiveProduct} /> : 
        <HeroTabs activeProduct={activeProduct} products={products} setActiveProduct={setActiveProduct} />
      }
    </div>
  );
}
