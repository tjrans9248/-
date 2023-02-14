import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductList.scss';

const ProductList = ({ product }) => {
  const { id, stock, name, thumbnail_image_url, price, category_name } =
    product;

  // if (Object.keys(product).length === 0) return <>Loading...</>;

  return (
    <div
      className={`product-product-inner-box ${
        stock === '0' ? 'product-sold-out' : ''
      }`}
    >
      <Link key={id} to={`/detail/${id}`} className="product-link">
        <div className="thumb">
          <img
            className="product-product-image"
            src={thumbnail_image_url}
            alt="상품이미지"
          />
        </div>
        <div className="product-product-info">
          <p className="bold">{name}</p>
          <p>{category_name}</p>
          <p>₩ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductList;
