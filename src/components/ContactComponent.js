import React, { Component } from 'react';
import Pdf from '../Documents/Rodrigo Ramirez Resume 2020.pdf';

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
          <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-auto col-sm-auto">
                    <div className="row mt-4">
                        <a onMouseEnter={this.toggleResume} onMouseLeave={this.toggleResume} className="col-3" href={Pdf} target ="_blank" rel="noopener noreferrer">
                            <i className="homeIcon fas fa-file-pdf fa-2x"></i>
                        </a>
                        <a onMouseEnter={this.toggleGithub} onMouseLeave={this.toggleGithub} className="col-3" href="https://github.com/8rb" target="_blank" rel="noopener noreferrer">
                            <i className="homeIcon fab fa-github fa-2x"></i>
                        </a>
                        <a onMouseEnter={this.toggleLinkedIn} onMouseLeave={this.toggleLinkedIn} className="col-3" href="https://www.linkedin.com/in/rodrigo-ramirez8/" target="_blank" rel="noopener noreferrer">
                            <i className="homeIcon fab fa-linkedin-in fa-2x"></i>
                        </a>
                        <a onMouseEnter={this.toggleEmail} onMouseLeave={this.toggleEmail} className="col-3" href="mailto:rodrigo8rb@hotmail.com">
                            <i className="homeIcon fas fa-envelope fa-2x"></i>
                        </a>
                    </div>
                    <div className="row justify-content-center mt-2">
                        { this.state.showResume && 
                            <div className="col-auto">
                                <h4>Resume</h4>
                            </div>
                        }
                        { this.state.showGithub && 
                            <div className="col-auto">
                                <h4>GitHub</h4>
                            </div>
                        }
                        { this.state.showLinkedin && 
                            <div className="col-auto">
                                <h4>LinkedIn</h4>
                            </div>
                        }
                        { this.state.showEmail && 
                            <div className="col-auto">
                                <h4>Email Me</h4>
                            </div>
                        }
                        { !this.state.showResume && !this.state.showGithub && !this.state.showLinkedin && !this.state.showEmail &&
                            <div className="col-auto">
                                <h4>{'Contact'}</h4>
                            </div>
                        }
                    </div>
                </div>
            </div>
            
          </div>
        );
    }
}

export default Contact;
