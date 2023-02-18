import React from 'react';

type ProductPaginationProps = {
  searchParams: URLSearchParams;
  setSearchParams: any;
};

const ProductPagination = ({
  searchParams,
  setSearchParams,
}: ProductPaginationProps) => {
  const movePage = (pageNum: number) => {
    searchParams.set('offset', String((pageNum - 1) * 5));
    setSearchParams(searchParams);
  };
  return (
    <div>
      <div className="product-footer-button">
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button>
        <button onClick={() => movePage(3)}>3</button>
        <button onClick={() => movePage(4)}>4</button>
      </div>
    </div>
  );
};

export default ProductPagination;
