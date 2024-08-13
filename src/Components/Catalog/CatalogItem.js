import { useState } from "react";
import "./CatalogItem.css";

const CatalogItem = (data) => {
    let menuType = 'img-element';
  const prodInfo = { ...data.elementData };

  switch (data.section) {
    case 'cremas':
        menuType = 'img-element-cremas';
        break;
    case 'nutricion':
        menuType = 'img-element-nutricion';
        break;
  }

  const action = data.clicky;
  const action2 = data.clicky2;

  return (
    <div className="wrapper-container">
      <div className="first-container">
        <div className="midbar"></div>
        <p className="product-label">{prodInfo.title}</p>
        <p className="price-tag">
          $<span>{prodInfo.price}</span>MXN
        </p>
        <div className="product-container">
          <img src={prodInfo.target} className={menuType} />
        </div>
        <button
          className="info-button"
          onClick={() => {
            action(prodInfo);
            action2(true);
          }}
        >
          <p className="button-text">Detalles</p>
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
