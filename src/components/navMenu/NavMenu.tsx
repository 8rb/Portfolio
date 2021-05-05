import React from 'react'
import { NavLink } from 'react-router-dom';
import './Styles.scss';

const NavMenu = () => {
    return (
        <div className="navMenuRow navMenu">
            <div className="navMenuCol">
                <NavLink exact={true} activeClassName='activeLink' className="navMenuLink" to="/">
                    <i className="fas fa-home"></i>
                    <p className="navMenuText">Home</p>
                </NavLink>
            </div>
            <div className="navMenuCol">
                <NavLink activeClassName='activeLink' className="navMenuLink" to="/projects">
                    <i className="fas fa-briefcase"></i>
                    <p className="navMenuText">Projects</p>
                </NavLink>
            </div>
            <div className="navMenuCol">
                <NavLink activeClassName='activeLink' className="navMenuLink" to="/about">
                    <i className="fas fa-user"></i>
                    <p className="navMenuText">About Me</p>
                </NavLink>
            </div>
            <div className="navMenuCol">
                <NavLink activeClassName='activeLink' className="navMenuLink" to="/contact">
                    <i className="fas fa-envelope"></i>
                    <p className="navMenuText">Contact</p>
                </NavLink>
            </div>
        </div>
    )
}

export default NavMenu;