import './ProductList.css';
import ProductItem from './ProductItem';
import Modal from '../Modal/Modal';

const ProductList = (data) => {
    const inst = [...data.props];
    const openModal = (info) => {
        console.log(info);
    };

    return (
        <>
            <ul className='item-list'>
                <ProductItem elementData={inst} openModal={openModal} />
            </ul>
        </>
    )
};

export default ProductList;