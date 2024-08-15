import "./CatalogItem.css";

const CatalogItem = (data) => {
  let menuType = 'img-element';
  const prodInfo = { ...data.elementData };

  switch (data.section) {
    case 'Cremas limpiadoras':
      menuType = 'img-element-cremas';
      break;
    case 'Nutricion e hidratación':
      menuType = 'img-element-nutricion';
      break;
    case 'Jabones naturales':
      menuType = 'img-element-jabon';
      break;
    case 'Auxiliares':
      menuType = 'img-element-aux';
      break;
    case 'Shampoos':
      menuType = 'img-element-shampoo';
      break;
  }

  const action = data.clicky;
  const action2 = data.clicky2;

  return (
    <li className="wrapper-container">
      <div className="first-container">
        <div className="midbar"></div>
        <p className="product-label">{prodInfo.title}</p>
        <p className="price-tag">
          $<span>{prodInfo.price}</span>MXN
        </p>
        <div className="img-square-container">
          <div className="product-container"></div>
          <img src={prodInfo.target} className={menuType} />
        </div>
        <button
          className="info-button"
          onClick={() => {
            action(prodInfo);
            action2(true);
            data.setBackdrop.setBackdrop(true)
          }}
        >
          <p className="button-text">Detalles</p>
        </button>
      </div>
    </li>
  );
};

export default CatalogItem;
