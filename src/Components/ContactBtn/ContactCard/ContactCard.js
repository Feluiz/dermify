import './ContactCard.css';
import whatsappIcon from '../../../imgs/icons/wsp-icon.png';

const ContactCard = () => {
    return (
        <div className='contact-menu-card'>
            <a href='https://wa.me/529631283614' className='comitan-whatsapp'>
                <p className='social-btn-txt'>Comitán</p>
            </a>
            <a href='https://wa.me/529631300595' className='sancris-whatsapp'>
                <p className='social-btn-txt'>San Cristóbal</p>
            </a>
        </div>
    )
};

export default ContactCard;