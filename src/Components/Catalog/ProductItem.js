import { prettyDOM } from '@testing-library/react';
import './ProductItem.css';
import { useState } from 'react';

const ProductItem = (data) => {
    const prodInfo = {...data.elementData};

    const action = data.clicky;
    const action2 = data.clicky2;

    return (
        <li 
        className='elementWrap' 
        onClick={() => {
            action(prodInfo);
            action2(true)}}>
            <img className='elementImg' src={prodInfo.target} />
            <p className='elementDesc'>{prodInfo.title}</p>
            <div className='price-container'>
                <p className='price-tag'>{prodInfo.price}</p>
            </div>
        </li>
    );
};

export default ProductItem;