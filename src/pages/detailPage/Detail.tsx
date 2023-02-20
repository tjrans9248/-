import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailTab from './components/DetailTab';
import DetailTopInfo from './components/DetailTopInfo';
import './Detail.scss';

interface ProductData {
  price: number;
  stock: number;
  category_name: string;
  product_name: string;
  image_url: string;
}
function Detail() {
  const params = useParams();
  const userId = params.id;
  const [productData, setProductData] = useState<ProductData[]>([]);
  // useEffect(() => {
  //   // fetch(`http://192.168.87.223:3001/products/showproduct/${userId}`, {
  //     fetch('/data/all.json',{)
  //     method: 'GET',
  //     headers: {
  //       authorization:
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
  //     },
  //   });
  //     .then(res => res.json())
  //     .then(data => {
  //       setProductData(data.message);
  //     });
  // }, [userId]);

  useEffect(() => {
    fetch('/data/all.json', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJpYXQiOjE2NjQwMDk3ODR9.nvQGE9HLe8n-JCgqqRk3O-2dGEujzQhWIgm0WyCKN60',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data);
      });
  }, [userId]);

  if (Object.keys(productData).length === 0) return <>loading...</>;

  return (
    <div className="detail-content">
      <div className="detail-wrap">
        <DetailTopInfo
          name={productData[0].product_name}
          price={productData[0].price}
          stock={productData[0].stock}
          category_name={productData[0].category_name}
          image_url={productData[0].image_url}
        />
      </div>
      <div className="prd-detail">
        <DetailTab />
      </div>
    </div>
  );
}

export default Detail;
