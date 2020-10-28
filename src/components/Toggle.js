import React from 'react';

class ComponentWrapper extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOn: null
		};
	}
	
	handleToggle(e) {
		let MY_SALVATION = document.getElementById('darkHtml').getAttribute('data-theme');
		if(MY_SALVATION === "") {
			this.setState({isOn: true});
		}
		if(MY_SALVATION === "dark") {
			this.setState({isOn: false});
		}
		
	}
	
	render() {
		let classNames = ["component-wrapper", (this.state.isOn) ? "component-wrapper_is-light" : "component-wrapper_is-dark"].join(" ");
		return (
			<div className={classNames}>
				<Switch 
					isOn={this.state.isOn}	
					handleToggle={this.handleToggle.bind(this)}
				/>
			</div>		
		);
	}
}

const Switch = function(props) {
	let classNames = ["switch", (props.isOn) ? "switch_is-on" : "switch_is-off"].join(" ");
	let MY_SALVATION = document.getElementById('darkHtml').getAttribute('data-theme');
	if(MY_SALVATION === "") {
		console.log("True, meaning dark mode on");
		//props.isOn = false;
		//this.state.isOn = false;
		document.getElementById('darkHtml').setAttribute('data-theme', 'dark');
	}
	if(MY_SALVATION === "dark") {
		console.log("False, meaning dark mode off");
		//props.isOn = true;
		//this.state.isOn = true;
		document.getElementById('darkHtml').setAttribute('data-theme', '');
	}
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton 
				isOn={props.isOn}	
			/>
		</div>
	);
}

const ToggleButton = function(props) {
		let classNames = ["toggle-button", (props.isOn) ? "toggle-button_position-right" : "toggle-button_position-left"].join(" ");
		return (<div className={classNames}></div>);
};

export default ComponentWrapper;