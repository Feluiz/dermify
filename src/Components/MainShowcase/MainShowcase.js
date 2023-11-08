import './MainShowcase.css';

const MainShowcase = () => {
    let imgShowcase1 = require('../../imgs/prods/nunncare.png');
    let imgShowcase2 = require('../../imgs/prods/leche.png') 

    return (
        <div className="main-container">
            <div className='container-box'>
                <h1 className='title'>El poder limpiador de la naturaleza</h1>
            </div>
            <img className='img-showcase1' src={imgShowcase1} />
            <img className='img-showcase2' src={imgShowcase2} />
        </div>
    )
};

export default MainShowcase;