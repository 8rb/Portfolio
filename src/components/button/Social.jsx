import React from 'react'
import { AwesomeButtonSocial } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import './button.scss'

const SocialButton = ({
	type,
	text,
	href = '',
	target = '',
	onPress = () => {},
}) => {
	return (
		<>
			<AwesomeButtonSocial
				type={type}
				href={href}
				target={target}
				noopener
				noreferrer
				onPress={onPress}
			>
				{text}
			</AwesomeButtonSocial>
		</>
	)
}

export default SocialButton
