import React from 'react';

export const projects = [
    {
        "id": 1,
        "title": "PokeApp",
        "description": <>PokeApp is a <b className="bold">Pokemon Search Engine</b> and type calculator developed in React. It fetches data from an external API (PokeAPI) using Axios and filters the most accurate results based on the user input.</>,
        "github_link": "https://github.com/8rb/PokeApp",
        "deployed_link": "https://pokeapp.onrender.com/search",
        "img": require("../images/PokeApp.jpg"),
        "tags": [
            "React", "·", "Typescript", "·", "API"
        ]
    },
    {
        "id": 2,
        "title": "Bodega",
        "description": <>Bodega is an online <b className="bold">shopping website</b>, based on Peruvian 'Bodegas'. It was developed in Vue, and uses Bootstrap and SCSS for the UI elements. This project uses Vuex store to store the <b className="bold">state of the cart</b> when rendering the component.</>,
        "github_link": "https://github.com/8rb/Bodega",
        "deployed_link": "https://bodega.onrender.com/store",
        "img": require("../images/Bodega.jpg"),
        "tags": [
            "Vue", "·", "Vuex", "·","Bootstrap"
        ]
    },
    {
        "id": 3,
        "title": "InterLab",
        "description": <>Interlab is an <b className="bold">internship applications platform</b>, developed in Vue.js in the Front-End and .Net Core in the backend. I was in charge of the Majority of the Front-End programming and the database design. This application accesses the backend using Axios for HTTP requests.</>,
        "github_link": "https://github.com/8rb/interlab-webapps",
        "deployed_link": "https://interlab.onrender.com/",
        "img": require("../images/InterLab.jpg"),
        "tags": [
            "Vue", "·", "API"
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