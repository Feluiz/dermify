import React, { useState } from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import { section1, section2, section3, section4, section5, paquetes } from './catalogData';

const Catalog = () => {
    const [menuType, setMenuType] = useState(true);

    const perItem = <>
        <div>
            <h2>Cremas limpiadoras</h2>
            <ProductList props={section1} />
        </div>
        <div>
            <h2>Nutricion e hidratación</h2>
            <ProductList props={section2} />
        </div>
        <div>
            <h2>Jabones naturales</h2>
            <ProductList props={section3} />
        </div>
        <div>
            <h2>Exfoliantes y aclaradores</h2>
            <ProductList props={section4} />
        </div>
        <div>
            <h2>Shampoos naturales</h2>
            <ProductList props={section5} />
        </div>
    </>;

    const perPackage = <div>
        <h2>Por paquetes</h2>
        <ProductList props={paquetes} />
    </div >

    const tabItem = () => {
        setMenuType(true);
    };

    const tabProduct = () => {
        setMenuType(false)
    }


    return (
        <div className='catalogBody'>
            <div className='menu-tabs'>
                <a type='button' onClick={tabItem}>Por producto</a>
                <a type='button' onClick={tabProduct}>Por paquetes</a>
            </div>
            {menuType ? perItem : perPackage}
        </div >
    )

};

export default Catalog;