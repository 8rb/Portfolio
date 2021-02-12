import React from 'react';
import './Styles.scss';
import { NavLink } from 'react-router-dom';
import Toggle from '../toggle/Toggle';

const NavBar = () => {
    return(
        <>
            <div className="toggle">
                <Toggle/>
            </div>
            <div className="navbar-container navBar">
                <div className="navbar-row link-row">
                    <div className="navbar-col">
                        <NavLink exact={true} activeClassName='activeLink' className="navLink" to="/">
                            <p className="navText">Home</p>
                            <hr/>
                        </NavLink>
                    </div>
                    <div className="navbar-col">
                        <NavLink activeClassName='activeLink' className="navLink" to="/projects">
                            <p className="navText">Projects</p>
                            <hr/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;