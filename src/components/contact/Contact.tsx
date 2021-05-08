import React from 'react'
import { useSpring, animated } from 'react-spring';
import Button from '../button/Button';
import SocialButton from '../button/Social';
import Pdf from '../../assets/documents/Rodrigo_Ramirez_Resume_2021.pdf';

import styles from './Contact.module.scss';
import '../button/button.scss';

const Contact = () => {

    const [mail] = React.useState('rodrigo8rb@gmail.com');
    const [copied, setCopied] = React.useState(false);

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 500 }
    });

    const copyToClipBoard = () => {
        const elem = document.createElement('textarea');
        elem.value = mail;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
          }, 1500);
    }

    return (
        <animated.div className={styles.contactContainer} style={props}>
            {copied && <div className={styles.copied}>Email Copied to clipboard!</div>}
            <div className={styles.titleContainer}>
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>CONTACT ME</h1>
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <div className={styles.buttonGrid}>
                    <SocialButton type="github" text="GitHub" href="https://github.com/8rb" target="_blank"/>    
                    <Button type="primary" text="Resume CV" href={Pdf} target="_blank"/>
                    <SocialButton type="linkedin" text="LinkedIn" href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank"/>
                    <Button type="secondary" text="Copy Email" onPress={() => {copyToClipBoard(); }}/>
                </div>
            </div>
        </animated.div>
    )
}

export default Contact;