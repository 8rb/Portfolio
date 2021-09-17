import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Home.module.scss'

const Home = () => {
	const Nameprops = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: { duration: 500 },
	})
	return (
		<div className={styles.home}>
			<div className={styles.nameRow}>
				<animated.div className={styles.nameCol} style={Nameprops}>
					<h1 className={styles.name}>RODRIGO</h1>
					<h1 className={styles.name}>RAMIREZ</h1>
				</animated.div>
			</div>
			<div className={styles.jobRow}>
				<div className={styles.jobCol}>
					<h1 className={styles.job}>FRONT END DEVELOPER</h1>
				</div>
			</div>
		</div>
	)
}

export default Home
