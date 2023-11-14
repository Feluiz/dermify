import './ProductItem.css';

const ProductItem = (data) => {
    const newData = [...data.elementData];
    const modalMethod = data.openModal;

    return (
        newData.map(element =>
            <li
                key={element.key}
                className='elementWrap'
                onClick={() => { modalMethod(element) }}>
                <img className='elementImg' src={element.target} />
                <p className='elementDesc'>{element.title}</p>
                <div className='price-container'>
                    <p className='price-tag'>{element.price}</p>
                </div>
            </li>)
    );
};

export default ProductItem;