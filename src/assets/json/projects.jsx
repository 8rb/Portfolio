import React from 'react';

export const projects = [
    {
        "id": 0,
        "title": "PokeApp",
        "generic_name": "POKEMON APP",
        "description": <>PokeApp is a <b className="bold">Pokemon Search Engine</b> and type calculator developed in React. It fetches data from an external API (PokeAPI) using Axios and filters the most accurate results based on the user input.</>,
        "github_link": "https://github.com/8rb/PokeApp",
        "deployed_link": "https://pokeapp.onrender.com/search",
        "img": require("../images/PokeApp.webp"),
        "tags": [
            "Search Engine", "Input Prediction", "PWA"
        ]
    },
    {
        "id": 1,
        "title": "Bodega",
        "generic_name": "ONLINE STORE",
        "description": <>Bodega is an online <b className="bold">shopping website</b>, based on Peruvian 'Bodegas'. It was developed in Vue, and uses Bootstrap and SCSS for the UI elements. This project uses Vuex store to store the <b className="bold">state of the cart</b> when rendering the component.</>,
        "github_link": "https://github.com/8rb/Bodega",
        "deployed_link": "https://bodega.onrender.com/store",
        "img": require("../images/Bodega.webp"),
        "tags": [
            "Vue", "Vuex","Bootstrap"
        ]
    },
    {
        "id": 2,
        "title": "Interlab",
        "generic_name": "INTERNSHIP FINDER",
        "description": <>Interlab is an <b className="bold">internship applications platform</b>, developed in Angular + TypeScript in the Front-End and Spring in the backend. I was in charge of the Majority of the Front-End programming and the database design. This application accesses the backend using Axios for HTTP requests.</>,
        "github_link": "https://github.com/Juanca0312/interlab",
        "deployed_link": "https://interlab-2fmj.onrender.com",
        "img": require("../images/Interlab.webp"),
        "tags": [
            "Angular", "TypeScript", "CSS"
        ]
    },
        
        // {
        //     "id": 4,
        //     "title": "Algorite",
        //     "description": "",
        //     "github_link": "",
        //     "deployed_link": "",
        //     "img": "",
        //     "img_classname": ""
        // },
        // {
        //     "id": 5,
        //     "title": "Quizify",
        //     "description": "",
        //     "github_link": "",
        //     "deployed_link": "",
        //     "img": "",
        //     "img_classname": ""
        // }
    ]

export default projects;