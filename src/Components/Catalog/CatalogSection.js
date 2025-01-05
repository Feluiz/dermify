import './CatalogSection.css';

const CatalogSection = (data) => {
    let menuType = 'img-element';
    const infoData = data.section;
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
          <p className="product-label">{prodInfo.title}</p>
          <div className="midbar"></div>
          <p className="price-tag">
            $<span>{prodInfo.price}</span>MXN
          </p>
          <div className="img-square-container">
            <img src={prodInfo.target} className={menuType} />
          </div>
          <button
            className="info-button"
            onClick={() => {
              action({prodInfo, infoData});
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
  
  export default CatalogSection;