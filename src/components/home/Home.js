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
            <div className="name-row">
                <animated.div className="name-col" style={props}>
                    <h1 className="name">RODRIGO</h1>
                    <h1 className="name">RAMIREZ</h1>
                </animated.div>
            </div>
            <div className="job-row">
                <animated.div className="job-col" style={props}>
                    <h1 className="job">Front End Developer</h1>
                </animated.div>  
            </div>
        </div>
    );
}

export default Home;