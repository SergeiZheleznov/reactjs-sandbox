import React from 'react';
import {HeroImage} from '../';


export const HeroAccordion = (props) => {

  const {products} = props;

  return(
    <div>
      <div>tab1</div>
      <div>tab2</div>
      {products.map(product => (<HeroImage key={`product_${product.id}`} product={product} />))}
    </div>
  );
}