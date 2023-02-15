import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductData } from '../../store/sortSlice';
import Dropdown from './ProductDropdown';
import styled from 'styled-components';

const ProductSort = () => {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.productData.value);
  const [dropdownMenu, setDropDownMenu] = useState(false);

  //productList, setProductList 리덕스
  const productSortAsc = () => {
    const priceSorting = [...productData];
    priceSorting.sort((a, b) => a.price - b.price);
    dispatch(getProductData(priceSorting));
  };

  const productSortDesc = () => {
    const priceSorting = [...productData];
    const priceCompare = key => (a, b) => {
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('price'));
    dispatch(getProductData(priceSorting));
  };

  return (
    <ProductSortContainer>
      <div>
        <button
          className="product-sort-btn"
          onClick={() => {
            setDropDownMenu(!dropdownMenu);
          }}
        >
          정렬
        </button>
        <div>
          <Dropdown visibility={dropdownMenu}>
            <ul className="product-dropdown">
              <button className="product-dropdown-btn" onClick={productSortAsc}>
                <li>낮은가격순</li>
              </button>

              <button
                className="product-dropdown-btn"
                onClick={productSortDesc}
              >
                <li>높은가격순</li>
              </button>
            </ul>
          </Dropdown>
        </div>
      </div>
    </ProductSortContainer>
  );
};

export default ProductSort;

const ProductSortContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 1500px;

  .product-sort-btn {
    position: absolute;
    bottom: 7px;
    right: 10px;
    z-index: 1;
    width: 200px;
    height: 50px;
    background-color: white;
    border: 1px solid black;
  }
  .product-dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 10px;
    width: 200px;
    height: 100px;
    z-index: 1;
    font-size: 30px;

    .product-dropdown-btn {
      height: 50px;
      border: 1px solid black;
      background-color: white;

      &:hover {
        background-color: rgb(242, 238, 238);
      }
    }
    .product-dropdown-btn li {
      font-size: 17px;
    }
  }
`;
