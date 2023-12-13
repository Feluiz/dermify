import { useState } from 'react';
import './ContactBtn.css';
import contactImg from '../../imgs/icons/wsp-icon.png';
import ContactCard from './ContactCard/ContactCard';

const ContactBtn = () => {
    const [ socialMenu, setSocialMenu] = useState(false);
    const contactMenu = () => {
        setSocialMenu((prev) => (!prev));
    };

    return (
        <div className='contact-button' onClick={contactMenu}>
            <img src={contactImg} className='contact-btn-img' alt='contact image' />
            {/* <p className='contact-btn-title'>Contáctanos</p> */}
            {socialMenu ? <ContactCard /> : null}
        </div>
    )
};

export default ContactBtn;