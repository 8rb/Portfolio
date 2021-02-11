import React from 'react';
import {useSpring, animated} from 'react-spring';
import './Styles.scss';

const Home = () => {
    const props = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 1500}
    })

    return(
        <div className="home">
            <div className="home-container">
                <div className="home-row">
                    <animated.div style={props}>
                        <h1 className="name">Rodrigo Ramirez</h1>
                    </animated.div>
                </div>
                <div className="home-row">
                    <animated.div style={props}>
                        <h2 className="job">Front-End Developer</h2>
                    </animated.div>
                </div>
            </div>
        </div>
    );
}
export default Home;
