import React from 'react'
import { faHome, faFilm, faStar, faSearch } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from './type'


const navLinks: MenuItem[] = [
    {
        name: "Home",
        link: "/",
        icon: faHome
    },
    {
        name: "Film launch",
        link: "/launches",
        icon: faFilm
    },
    {
        name: "Popular films",
        link: "/popular",
        icon: faStar
    },
    {
        name: "Search",
        link: "/search",
        icon: faSearch
    },
]

export default navLinks