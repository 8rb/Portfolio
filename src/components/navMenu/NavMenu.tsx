import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.scss';

const NavMenu = () => {
    return (
        <div className={styles.navMenuRow}>
            <div className={styles.navMenuCol}>
                <NavLink exact={true} activeClassName={styles.activeLink} className={styles.navMenuLink} to="/">
                    <i className="fas fa-home"></i>
                    <p className={styles.navMenuText}>Home</p>
                </NavLink>
            </div>
            <div className={styles.navMenuCol}>
                <NavLink activeClassName={styles.activeLink} className={styles.navMenuLink} to="/projects">
                    <i className="fas fa-briefcase"></i>
                    <p className={styles.navMenuText}>Projects</p>
                </NavLink>
            </div>
            <div className={styles.navMenuCol}>
                <NavLink activeClassName={styles.activeLink} className={styles.navMenuLink} to="/about">
                    <i className="fas fa-user"></i>
                    <p className={styles.navMenuText}>About Me</p>
                </NavLink>
            </div>
            <div className={styles.navMenuCol}>
                <NavLink activeClassName={styles.activeLink} className={styles.navMenuLink} to="/contact">
                    <i className="fas fa-envelope"></i>
                    <p className={styles.navMenuText}>Contact</p>
                </NavLink>
            </div>
        </div>
    )
}

export default NavMenu;