import './Header.css'

const Header = () => {
    let mainLogo = require("../../imgs/icons/logo-1.png");

    return (
        <div className='header-card'>
            <img className="main-logo" src={mainLogo} alt="main logo" />
        </div>
    )
};

export default Header;