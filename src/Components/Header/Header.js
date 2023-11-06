import { useState } from 'react';
import './Header.css'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';

const Header = () => {
    let mainLogo = require("../../imgs/icons/logo-1.png");

    return (
        <div className='header-card'>
            <img className="main-logo" src={mainLogo} alt="main logo" />
            <DropdownButton id="dropdown-basic-button" title="Contacto">
                <Dropdown.Item href="https://wa.me/9631283614">Comitán</Dropdown.Item>
                <Dropdown.Item href="https://wa.me/9631300595">San Cristóbal</Dropdown.Item>
            </DropdownButton>
        </div>
    )
};

export default Header;