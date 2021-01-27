import React, {useEffect} from 'react';
import './Styles.scss';

const Toggle = () => {
	const [isOn, setIsOn] = React.useState(false);

	useEffect(() => {
		let dataColorMode = document.getElementById('theme').getAttribute('data-color-mode');
		if(dataColorMode === "light") {
			setIsOn(false);
		}
		if(dataColorMode === "dark") {
			setIsOn(true);
		}
	}, []);
	
	const handleToggle = (e) => {
		let dataColorMode = document.getElementById('theme').getAttribute('data-color-mode');
		if(dataColorMode === "light") {
			document.getElementById('theme').setAttribute('data-color-mode', 'dark');
		}
		if(dataColorMode === "dark") {
			document.getElementById('theme').setAttribute('data-color-mode', 'light');
		}
		setIsOn(!isOn);
	}
	
	let classNames = ["", (isOn) ? "component-wrapper_is-light" : "component-wrapper_is-dark"].join(" ");
	return (
		<div className={classNames}>
			<Switch isOn={isOn} handleToggle={handleToggle}/>
		</div>	
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