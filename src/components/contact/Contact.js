import React from 'react'
import styles from './Styles.module.scss';
import Pdf from '../../assets/documents/Rodrigo_Ramirez_Resume_2021.pdf';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>CONTACT ME</h1>
            <div className={styles.buttonContainer}>
                <div className={styles.contactButton}>
                    <a className={styles.contactLink} href="https://github.com/8rb" target="_blank" rel="noopener noreferrer">github_profile</a>
                </div>
                <div className={styles.contactButton}>
                    <a className={styles.contactLink} href={Pdf} target ="_blank" rel="noopener noreferrer">download_cv</a>
                </div>
                <div className={styles.contactButton}>
                    <a className={styles.contactLink} href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank" rel="noopener noreferrer">linked_in_profile</a>
                </div>
                <div className={styles.contactButton}>
                    <p className={styles.temp}>rodrigo8rb@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;