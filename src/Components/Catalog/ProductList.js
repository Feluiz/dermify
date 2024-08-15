import './ProductList.css';
import CatalogItem from './CatalogItem';


const ProductList = (data) => {
    const inst = [...data.props];
    const power = data.funct;
    const power2 = data.funct2;
    const backdropAct = data.setBackdrop


    return (inst.map(product =>
        <CatalogItem
            elementData={product}
            key={product.key}
            clicky={power}
            clicky2={power2}
            section={data.section}
            setBackdrop={backdropAct} />
    ))
};

export default ProductList;