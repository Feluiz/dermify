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
                    <ProductList props={section1} />
                </div>
                <div>
                    <ProductList props={section2} />
                </div>
                <div>
                    <ProductList props={section3} />
                </div>
                <div>
                    <ProductList props={section4} />
                </div>
                <div>
                    <ProductList props={section5} />
                </div>
            </>}
        </div>
    )

};

export default Catalog;