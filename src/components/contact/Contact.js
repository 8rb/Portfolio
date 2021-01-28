import React from 'react';
import Pdf from '../../assets/documents/Rodrigo_Ramirez_Resume_2021.pdf';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Spring} from 'react-spring/renderprops';
import './Styles.scss';

const Contact = () => {
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
        <Row className="justify-content-center align-items-center">
            <Col xs="auto">
                <Row>
                    <Spring
                        from={{opacity: 0 }}
                        to={{opacity: 1 }}
                        config={{delay: 500, duration: 500}}
                        >
                        { props => (
                        <a style={props} onMouseEnter={toggleResume} onMouseLeave={toggleResume} className="col-3" href={Pdf} target ="_blank" rel="noopener noreferrer">
                            <i className="homeIcon fas fa-file-pdf fa-2x"></i>
                        </a>
                        )}
                    </Spring>
                    <Spring
                        from={{opacity: 0 }}
                        to={{opacity: 1 }}
                        config={{delay: 700, duration: 500}}
                        >
                        { props => (
                        <a style={props} onMouseEnter={toggleGithub} onMouseLeave={toggleGithub} className="col-3" href="https://github.com/8rb" target="_blank" rel="noopener noreferrer">
                            <i className="homeIcon fab fa-github fa-2x"></i>
                        </a>
                        )}
                    </Spring>
                    <Spring
                        from={{opacity: 0 }}
                        to={{opacity: 1 }}
                        config={{delay: 900, duration: 500}}
                        >
                        { props => (
                        <a style={props} onMouseEnter={toggleLinkedin} onMouseLeave={toggleLinkedin} className="col-3" href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank" rel="noopener noreferrer">
                            <i className="homeIcon fab fa-linkedin-in fa-2x"></i>
                        </a>
                        )}
                    </Spring>
                    <Spring
                        from={{opacity: 0 }}
                        to={{opacity: 1 }}
                        config={{delay: 1100, duration: 500}}
                        >
                        { props => (
                        <a style={props} onMouseEnter={toggleEmail} onMouseLeave={toggleEmail} className="col-3" href="mailto:rodrigo8rb@hotmail.com">
                            <i className="homeIcon fas fa-envelope fa-2x"></i>
                        </a>
                        )}
                    </Spring>
                </Row>
                <Spring
                    from={{opacity: 0 }}
                    to={{opacity: 1 }}
                    config={{delay: 1300, duration: 500}}
                    >
                    { props => (
                    <Row style={props} className="justify-content-center">
                        { resume && 
                            <Col xs="auto">
                                <p className="contact-text">Resume</p>
                            </Col>
                        }
                        { github && 
                            <Col xs="auto">
                                <p className="contact-text">GitHub</p>
                            </Col>
                        }
                        { linkedin && 
                            <Col xs="auto">
                                <p className="contact-text">LinkedIn</p>
                            </Col>
                        }
                        { email && 
                            <Col xs="auto">
                                <p className="contact-text">Email Me</p>
                            </Col>
                        }
                        { !resume && !github && !linkedin && !email &&
                            <Col xs="auto">
                                <p className="contact-text">{'Contact'}</p>
                            </Col>
                        }
                    </Row>
                )}
                </Spring>
            </Col>
        </Row>
    );
}

export default Contact;
