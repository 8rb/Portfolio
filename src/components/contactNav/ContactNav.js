import React from 'react';
import Pdf from '../../assets/documents/Rodrigo_Ramirez_Resume_2021.pdf';
import {Spring} from 'react-spring/renderprops';
import './Styles.scss';

const ContactNav = () => {
    const [resume, setResume] = React.useState(false);
    const [github, setGithub] = React.useState(false);
    const [linkedin, setLinkedin] = React.useState(false);
    const [email, setEmail] = React.useState(false);

    const toggleResume = () => {
        setResume(!resume);
    }
    const toggleGithub = () => {
        setGithub(!github);
    }
    const toggleLinkedin = () => {
        setLinkedin(!linkedin);
    }
    const toggleEmail = () => {
        setEmail(!email);
    }
    
    return (
        <div className="contact">
            <div className="contactContainer">
                <div className="contactRow">
                    <div className="contactCol iconCol">
                        <Spring
                            from={{opacity: 0 }}
                            to={{opacity: 1 }}
                            config={{delay: 500, duration: 500}}
                            >
                            { props => (
                            <a className="contactLink" style={props} onMouseEnter={toggleResume} onMouseLeave={toggleResume} href={Pdf} target ="_blank" rel="noopener noreferrer">
                                <i className="homeIcon fas fa-file-pdf fa-2x"></i>
                            </a>
                            )}
                        </Spring>
                    </div>
                    <div className="contactCol iconCol">
                        <Spring
                            from={{opacity: 0 }}
                            to={{opacity: 1 }}
                            config={{delay: 700, duration: 500}}
                            >
                            { props => (
                            <a className="contactLink" style={props} onMouseEnter={toggleGithub} onMouseLeave={toggleGithub} href="https://github.com/8rb" target="_blank" rel="noopener noreferrer">
                                <i className="homeIcon fab fa-github fa-2x"></i>
                            </a>
                            )}
                        </Spring>
                    </div>
                    <div className="contactCol iconCol">
                        <Spring
                            from={{opacity: 0 }}
                            to={{opacity: 1 }}
                            config={{delay: 900, duration: 500}}
                            >
                            { props => (
                            <a className="contactLink" style={props} onMouseEnter={toggleLinkedin} onMouseLeave={toggleLinkedin} href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank" rel="noopener noreferrer">
                                <i className="homeIcon fab fa-linkedin-in fa-2x"></i>
                            </a>
                            )}
                        </Spring>
                    </div>
                    <div className="contactCol iconCol">
                        <Spring
                            from={{opacity: 0 }}
                            to={{opacity: 1 }}
                            config={{delay: 1100, duration: 500}}
                            >
                            { props => (
                            <a className="contactLink" style={props} onMouseEnter={toggleEmail} onMouseLeave={toggleEmail} href="mailto:rodrigo8rb@hotmail.com">
                                <i className="homeIcon fas fa-envelope fa-2x"></i>
                            </a>
                            )}
                        </Spring>
                    </div>
                </div>
                <div className="contactRow">
                    <div className="contactCol">
                        <Spring
                            from={{opacity: 0 }}
                            to={{opacity: 1 }}
                            config={{delay: 1300, duration: 500}}
                            >
                            { props => (
                            <div className="contactCol" style={props}>
                                { resume && <p className="contactText">Resume</p>}
                                { github && <p className="contactText">GitHub</p>}
                                { linkedin && <p className="contactText">LinkedIn</p>}
                                { email && <p className="contactText">Email Me</p>}
                                { !resume && !github && !linkedin && !email &&
                                    <p className="contactText">{'Contact'}</p>
                                }
                            </div>
                        )}
                        </Spring>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactNav;
