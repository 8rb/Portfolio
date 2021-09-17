import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './button.scss'

const Button = ({ type, text, href = '', target = '', onPress = () => {} }) => {
	return (
		<>
			<AwesomeButton
				type={type}
				href={href}
				target={target}
				noopener
				noreferrer
				onPress={onPress}
			>
				{text}
			</AwesomeButton>
		</>
	)
}

export default Button
