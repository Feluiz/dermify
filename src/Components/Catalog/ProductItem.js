import './ProductItem.css';
import { section1, section2, section3, section4, section5} from './catalogData';

const ProductItem = (data) => {
    const newData = [...data.elementData]
    return (
        newData.map(element => 
        <li key={element.key} className='elementWrap'>
            <img className='elementImg' src={element.target} />
            <p className='elementDesc'>{element.title}</p>
            <div className='price-container'>
                <p className='price-tag'>{element.price}</p>
            </div>
        </li>)
    );
};

export default ProductItem;