import React, { useState } from 'react';
import 'normalize.css';
import './Styles/main.scss';
import styles from './App.module.scss';
import {
  Header,
  HeroAccordion,
  HeroTabs
} from './Components';

function App() {

  const initialProducts = [
    {
      id: 1,
      title: 'Product 1',
      relatedResources: [
        {
          url: "/",
          title: "Related resource 1-1",
          img: '/sample.jpg',
        }
      ]
    },
    {
      id: 2,
      title: 'Product 2',
      relatedResources: [
        {
          url: "/",
          title: "Related resource 2-1",
          img: '/sample.jpg',
        },
        {
          url: "/",
          title: "Related resource 2-2",
          img: '/sample.jpg',
        }
      ]
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [collapsed, setCollapsed] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);

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

export default App;
