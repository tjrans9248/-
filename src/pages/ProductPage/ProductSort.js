import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showProductList } from '../store/slice';
import Dropdown from './ProductDropdown';

const ProductSort = () => {
  const dispatch = useDispatch();
  const productLists = useSelector(state => state.productList.value);
  const [dropdownMenu, setDropDownMenu] = useState(false);

  //productList, setProductList 리덕스
  const productSortAsc = event => {
    const priceSorting = [...productLists];
    const priceCompare = key => (a, b) => {
      return a[key] - b[key];
    };
    priceSorting.sort(priceCompare('price'));
    dispatch(showProductList(priceSorting));
  };

  const productSortDesc = event => {
    const priceSorting = [...productLists];
    const priceCompare = key => (a, b) => {
      return b[key] - a[key];
    };
    priceSorting.sort(priceCompare('price'));
    dispatch(showProductList(priceSorting));
  };

  return (
    <div>
      <div className="product-tog-cont">
        <div className="product-toggle">
          <button
            className="product-btn"
            onClick={() => {
              setDropDownMenu(!dropdownMenu);
            }}
          >
            필터링
          </button>
          <div>
            <Dropdown visibility={dropdownMenu}>
              <ul className="product-dropdown">
                <button
                  className="product-dropdown-btn"
                  onClick={productSortAsc}
                >
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
      </div>
    </div>
  );
};

export default ProductSort;
