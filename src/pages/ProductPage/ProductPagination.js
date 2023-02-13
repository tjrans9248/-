import React, { useParams } from 'react';

const ProductPagination = () => {
  const params = useParams();
  const movePage = pageNum => {
    searchParams.set('offset', (pageNum - 1) * 5);
    setSearchParams(searchParams);
  };
  return;
  <div>
    <div className="product-footer-button">
      <button onClick={() => movePage(1)}>1</button>
      <button onClick={() => movePage(2)}>2</button>
      <button onClick={() => movePage(3)}>3</button>
      <button onClick={() => movePage(4)}>4</button>
    </div>
  </div>;
};

export default ProductPagination;
