import React from 'react';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbarRow}>
                <div className={styles.navbarCol}>
                    <NavLink exact={true} activeClassName={styles.navBarActiveLink} className={styles.navLink} to="/">
                        <p className={styles.navText}>HOME</p>
                        <hr/>
                    </NavLink>
                </div>
                <div className={styles.navbarCol}>
                    <NavLink activeClassName={styles.navBarActiveLink} className={styles.navLink} to="/projects">
                        <p className={styles.navText}>PROJECTS</p>
                        <hr/>
                    </NavLink>
                </div>
                <div className={styles.navbarCol}>
                    <NavLink activeClassName={styles.navBarActiveLink} className={styles.navLink} to="/contact">
                        <p className={styles.navText}>CONTACT</p>
                        <hr/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
export default NavBar;