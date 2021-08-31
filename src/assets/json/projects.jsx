import React from 'react'

export const projects = [
	{
		id: 0,
		title: 'PokeApp',
		generic_name: 'POKEMON APP',
		description: (
			<>
				PokeApp is a <b className='bold'>Pokemon Search Engine</b> and type
				calculator developed in React. It fetches data from an external API
				(PokeAPI) using Axios and filters the most accurate results based on the
				user input.
			</>
		),
		github_link: 'https://github.com/TheRoro/PokeApp',
		deployed_link: 'https://pokeapp.onrender.com/search',
		img: require('../images/PokeApp.webp'),
		tags: ['Search Engine', 'Input Prediction', 'PWA'],
	},
	{
		id: 1,
		title: 'Bodega',
		generic_name: 'ONLINE STORE',
		description: (
			<>
				Bodega is an online <b className='bold'>shopping website</b>, based on
				Peruvian 'Bodegas'. It was developed in Vue, and uses Bootstrap and SCSS
				for the UI elements. This project uses Vuex store to store the{' '}
				<b className='bold'>state of the cart</b> when rendering the component.
			</>
		),
		github_link: 'https://github.com/TheRoro/Bodega',
		deployed_link: 'https://bodega.onrender.com/store',
		img: require('../images/Bodega.webp'),
		tags: ['Vue', 'Vuex', 'Bootstrap'],
	},
	{
		id: 2,
		title: 'UpSpell',
		generic_name: 'SPECIAL CHARACTERS',
		description: (
			<>
				<b className='bold'>UpSpell</b>, is a Special Characters Web Application
				developed in Vue/Nuxt whose main objective is to provide special
				characters for all those who are learning a language or whose keymap
				does not have the character they want to type.
			</>
		),
		github_link: 'https://github.com/TheRoro/UpSpell',
		deployed_link: 'https://upspell.vercel.app/',
		img: require('../images/UpSpell.webp'),
		tags: ['Nuxt', 'Vue', 'TailwindCSS'],
	},
	// {
	// 	id: 4,
	// 	title: 'Algorite',
	// 	description: '',
	// 	github_link: '',
	// 	deployed_link: '',
	// 	img: '',
	// 	img_classname: '',
	// },
	// {
	// 	id: 5,
	// 	title: 'Quizify',
	// 	description: '',
	// 	github_link: '',
	// 	deployed_link: '',
	// 	img: '',
	// 	img_classname: '',
	// },
]

export default projects
