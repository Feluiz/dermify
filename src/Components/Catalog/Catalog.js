import { useState } from 'react';
import './Catalog.css';
import ProductList from './ProductList';
import { section1, section2, section3, section4, section5 } from './catalogData';

const Catalog = () => {
    const { menuType, setMenuType } = useState(false);

    const changeTab = () => {
        setMenuType(true);
    };

    return (
        <div className='catalogBody'>
            <div className='menu-tabs'>
                <a onClick={changeTab}>Por producto</a>
                <a>Por paquetes</a>
            </div>
            {<>
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
            </>}
        </div>
    )

};

export default Catalog;