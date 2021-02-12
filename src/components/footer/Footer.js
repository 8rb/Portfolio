import React from 'react'
import ContactNav from '../contactNav/ContactNav';
import NavMenu from '../navMenu/NavMenu';
import './Styles.scss';
const Footer = () => {
    return (
        <div className="footer-container">
                <ContactNav/>
                <NavMenu/>
        </div>
    )
}

export default Footer;
