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
                            <p className="navText">Home</p>
                            <hr/>
                        </NavLink>
                    </div>
                    <div className="navbar-col">
                        <NavLink activeClassName='navBarActiveLink' className="navLink" to="/projects">
                            <p className="navText">Projects</p>
                            <hr/>
                        </NavLink>
                    </div>
                    <div className="navbar-col">
                        <NavLink activeClassName='navBarActiveLink' className="navLink" to="/contact">
                            <p className="navText">Contact</p>
                            <hr/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;