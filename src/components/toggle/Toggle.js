import React from 'react';
import './Styles.scss';
class ComponentWrapper extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOn: null
		};
		let MY_SALVATION = document.getElementById('darkHtml').getAttribute('data-theme');
		if(MY_SALVATION === "") {
			this.state = {
				isOn: false
			};
		}
		if(MY_SALVATION === "dark") {
			this.state = {
				isOn: true
			};
		}
	}
	
	handleToggle(e) {
		let MY_SALVATION = document.getElementById('darkHtml').getAttribute('data-theme');
		if(MY_SALVATION === "") {
			this.setState({isOn: true});
			document.getElementById('darkHtml').setAttribute('data-theme', 'dark');
		}
		if(MY_SALVATION === "dark") {
			this.setState({isOn: false});
			document.getElementById('darkHtml').setAttribute('data-theme', '');
		}
		this.setState({isOn: !this.state.isOn});
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
	return (
		<div className={classNames} onClick={props.handleToggle}>
			<ToggleButton 
				isOn={props.isOn}	
			/>
		</div>
	);
}

const ToggleButton = function(props) {
		let classNames = ["", (props.isOn) ? "toggle-button-on toggle-button_position-right" : "toggle-button toggle-button_position-left"].join(" ");
		return (<div className={classNames}></div>);
};

export default ComponentWrapper;