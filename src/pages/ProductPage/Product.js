import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from './ProductList';
import './Product.scss';
import ProductSort from './ProductSort';
import { useDispatch } from 'react-redux';
import ProductPagination from './ProductPagination';

const TAB_LIST = ['all', '초콜릿', '캔디', '쿠키', '젤리', '케이크'];

function Product() {
  const dispatch = useDispatch();
  const [currTab, setCurrTab] = useState('all');
  const [productLists, setProductLists] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  // const limit = 12;
  // const offset = 0;

  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/posts?_start=${0}&_limit=${12}`)
    fetch(`data/${currTab}.json`)
      // fetch(
      //   `http://172.20.10.4:3001/products/?category=${currTab}&offset=${0}&limit=${12}`,
      //   {
      //     headers: {
      //       authorization: accessToken,
      //     },
      //   }
      // )
      .then(response => response.json())
      .then(result => dispatch(setProductLists(result)));
  }, [currTab, offset, limit]);

  return (
    <section className="product">
      <div className="product-pic">
        <img src="/images/cusCakes.jpg" alt="상품" />
        <div className="product-image-letter">
          <h2>HUSH</h2>
          <h3>ENJOY YOUR DESSERT!</h3>
        </div>
      </div>

      <div className="product-menu-tab-wrap">
        <div className="products-tabs-cont">
          <div className="products-tabs">
            <ul className="tabs">
              {TAB_LIST.map(tab => (
                <li
                  key={tab}
                  className={`product-tab-name ${
                    currTab === tab ? 'selected' : ''
                  }`}
                  onClick={() => setCurrTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ProductSort />

      <div className="detail-product-wrap">
        <div className="detail-product-middle-box">
          {productLists.map((product, all) => {
            return (
              <div className="detail-product-outer-cont" key={all}>
                <ProductList product={product} />
              </div>
            );
          })}
        </div>
      </div>
      <ProductPagination
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </section>
  );
}

export default Product;
