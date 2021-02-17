import React, {useEffect} from 'react';
import './Styles.scss';
import store from '../../redux/store';

const Toggle = () => {
	const [isOn, setIsOn] = React.useState(true);

	useEffect(() => {
		const theme = store.getState().theme;
		console.log(theme);
		if(theme === "light") {
			setIsOn(false);
			document.getElementById('theme').setAttribute('data-color-mode', 'light');
		}
		if(theme === "dark") {
			setIsOn(true);
			document.getElementById('theme').setAttribute('data-color-mode', 'dark');
		}
	}, []);
	
	const handleToggle = (e) => {
		store.dispatch({ type: 'toggleTheme' });
		const theme = store.getState().theme;
		if(theme === "dark") {
			document.getElementById('theme').setAttribute('data-color-mode', 'dark');
		}
		if(theme === "light") {
			document.getElementById('theme').setAttribute('data-color-mode', 'light');
		}
		setIsOn(!isOn);
	}

	return (
		<Switch isOn={isOn} handleToggle={handleToggle}/>
	);
}

const Switch = (props) => {
	let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton isOn={props.isOn}	/>
		</div>
	);
}

const ToggleButton = (props) => {
	let classNames = [(props.isOn) ? "toggle-button-on toggle-button_position-right" : "toggle-button toggle-button_position-left"];
	return (
	<div className={classNames}></div>
	);
};

export default Toggle;