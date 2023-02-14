import React from 'react';

const TAB_LIST = ['all', '초콜릿', '캔디', '쿠키', '젤리', '케이크'];

const ProductMenuTab = ({ setCurrTab, currTab }) => {
  return (
    <div>
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
    </div>
  );
};

export default ProductMenuTab;
