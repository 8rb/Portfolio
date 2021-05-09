import React from 'react'
import Particles from 'react-particles-js';
import styles from './Particles.module.scss';

const ParticlesBG = () => {
    return (
        <Particles className={styles.particlesJs}
            params={{
                particles: {
                    number: {
                        value: 300,
                        density: {
                            enable: true,
                            value_area: 1000
                        }
                    },
                    color: {
                        value: '#3ee0c5'
                    },
                    opacity: {
                        value: 0.5,
                        anim: {
                            enable: true
                        }
                    },
                    size: {
                        value: 1.4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed: 1
                    }
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "repulse"
                      },
                      onclick: {
                        enable: false,
                        mode: "bubble"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 100,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 10,
                        size: 40,
                        duration: 2,
                        opacity: 8
                      },
                      repulse: {
                        distance: 80,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 0
                      }
                    }
                },
                retina_detect: true
            }}    
        />
    )
}

export default ParticlesBG;