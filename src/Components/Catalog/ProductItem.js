import './ProductItem.css';

const ProductItem = (data) => {
    const newData = [...data.elementData]
    console.log(newData)

    return (
        newData.map(element => 
        <li key={element.key} className='elementWrap' onClick={data.openModal(element)}>
            <img className='elementImg' src={element.target} />
            <p className='elementDesc'>{element.title}</p>
            <div className='price-container'>
                <p className='price-tag'>{element.price}</p>
            </div>
        </li>)
    );
};

export default ProductItem;