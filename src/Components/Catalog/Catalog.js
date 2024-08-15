import React, { useState } from "react";
import "./Catalog.css";
import ProductList from "./ProductList";
import Modal from "../Modal/Modal";
import {
  section1,
  section2,
  section3,
  section4,
  section5,
  paquetes,
} from "./catalogData";

const Catalog = (setBackdrop) => {
  const [menuType, setMenuType] = useState(true);
  const [item, setItem] = useState("");
  const [open, setOpen] = useState(false);

  const perItem = (
    <nav className="catalog-list">
      <div className="item-container">
        <h2 className="section-title">Cremas limpiadoras</h2>
        <ul className="section-body">
          <ProductList
            props={section1}
            funct={setItem}
            funct2={setOpen}
            section={"Cremas limpiadoras"}
            setBackdrop={setBackdrop}
          />
        </ul>
      </div>
      <div className="item-container">
        <h2 className="section-title">Nutricion e hidratación</h2>
        <ul className="section-body">
          <ProductList
            props={section2}
            funct={setItem}
            funct2={setOpen}
            section={"Nutricion e hidratación"}
            setBackdrop={setBackdrop}
          />
        </ul>
      </div>
      <div className="item-container">
        <h2 className="section-title">Jabones naturales</h2>
        <ul className="section-body">
          <ProductList
            props={section3}
            funct={setItem}
            funct2={setOpen}
            section={"Jabones naturales"}
            setBackdrop={setBackdrop}
          />
        </ul>
      </div>
      <div>
        <h2 className="section-title">Auxiliares</h2>
        <ul className="section-body">
          <ProductList
            props={section4}
            funct={setItem}
            funct2={setOpen}
            section={"Auxiliares"}
            setBackdrop={setBackdrop}
          />
        </ul>
      </div>
      <div>
        <h2 className="section-title">Shampoos naturales</h2>
        <ul className="section-body">
          <ProductList
            props={section5}
            funct={setItem}
            funct2={setOpen}
            section={"Shampoos"}
            setBackdrop={setBackdrop}
          />
        </ul>
      </div>
    </nav>
  );

  const perPackage = (
    <div className="catalog-list">
      <h2 className="section-title">Por paquetes</h2>
      <ul className="section-body">
        <ProductList
          props={paquetes}
          funct={setItem}
          funct2={setOpen}
          setBackdrop={setBackdrop}
        />
      </ul>
    </div>
  );

  const tabItem = () => {
    setMenuType((prev) => !prev);
  };

  return (
    <div className="catalog-body">
      {/* <div className='menu-tabs'>
                <a className={
                    menuType ? 'active' : 'inactive'}
                    onClick={!menuType ? tabItem : null}
                >Por producto</a>
                <a className={
                    !menuType ? 'active' : 'inactive'}
                    onClick={menuType ? tabItem : null}
                >Por paquetes</a>
                { }
            </div> */}
      {perItem}
      {open ? (
        <Modal props={item} trigger2={setOpen} setBackdrop={setBackdrop} />
      ) : null}
    </div>
  );
};

export default Catalog;
