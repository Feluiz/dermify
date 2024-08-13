import "./CatalogItem.css";
import imgaa from "../../imgs/prods/shminoxidil.png"

const CatalogItem = () => {
  return (
    <div className="wrapper-container">
      <div className="first-container">
        <div className="midbar"></div>
        <p className="product-label">Shampoo de Minoxidil</p>
        <p className="price-tag">
          $<span>220</span>MXN
        </p>
        <div className="product-container">
            <img src={imgaa} className="img-element"/>
        </div>
        <div className="info-button">
          <p className="button-text">Detalles</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;
