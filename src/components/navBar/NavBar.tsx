import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <>
            <div className="navbar-container navBar">
                <div className="navbar-row link-row">
                    <div className="navbar-col">
                        <NavLink exact={true} activeClassName='navBarActiveLink' className="navLink" to="/">
                            <p className="navText">HOME</p>
                            <hr/>
                        </NavLink>
                    </div>
                    <div className="navbar-col">
                        <NavLink activeClassName='navBarActiveLink' className="navLink" to="/projects">
                            <p className="navText">PROJECTS</p>
                            <hr/>
                        </NavLink>
                    </div>
                    <div className="navbar-col">
                        <NavLink activeClassName='navBarActiveLink' className="navLink" to="/contact">
                            <p className="navText">CONTACT</p>
                            <hr/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;