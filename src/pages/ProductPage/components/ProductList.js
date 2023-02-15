import React from 'react';
import ProductItem from './ProductItems';

const ProductList = ({ productLists, productData }) => {
  return (
    <div>
      <div className="detail-product-wrap">
        <div className="detail-product-middle-box">
          {productLists.map((product, all) => {
            return (
              <div className="detail-product-outer-cont" key={all}>
                <ProductItem product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
