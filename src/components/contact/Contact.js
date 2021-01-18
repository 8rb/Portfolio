import React, { Component } from 'react';
import Pdf from '../../documents/Rodrigo_Ramirez_Resume_2021.pdf';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Spring} from 'react-spring/renderprops';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showResume: false,
          showGithub: false,
          showLinkedin: false,
          showEmail: false
        };
        this.toggleResume = this.toggleResume.bind(this);
        this.toggleGithub = this.toggleGithub.bind(this);
        this.toggleLinkedIn = this.toggleLinkedIn.bind(this);
        this.toggleEmail = this.toggleEmail.bind(this);
    }

    toggleResume() {
        this.setState({showResume: !this.state.showResume});
    }
    toggleGithub() {
        this.setState({showGithub: !this.state.showGithub});
    }
    toggleLinkedIn() {
        this.setState({showLinkedin: !this.state.showLinkedin});
    }
    toggleEmail() {
        this.setState({showEmail: !this.state.showEmail});
    }

    
    render() {
        return (
            <Row className="justify-content-center align-items-center mt-4">
                <Col xs="auto">
                    <Row className="mt-2">
                        <Spring
                            from={{opacity: 0 }}
                            to={{opacity: 1 }}
                            config={{delay: 500, duration: 500}}
                            >
                            { props => (
                            <a style={props} onMouseEnter={this.toggleResume} onMouseLeave={this.toggleResume} className="col-3" href={Pdf} target ="_blank" rel="noopener noreferrer">
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
                            <a style={props} onMouseEnter={this.toggleGithub} onMouseLeave={this.toggleGithub} className="col-3" href="https://github.com/8rb" target="_blank" rel="noopener noreferrer">
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
                            <a style={props} onMouseEnter={this.toggleLinkedIn} onMouseLeave={this.toggleLinkedIn} className="col-3" href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank" rel="noopener noreferrer">
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
                            <a style={props} onMouseEnter={this.toggleEmail} onMouseLeave={this.toggleEmail} className="col-3" href="mailto:rodrigo8rb@hotmail.com">
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
                        <Row style={props} className="justify-content-center mt-2">
                            { this.state.showResume && 
                                <Col xs="auto">
                                    <p className="contact-text">Resume</p>
                                </Col>
                            }
                            { this.state.showGithub && 
                                <Col xs="auto">
                                    <p className="contact-text">GitHub</p>
                                </Col>
                            }
                            { this.state.showLinkedin && 
                                <Col xs="auto">
                                    <p className="contact-text">LinkedIn</p>
                                </Col>
                            }
                            { this.state.showEmail && 
                                <Col xs="auto">
                                    <p className="contact-text">Email Me</p>
                                </Col>
                            }
                            { !this.state.showResume && !this.state.showGithub && !this.state.showLinkedin && !this.state.showEmail &&
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
}

export default Contact;
