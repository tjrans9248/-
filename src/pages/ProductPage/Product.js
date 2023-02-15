import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductData } from '../store/sortSlice';
import ProductSort from './components/ProductSort';
import ProductPagination from './components/ProductPagination';
import ProductMenuTab from './components/ProductMenuTab';
import ProductHead from './components/ProductHead';
import ProductList from './components/ProductItems';
import './Product.scss';

function Product() {
  const [currTab, setCurrTab] = useState('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const productData = useSelector(state => state.productData.value);
  const dispatch = useDispatch();

  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  // const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
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
      .then(result => dispatch(getProductData(result)));
  }, [currTab, offset, limit]);

  return (
    <section className="product">
      <ProductHead />
      <ProductMenuTab setCurrTab={setCurrTab} currTab={currTab} />
      {/* <ProductSort /> */}

      <div className="detail-product-wrap">
        <div className="detail-product-middle-box">
          {productData.map(product => {
            return (
              <div className="detail-product-outer-cont" key={product.id}>
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
