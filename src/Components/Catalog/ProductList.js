import './ProductList.css';
import ProductItem from './ProductItem';


const ProductList = (data) => {
    const inst = [...data.props];
    const power = data.funct;
    const power2 = data.funct2;

    return (inst.map(product =>
        <ProductItem
            elementData={product}
            key={product.key}
            clicky={power}
            clicky2={power2} />
    ))
};

export default ProductList;