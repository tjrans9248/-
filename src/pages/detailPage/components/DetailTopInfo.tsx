import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/counterSlice';
import { RootState } from '../../store/store';
import '../DetailPrdInfo.scss';

interface DetailTopInfoType {
  name: string;
  price: number;
  stock: number;
  category_name: string;
  image_url: string;
}

function DetailTopInfo({
  name,
  price,
  stock,
  category_name,
  image_url,
}: DetailTopInfoType) {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    Number: any
  ): void => {
    dispatch(increment(Number(e.target.valueAsNumber)));
  };

  const calculatePrice = count * price;

  return (
    <>
      <div className="detail-prd-img">
        <span>{/* <img src={image_url[0]} alt="" /> */}</span>
      </div>
      <div className="detail-prd-info">
        <div className="thumb">
          <span>{/* <img src={image_url[1]} alt="" /> */}</span>
        </div>
        <div className="detail-prd-names">
          <h2 className="prd-tit-name">{name}</h2>
          <p className="prd-cat-name">{category_name}</p>
        </div>
        <div className="prd-price-box">
          <strong className="price"> ￦ {price}</strong>
          <div className="quantity-box">
            <button
              type="button"
              className="minus"
              onClick={() => dispatch(decrement())}
            >
              <img src="../images/detail/minus_ico.png" alt="-" />
            </button>
            <input
              type="text"
              value={count}
              // onChange={handleChange}
              className="quantity-num"
            />
            <button
              type="button"
              className="plus"
              onClick={() => dispatch(increment())}
            >
              <img src="../images/detail/plus_ico.png" alt="+" />
            </button>
          </div>
        </div>
        <div className="total-price">
          <span className="total-title">총 합계 금액</span>
          <p>￦ {calculatePrice}</p>
        </div>
        <div className="prd-button-box">
          <Link to="/like" className="lick-btn">
            <img src="../images/detail/heart.png" alt="찜 목록" />
          </Link>
          <Link to="/cart" className="basket-btn">
            장바구니
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetailTopInfo;
