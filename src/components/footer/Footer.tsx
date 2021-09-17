import React from 'react'
import NavMenu from '../navMenu/NavMenu'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<NavMenu />
		</div>
	)
}

export default Footer
