import './ProductList.css';
import ProductItem from './ProductItem';

const ProductList = (data) => {
    const inst = [...data.props];
    return (
        <ul className='item-list'>
            <ProductItem elementData={inst} />
        </ul>
    )
};

export default ProductList;