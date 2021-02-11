import React from 'react'
import Contact from '../contact/Contact';
import NavMenu from '../navMenu/NavMenu';
import './Styles.scss';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-row">
                <Contact/>
                <NavMenu/>
            </div>
        </div>
    )
}

export default Footer;
