import React from 'react';
import { Link } from 'react-router-dom';
import '../ProductList.scss';

const ProductList = ({ product }) => {
  const { id, stock, name, thumbnail_image_url, price, category_name } =
    product;

  function getParameterForUnsplash({ width, height, quality, format }) {
    return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop}`;
  }

  if (Object.keys(product).length === 0) return <>Loading...</>;

  return (
    <div
      className={`product-product-inner-box ${
        stock === '0' ? 'product-sold-out' : ''
      }`}
    >
      <Link key={id} to={`/detail/${id}`} className="product-link">
        <div className="thumb">
          <img
            src={
              thumbnail_image_url +
              getParameterForUnsplash({
                width: 100,
                height: 100,
                quality: 80,
                format: 'jpg',
              })
            }
            className="product-product-image"
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
