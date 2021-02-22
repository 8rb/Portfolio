import React from 'react';
import {useSpring, animated} from 'react-spring';
import './Home.scss';

const Home = () => {
    const Nameprops = useSpring({
        opacity: 1, 
        from: {opacity: 0},
        config: {duration: 500}
    })
    return(
        <div className="home">
            <div className="name-row">
                <animated.div className="name-col" style={Nameprops}>
                    <h1 className="name">RODRIGO</h1>
                    <h1 className="name">RAMIREZ</h1>
                </animated.div>
            </div>
            <div className="job-row">
                <div className="job-col">
                    <h1 className="job">Front End Developer</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;